// Minimal Express MCP server (JavaScript, no extra deps beyond Express)
// Usage:
// 1) npm install express
// 2) node src/server/mcp-server.js

const express = require('express');
const crypto = require('crypto');

const app = express();
app.use(express.json());
app.use(require('cors')({ origin: '*' }));

// Simple CORS middleware to allow browser test clients to connect
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,mcp-session-id');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// In-memory session store: sessionId -> { clientInfo, createdAt, streams: [res,...] }
const sessions = new Map();

function makeSession(clientInfo) {
  const sessionId = (crypto.randomUUID && crypto.randomUUID()) || crypto.randomBytes(16).toString('hex');
  sessions.set(sessionId, { clientInfo: clientInfo || {}, createdAt: Date.now(), streams: [] });
  return sessionId;
}

app.post('/mcp', (req, res) => {
  const body = req.body;
  const sidHeader = req.header('mcp-session-id');

  // handle initialize
  if (body && body.method === 'initialize') {
    const sessionId = makeSession(body.params && body.params.clientInfo);
    console.log('[mcp] initialize -> created session', sessionId, 'client:', body.params && body.params.clientInfo);
    const result = {
      sessionId,
      serverInfo: { name: 'local-mcp-server', version: '1.0' },
      serverCapabilities: {}
    };
    res.json({ jsonrpc: '2.0', id: body.id, result });
    return;
  }

  // require a valid session for the following
  if (!sidHeader) {
    return res.status(400).json({ jsonrpc: '2.0', error: { code: -32600, message: 'Missing mcp-session-id header' } });
  }
  const sid = sidHeader;
  if (!sessions.has(sid)) {
    return res.status(400).json({ jsonrpc: '2.0', error: { code: -32001, message: 'Invalid sessionId' } });
  }

  // simple method handlers (tools/prompts etc.)
  if (body && body.method === 'tools/list') {
    return res.json({ jsonrpc: '2.0', id: body.id, result: [] });
  }
  if (body && body.method === 'prompts/list') {
    return res.json({ jsonrpc: '2.0', id: body.id, result: [] });
  }
  if (body && body.method === 'notifications/initialized') {
    // notification-style message (no id)
    return res.status(200).send();
  }

  // fallback
  return res.json({ jsonrpc: '2.0', id: (body && body.id) || null, error: { code: -32601, message: 'Method not found' } });
});

// GET /mcp -> SSE long-lived connection
app.get('/mcp', (req, res) => {
  // allow session id via header or query string for browser EventSource clients
  const sid = req.header('mcp-session-id') || req.query.sessionId;
  if (!sid || !sessions.has(sid)) {
    return res.status(400).json({ jsonrpc: '2.0', error: { code: -32001, message: 'Invalid sessionId' } });
  }

  // set SSE headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders && res.flushHeaders();

  res.write(`event: connected\ndata: ${JSON.stringify({ message: 'connected' })}\n\n`);

  const session = sessions.get(sid);
  session.streams.push(res);
  console.log('[mcp] SSE opened for', sid);

  // keep-alive pings
  const keepAlive = setInterval(() => {
    try { res.write(': ping\n\n'); } catch (e) { /* ignore */ }
  }, 15000);

  req.on('close', () => {
    clearInterval(keepAlive);
    const idx = session.streams.indexOf(res);
    if (idx !== -1) session.streams.splice(idx, 1);
    console.log('[mcp] SSE closed for', sid);
  });
});

// Helper to send an SSE event to a session
function sendEvent(sessionId, eventName, payload) {
  const session = sessions.get(sessionId);
  if (!session || !session.streams || session.streams.length === 0) {
    return false;
  }
  const data = typeof payload === 'string' ? payload : JSON.stringify(payload);
  const sse = `event: ${eventName}\ndata: ${data}\n\n`;
  session.streams.forEach((stream) => {
    try {
      stream.write(sse);
    } catch (err) {
      // ignore write errors; stream close is handled in req.on('close')
    }
  });
  return true;
}

// Endpoint to send a single event to a specific session
app.post('/mcp/send', (req, res) => {
  const { sessionId, event = 'server-event', data } = req.body || {};
  if (!sessionId) return res.status(400).json({ error: 'sessionId required' });
  if (!sessions.has(sessionId)) return res.status(400).json({ error: 'Unknown sessionId' });
  const ok = sendEvent(sessionId, event, data === undefined ? { message: 'hello' } : data);
  return res.json({ ok });
});

// Endpoint to broadcast an event to all sessions
app.post('/mcp/broadcast', (req, res) => {
  const { event = 'server-broadcast', data } = req.body || {};
  let count = 0;
  for (const [sid] of sessions) {
    const ok = sendEvent(sid, event, data === undefined ? { message: 'broadcast' } : data);
    if (ok) count++;
  }
  return res.json({ ok: true, sessionsNotified: count });
});

// Endpoint to list active sessions (for UI/testing)
app.get('/mcp/sessions', (req, res) => {
  const arr = [];
  for (const [sid, s] of sessions) {
    arr.push({ sessionId: sid, clientInfo: s.clientInfo, createdAt: s.createdAt, streams: s.streams.length });
  }
  res.json({ sessions: arr });
});

const port = process.env.PORT || 3845;
app.listen(port, '127.0.0.1', () => console.log(`MCP server listening on http://127.0.0.1:${port}/mcp`));
