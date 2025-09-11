const http = require('http');
const fs = require('fs');

const targetHost = '127.0.0.1';
const targetPort = 3845;
const listenPort = 3850;
const logFile = 'mcp-proxy.log';

const server = http.createServer((req, res) => {
  let chunks = [];
  req.on('data', (c) => chunks.push(c));
  req.on('end', () => {
    const body = Buffer.concat(chunks).toString();
    console.log('\n--- MCP PROXY CAPTURE ---');
    console.log('Request URL:', req.url);
    console.log('Method:', req.method);
    console.log('Headers:', JSON.stringify(req.headers, null, 2));
    console.log('Body:', body);

    // append to log file for reliable capture
    try {
      fs.appendFileSync(logFile, `---- ${new Date().toISOString()} ----\n`);
      fs.appendFileSync(logFile, `Request URL: ${req.url}\n`);
      fs.appendFileSync(logFile, `Method: ${req.method}\n`);
      fs.appendFileSync(logFile, `Headers: ${JSON.stringify(req.headers, null, 2)}\n`);
      fs.appendFileSync(logFile, `Body: ${body}\n\n`);
    } catch (err) {
      console.error('Failed to write proxy log:', err);
    }

    const options = {
      hostname: targetHost,
      port: targetPort,
      path: req.url,
      method: req.method,
      headers: req.headers,
    };

    const forward = http.request(options, (r) => {
      res.writeHead(r.statusCode, r.headers);
      r.pipe(res);
    });

    forward.on('error', (err) => {
      console.error('Forward error:', err);
      res.writeHead(502, { 'Content-Type': 'text/plain' });
      res.end('Bad Gateway');
    });

    if (body) forward.write(body);
    forward.end();
  });
});

server.listen(listenPort, () => {
  console.log(`MCP proxy listening on http://127.0.0.1:${listenPort} and forwarding to http://${targetHost}:${targetPort}`);
});
