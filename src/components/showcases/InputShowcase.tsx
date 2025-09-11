import React, { useState } from 'react';
import { FluentInput } from '../fluent/Input';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid, ExampleContainer } from '../shared/ComponentShowcaseLayout';

interface InputShowcaseProps {
  onBackToShowcase?: () => void;
}

export const InputShowcase: React.FC<InputShowcaseProps> = ({ onBackToShowcase }) => {
  const [basicValue, setBasicValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [validationValue, setValidationValue] = useState('invalid@email');

  const isEmailValid = (email: string) => {
    return email.includes('@') && email.includes('.') && email.length > 5;
  };

  return (
    <ComponentShowcaseLayout
      title="Input Component"
      subtitle="Text input and form fields"
      description="Input components allow users to enter and edit text. They support various types, validation states, and accessibility features following the Fluent 2 Design System guidelines."
      onBackToShowcase={onBackToShowcase}
    >
      {/* Basic Input Types */}
      <ComponentSection
        title="Input Types"
        description="Different input types for various data entry needs. Each type provides appropriate keyboard handling and validation."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Text Input"
            description="Standard text input for general text entry"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#242424' 
              }}>
                Full Name
              </label>
              <FluentInput
                value={basicValue}
                onChange={setBasicValue}
                placeholder="Enter your full name..."
              />
              {basicValue && (
                <p style={{ fontSize: '12px', color: '#605e5c', margin: 0 }}>
                  Current value: "{basicValue}"
                </p>
              )}
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Email Input"
            description="Email-specific input with validation feedback"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#242424' 
              }}>
                Email Address
              </label>
              <FluentInput
                type="email"
                value={emailValue}
                onChange={setEmailValue}
                placeholder="your.email@example.com"
                error={emailValue.length > 0 && !isEmailValid(emailValue)}
              />
              {emailValue && (
                <p style={{ 
                  fontSize: '12px', 
                  color: isEmailValid(emailValue) ? '#107c10' : '#d83b01',
                  margin: 0 
                }}>
                  {isEmailValid(emailValue) ? '✓ Valid email format' : '⚠ Please enter a valid email'}
                </p>
              )}
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Password Input"
            description="Secure password input with hidden characters"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#242424' 
              }}>
                Password
              </label>
              <FluentInput
                type="password"
                value={passwordValue}
                onChange={setPasswordValue}
                placeholder="Enter your password..."
              />
              {passwordValue && (
                <div style={{ display: 'flex', gap: '8px', fontSize: '12px' }}>
                  <span style={{ color: passwordValue.length >= 8 ? '#107c10' : '#d83b01' }}>
                    {passwordValue.length >= 8 ? '✓' : '✗'} 8+ characters
                  </span>
                  <span style={{ color: /[A-Z]/.test(passwordValue) ? '#107c10' : '#d83b01' }}>
                    {/[A-Z]/.test(passwordValue) ? '✓' : '✗'} Uppercase
                  </span>
                  <span style={{ color: /[0-9]/.test(passwordValue) ? '#107c10' : '#d83b01' }}>
                    {/[0-9]/.test(passwordValue) ? '✓' : '✗'} Number
                  </span>
                </div>
              )}
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Search Input"
            description="Search-optimized input with instant feedback"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#242424' 
              }}>
                Search
              </label>
              <FluentInput
                type="text"
                value={searchValue}
                onChange={setSearchValue}
                placeholder="🔍 Search for anything..."
              />
              {searchValue && (
                <div style={{ 
                  backgroundColor: '#f3f2f1', 
                  padding: '8px 12px', 
                  borderRadius: '4px',
                  fontSize: '12px' 
                }}>
                  Searching for: <strong>"{searchValue}"</strong>
                </div>
              )}
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Input States */}
      <ComponentSection
        title="Input States"
        description="Various states to provide clear feedback about input status and validation."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Normal State"
            description="Default input appearance with focus states"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                Standard Input
              </label>
              <FluentInput
                placeholder="Click to focus and see the focus ring"
              />
              <p style={{ fontSize: '12px', color: '#605e5c', margin: 0 }}>
                Try clicking and typing to see hover and focus states
              </p>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Error State"
            description="Error styling for validation failures"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                Email with Validation
              </label>
              <FluentInput
                type="email"
                error={true}
                value={validationValue}
                onChange={setValidationValue}
                placeholder="Enter a valid email..."
              />
              <p style={{ fontSize: '12px', color: '#d83b01', margin: 0 }}>
                ⚠ Please enter a valid email address
              </p>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Disabled State"
            description="Disabled input that cannot be edited"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: '#605e5c' }}>
                Read-only Field
              </label>
              <FluentInput
                disabled
                value="This field is disabled"
                placeholder="Cannot be edited..."
              />
              <p style={{ fontSize: '12px', color: '#605e5c', margin: 0 }}>
                This input is disabled and cannot be modified
              </p>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Required Field"
            description="Indicating required fields with visual markers"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                First Name <span style={{ color: '#d83b01' }}>*</span>
              </label>
              <FluentInput
                placeholder="Required field..."
                error={basicValue.length === 0}
              />
              <p style={{ fontSize: '12px', color: '#605e5c', margin: 0 }}>
                * Required field
              </p>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Form Layouts */}
      <ComponentSection
        title="Form Layouts"
        description="Common form patterns and layouts using input components effectively."
      >
        <ExampleGrid columns={1}>
          <ExampleContainer
            title="Registration Form Example"
            description="Typical user registration form with various input types"
          >
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '20px',
              maxWidth: '800px'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                  First Name <span style={{ color: '#d83b01' }}>*</span>
                </label>
                <FluentInput placeholder="Enter first name..." />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                  Last Name <span style={{ color: '#d83b01' }}>*</span>
                </label>
                <FluentInput placeholder="Enter last name..." />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                  Email Address <span style={{ color: '#d83b01' }}>*</span>
                </label>
                <FluentInput type="email" placeholder="your.email@example.com" />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                  Phone Number
                </label>
                <FluentInput type="text" placeholder="+1 (555) 123-4567" />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                  Company (Optional)
                </label>
                <FluentInput placeholder="Your company name..." />
              </div>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Accessibility Features */}
      <ComponentSection
        title="Accessibility Features"
        description="Built-in accessibility features that make inputs usable for everyone."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Keyboard Navigation"
            description="Full keyboard support for navigation and interaction"
            background="#f3f9ff"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <FluentInput placeholder="Press Tab to navigate" />
              <FluentInput placeholder="Use arrow keys in text" />
              <FluentInput placeholder="Enter to submit (in forms)" />
            </div>
            <div style={{ marginTop: '12px', fontSize: '12px', color: '#605e5c' }}>
              <strong>Keyboard shortcuts:</strong>
              <ul style={{ margin: '4px 0', paddingLeft: '16px' }}>
                <li>Tab/Shift+Tab: Navigate between inputs</li>
                <li>Home/End: Move to start/end of text</li>
                <li>Ctrl+A: Select all text</li>
              </ul>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Screen Reader Support"
            description="Proper ARIA labels and announcements"
            background="#f3f9ff"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                Accessible Label
              </label>
              <FluentInput 
                placeholder="Properly labeled for screen readers"
                aria-describedby="help-text"
              />
              <p id="help-text" style={{ fontSize: '12px', color: '#605e5c', margin: 0 }}>
                This help text is connected to the input for screen readers
              </p>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Implementation */}
      <ComponentSection
        title="Implementation"
        description="Technical details and API reference for the Input component."
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
            <pre style={{ margin: 0, color: '#323130' }}>{`<FluentInput
  type="text" | "email" | "password" | "number"
  value={string}
  onChange={(value: string) => void}
  placeholder="Placeholder text..."
  error={boolean}
  disabled={boolean}
  aria-describedby="help-text-id"
/>`}</pre>
          </div>
          
          <div style={{ marginTop: '16px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Key Features:</h5>
            <ul style={{ fontSize: '14px', color: '#605e5c', paddingLeft: '20px' }}>
              <li>Controlled component with value/onChange pattern</li>
              <li>Built-in validation state styling</li>
              <li>Full accessibility with ARIA support</li>
              <li>TypeScript definitions for type safety</li>
              <li>Responsive design for all screen sizes</li>
              <li>Fluent 2 Design System compliance</li>
            </ul>
          </div>
        </ExampleContainer>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default InputShowcase;
