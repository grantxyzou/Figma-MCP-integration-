import React, { useState } from 'react';
import { PerformanceSection, SecureTransferSection, TlsVersionSection } from './forms';

interface StorageConfigurationModularProps {
  className?: string;
}

export default function StorageConfigurationModular({ className = '' }: StorageConfigurationModularProps) {
  // State for each form section
  const [performanceOption, setPerformanceOption] = useState<'standard' | 'premium'>('premium');
  const [secureTransferOption, setSecureTransferOption] = useState<'disable' | 'enable'>('enable');
  const [tlsVersion, setTlsVersion] = useState('Version 1.2');

  return (
    <div className={`bg-white relative w-full max-w-4xl mx-auto p-8 ${className}`}>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-6">
          <h1 className="font-['Segoe_UI:Semibold',_sans-serif] text-2xl font-semibold text-[#323130] mb-2">
            Storage Configuration
          </h1>
          <p className="font-['Segoe_UI:Regular',_sans-serif] text-[13px] text-[#323130] leading-[18px]">
            <span>The cost of your storage account depends on the usage and the options you choose below.</span>
            <span className="text-[#0078d4]"> </span>
            <a className="cursor-pointer font-['Segoe_UI:Regular',_sans-serif] not-italic text-[#0078d4]" href="https://ms.portal.azure.com/verifyLink?href=https%3A%2F%2Fgo.microsoft.com%2Ffwlink%2F%3FLinkId%3D331014&id=Microsoft_Azure_Storage">
              <span className="leading-[18px] text-[13px]">Learn more about storage pricing</span>
            </a>
          </p>
        </div>

        {/* Account Kind - Read Only */}
        <div className="border-b border-gray-100 pb-6">
          <div className="mb-3">
            <h3 className="font-['Segoe_UI:Semibold',_sans-serif] text-[14px] font-semibold text-[#292827] mb-1">
              Account kind
            </h3>
            <p className="font-['Segoe_UI:Regular',_sans-serif] text-[13px] text-[#323130]">
              StorageV2 (general purpose v2)
            </p>
          </div>
        </div>

        {/* Performance Section */}
        <div className="border-b border-gray-100 pb-6">
          <PerformanceSection 
            selectedOption={performanceOption}
            disabled={true} // This setting cannot be changed after creation
            onChange={setPerformanceOption}
          />
        </div>

        {/* Secure Transfer Required Section */}
        <div className="border-b border-gray-100 pb-6">
          <SecureTransferSection 
            selectedOption={secureTransferOption}
            onChange={setSecureTransferOption}
          />
        </div>

        {/* Minimum TLS Version Section */}
        <div className="border-b border-gray-100 pb-6">
          <TlsVersionSection 
            selectedVersion={tlsVersion}
            options={['Version 1.0', 'Version 1.1', 'Version 1.2']}
            onChange={setTlsVersion}
          />
        </div>

        {/* Additional Sections Placeholder */}
        <div className="border-b border-gray-100 pb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-['Segoe_UI:Semibold',_sans-serif] text-[14px] font-semibold text-[#0078d4] mb-2">
              🧩 Modular Design
            </h4>
            <p className="font-['Segoe_UI:Regular',_sans-serif] text-[13px] text-[#323130] mb-2">
              This modular approach allows you to:
            </p>
            <ul className="font-['Segoe_UI:Regular',_sans-serif] text-[13px] text-[#323130] ml-4 list-disc space-y-1">
              <li>Add new sections individually using Figma MCP</li>
              <li>Reuse form sections across different pages</li>
              <li>Maintain clean, focused components</li>
              <li>Test each section independently</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button className="bg-[#0078d4] text-white px-4 py-2 rounded font-['Segoe_UI:Semibold',_sans-serif] text-[13px] font-semibold hover:bg-[#106ebe] transition-colors">
            Save
          </button>
          <button className="bg-white border border-[#8a8886] text-[#323130] px-4 py-2 rounded font-['Segoe_UI:Regular',_sans-serif] text-[13px] hover:bg-[#f3f2f1] transition-colors">
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}
