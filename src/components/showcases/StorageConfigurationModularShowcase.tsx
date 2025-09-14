import React from 'react';
import { ComponentShowcaseLayout, ComponentSection } from '../shared/ComponentShowcaseLayout';
import StorageConfigurationModular from '../StorageConfigurationModular';

interface StorageConfigurationModularShowcaseProps {
  onBackToShowcase?: () => void;
}

export default function StorageConfigurationModularShowcase({ onBackToShowcase }: StorageConfigurationModularShowcaseProps) {
  return (
    <ComponentShowcaseLayout
      title="Modular Storage Configuration"
      subtitle="Component-Based Form Design"
      description="Azure Storage configuration built with individual form section components extracted from Figma MCP. This demonstrates clean, modular design patterns for complex forms."
      onBackToShowcase={onBackToShowcase}
    >
      <ComponentSection 
        title="Live Application" 
        description="Interactive modular form with individual section components"
      >
        <div style={{ 
          border: '1px solid #d1d1d1', 
          borderRadius: '8px', 
          overflow: 'hidden',
          background: '#f5f5f5',
          padding: '8px'
        }}>
          <StorageConfigurationModular />
        </div>
      </ComponentSection>

      <ComponentSection
        title="Modular Architecture"
        description="Individual form sections built from Figma MCP extractions"
      >
        <div style={{ 
          background: '#f8f9fa', 
          padding: '24px', 
          borderRadius: '8px',
          border: '1px solid #e1e4e8'
        }}>
          <h4 style={{ margin: '0 0 12px 0', color: '#0078d4' }}>Component Breakdown</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'white', padding: '16px', borderRadius: '6px', border: '1px solid #e1e4e8' }}>
              <h5 style={{ margin: '0 0 8px 0', color: '#323130' }}>PerformanceSection</h5>
              <p style={{ margin: 0, fontSize: '13px', color: '#605e5c' }}>
                Radio button group for Standard/Premium selection with disabled state support
              </p>
            </div>
            <div style={{ background: 'white', padding: '16px', borderRadius: '6px', border: '1px solid #e1e4e8' }}>
              <h5 style={{ margin: '0 0 8px 0', color: '#323130' }}>SecureTransferSection</h5>
              <p style={{ margin: 0, fontSize: '13px', color: '#605e5c' }}>
                Enable/disable radio options with info bubble and interactive state
              </p>
            </div>
            <div style={{ background: 'white', padding: '16px', borderRadius: '6px', border: '1px solid #e1e4e8' }}>
              <h5 style={{ margin: '0 0 8px 0', color: '#323130' }}>TlsVersionSection</h5>
              <p style={{ margin: 0, fontSize: '13px', color: '#605e5c' }}>
                Dropdown selection component with TLS version options
              </p>
            </div>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection
        title="Benefits of Modular Approach"
        description="Why individual form sections are better than monolithic components"
      >
        <div style={{ 
          background: '#f8f9fa', 
          padding: '24px', 
          borderRadius: '8px',
          border: '1px solid #e1e4e8'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div>
              <h4 style={{ margin: '0 0 12px 0', color: '#0078d4' }}>✨ Clean MCP Output</h4>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#605e5c', fontSize: '13px' }}>
                <li>Individual sections have minimal assets (3-6 images)</li>
                <li>No hidden elements or unused complexity</li>
                <li>Focused, single-responsibility components</li>
                <li>Easy to understand and modify</li>
              </ul>
            </div>
            <div>
              <h4 style={{ margin: '0 0 12px 0', color: '#0078d4' }}>🔧 Better Maintainability</h4>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#605e5c', fontSize: '13px' }}>
                <li>Each section can be updated independently</li>
                <li>Reusable across different forms and pages</li>
                <li>Easier testing and validation</li>
                <li>Clear separation of concerns</li>
              </ul>
            </div>
            <div>
              <h4 style={{ margin: '0 0 12px 0', color: '#0078d4' }}>🚀 Development Efficiency</h4>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#605e5c', fontSize: '13px' }}>
                <li>Faster Figma MCP extraction per section</li>
                <li>Parallel development of different sections</li>
                <li>Easy to add new sections incrementally</li>
                <li>Better code organization and structure</li>
              </ul>
            </div>
          </div>
        </div>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
}
