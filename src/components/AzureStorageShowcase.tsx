import React from 'react';
import ComponentShowcaseLayout from './shared/ComponentShowcaseLayout';
import AzureStorageConfiguration from './AzureStorageConfiguration';

export default function AzureStorageShowcase() {
  return (
    <ComponentShowcaseLayout
      title="Azure Storage Configuration"
      subtitle="Figma MCP Integration Demo"
      description="A modernized Fluent 2 implementation of an Azure Storage Account configuration blade, converted from Figma design to React components. This component demonstrates the complete configuration interface with sections for Performance, Security, Access Control, and Advanced Settings."
    >
      <div style={{ 
        border: '1px solid #e1e1e1', 
        borderRadius: '8px', 
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <AzureStorageConfiguration />
      </div>

      {/* Additional Information */}
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid #e1e1e1',
        marginTop: '2rem'
      }}>
        <h3 style={{ marginTop: 0, color: '#323130' }}>Implementation Details</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
          <div>
            <h4 style={{ color: '#605e5c', fontSize: '14px', marginBottom: '1rem' }}>Design Source</h4>
            <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.5' }}>
              <strong>Figma Node ID:</strong> 33:10637<br />
              <strong>Original Design:</strong> Azure Fluent 1 Storage Configuration blade<br />
              <strong>Modernized to:</strong> Fluent 2 Design System patterns
            </p>
          </div>
          
          <div>
            <h4 style={{ color: '#605e5c', fontSize: '14px', marginBottom: '1rem' }}>Key Features</h4>
            <ul style={{ margin: 0, fontSize: '13px', lineHeight: '1.5', paddingLeft: '1.2rem' }}>
              <li>Fluent 2 Design System components</li>
              <li>Azure portal-style layout and navigation</li>
              <li>Radio button groups for settings</li>
              <li>Dropdown selection for TLS and copy scope</li>
              <li>Information tooltips for user guidance</li>
              <li>Sticky toolbar with action buttons</li>
              <li>Sectioned configuration groups</li>
              <li>Responsive design for mobile and desktop</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ color: '#605e5c', fontSize: '14px', marginBottom: '1rem' }}>Design Improvements</h4>
          <ul style={{ margin: 0, fontSize: '13px', lineHeight: '1.5', paddingLeft: '1.2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 2rem' }}>
            <li>Converted from Figma Fluent 1 design to modern Fluent 2 patterns</li>
            <li>Added proper grouping and visual hierarchy with section cards</li>
            <li>Replaced individual radio buttons with cohesive RadioGroup components</li>
            <li>Enhanced tooltips and information displays</li>
            <li>Improved responsive layout for different screen sizes</li>
            <li>Maintained Azure portal look and feel with modern Fluent 2 styling</li>
            <li>Added proper form state management and validation patterns</li>
            <li>Enhanced accessibility with proper ARIA labels and keyboard navigation</li>
          </ul>
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <h4 style={{ color: '#605e5c', fontSize: '14px', margin: '0 0 0.5rem 0' }}>Usage Example</h4>
          <code style={{ fontSize: '12px', color: '#323130' }}>
            &lt;AzureStorageConfiguration /&gt;
          </code>
        </div>
      </div>
    </ComponentShowcaseLayout>
  );
}
