// Enhanced debug page with live status monitoring
import React, { useState, useEffect } from 'react';

const SimpleTest: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mcpStatus, setMcpStatus] = useState<'connecting' | 'connected' | 'error' | 'unknown'>('unknown');
  const [apiStatus, setApiStatus] = useState<'healthy' | 'error' | 'checking'>('checking');
  const [componentCount, setComponentCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState<any>(null);
  const [buildInfo, setBuildInfo] = useState<any>(null);

  // Live time update
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track render count
  useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  // Check MCP Server Status
  useEffect(() => {
    const checkMCPStatus = async () => {
      try {
        // First try Figma MCP server (port 3845)
        const figmaResponse = await fetch('http://127.0.0.1:3845/mcp/sessions', { 
          method: 'GET',
          mode: 'cors'
        });
        if (figmaResponse.ok) {
          setMcpStatus('connected');
          return;
        }
      } catch (error) {
        console.log('Figma MCP server not accessible:', error instanceof Error ? error.message : 'Unknown error');
      }

      try {
        // Try local MCP server (port 3001)
        const localResponse = await fetch('http://127.0.0.1:3001/mcp/sessions', { 
          method: 'GET',
          mode: 'cors'
        });
        setMcpStatus(localResponse.ok ? 'connected' : 'error');
      } catch (error) {
        setMcpStatus('error');
        console.log('Local MCP server not accessible:', error instanceof Error ? error.message : 'Unknown error');
      }
    };

    checkMCPStatus();
    const mcpInterval = setInterval(checkMCPStatus, 5000); // Check every 5 seconds
    return () => clearInterval(mcpInterval);
  }, []);

  // Check API Health
  useEffect(() => {
    const checkAPIHealth = async () => {
      try {
        // Check if we can load component registry
        const componentRegistry = await import('./ComponentRegistry');
        setComponentCount(Object.keys(componentRegistry).length);
        setApiStatus('healthy');
      } catch (error) {
        setApiStatus('error');
      }
    };

    checkAPIHealth();
  }, []);

  // Get Memory Usage (if available)
  useEffect(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMemoryUsage({
        used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
        limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
      });
    }
  }, [currentTime]);

  // Get Build Info
  useEffect(() => {
    setBuildInfo({
      viteVersion: '7.1.5', // From package.json
      reactVersion: React.version,
      nodeVersion: 'v24.7.0', // From your environment
      buildMode: import.meta.env.MODE,
      isDev: import.meta.env.DEV,
      baseUrl: import.meta.env.BASE_URL
    });
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected':
      case 'healthy': return '#22c55e';
      case 'error': return '#ef4444';
      case 'connecting':
      case 'checking': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'connected': return '✅ Connected';
      case 'healthy': return '✅ Healthy';
      case 'error': return '❌ Error';
      case 'connecting': return '🔄 Connecting';
      case 'checking': return '🔄 Checking';
      default: return '❓ Unknown';
    }
  };
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '40px',
      backgroundColor: '#f0f0f0',
      fontFamily: 'system-ui'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>🔧 Debug & Status Dashboard</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Live system monitoring and health checks for the Figma MCP Integration project.
      </p>

      {/* Live Status Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px', 
        marginBottom: '30px' 
      }}>
        
        {/* MCP Connection Status */}
        <div style={{ 
          padding: '20px', 
          backgroundColor: 'white', 
          borderRadius: '8px',
          border: `2px solid ${getStatusColor(mcpStatus)}`
        }}>
          <h3 style={{ color: '#333', marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
            🔗 MCP Server Status
          </h3>
          <div style={{ color: getStatusColor(mcpStatus), fontWeight: 'bold', fontSize: '16px' }}>
            {getStatusText(mcpStatus)}
          </div>
          <p style={{ color: '#666', fontSize: '12px', marginTop: '8px' }}>
            Model Context Protocol server connectivity
          </p>
        </div>

        {/* API Health */}
        <div style={{ 
          padding: '20px', 
          backgroundColor: 'white', 
          borderRadius: '8px',
          border: `2px solid ${getStatusColor(apiStatus)}`
        }}>
          <h3 style={{ color: '#333', marginBottom: '12px' }}>⚡ API Health</h3>
          <div style={{ color: getStatusColor(apiStatus), fontWeight: 'bold', fontSize: '16px' }}>
            {getStatusText(apiStatus)}
          </div>
          <p style={{ color: '#666', fontSize: '12px', marginTop: '8px' }}>
            {componentCount} components registered
          </p>
        </div>

        {/* System Performance */}
        <div style={{ 
          padding: '20px', 
          backgroundColor: 'white', 
          borderRadius: '8px',
          border: '2px solid #22c55e'
        }}>
          <h3 style={{ color: '#333', marginBottom: '12px' }}>📊 Performance</h3>
          <div style={{ color: '#333', fontSize: '14px' }}>
            <div>Renders: <strong>{renderCount}</strong></div>
            {memoryUsage && (
              <div>Memory: <strong>{memoryUsage.used}MB / {memoryUsage.total}MB</strong></div>
            )}
          </div>
          <p style={{ color: '#666', fontSize: '12px', marginTop: '8px' }}>
            React component performance metrics
          </p>
        </div>

        {/* Live Clock */}
        <div style={{ 
          padding: '20px', 
          backgroundColor: 'white', 
          borderRadius: '8px',
          border: '2px solid #3b82f6'
        }}>
          <h3 style={{ color: '#333', marginBottom: '12px' }}>⏰ Live Status</h3>
          <div style={{ color: '#333', fontWeight: 'bold', fontSize: '16px' }}>
            {currentTime.toLocaleTimeString()}
          </div>
          <p style={{ color: '#666', fontSize: '12px', marginTop: '8px' }}>
            {currentTime.toLocaleDateString()} • Running live
          </p>
        </div>
      </div>

      {/* Component Functionality Test */}
      <div style={{ 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#333', marginBottom: '16px' }}>🧪 Component Functionality Test</h2>
        
        <button 
          style={{
            padding: '10px 20px',
            backgroundColor: '#0078d4',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginRight: '12px',
            fontSize: '14px'
          }}
          onClick={() => {
            alert('✅ Button component working!');
            setRenderCount(prev => prev + 1);
          }}
        >
          Test Interactive Button
        </button>
        
        <input 
          type="text" 
          placeholder="Type here to test input..."
          style={{
            padding: '10px 12px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            marginRight: '12px',
            fontSize: '14px',
            minWidth: '200px'
          }}
          onChange={(e) => console.log('Input changed:', e.target.value)}
        />
        
        <select 
          style={{
            padding: '10px 12px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '14px'
          }}
          onChange={(e) => console.log('Selection changed:', e.target.value)}
        >
          <option value="">Test dropdown...</option>
          <option value="fluent">Fluent Components</option>
          <option value="azure">Azure Integration</option>
          <option value="mcp">MCP Connection</option>
        </select>
      </div>

      {/* Build & Environment Info */}
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#e8f4f8', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3 style={{ color: '#333', marginBottom: '16px' }}>🔍 Environment Information</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div>
            <strong style={{ color: '#333' }}>Build Info:</strong>
            <div style={{ color: '#666', fontSize: '14px', marginTop: '4px' }}>
              Mode: {buildInfo?.buildMode || 'unknown'}<br/>
              Dev Mode: {buildInfo?.isDev ? 'Yes' : 'No'}<br/>
              Base URL: {buildInfo?.baseUrl || '/'}
            </div>
          </div>
          <div>
            <strong style={{ color: '#333' }}>Versions:</strong>
            <div style={{ color: '#666', fontSize: '14px', marginTop: '4px' }}>
              React: {buildInfo?.reactVersion}<br/>
              Vite: {buildInfo?.viteVersion}<br/>
              Node.js: {buildInfo?.nodeVersion}
            </div>
          </div>
          <div>
            <strong style={{ color: '#333' }}>Runtime:</strong>
            <div style={{ color: '#666', fontSize: '14px', marginTop: '4px' }}>
              URL: {window.location.href}<br/>
              Protocol: {window.location.protocol}<br/>
              Host: {window.location.host}
            </div>
          </div>
        </div>
      </div>

      {/* System Capabilities */}
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f0fdf4', 
        borderRadius: '8px' 
      }}>
        <h3 style={{ color: '#333', marginBottom: '16px' }}>🚀 System Capabilities</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
          <div style={{ color: '#666', fontSize: '14px' }}>
            ✅ TypeScript Support<br/>
            ✅ Hot Module Reload<br/>
            ✅ React DevTools
          </div>
          <div style={{ color: '#666', fontSize: '14px' }}>
            ✅ Figma MCP Integration<br/>
            ✅ Fluent UI Components<br/>
            ✅ Azure Portal Design
          </div>
          <div style={{ color: '#666', fontSize: '14px' }}>
            ✅ Modular Architecture<br/>
            ✅ Component Showcases<br/>
            ✅ Live Status Monitoring
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleTest;
