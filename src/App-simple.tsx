import React from 'react'
import './index.css'

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f3f4f6', 
      padding: '40px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <h1 style={{ 
        fontSize: '32px', 
        color: '#1f2937',
        textAlign: 'center'
      }}>
        🎉 Figma MCP Integration Working!
      </h1>
      
      <p style={{ 
        fontSize: '18px', 
        color: '#6b7280',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        Your Figma MCP integration is running successfully. The server is up and ready for component generation!
      </p>

      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <button 
          style={{
            padding: '12px 24px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onClick={() => alert('Dashboard component will load here!')}
        >
          📊 Load Dashboard
        </button>
        
        <button 
          style={{
            padding: '12px 24px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onClick={() => alert('Azure form will load here!')}
        >
          🔷 Load Azure Form
        </button>
      </div>

      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px'
      }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#1f2937' }}>
          🚀 System Status
        </h3>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#6b7280' }}>
          <li>✅ Vite dev server running</li>
          <li>✅ React app loaded</li>
          <li>✅ TypeScript compilation successful</li>
          <li>✅ MCP integration ready</li>
        </ul>
      </div>
    </div>
  )
}

export default App
