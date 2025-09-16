import React, { useState } from 'react';
import { InfoLabel } from '../fluent/InfoLabel';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid } from '../shared/ComponentShowcaseLayout';

const InfoLabelShowcase = ({ onBackToShowcase }: { onBackToShowcase: () => void }) => {
  const [sampleText, setSampleText] = useState('Field Label');
  const [infoTitle, setInfoTitle] = useState('Help Information');
  const [infoContent, setInfoContent] = useState('This field is used to provide additional context and help information for users.');
  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(false);

  return (
    <ComponentShowcaseLayout
      title="Info Label"
      subtitle="Labels with contextual help information"
      description="Info Label components combine regular text labels with info buttons that provide contextual help and additional information. Built with Microsoft Fluent 2 Design System standards."
      onBackToShowcase={onBackToShowcase}
    >
      {/* Size Variants */}
      <ComponentSection
        title="Size Variants"
        description="Info labels come in three sizes to match different contexts and form layouts."
      >
        <ExampleGrid>
          <div className="example-item">
            <h4>Small (12px + 20px icon)</h4>
            <InfoLabel 
              size="Small"
              infoContent="Small info labels are perfect for compact forms and dense layouts."
              infoTitle="Small Size Info"
            >
              {sampleText}
            </InfoLabel>
            <p className="example-description">Compact size for dense layouts and secondary information</p>
          </div>
          <div className="example-item">
            <h4>Medium (14px + 24px icon) - Default</h4>
            <InfoLabel 
              size="Medium"
              infoContent="Medium info labels are the standard size for most form fields and content descriptions."
              infoTitle="Medium Size Info"
            >
              {sampleText}
            </InfoLabel>
            <p className="example-description">Standard size for most form labels and content descriptions</p>
          </div>
          <div className="example-item">
            <h4>Large (16px + 24px icon)</h4>
            <InfoLabel 
              size="Large"
              weight="Semibold"
              infoContent="Large info labels provide prominent labeling with easy access to help information."
              infoTitle="Large Size Info"
            >
              {sampleText}
            </InfoLabel>
            <p className="example-description">Prominent labels for headers and primary content sections</p>
          </div>
        </ExampleGrid>
      </ComponentSection>

      {/* Weight Variants */}
      <ComponentSection
        title="Weight & State Combinations"
        description="Different font weights and states provide visual hierarchy and user feedback."
      >
        <ExampleGrid>
          <div className="example-item">
            <h4>Regular Weight</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <InfoLabel 
                size="Small" 
                weight="Regular"
                infoContent="Regular weight provides standard emphasis."
              >
                Small Regular Label
              </InfoLabel>
              <InfoLabel 
                size="Medium" 
                weight="Regular"
                infoContent="Medium regular is the most common variant."
              >
                Medium Regular Label
              </InfoLabel>
            </div>
            <p className="example-description">Standard weight for general-purpose labels</p>
          </div>
          <div className="example-item">
            <h4>Semibold Weight</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <InfoLabel 
                size="Medium" 
                weight="Semibold"
                infoContent="Semibold weight draws attention to important fields."
              >
                Important Field
              </InfoLabel>
              <InfoLabel 
                size="Large" 
                weight="Semibold"
                infoContent="Large semibold is perfect for section headers."
              >
                Section Header
              </InfoLabel>
            </div>
            <p className="example-description">Emphasized weight for important or required labels</p>
          </div>
          <div className="example-item">
            <h4>Required & Disabled States</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <InfoLabel 
                required
                infoContent="Required fields must be completed before submission."
                infoTitle="Required Field"
              >
                Required Field
              </InfoLabel>
              <InfoLabel 
                disabled
                infoContent="This field is currently disabled."
                infoTitle="Disabled Field"
              >
                Disabled Field
              </InfoLabel>
            </div>
            <p className="example-description">Required indicators and disabled states</p>
          </div>
        </ExampleGrid>
      </ComponentSection>

      {/* Tooltip Content Examples */}
      <ComponentSection
        title="Tooltip Content Examples"
        description="Info labels support rich tooltip content including text, lists, and formatting."
      >
        <ExampleGrid>
          <div className="example-item">
            <h4>Simple Text Tooltip</h4>
            <InfoLabel 
              infoContent="This is a simple text tooltip that provides helpful context about the field."
              infoTitle="Simple Help"
            >
              Username
            </InfoLabel>
            <p className="example-description">Basic text information for simple explanations</p>
          </div>
          <div className="example-item">
            <h4>Rich Content Tooltip</h4>
            <InfoLabel 
              infoContent={
                <div>
                  <p>Password requirements:</p>
                  <ul style={{ margin: '8px 0', paddingLeft: '16px' }}>
                    <li>At least 8 characters</li>
                    <li>Include uppercase and lowercase</li>
                    <li>At least one number</li>
                    <li>Special characters recommended</li>
                  </ul>
                </div>
              }
              infoTitle="Password Requirements"
            >
              Password
            </InfoLabel>
            <p className="example-description">Rich content with lists and formatting</p>
          </div>
          <div className="example-item">
            <h4>Detailed Explanation</h4>
            <InfoLabel 
              infoContent={
                <div>
                  <p><strong>Email Address</strong></p>
                  <p>We use your email address to:</p>
                  <ul style={{ margin: '8px 0', paddingLeft: '16px' }}>
                    <li>Send account notifications</li>
                    <li>Password recovery</li>
                    <li>Important security updates</li>
                  </ul>
                  <p style={{ fontSize: '12px', color: '#605e5c', marginTop: '8px' }}>
                    We never share your email with third parties.
                  </p>
                </div>
              }
              infoTitle="Email Usage"
            >
              Email Address
            </InfoLabel>
            <p className="example-description">Comprehensive information with multiple sections</p>
          </div>
        </ExampleGrid>
      </ComponentSection>

      {/* Form Integration Examples */}
      <ComponentSection
        title="Form Integration"
        description="Info labels work seamlessly with form controls to provide accessible help."
      >
        <ExampleGrid>
          <div className="example-item">
            <h4>Input Field with Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <InfoLabel 
                  htmlFor="company-name" 
                  required
                  infoContent="Enter your company's official registered name as it appears on legal documents."
                  infoTitle="Company Name Help"
                >
                  Company Name
                </InfoLabel>
                <input 
                  id="company-name"
                  type="text" 
                  placeholder="Acme Corporation"
                  style={{ 
                    marginTop: '4px',
                    padding: '8px 12px',
                    border: '1px solid #d1d1d1',
                    borderRadius: '4px',
                    fontFamily: 'Segoe UI, system-ui, sans-serif',
                    width: '100%'
                  }}
                />
              </div>
              <div>
                <InfoLabel 
                  htmlFor="tax-id" 
                  size="Small"
                  infoContent={
                    <div>
                      <p>Tax ID formats by country:</p>
                      <ul style={{ margin: '8px 0', paddingLeft: '16px' }}>
                        <li><strong>US:</strong> XX-XXXXXXX (EIN format)</li>
                        <li><strong>UK:</strong> XXXXXXXXX (9 digits)</li>
                        <li><strong>EU:</strong> Country-specific VAT number</li>
                      </ul>
                    </div>
                  }
                  infoTitle="Tax ID Formats"
                >
                  Tax ID (Optional)
                </InfoLabel>
                <input 
                  id="tax-id"
                  type="text" 
                  placeholder="12-3456789"
                  style={{ 
                    marginTop: '4px',
                    padding: '8px 12px',
                    border: '1px solid #d1d1d1',
                    borderRadius: '4px',
                    fontFamily: 'Segoe UI, system-ui, sans-serif',
                    width: '100%'
                  }}
                />
              </div>
            </div>
            <p className="example-description">Properly linked labels with contextual help</p>
          </div>
          <div className="example-item">
            <h4>Section Headers with Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <InfoLabel 
                size="Large" 
                weight="Semibold"
                infoContent="Personal information is used to verify your identity and comply with regulations."
                infoTitle="Why We Need This"
              >
                Personal Information
              </InfoLabel>
              <InfoLabel 
                size="Medium" 
                weight="Semibold"
                infoContent="Billing information is required for payment processing and invoicing."
                infoTitle="Billing Details"
              >
                Billing Details
              </InfoLabel>
              <InfoLabel 
                size="Small"
                infoContent="Additional preferences help us customize your experience."
              >
                Preferences (Optional)
              </InfoLabel>
            </div>
            <p className="example-description">Create clear information hierarchy with help context</p>
          </div>
        </ExampleGrid>
      </ComponentSection>

      {/* Interactive Configuration */}
      <ComponentSection
        title="Interactive Configuration"
        description="Experiment with different info label configurations in real-time."
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
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Label Text:</label>
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
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Info Title:</label>
              <input
                type="text"
                value={infoTitle}
                onChange={(e) => setInfoTitle(e.target.value)}
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
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Info Content:</label>
              <textarea
                value={infoContent}
                onChange={(e) => setInfoContent(e.target.value)}
                rows={3}
                style={{ 
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #d1d1d1',
                  borderRadius: '4px',
                  fontFamily: 'Segoe UI, system-ui, sans-serif',
                  resize: 'vertical'
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <strong>Small:</strong>
                <div style={{ marginTop: '8px' }}>
                  <InfoLabel 
                    size="Small" 
                    disabled={disabled} 
                    required={required}
                    infoContent={infoContent}
                    infoTitle={infoTitle}
                  >
                    {sampleText}
                  </InfoLabel>
                </div>
              </div>
              <div>
                <strong>Medium:</strong>
                <div style={{ marginTop: '8px' }}>
                  <InfoLabel 
                    size="Medium" 
                    disabled={disabled} 
                    required={required}
                    infoContent={infoContent}
                    infoTitle={infoTitle}
                  >
                    {sampleText}
                  </InfoLabel>
                </div>
              </div>
              <div>
                <strong>Large:</strong>
                <div style={{ marginTop: '8px' }}>
                  <InfoLabel 
                    size="Large" 
                    weight="Semibold"
                    disabled={disabled} 
                    required={required}
                    infoContent={infoContent}
                    infoTitle={infoTitle}
                  >
                    {sampleText}
                  </InfoLabel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection
        title="Usage Guidelines"
        description="Best practices for implementing info labels effectively."
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ padding: '20px', backgroundColor: '#e8f5e8', borderRadius: '8px' }}>
            <h4 style={{ color: '#0e5814', margin: '0 0 12px 0' }}>✅ Do</h4>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#0e5814' }}>
              <li>Provide concise, helpful tooltip content</li>
              <li>Use info labels for complex or unfamiliar fields</li>
              <li>Keep tooltip titles short and descriptive</li>
              <li>Include examples in tooltips when helpful</li>
              <li>Use consistent sizing throughout your interface</li>
            </ul>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#fef2f2', borderRadius: '8px' }}>
            <h4 style={{ color: '#dc2626', margin: '0 0 12px 0' }}>❌ Don't</h4>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#dc2626' }}>
              <li>Overuse info labels on obvious fields</li>
              <li>Include excessive text in tooltips</li>
              <li>Forget to make tooltips keyboard accessible</li>
              <li>Use info labels as a substitute for clear labeling</li>
              <li>Make critical information only available in tooltips</li>
            </ul>
          </div>
        </div>
      </ComponentSection>

      {/* Accessibility Information */}
      <ComponentSection
        title="Accessibility"
        description="Info labels enhance accessibility by providing contextual help without cluttering the interface."
      >
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#f0f9ff', 
          borderRadius: '8px',
          borderLeft: '4px solid #0078d4'
        }}>
          <h4 style={{ margin: '0 0 12px 0', color: '#0078d4' }}>Accessibility Features</h4>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li><strong>Screen Reader Support:</strong> Info buttons announce purpose and expanded state</li>
            <li><strong>Keyboard Navigation:</strong> Info buttons are focusable and operable with Enter/Space</li>
            <li><strong>ARIA Attributes:</strong> Proper labeling with aria-expanded and aria-describedby</li>
            <li><strong>Tooltip Role:</strong> Tooltips use proper role="tooltip" for assistive technology</li>
            <li><strong>Focus Management:</strong> Clear focus indicators and logical tab order</li>
            <li><strong>Color Independence:</strong> Information conveyed through text and icons, not just color</li>
          </ul>
        </div>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default InfoLabelShowcase;