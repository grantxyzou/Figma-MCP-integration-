import React, { useState } from 'react';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid } from '../shared/ComponentShowcaseLayout';
import AzureStorageConfiguration from '../fluent/AzureStorageConfiguration';

const StorageConfigurationShowcase = ({ onBackToShowcase }: { onBackToShowcase: () => void }) => {
  const [savedValues, setSavedValues] = useState<any>(null);

  const handleSave = (values: any) => {
    setSavedValues(values);
    console.log('Storage configuration saved:', values);
  };

  const handleDiscard = () => {
    console.log('Storage configuration discarded');
    setSavedValues(null);
  };

  return (
    <ComponentShowcaseLayout
      title="Storage Configuration"
      subtitle="Azure Storage Configuration Form"
      description="A comprehensive form component for configuring Azure Storage account settings, including security, encryption, and access controls. Based on the Microsoft Azure portal design system."
      onBackToShowcase={onBackToShowcase}
    >
      <ComponentSection title="Interactive Form">
        <div className="bg-gray-50 p-6 rounded-lg">
          <AzureStorageConfiguration />
        </div>
        {savedValues && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <h4 className="font-semibold text-green-800">Saved Configuration:</h4>
            <pre className="text-sm text-green-700 mt-2 overflow-auto">
              {JSON.stringify(savedValues, null, 2)}
            </pre>
          </div>
        )}
      </ComponentSection>

            <ComponentSection title="Read-only Mode">
        <div className="bg-gray-50 p-6 rounded-lg">
          <AzureStorageConfiguration />
        </div>
      </ComponentSection>

      <ComponentSection title="Default Configuration">
        <div className="bg-gray-50 p-6 rounded-lg">
          <AzureStorageConfiguration />
        </div>
      </ComponentSection>

      <ComponentSection title="Usage Examples">
        <div className="space-y-4">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
{`// Basic usage
<StorageConfiguration />

// With callbacks and initial values
<StorageConfiguration
  initialValues={{
    performance: 'Premium',
    secureTransferRequired: true,
    encryptionInTransitSMB: true,
    allowBlobAnonymousAccess: false
  }}
  onSave={(values) => handleSave(values)}
  onDiscard={() => handleDiscard()}
/>

// Read-only mode
<StorageConfiguration readOnly />`}
            </pre>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Form Features">
        <ExampleGrid>
          <div className="space-y-3">
            <h4 className="font-semibold">Security Settings</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Secure transfer required</li>
              <li>• Encryption in transit (SMB/NFS)</li>
              <li>• Minimum TLS version</li>
              <li>• Microsoft Entra authorization</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Access Controls</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Blob anonymous access</li>
              <li>• Storage account key access</li>
              <li>• SAS expiry interval limits</li>
              <li>• Copy operation scope</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Storage Options</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Performance tier (Standard/Premium)</li>
              <li>• Default access tier (Hot/Cool/Cold)</li>
              <li>• Large file shares support</li>
              <li>• Account kind (StorageV2)</li>
            </ul>
          </div>
        </ExampleGrid>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default StorageConfigurationShowcase;
