import React, { useState } from 'react';
import { FluentAccordion } from '../fluent/Accordion';
import { FluentButton } from '../fluent/Button';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid, ExampleContainer } from '../shared/ComponentShowcaseLayout';

interface AccordionShowcaseProps {
  onBackToShowcase?: () => void;
}

export const AccordionShowcase: React.FC<AccordionShowcaseProps> = ({ onBackToShowcase }) => {
  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({
    faq1: false,
    faq2: false,
    faq3: false
  });

  const toggleAccordion = (key: string) => {
    setOpenStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <ComponentShowcaseLayout
      title="Accordion Component"
      subtitle="Collapsible content sections"
      description="Accordions organize content in a vertically stacked list where users can expand and collapse sections to reveal more information. They help manage space and cognitive load by showing only the most relevant content at a time."
      onBackToShowcase={onBackToShowcase}
    >
      {/* Basic Usage */}
      <ComponentSection
        title="Basic Usage"
        description="Standard accordion implementations with different configurations and content types."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Standard Accordion"
            description="Basic accordion with simple content"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FluentAccordion 
                title="What is Microsoft Fluent Design?"
                chevronPosition="before"
              >
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
                  Fluent Design is Microsoft's design system that creates intuitive, accessible, and beautiful experiences across platforms. It emphasizes natural motion, depth, and material to help users navigate and understand content.
                </p>
              </FluentAccordion>
              
              <FluentAccordion 
                title="How do I get started with components?"
                chevronPosition="before"
              >
                <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  <p style={{ marginTop: 0 }}>Getting started is easy:</p>
                  <ol style={{ paddingLeft: '20px', margin: '8px 0' }}>
                    <li>Import the component you need</li>
                    <li>Add it to your React component</li>
                    <li>Configure props as needed</li>
                    <li>Style with Fluent tokens</li>
                  </ol>
                  <p style={{ marginBottom: 0 }}>All components include TypeScript definitions and accessibility features built-in.</p>
                </div>
              </FluentAccordion>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Chevron Positioning"
            description="Different chevron positions for various layouts"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FluentAccordion 
                title="Chevron Before (Left)"
                chevronPosition="before"
                size="medium"
              >
                <p style={{ margin: 0, fontSize: '14px' }}>
                  The chevron appears before the title text, which is common in navigation and menu contexts.
                </p>
              </FluentAccordion>
              
              <FluentAccordion 
                title="Chevron After (Right)"
                chevronPosition="after"
                size="medium"
              >
                <p style={{ margin: 0, fontSize: '14px' }}>
                  The chevron appears after the title text, which is common in FAQ and content contexts.
                </p>
              </FluentAccordion>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Size Variants"
            description="Different sizes for various content densities"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FluentAccordion 
                title="Small Size Accordion"
                size="small"
                chevronPosition="before"
              >
                <p style={{ margin: 0, fontSize: '12px' }}>
                  Small accordions are perfect for compact layouts and dense information.
                </p>
              </FluentAccordion>
              
              <FluentAccordion 
                title="Medium Size Accordion"
                size="medium"
                chevronPosition="before"
              >
                <p style={{ margin: 0, fontSize: '14px' }}>
                  Medium accordions are the default size for most use cases.
                </p>
              </FluentAccordion>
              
              <FluentAccordion 
                title="Large Size Accordion"
                size="large"
                chevronPosition="before"
              >
                <p style={{ margin: 0, fontSize: '16px' }}>
                  Large accordions provide more visual prominence and are great for important content sections.
                </p>
              </FluentAccordion>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Controlled State"
            description="Managing accordion state programmatically"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <FluentButton 
                  size="Small" 
                  style="Secondary (Default)"
                  onClick={() => toggleAccordion('controlled')}
                >
                  Toggle Accordion
                </FluentButton>
                <FluentButton 
                  size="Small" 
                  style="Outline"
                  onClick={() => setOpenStates(prev => ({ ...prev, controlled: true }))}
                >
                  Open
                </FluentButton>
                <FluentButton 
                  size="Small" 
                  style="Outline"
                  onClick={() => setOpenStates(prev => ({ ...prev, controlled: false }))}
                >
                  Close
                </FluentButton>
              </div>
              
              <FluentAccordion 
                title="Controlled Accordion"
                expanded={openStates.controlled}
                chevronPosition="before"
              >
                <p style={{ margin: 0, fontSize: '14px' }}>
                  This accordion's state is controlled by the buttons above. You can programmatically open and close it.
                </p>
              </FluentAccordion>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Real-world Examples */}
      <ComponentSection
        title="Real-world Examples"
        description="Common use cases and patterns for accordion components in applications."
      >
        <ExampleGrid columns={1}>
          <ExampleContainer
            title="FAQ Section"
            description="Frequently asked questions with detailed answers"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FluentAccordion 
                title="How do I reset my password?"
                chevronPosition="after"
                expanded={openStates.faq1}
                onToggle={() => toggleAccordion('faq1')}
              >
                <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  <p style={{ marginTop: 0 }}>To reset your password:</p>
                  <ol style={{ paddingLeft: '20px', margin: '8px 0' }}>
                    <li>Go to the sign-in page and click "Forgot password?"</li>
                    <li>Enter your email address</li>
                    <li>Check your email for a reset link</li>
                    <li>Follow the instructions in the email</li>
                    <li>Create a new, secure password</li>
                  </ol>
                  <p style={{ marginBottom: 0 }}>
                    If you don't receive the email within 10 minutes, check your spam folder or contact support.
                  </p>
                </div>
              </FluentAccordion>
              
              <FluentAccordion 
                title="What browsers are supported?"
                chevronPosition="after"
                expanded={openStates.faq2}
                onToggle={() => toggleAccordion('faq2')}
              >
                <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  <p style={{ marginTop: 0 }}>We support the following browsers:</p>
                  <ul style={{ paddingLeft: '20px', margin: '8px 0' }}>
                    <li><strong>Chrome:</strong> Version 90 and later</li>
                    <li><strong>Firefox:</strong> Version 88 and later</li>
                    <li><strong>Safari:</strong> Version 14 and later</li>
                    <li><strong>Edge:</strong> Version 90 and later</li>
                  </ul>
                  <p style={{ marginBottom: 0 }}>
                    For the best experience, we recommend keeping your browser up to date.
                  </p>
                </div>
              </FluentAccordion>
              
              <FluentAccordion 
                title="How do I contact customer support?"
                chevronPosition="after"
                expanded={openStates.faq3}
                onToggle={() => toggleAccordion('faq3')}
              >
                <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  <p style={{ marginTop: 0 }}>You can reach our support team through:</p>
                  <ul style={{ paddingLeft: '20px', margin: '8px 0' }}>
                    <li><strong>Email:</strong> support@company.com (24-48 hour response)</li>
                    <li><strong>Live Chat:</strong> Available Monday-Friday, 9 AM - 6 PM PST</li>
                    <li><strong>Phone:</strong> 1-800-SUPPORT (business hours only)</li>
                    <li><strong>Help Center:</strong> Browse our knowledge base for instant answers</li>
                  </ul>
                  <p style={{ marginBottom: 0 }}>
                    For urgent issues, please use live chat or phone support during business hours.
                  </p>
                </div>
              </FluentAccordion>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Content Patterns */}
      <ComponentSection
        title="Content Patterns"
        description="Different types of content that work well in accordion layouts."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Rich Content with Actions"
            description="Accordions with interactive elements and media"
          >
            <FluentAccordion 
              title="📊 Project Analytics Dashboard"
              chevronPosition="before"
              size="large"
            >
              <div style={{ fontSize: '14px' }}>
                <p style={{ marginTop: 0, marginBottom: '16px' }}>
                  View comprehensive analytics for your project performance.
                </p>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)', 
                  gap: '12px',
                  marginBottom: '16px'
                }}>
                  <div style={{ 
                    padding: '12px', 
                    backgroundColor: '#f8f9fa', 
                    borderRadius: '6px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '20px', fontWeight: 600, color: '#107c10' }}>94%</div>
                    <div style={{ fontSize: '12px', color: '#605e5c' }}>Completion Rate</div>
                  </div>
                  <div style={{ 
                    padding: '12px', 
                    backgroundColor: '#f8f9fa', 
                    borderRadius: '6px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '20px', fontWeight: 600, color: '#0078d4' }}>2.3k</div>
                    <div style={{ fontSize: '12px', color: '#605e5c' }}>Active Users</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '8px' }}>
                  <FluentButton size="Small" style="Primary">
                    View Full Report
                  </FluentButton>
                  <FluentButton size="Small" style="Secondary (Default)">
                    Export Data
                  </FluentButton>
                </div>
              </div>
            </FluentAccordion>
          </ExampleContainer>

          <ExampleContainer
            title="Settings and Configuration"
            description="Form elements and configuration options"
          >
            <FluentAccordion 
              title="⚙️ Advanced Settings"
              chevronPosition="before"
              size="large"
            >
              <div style={{ fontSize: '14px' }}>
                <h5 style={{ marginTop: 0, marginBottom: '12px' }}>Notification Preferences</h5>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input type="checkbox" defaultChecked />
                    <span>Email notifications for updates</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input type="checkbox" />
                    <span>SMS alerts for critical events</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input type="checkbox" defaultChecked />
                    <span>Weekly digest summary</span>
                  </label>
                </div>
                
                <h5 style={{ marginBottom: '8px' }}>Display Options</h5>
                <select style={{ 
                  width: '100%', 
                  padding: '6px 12px', 
                  borderRadius: '4px',
                  border: '1px solid #d1d1d1',
                  marginBottom: '12px'
                }}>
                  <option>Light Theme</option>
                  <option>Dark Theme</option>
                  <option>System Default</option>
                </select>
                
                <FluentButton size="Small" style="Primary">
                  Save Settings
                </FluentButton>
              </div>
            </FluentAccordion>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection
        title="Usage Guidelines"
        description="Best practices for using accordions effectively in your applications."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="✅ Do - Clear Section Titles"
            description="Use descriptive titles that clearly indicate content"
            background="#f3f9ff"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FluentAccordion 
                title="Account Security Settings"
                chevronPosition="after"
                size="small"
              >
                <p style={{ margin: 0, fontSize: '12px' }}>
                  Configure two-factor authentication, password requirements, and login alerts.
                </p>
              </FluentAccordion>
              
              <FluentAccordion 
                title="Payment and Billing Information"
                chevronPosition="after"
                size="small"
              >
                <p style={{ margin: 0, fontSize: '12px' }}>
                  Manage payment methods, view billing history, and update billing addresses.
                </p>
              </FluentAccordion>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="❌ Don't - Vague Titles"
            description="Avoid unclear or generic section titles"
            background="#fff4f4"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FluentAccordion 
                title="Settings"
                chevronPosition="after"
                size="small"
              >
                <p style={{ margin: 0, fontSize: '12px' }}>
                  Various configuration options and preferences.
                </p>
              </FluentAccordion>
              
              <FluentAccordion 
                title="Information"
                chevronPosition="after"
                size="small"
              >
                <p style={{ margin: 0, fontSize: '12px' }}>
                  Some details about your account.
                </p>
              </FluentAccordion>
            </div>
            <p style={{ fontSize: '12px', color: '#d83b01', margin: '8px 0 0 0', fontStyle: 'italic' }}>
              These titles don't help users understand what's inside each section
            </p>
          </ExampleContainer>

          <ExampleContainer
            title="✅ Do - Logical Grouping"
            description="Group related content together logically"
            background="#f3f9ff"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FluentAccordion 
                title="🔒 Privacy & Security"
                chevronPosition="after"
                size="small"
              >
                <p style={{ margin: 0, fontSize: '12px' }}>
                  Data privacy settings, security preferences, and access controls.
                </p>
              </FluentAccordion>
              
              <FluentAccordion 
                title="🔔 Notifications & Alerts"
                chevronPosition="after"
                size="small"
              >
                <p style={{ margin: 0, fontSize: '12px' }}>
                  Email preferences, push notifications, and alert settings.
                </p>
              </FluentAccordion>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="❌ Don't - Too Many Levels"
            description="Avoid nesting accordions more than 2 levels deep"
            background="#fff4f4"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FluentAccordion 
                title="Main Category"
                chevronPosition="after"
                size="small"
                disabled
              >
                <div style={{ fontSize: '12px' }}>
                  <p style={{ margin: '0 0 8px 0' }}>Subcategory with nested accordion...</p>
                  <p style={{ margin: 0, color: '#d83b01', fontStyle: 'italic' }}>
                    Deep nesting creates confusion and poor UX
                  </p>
                </div>
              </FluentAccordion>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Implementation */}
      <ComponentSection
        title="Implementation"
        description="Technical details and API reference for the Accordion component."
        marginBottom="24px"
      >
        <ExampleContainer
          title="Component API"
          description="Available props and their usage patterns"
        >
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '16px', 
            borderRadius: '6px',
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: '14px',
            overflow: 'auto'
          }}>
            <pre style={{ margin: 0, color: '#323130' }}>{`<FluentAccordion
  title="Accordion Title"
  chevronPosition="before" | "after"
  size="small" | "medium" | "large"
  expanded={boolean}
  disabled={boolean}
  onToggle={(expanded: boolean) => void}
>
  {/* Accordion content */}
</FluentAccordion>`}</pre>
          </div>
          
          <div style={{ marginTop: '16px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Key Features:</h5>
            <ul style={{ fontSize: '14px', color: '#605e5c', paddingLeft: '20px' }}>
              <li>Controlled and uncontrolled state management</li>
              <li>Flexible chevron positioning (before/after title)</li>
              <li>Three size variants for different contexts</li>
              <li>Smooth expand/collapse animations</li>
              <li>Full keyboard navigation support</li>
              <li>Accessible with proper ARIA attributes</li>
              <li>Disabled state for read-only sections</li>
              <li>TypeScript definitions for type safety</li>
              <li>Fluent 2 Design System compliance</li>
            </ul>
          </div>
        </ExampleContainer>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default AccordionShowcase;
