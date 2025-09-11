// FluentImporter - Demonstrates the component import process
// This runs the AzureComponentImporter to import Fluent 2 components

import React, { useState, useEffect } from 'react';
import { AzureComponentImporter } from './AzureComponentImporter';

interface ImportResult {
  componentName: string;
  nodeId?: string;
  filePath?: string;
  code?: string;
  status: 'success' | 'failed';
  error?: string;
}

interface ImportSummary {
  totalComponents: number;
  successful: number;
  failed: number;
  results: ImportResult[];
}

const FluentImporter: React.FC = () => {
  const [importing, setImporting] = useState(false);
  const [importSummary, setImportSummary] = useState<ImportSummary | null>(null);
  const [importStarted, setImportStarted] = useState(false);

  const runImport = async () => {
    setImporting(true);
    setImportStarted(true);
    
    try {
      console.log('🚀 Starting Fluent 2 component library import...');
      const summary = await AzureComponentImporter.importComponentLibrary();
      setImportSummary(summary);
      console.log('✅ Import completed:', summary);
    } catch (error) {
      console.error('❌ Import failed:', error);
      setImportSummary({
        totalComponents: 0,
        successful: 0,
        failed: 1,
        results: [{
          componentName: 'Import Process',
          status: 'failed',
          error: error instanceof Error ? error.message : String(error)
        }]
      });
    } finally {
      setImporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f8] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-[#e1dfdd] p-8">
          <h1 className="text-2xl font-semibold text-[#242424] mb-2 font-['Segoe_UI:Semibold',_sans-serif]">
            Fluent 2 Component Importer
          </h1>
          <p className="text-[#605e5c] mb-6 font-['Segoe_UI:Regular',_sans-serif]">
            Import Microsoft's complete Fluent 2 web design system from Figma
          </p>

          {/* Import Control */}
          <div className="mb-8">
            <button
              onClick={runImport}
              disabled={importing}
              className={`
                px-4 py-2 rounded-[4px] font-['Segoe_UI:Semibold',_sans-serif] text-white
                ${importing 
                  ? 'bg-[#a19f9d] cursor-not-allowed' 
                  : 'bg-[#0078d4] hover:bg-[#106ebe] active:bg-[#005a9e]'
                }
                transition-colors duration-200
              `}
            >
              {importing ? '⏳ Importing Components...' : '🎨 Import from Figma'}
            </button>
          </div>

          {/* Import Progress */}
          {importing && (
            <div className="mb-6 p-4 bg-[#f3f2f1] border border-[#e1dfdd] rounded-[4px]">
              <h3 className="font-['Segoe_UI:Semibold',_sans-serif] text-[#242424] mb-2">
                Import in Progress...
              </h3>
              <div className="space-y-1 text-sm font-['Segoe_UI:Regular',_sans-serif] text-[#605e5c]">
                <div>📦 Analyzing Figma design system...</div>
                <div>🔍 Mapping component nodes...</div>
                <div>⚛️ Generating React components...</div>
                <div>📝 Updating component registry...</div>
              </div>
            </div>
          )}

          {/* Import Results */}
          {importSummary && (
            <div className="space-y-6">
              {/* Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#f3f2f1] p-4 rounded-[4px] border border-[#e1dfdd]">
                  <div className="text-2xl font-bold text-[#0078d4] font-['Segoe_UI:Semibold',_sans-serif]">
                    {importSummary.totalComponents}
                  </div>
                  <div className="text-[#605e5c] font-['Segoe_UI:Regular',_sans-serif]">
                    Total Components
                  </div>
                </div>
                
                <div className="bg-[#f3f2f1] p-4 rounded-[4px] border border-[#e1dfdd]">
                  <div className="text-2xl font-bold text-[#107c10] font-['Segoe_UI:Semibold',_sans-serif]">
                    {importSummary.successful}
                  </div>
                  <div className="text-[#605e5c] font-['Segoe_UI:Regular',_sans-serif]">
                    Successful
                  </div>
                </div>
                
                <div className="bg-[#f3f2f1] p-4 rounded-[4px] border border-[#e1dfdd]">
                  <div className="text-2xl font-bold text-[#d13438] font-['Segoe_UI:Semibold',_sans-serif]">
                    {importSummary.failed}
                  </div>
                  <div className="text-[#605e5c] font-['Segoe_UI:Regular',_sans-serif]">
                    Failed
                  </div>
                </div>
              </div>

              {/* Component List */}
              <div>
                <h3 className="text-lg font-semibold text-[#242424] mb-4 font-['Segoe_UI:Semibold',_sans-serif]">
                  Imported Components
                </h3>
                <div className="space-y-2">
                  {importSummary.results.map((result, index) => (
                    <div 
                      key={index}
                      className={`
                        p-3 rounded-[4px] border flex items-center justify-between
                        ${result.status === 'success' 
                          ? 'bg-[#f3f9f1] border-[#107c10] text-[#107c10]' 
                          : 'bg-[#fdf3f4] border-[#d13438] text-[#d13438]'
                        }
                      `}
                    >
                      <div className="font-['Segoe_UI:Regular',_sans-serif]">
                        <div className="font-semibold">{result.componentName}</div>
                        {result.nodeId && (
                          <div className="text-sm opacity-75">Node ID: {result.nodeId}</div>
                        )}
                        {result.filePath && (
                          <div className="text-sm opacity-75">Path: {result.filePath}</div>
                        )}
                        {result.error && (
                          <div className="text-sm opacity-75">Error: {result.error}</div>
                        )}
                      </div>
                      <div className="text-lg">
                        {result.status === 'success' ? '✅' : '❌'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Generated Components Info */}
              <div className="bg-[#e6f3ff] border border-[#0078d4] rounded-[4px] p-6">
                <h3 className="font-['Segoe_UI:Semibold',_sans-serif] text-[#242424] mb-3">
                  🎉 Components Ready to Use!
                </h3>
                <p className="text-[#605e5c] font-['Segoe_UI:Regular',_sans-serif] mb-3">
                  The imported components are now available in your workspace:
                </p>
                <div className="bg-white p-3 rounded border text-sm font-mono">
                  <div className="text-[#0078d4]">import</div>
                  <div className="ml-4 text-[#242424]">
                    {`{ FluentButton, FluentDropdown, FluentInput }`}
                  </div>
                  <div className="text-[#0078d4]">from</div>
                  <div className="ml-4 text-[#107c10]">'./components/fluent'</div>
                </div>
              </div>
            </div>
          )}

          {/* Pre-built Example */}
          {!importStarted && (
            <div className="bg-[#f3f2f1] border border-[#e1dfdd] rounded-[4px] p-6">
              <h3 className="font-['Segoe_UI:Semibold',_sans-serif] text-[#242424] mb-3">
                💡 What this does
              </h3>
              <ul className="space-y-2 text-[#605e5c] font-['Segoe_UI:Regular',_sans-serif]">
                <li>• Connects to Microsoft's Fluent 2 web design system in Figma</li>
                <li>• Identifies and maps all component instances</li>
                <li>• Generates TypeScript React components with proper props</li>
                <li>• Maintains Figma node ID mapping for future updates</li>
                <li>• Creates ready-to-use components with Fluent design tokens</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FluentImporter;
