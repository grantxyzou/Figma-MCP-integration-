import React from 'react';
import { ComponentShowcaseLayout, ComponentSection } from '../shared/ComponentShowcaseLayout';
import { AzureStorageConfiguration } from '../fluent/AzureStorageConfiguration/AzureStorageConfiguration';

const AzureStorageConfigurationShowcase = ({ onBackToShowcase }: { onBackToShowcase: () => void }) => {
  const handleSave = () => {
    console.log('Save clicked');
    alert('Configuration saved!');
  };

  const handleDiscard = () => {
    console.log('Discard clicked');
    alert('Changes discarded');
  };

  const handleRefresh = () => {
    console.log('Refresh clicked');
    alert('Configuration refreshed');
  };

  return (
    <ComponentShowcaseLayout
      title="Azure Storage Configuration"
      subtitle="Complete Azure portal storage configuration blade"
      description="A comprehensive form component that recreates the Azure Storage Configuration interface with 100% visual fidelity to the Figma design. Features the complete Azure portal shell, breadcrumbs, toolbar, and all configuration options."
      onBackToShowcase={onBackToShowcase}
    >
      <ComponentSection title="Live Demo">
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1366px] h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white">
            <AzureStorageConfiguration
              onSave={handleSave}
              onDiscard={handleDiscard}
              onRefresh={handleRefresh}
            />
          </div>
        </div>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">🎯 100% Figma Accuracy</h4>
          <p className="text-blue-800 text-sm">
            This component is generated directly from Figma using MCP (Model Context Protocol) integration. 
            It includes the complete Azure portal shell, exact typography (Segoe UI), precise spacing, 
            colors, and all interactive elements as designed.
          </p>
        </div>
      </ComponentSection>

      <ComponentSection title="Key Features">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🎨 Azure Portal Shell</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Complete site header with Microsoft Azure branding</li>
                <li>• Search box with Copilot integration</li>
                <li>• User profile and action buttons</li>
                <li>• Breadcrumb navigation</li>
                <li>• Blade header with storage account context</li>
              </ul>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🛠️ Interactive Toolbar</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Save, Discard, Refresh actions</li>
                <li>• Give feedback option</li>
                <li>• Proper hover states and iconography</li>
                <li>• Callback functions for all actions</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">📝 Configuration Form</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 12+ configuration options</li>
                <li>• Radio buttons with all states</li>
                <li>• Dropdown selectors</li>
                <li>• Info tooltips throughout</li>
                <li>• Inline validation messages</li>
              </ul>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🎯 Design Accuracy</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Exact Figma node IDs preserved</li>
                <li>• Segoe UI font family</li>
                <li>• Precise Azure color palette</li>
                <li>• Exact spacing and typography</li>
                <li>• All image assets from MCP</li>
              </ul>
            </div>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Configuration Options">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Account Kind', type: 'Read-only', value: 'StorageV2 (general purpose v2)' },
            { name: 'Performance', type: 'Radio (disabled)', value: 'Standard | Premium' },
            { name: 'Secure Transfer Required', type: 'Radio', value: 'Disable | Enable' },
            { name: 'Encryption in Transit (SMB)', type: 'Radio', value: 'Disable | Enable' },
            { name: 'Encryption in Transit (NFS)', type: 'Radio', value: 'Disable | Enable' },
            { name: 'Blob Anonymous Access', type: 'Radio', value: 'Disable | Enable' },
            { name: 'Storage Account Key Access', type: 'Radio', value: 'Disable | Enable' },
            { name: 'SAS Expiry Interval', type: 'Radio', value: 'Disable | Enable' },
            { name: 'Entra Authorization', type: 'Radio', value: 'Disable | Enable' },
            { name: 'Minimum TLS Version', type: 'Dropdown', value: 'Version 1.0 - 1.3' },
            { name: 'Copy Operations Scope', type: 'Dropdown', value: 'Any | Same subscription | Same resource group' },
            { name: 'Default Access Tier', type: 'Radio', value: 'Hot | Cool | Cold' },
            { name: 'Large File Shares', type: 'Radio', value: 'Disable | Enable' },
          ].map((option, index) => (
            <div key={index} className="p-3 border border-gray-200 rounded-lg">
              <h5 className="font-medium text-gray-900 text-sm mb-1">{option.name}</h5>
              <p className="text-xs text-gray-600 mb-1">Type: {option.type}</p>
              <p className="text-xs text-gray-500">{option.value}</p>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Technical Implementation">
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">MCP Integration Workflow</h4>
            <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
              <li>Selected Figma frame "Storage / Configuration" (Node ID: 33:10637)</li>
              <li>Used <code className="bg-gray-200 px-1 rounded">mcp_figma_get_metadata()</code> to extract structure</li>
              <li>Used <code className="bg-gray-200 px-1 rounded">mcp_figma_get_code()</code> to generate React components</li>
              <li>Used <code className="bg-gray-200 px-1 rounded">mcp_figma_get_image()</code> for visual reference</li>
              <li>Created TypeScript interfaces and interactive handlers</li>
              <li>Integrated into showcase system with live demo</li>
            </ol>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Image Assets</h5>
              <p className="text-sm text-gray-700 mb-2">All icons and images served from localhost MCP server:</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Save, Discard, Refresh icons</li>
                <li>• Info bubbles and tooltips</li>
                <li>• Radio button states</li>
                <li>• Azure branding elements</li>
                <li>• User profile images</li>
              </ul>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Design Tokens</h5>
              <p className="text-sm text-gray-700 mb-2">Azure design system colors:</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Primary: #0078d4 (Azure blue)</li>
                <li>• Text Primary: #323130</li>
                <li>• Text Secondary: #605e5c</li>
                <li>• Disabled: #a19f9d</li>
                <li>• Background: #ffffff</li>
              </ul>
            </div>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Usage Example">
        <div className="space-y-4">
          <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
{`import { AzureStorageConfiguration } from './components/fluent/AzureStorageConfiguration';

function App() {
  const handleSave = () => {
    console.log('Configuration saved');
  };

  const handleDiscard = () => {
    console.log('Changes discarded');
  };

  const handleRefresh = () => {
    console.log('Data refreshed');
  };

  return (
    <AzureStorageConfiguration
      onSave={handleSave}
      onDiscard={handleDiscard}
      onRefresh={handleRefresh}
      className="w-full h-screen"
    />
  );
}`}
          </pre>
        </div>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default AzureStorageConfigurationShowcase;
