import React, { useState } from 'react';

// Figma Node ID: 33:10637
// Azure Storage Configuration Form - Complete form implementation
// Based on Microsoft Azure Storage Configuration blade design

export interface StorageConfigurationProps {
  initialValues?: {
    performance?: 'Standard' | 'Premium';
    secureTransferRequired?: boolean;
    encryptionInTransitSMB?: boolean;
    encryptionInTransitNFS?: boolean;
    allowBlobAnonymousAccess?: boolean;
    allowStorageAccountKeyAccess?: boolean;
    allowSASExpiryInterval?: boolean;
    defaultToEntraAuthorization?: boolean;
    minimumTLSVersion?: string;
    permittedCopyScope?: string;
    defaultAccessTier?: 'Hot' | 'Cool' | 'Cold';
    largeFileShares?: boolean;
  };
  onSave?: (values: any) => void;
  onDiscard?: () => void;
  readOnly?: boolean;
  className?: string;
}

export const StorageConfiguration: React.FC<StorageConfigurationProps> = ({
  initialValues = {},
  onSave,
  onDiscard,
  readOnly = false,
  className = '',
}) => {
  const [formData, setFormData] = useState({
    performance: initialValues.performance || 'Premium',
    secureTransferRequired: initialValues.secureTransferRequired ?? true,
    encryptionInTransitSMB: initialValues.encryptionInTransitSMB ?? true,
    encryptionInTransitNFS: initialValues.encryptionInTransitNFS ?? true,
    allowBlobAnonymousAccess: initialValues.allowBlobAnonymousAccess ?? false,
    allowStorageAccountKeyAccess: initialValues.allowStorageAccountKeyAccess ?? false,
    allowSASExpiryInterval: initialValues.allowSASExpiryInterval ?? false,
    defaultToEntraAuthorization: initialValues.defaultToEntraAuthorization ?? false,
    minimumTLSVersion: initialValues.minimumTLSVersion || 'Version 1.2',
    permittedCopyScope: initialValues.permittedCopyScope || 'From any storage account',
    defaultAccessTier: initialValues.defaultAccessTier || 'Hot',
    largeFileShares: initialValues.largeFileShares ?? false,
  });

  const updateField = (field: string, value: any) => {
    if (readOnly) return;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave?.(formData);
  };

  const handleDiscard = () => {
    setFormData({
      performance: initialValues.performance || 'Premium',
      secureTransferRequired: initialValues.secureTransferRequired ?? true,
      encryptionInTransitSMB: initialValues.encryptionInTransitSMB ?? true,
      encryptionInTransitNFS: initialValues.encryptionInTransitNFS ?? true,
      allowBlobAnonymousAccess: initialValues.allowBlobAnonymousAccess ?? false,
      allowStorageAccountKeyAccess: initialValues.allowStorageAccountKeyAccess ?? false,
      allowSASExpiryInterval: initialValues.allowSASExpiryInterval ?? false,
      defaultToEntraAuthorization: initialValues.defaultToEntraAuthorization ?? false,
      minimumTLSVersion: initialValues.minimumTLSVersion || 'Version 1.2',
      permittedCopyScope: initialValues.permittedCopyScope || 'From any storage account',
      defaultAccessTier: initialValues.defaultAccessTier || 'Hot',
      largeFileShares: initialValues.largeFileShares ?? false,
    });
    onDiscard?.();
  };

  return (
    <div className={`bg-white relative max-w-[1366px] ${className}`} data-node-id="33:10637">
      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 px-6 py-2 mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={handleSave}
            disabled={readOnly}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3 2v12l3-3h7a1 1 0 001-1V3a1 1 0 00-1-1H3zm8 7H6V7h5v2z"/>
            </svg>
            Save
          </button>
          <button
            onClick={handleDiscard}
            disabled={readOnly}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            Discard
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-800 hover:bg-gray-50">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
            </svg>
            Refresh
          </button>
        </div>
      </div>

      {/* Form Content */}
      <div className="px-11 space-y-6">
        {/* Header Description */}
        <div className="text-sm text-gray-800 leading-relaxed">
          The cost of your storage account depends on the usage and the options you choose below.{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Learn more about storage pricing
          </a>
        </div>

        {/* Account Kind */}
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-gray-800">Account kind</h3>
          <p className="text-sm text-gray-700">StorageV2 (general purpose v2)</p>
        </div>

        {/* Performance */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">Performance</label>
            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="flex gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="performance"
                value="Standard"
                checked={formData.performance === 'Standard'}
                onChange={(e) => updateField('performance', e.target.value)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-600">Standard</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="performance"
                value="Premium"
                checked={formData.performance === 'Premium'}
                onChange={(e) => updateField('performance', e.target.value)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Premium</span>
            </label>
          </div>
          <div className="flex items-start gap-2 text-sm text-blue-600">
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
            This setting cannot be changed after the storage account is created.
          </div>
        </div>

        {/* Secure Transfer Required */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">Secure transfer required</label>
            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="flex gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="secureTransfer"
                checked={!formData.secureTransferRequired}
                onChange={() => updateField('secureTransferRequired', false)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Disable</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="secureTransfer"
                checked={formData.secureTransferRequired}
                onChange={() => updateField('secureTransferRequired', true)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Enable</span>
            </label>
          </div>
        </div>

        {/* Encryption in Transit for SMB */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-800">Encryption in transit for SMB</label>
            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="flex gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="encryptionSMB"
                checked={!formData.encryptionInTransitSMB}
                onChange={() => updateField('encryptionInTransitSMB', false)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Disable</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="encryptionSMB"
                checked={formData.encryptionInTransitSMB}
                onChange={() => updateField('encryptionInTransitSMB', true)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Enable</span>
            </label>
          </div>
        </div>

        {/* Encryption in Transit for NFS */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-800">Encryption in transit for NFS</label>
            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="flex gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="encryptionNFS"
                checked={!formData.encryptionInTransitNFS}
                onChange={() => updateField('encryptionInTransitNFS', false)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Disable</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="encryptionNFS"
                checked={formData.encryptionInTransitNFS}
                onChange={() => updateField('encryptionInTransitNFS', true)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Enable</span>
            </label>
          </div>
        </div>

        {/* Allow Blob Anonymous Access */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">Allow Blob anonymous access</label>
            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="flex gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="blobAccess"
                checked={!formData.allowBlobAnonymousAccess}
                onChange={() => updateField('allowBlobAnonymousAccess', false)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Disable</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="blobAccess"
                checked={formData.allowBlobAnonymousAccess}
                onChange={() => updateField('allowBlobAnonymousAccess', true)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Enable</span>
            </label>
          </div>
        </div>

        {/* Allow Storage Account Key Access */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">Allow storage account key access</label>
            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="flex gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="keyAccess"
                checked={!formData.allowStorageAccountKeyAccess}
                onChange={() => updateField('allowStorageAccountKeyAccess', false)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Disable</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="keyAccess"
                checked={formData.allowStorageAccountKeyAccess}
                onChange={() => updateField('allowStorageAccountKeyAccess', true)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Enable</span>
            </label>
          </div>
        </div>

        {/* Allow Upper Limit for SAS Expiry Interval */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">Allow upper limit for shared access signature (SAS) expiry interval</label>
            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="flex gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="sasExpiry"
                checked={!formData.allowSASExpiryInterval}
                onChange={() => updateField('allowSASExpiryInterval', false)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Disable</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="sasExpiry"
                checked={formData.allowSASExpiryInterval}
                onChange={() => updateField('allowSASExpiryInterval', true)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Enable</span>
            </label>
          </div>
        </div>

        {/* Default to Microsoft Entra Authorization */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">Default to Microsoft Entra authorization in the Azure portal</label>
            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="flex gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="entraAuth"
                checked={!formData.defaultToEntraAuthorization}
                onChange={() => updateField('defaultToEntraAuthorization', false)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Disable</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="entraAuth"
                checked={formData.defaultToEntraAuthorization}
                onChange={() => updateField('defaultToEntraAuthorization', true)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Enable</span>
            </label>
          </div>
        </div>

        {/* Minimum TLS Version */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">Minimum TLS version</label>
            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <select
            value={formData.minimumTLSVersion}
            onChange={(e) => updateField('minimumTLSVersion', e.target.value)}
            disabled={readOnly}
            className="w-full max-w-md px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:opacity-50"
          >
            <option value="Version 1.0">Version 1.0</option>
            <option value="Version 1.1">Version 1.1</option>
            <option value="Version 1.2">Version 1.2</option>
            <option value="Version 1.3">Version 1.3</option>
          </select>
        </div>

        {/* Permitted Scope for Copy Operations */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">Permitted scope for copy operations (preview)</label>
            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <select
            value={formData.permittedCopyScope}
            onChange={(e) => updateField('permittedCopyScope', e.target.value)}
            disabled={readOnly}
            className="w-full max-w-md px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:opacity-50"
          >
            <option value="From any storage account">From any storage account</option>
            <option value="From storage accounts in the same Azure subscription">From storage accounts in the same Azure subscription</option>
            <option value="From storage accounts in the same resource group">From storage accounts in the same resource group</option>
          </select>
        </div>

        {/* Default Access Tier */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">Default to Microsoft Entra authorization in the Azure portal</label>
            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="flex gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="accessTier"
                value="Hot"
                checked={formData.defaultAccessTier === 'Hot'}
                onChange={(e) => updateField('defaultAccessTier', e.target.value)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Hot</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="accessTier"
                value="Cool"
                checked={formData.defaultAccessTier === 'Cool'}
                onChange={(e) => updateField('defaultAccessTier', e.target.value)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Cool</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="accessTier"
                value="Cold"
                checked={formData.defaultAccessTier === 'Cold'}
                onChange={(e) => updateField('defaultAccessTier', e.target.value)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Cold</span>
            </label>
          </div>
        </div>

        {/* Large File Shares */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">Large file shares</label>
            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="flex gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="largeFileShares"
                checked={!formData.largeFileShares}
                onChange={() => updateField('largeFileShares', false)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Disable</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="largeFileShares"
                checked={formData.largeFileShares}
                onChange={() => updateField('largeFileShares', true)}
                disabled={readOnly}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Enable</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageConfiguration;
