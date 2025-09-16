import React, { useState } from 'react';
import { FluentLabel } from '../fluent/Label';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid } from '../shared/ComponentShowcaseLayout';

const LabelShowcase = ({ onBackToShowcase }: { onBackToShowcase: () => void }) => {
  const [sampleText, setSampleText] = useState('Sample Label');
  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(false);

  return (
    <ComponentShowcaseLayout
      title="Label"
      subtitle="Text labels for form elements and content"
      description="Label components provide clear, accessible text descriptions for form controls and content sections. Built with Microsoft Fluent 2 Design System standards."
      onBackToShowcase={onBackToShowcase}
    >
      {/* Size Variants */}
      <ComponentSection
        title="Size Variants"
        description="Labels come in three sizes to match different contexts and content hierarchies."
      >
        <ExampleGrid>
          <div className="example-item">
            <h4>Small (12px)</h4>
            <FluentLabel size="Small">{sampleText}</FluentLabel>
            <p className="example-description">Compact labels for dense layouts and secondary information</p>
          </div>
          <div className="example-item">
            <h4>Medium (14px) - Default</h4>
            <FluentLabel size="Medium">{sampleText}</FluentLabel>
            <p className="example-description">Standard size for most form labels and content descriptions</p>
          </div>
          <div className="example-item">
            <h4>Large (16px)</h4>
            <FluentLabel size="Large">{sampleText}</FluentLabel>
            <p className="example-description">Prominent labels for headers and primary content sections</p>
          </div>
        </ExampleGrid>
      </ComponentSection>

      {/* Weight Variants */}
      <ComponentSection
        title="Weight Variants"
        description="Different font weights provide visual hierarchy and emphasis."
      >
        <ExampleGrid>
          <div className="example-item">
            <h4>Regular Weight</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FluentLabel size="Small" weight="Regular">Small Regular Label</FluentLabel>
              <FluentLabel size="Medium" weight="Regular">Medium Regular Label</FluentLabel>
              <FluentLabel size="Large" weight="Regular">Large Regular Label</FluentLabel>
            </div>
            <p className="example-description">Standard weight for general-purpose labels</p>
          </div>
          <div className="example-item">
            <h4>Semibold Weight</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FluentLabel size="Small" weight="Semibold">Small Semibold Label</FluentLabel>
              <FluentLabel size="Medium" weight="Semibold">Medium Semibold Label</FluentLabel>
              <FluentLabel size="Large" weight="Semibold">Large Semibold Label</FluentLabel>
            </div>
            <p className="example-description">Emphasized weight for important or required labels</p>
          </div>
        </ExampleGrid>
      </ComponentSection>

      {/* States */}
      <ComponentSection
        title="States & Modifiers"
        description="Labels support various states including disabled and required indicators."
      >
        <ExampleGrid>
          <div className="example-item">
            <h4>Normal State</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FluentLabel>Default Label</FluentLabel>
              <FluentLabel weight="Semibold">Emphasized Label</FluentLabel>
            </div>
            <p className="example-description">Standard appearance for interactive elements</p>
          </div>
          <div className="example-item">
            <h4>Required Labels</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FluentLabel required>Required Field</FluentLabel>
              <FluentLabel required weight="Semibold">Important Required Field</FluentLabel>
            </div>
            <p className="example-description">Labels with required indicator (*) for mandatory fields</p>
          </div>
          <div className="example-item">
            <h4>Disabled State</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FluentLabel disabled>Disabled Label</FluentLabel>
              <FluentLabel disabled weight="Semibold">Disabled Semibold Label</FluentLabel>
            </div>
            <p className="example-description">Reduced opacity for non-interactive content</p>
          </div>
        </ExampleGrid>
      </ComponentSection>

      {/* Form Integration Examples */}
      <ComponentSection
        title="Form Integration"
        description="Labels properly associated with form controls for accessibility and usability."
      >
        <ExampleGrid>
          <div className="example-item">
            <h4>Input Field Labels</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <FluentLabel htmlFor="username" required>Username</FluentLabel>
                <input 
                  id="username"
                  type="text" 
                  placeholder="Enter username"
                  style={{ 
                    marginTop: '4px',
                    padding: '8px 12px',
                    border: '1px solid #d1d1d1',
                    borderRadius: '4px',
                    fontFamily: 'Segoe UI, system-ui, sans-serif'
                  }}
                />
              </div>
              <div>
                <FluentLabel htmlFor="email" size="Small">Email (Optional)</FluentLabel>
                <input 
                  id="email"
                  type="email" 
                  placeholder="Enter email"
                  style={{ 
                    marginTop: '4px',
                    padding: '8px 12px',
                    border: '1px solid #d1d1d1',
                    borderRadius: '4px',
                    fontFamily: 'Segoe UI, system-ui, sans-serif'
                  }}
                />
              </div>
            </div>
            <p className="example-description">Properly linked labels enhance accessibility</p>
          </div>
          <div className="example-item">
            <h4>Section Headers</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <FluentLabel size="Large" weight="Semibold">Account Settings</FluentLabel>
              <FluentLabel size="Medium" weight="Semibold">Personal Information</FluentLabel>
              <FluentLabel size="Small">Additional Details</FluentLabel>
            </div>
            <p className="example-description">Use labels to create clear content hierarchy</p>
          </div>
        </ExampleGrid>
      </ComponentSection>

      {/* Interactive Configuration */}
      <ComponentSection
        title="Interactive Configuration"
        description="Experiment with different label configurations in real-time."
      >
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 2fr', 
          gap: '24px',
          alignItems: 'start'
        }}>
          {/* Controls */}
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Configuration</h4>
            
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Text Content:</label>
              <input
                type="text"
                value={sampleText}
                onChange={(e) => setSampleText(e.target.value)}
                style={{ 
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #d1d1d1',
                  borderRadius: '4px',
                  fontFamily: 'Segoe UI, system-ui, sans-serif'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                <input
                  type="checkbox"
                  checked={required}
                  onChange={(e) => setRequired(e.target.checked)}
                />
                Required
              </label>
            </div>

            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                <input
                  type="checkbox"
                  checked={disabled}
                  onChange={(e) => setDisabled(e.target.checked)}
                />
                Disabled
              </label>
            </div>
          </div>

          {/* Live Preview */}
          <div style={{ 
            padding: '20px', 
            backgroundColor: 'white', 
            borderRadius: '8px',
            border: '1px solid #e1dfdd'
          }}>
            <h4 style={{ margin: '0 0 16px 0' }}>Live Preview</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <strong>Small:</strong>
                <div style={{ marginTop: '8px' }}>
                  <FluentLabel size="Small" disabled={disabled} required={required}>
                    {sampleText}
                  </FluentLabel>
                </div>
              </div>
              <div>
                <strong>Medium:</strong>
                <div style={{ marginTop: '8px' }}>
                  <FluentLabel size="Medium" disabled={disabled} required={required}>
                    {sampleText}
                  </FluentLabel>
                </div>
              </div>
              <div>
                <strong>Large:</strong>
                <div style={{ marginTop: '8px' }}>
                  <FluentLabel size="Large" disabled={disabled} required={required}>
                    {sampleText}
                  </FluentLabel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection
        title="Usage Guidelines"
        description="Best practices for implementing labels in your applications."
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ padding: '20px', backgroundColor: '#e8f5e8', borderRadius: '8px' }}>
            <h4 style={{ color: '#0e5814', margin: '0 0 12px 0' }}>✅ Do</h4>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#0e5814' }}>
              <li>Use descriptive, concise label text</li>
              <li>Associate labels with form controls using htmlFor</li>
              <li>Mark required fields clearly with the required prop</li>
              <li>Use consistent sizing throughout your interface</li>
              <li>Choose appropriate weight for visual hierarchy</li>
            </ul>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#fef2f2', borderRadius: '8px' }}>
            <h4 style={{ color: '#dc2626', margin: '0 0 12px 0' }}>❌ Don't</h4>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#dc2626' }}>
              <li>Use vague or overly technical language</li>
              <li>Forget to link labels to their form controls</li>
              <li>Mix different label sizes inconsistently</li>
              <li>Use all semibold labels (reduces emphasis)</li>
              <li>Make labels too long or complex</li>
            </ul>
          </div>
        </div>
      </ComponentSection>

      {/* Accessibility Information */}
      <ComponentSection
        title="Accessibility"
        description="Labels are crucial for creating accessible forms and interfaces."
      >
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#f0f9ff', 
          borderRadius: '8px',
          borderLeft: '4px solid #0078d4'
        }}>
          <h4 style={{ margin: '0 0 12px 0', color: '#0078d4' }}>Accessibility Features</h4>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li><strong>Screen Reader Support:</strong> Properly associated labels are announced by screen readers</li>
            <li><strong>Keyboard Navigation:</strong> Clicking labels focuses associated form controls</li>
            <li><strong>Required Indicators:</strong> Required fields are marked with visual and semantic indicators</li>
            <li><strong>Color Independence:</strong> Information is conveyed through text, not just color</li>
            <li><strong>Focus Management:</strong> Labels help users understand form structure and requirements</li>
          </ul>
        </div>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default LabelShowcase;