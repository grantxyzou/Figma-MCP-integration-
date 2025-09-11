import React, { useState } from 'react';
import { FluentDropdown } from '../fluent/Dropdown';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid, ExampleContainer } from '../shared/ComponentShowcaseLayout';

interface DropdownShowcaseProps {
  onBackToShowcase?: () => void;
}

export const DropdownShowcase: React.FC<DropdownShowcaseProps> = ({ onBackToShowcase }) => {
  const [basicValue, setBasicValue] = useState('');
  const [multiValue, setMultiValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const basicOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Really Long Option Name That Tests Overflow', value: 'option4' }
  ];

  const categoryOptions = [
    { label: 'Design', value: 'design' },
    { label: 'Development', value: 'development' },
    { label: 'Product Management', value: 'pm' },
    { label: 'Quality Assurance', value: 'qa' },
    { label: 'User Experience', value: 'ux' },
    { label: 'Data Science', value: 'data' }
  ];

  const priorityOptions = [
    { label: '🔴 Critical', value: 'critical' },
    { label: '🟠 High', value: 'high' },
    { label: '🟡 Medium', value: 'medium' },
    { label: '🟢 Low', value: 'low' },
    { label: '⚪ Backlog', value: 'backlog' }
  ];

  return (
    <ComponentShowcaseLayout
      title="Dropdown Component"
      subtitle="Selection from lists of options"
      description="Dropdowns allow users to select one option from a list of choices. They provide a space-efficient way to present many options without cluttering the interface, following Fluent 2 Design System interaction patterns."
      onBackToShowcase={onBackToShowcase}
    >
      {/* Basic Usage */}
      <ComponentSection
        title="Basic Usage"
        description="Standard dropdown implementations with different option types and interactions."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Standard Dropdown"
            description="Basic dropdown with text options"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#242424' 
              }}>
                Select an option
              </label>
              <FluentDropdown
                options={basicOptions}
                value={basicValue}
                onChange={setBasicValue}
                placeholder="Choose an option..."
              />
              {basicValue && (
                <p style={{ fontSize: '12px', color: '#605e5c', margin: 0 }}>
                  Selected: <strong>{basicOptions.find(o => o.value === basicValue)?.label}</strong>
                </p>
              )}
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Category Selection"
            description="Dropdown for selecting categories or departments"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#242424' 
              }}>
                Department
              </label>
              <FluentDropdown
                options={categoryOptions}
                value={multiValue}
                onChange={setMultiValue}
                placeholder="Select department..."
              />
              {multiValue && (
                <div style={{ 
                  backgroundColor: '#f3f2f1', 
                  padding: '8px 12px', 
                  borderRadius: '4px',
                  fontSize: '12px'
                }}>
                  Department: <strong>{categoryOptions.find(o => o.value === multiValue)?.label}</strong>
                </div>
              )}
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Priority Selection"
            description="Dropdown with visual indicators and icons"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#242424' 
              }}>
                Task Priority
              </label>
              <FluentDropdown
                options={priorityOptions}
                value={searchValue}
                onChange={setSearchValue}
                placeholder="Set priority level..."
              />
              {searchValue && (
                <div style={{ 
                  backgroundColor: '#f3f9ff', 
                  padding: '8px 12px', 
                  borderRadius: '4px',
                  border: '1px solid #0078d4',
                  fontSize: '12px'
                }}>
                  Priority: <strong>{priorityOptions.find(o => o.value === searchValue)?.label}</strong>
                </div>
              )}
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Disabled State"
            description="Dropdown in disabled state"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#605e5c' 
              }}>
                Locked Selection
              </label>
              <FluentDropdown
                disabled
                options={basicOptions}
                placeholder="Cannot be changed..."
              />
              <p style={{ fontSize: '12px', color: '#605e5c', margin: 0 }}>
                This dropdown is disabled and cannot be interacted with
              </p>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Form Integration */}
      <ComponentSection
        title="Form Integration"
        description="How dropdowns work within larger form contexts and layouts."
      >
        <ExampleGrid columns={1}>
          <ExampleContainer
            title="User Profile Form"
            description="Realistic form example with multiple dropdowns"
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              maxWidth: '800px'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                  Job Title
                </label>
                <FluentDropdown
                  options={[
                    { label: 'Software Engineer', value: 'swe' },
                    { label: 'Product Manager', value: 'pm' },
                    { label: 'UX Designer', value: 'ux' },
                    { label: 'Data Scientist', value: 'ds' }
                  ]}
                  placeholder="Select your role..."
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                  Experience Level
                </label>
                <FluentDropdown
                  options={[
                    { label: 'Entry Level (0-2 years)', value: 'entry' },
                    { label: 'Mid Level (3-5 years)', value: 'mid' },
                    { label: 'Senior Level (6-10 years)', value: 'senior' },
                    { label: 'Lead/Principal (10+ years)', value: 'lead' }
                  ]}
                  placeholder="Years of experience..."
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                  Location
                </label>
                <FluentDropdown
                  options={[
                    { label: 'Remote', value: 'remote' },
                    { label: 'Seattle, WA', value: 'seattle' },
                    { label: 'San Francisco, CA', value: 'sf' },
                    { label: 'New York, NY', value: 'nyc' },
                    { label: 'Austin, TX', value: 'austin' }
                  ]}
                  placeholder="Work location..."
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                  Time Zone
                </label>
                <FluentDropdown
                  options={[
                    { label: 'Pacific Time (PST/PDT)', value: 'pst' },
                    { label: 'Mountain Time (MST/MDT)', value: 'mst' },
                    { label: 'Central Time (CST/CDT)', value: 'cst' },
                    { label: 'Eastern Time (EST/EDT)', value: 'est' }
                  ]}
                  placeholder="Select timezone..."
                />
              </div>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection
        title="Usage Guidelines"
        description="Best practices for using dropdowns effectively in your applications."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="✅ Do - Clear Labels"
            description="Use descriptive labels and helpful placeholders"
            background="#f3f9ff"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424', display: 'block', marginBottom: '4px' }}>
                  Document Type
                </label>
                <FluentDropdown
                  options={[
                    { label: 'PDF Document', value: 'pdf' },
                    { label: 'Word Document', value: 'doc' },
                    { label: 'PowerPoint Presentation', value: 'ppt' }
                  ]}
                  placeholder="Choose document format..."
                />
              </div>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="❌ Don't - Vague Options"
            description="Avoid unclear or ambiguous option labels"
            background="#fff4f4"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424', display: 'block', marginBottom: '4px' }}>
                  Type
                </label>
                <FluentDropdown
                  options={[
                    { label: 'Option A', value: 'a' },
                    { label: 'Option B', value: 'b' },
                    { label: 'Other', value: 'other' }
                  ]}
                  placeholder="Select..."
                />
              </div>
              <p style={{ fontSize: '12px', color: '#d83b01', margin: 0, fontStyle: 'italic' }}>
                These labels don't clearly describe what each option represents
              </p>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="✅ Do - Logical Ordering"
            description="Order options logically (alphabetical, frequency, importance)"
            background="#f3f9ff"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424', display: 'block', marginBottom: '4px' }}>
                  File Size
                </label>
                <FluentDropdown
                  options={[
                    { label: 'Small (< 1 MB)', value: 'small' },
                    { label: 'Medium (1-10 MB)', value: 'medium' },
                    { label: 'Large (10-100 MB)', value: 'large' },
                    { label: 'Extra Large (> 100 MB)', value: 'xl' }
                  ]}
                  placeholder="Select file size range..."
                />
              </div>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="❌ Don't - Too Many Options"
            description="Avoid dropdowns with excessive options (consider search/filter)"
            background="#fff4f4"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424', display: 'block', marginBottom: '4px' }}>
                  Country
                </label>
                <FluentDropdown
                  options={[
                    { label: 'Afghanistan', value: 'af' },
                    { label: 'Albania', value: 'al' },
                    { label: 'Algeria', value: 'dz' },
                    { label: '... (195 more countries)', value: 'more' }
                  ]}
                  placeholder="Select country (too many options)..."
                />
              </div>
              <p style={{ fontSize: '12px', color: '#d83b01', margin: 0, fontStyle: 'italic' }}>
                Consider using a searchable dropdown or autocomplete for long lists
              </p>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Accessibility Features */}
      <ComponentSection
        title="Accessibility Features"
        description="Built-in accessibility features that make dropdowns usable for everyone."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Keyboard Navigation"
            description="Full keyboard support for navigation and selection"
            background="#f3f9ff"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <FluentDropdown
                options={basicOptions}
                placeholder="Try keyboard navigation..."
              />
              <div style={{ fontSize: '12px', color: '#605e5c' }}>
                <strong>Keyboard shortcuts:</strong>
                <ul style={{ margin: '4px 0', paddingLeft: '16px' }}>
                  <li>Space/Enter: Open dropdown</li>
                  <li>Arrow keys: Navigate options</li>
                  <li>Esc: Close dropdown</li>
                  <li>Tab: Move to next element</li>
                </ul>
              </div>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Screen Reader Support"
            description="Proper ARIA labels and announcements"
            background="#f3f9ff"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                Accessible Dropdown
              </label>
              <FluentDropdown
                options={basicOptions}
                placeholder="Properly labeled for screen readers"
                aria-describedby="dropdown-help"
              />
              <p id="dropdown-help" style={{ fontSize: '12px', color: '#605e5c', margin: 0 }}>
                This dropdown is properly labeled and connected to help text
              </p>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Implementation */}
      <ComponentSection
        title="Implementation"
        description="Technical details and API reference for the Dropdown component."
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
            <pre style={{ margin: 0, color: '#323130' }}>{`<FluentDropdown
  options={[
    { label: "Option 1", value: "value1" },
    { label: "Option 2", value: "value2" }
  ]}
  value={selectedValue}
  onChange={(value: string) => void}
  placeholder="Choose an option..."
  disabled={boolean}
  aria-describedby="help-text-id"
/>`}</pre>
          </div>
          
          <div style={{ marginTop: '16px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Key Features:</h5>
            <ul style={{ fontSize: '14px', color: '#605e5c', paddingLeft: '20px' }}>
              <li>Controlled component with value/onChange pattern</li>
              <li>Flexible option structure with label/value pairs</li>
              <li>Full keyboard navigation support</li>
              <li>Smooth animations and hover states</li>
              <li>Accessible with proper ARIA attributes</li>
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

export default DropdownShowcase;
