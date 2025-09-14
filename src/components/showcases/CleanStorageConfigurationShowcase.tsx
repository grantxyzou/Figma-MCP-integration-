import React from 'react';
import { ComponentShowcaseLayout, ComponentSection } from '../shared/ComponentShowcaseLayout';
import CleanStorageConfiguration from '../CleanStorageConfiguration';

interface CleanStorageConfigurationShowcaseProps {
  onBackToShowcase?: () => void;
}

export default function CleanStorageConfigurationShowcase({ onBackToShowcase }: CleanStorageConfigurationShowcaseProps) {
  return (
    <ComponentShowcaseLayout
      title="Clean Storage Configuration"
      subtitle="Filtered Azure Storage Configuration"
      description="Azure Storage account configuration page built from Figma MCP with hidden elements filtered out. This demonstrates clean MCP output without unnecessary complexity."
      onBackToShowcase={onBackToShowcase}
    >
      <ComponentSection 
        title="Live Application" 
        description="Interactive Azure Storage configuration interface with clean MCP extraction"
      >
        <div style={{ 
          border: '1px solid #d1d1d1', 
          borderRadius: '8px', 
          overflow: 'hidden',
          background: '#f5f5f5',
          padding: '8px'
        }}>
          <CleanStorageConfiguration />
        </div>
      </ComponentSection>

      <ComponentSection
        title="Design Source"
        description="This component was generated from Figma using Model Context Protocol (MCP) with hidden elements filtered out"
      >
        <div style={{ 
          background: '#f8f9fa', 
          padding: '24px', 
          borderRadius: '8px',
          border: '1px solid #e1e4e8'
        }}>
          <h4 style={{ margin: '0 0 12px 0', color: '#0078d4' }}>MCP Integration Details</h4>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#605e5c' }}>
            <li><strong>Approach:</strong> Full page extraction with hidden element filtering</li>
            <li><strong>Hidden Elements:</strong> Removed instances with hidden="true" attributes</li>
            <li><strong>Result:</strong> Clean, focused component without unnecessary complexity</li>
            <li><strong>Assets:</strong> ~20 optimized image assets vs 40+ in full extraction</li>
            <li><strong>Components:</strong> Header, toolbar, form fields, radio buttons, dropdowns</li>
            <li><strong>Benefits:</strong> Better maintainability and performance</li>
          </ul>
        </div>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
}
