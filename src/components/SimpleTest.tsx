// Simple test to debug what's happening
import React from 'react';

const SimpleTest: React.FC = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '40px',
      backgroundColor: '#f0f0f0',
      fontFamily: 'system-ui'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Debug Test Page</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        If you can see this, React is working fine.
      </p>
      
      <div style={{ 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#333', marginBottom: '16px' }}>Component Test</h2>
        
        {/* Simple button test */}
        <button 
          style={{
            padding: '8px 16px',
            backgroundColor: '#0078d4',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '8px'
          }}
          onClick={() => alert('Button works!')}
        >
          Test Button
        </button>
        
        {/* Simple input test */}
        <input 
          type="text" 
          placeholder="Test input"
          style={{
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginRight: '8px'
          }}
        />
        
        {/* Simple select test */}
        <select style={{
          padding: '8px 12px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}>
          <option>Test Option 1</option>
          <option>Test Option 2</option>
        </select>
      </div>
      
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#e8f4f8', 
        borderRadius: '8px' 
      }}>
        <h3 style={{ color: '#333', marginBottom: '12px' }}>Debug Info</h3>
        <p style={{ color: '#666', fontSize: '14px', margin: '4px 0' }}>
          URL: {window.location.href}
        </p>
        <p style={{ color: '#666', fontSize: '14px', margin: '4px 0' }}>
          React Version: {React.version}
        </p>
        <p style={{ color: '#666', fontSize: '14px', margin: '4px 0' }}>
          Current Time: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default SimpleTest;
