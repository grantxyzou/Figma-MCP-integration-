import React, { useState } from 'react';
import { FluentButton } from './fluent/Button';
import { FluentInput } from './fluent/Input';
import { FluentDropdown } from './fluent/Dropdown';
import { FluentAccordion } from './fluent/Accordion';
import { FluentBadge, FluentPresenceBadge } from './fluent/Badge/index';

const FluentShowcase: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [isPressed, setIsPressed] = useState(false);

  const dropdownOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Really Long Option Name That Tests Overflow', value: 'option4' }
  ];

  return (
    <div style={{ 
      padding: '32px', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: 'Segoe UI, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: 600, 
        color: '#242424', 
        marginBottom: '8px' 
      }}>
        Fluent 2 Web Components
      </h1>
      <p style={{ 
        fontSize: '16px', 
        color: '#605E5C', 
        marginBottom: '32px' 
      }}>
        Authentic Microsoft Fluent design system components with proper interactive states
      </p>

      {/* Button Showcase */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 600, 
          color: '#242424', 
          marginBottom: '16px' 
        }}>
          Buttons
        </h2>
        <p style={{ 
          fontSize: '14px', 
          color: '#605E5C', 
          marginBottom: '16px' 
        }}>
          Hover, focus, and click to see authentic Fluent interactions
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          flexWrap: 'wrap', 
          marginBottom: '16px' 
        }}>
          <FluentButton style="Primary">Primary Button</FluentButton>
          <FluentButton style="Secondary (Default)">Secondary Button</FluentButton>
          <FluentButton style="Outline">Outline Button</FluentButton>
          <FluentButton style="Subtle">Subtle Button</FluentButton>
          <FluentButton style="Transparent">Transparent Button</FluentButton>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          flexWrap: 'wrap', 
          marginBottom: '16px' 
        }}>
          <FluentButton size="Small" style="Primary">Small</FluentButton>
          <FluentButton size="Medium (Default)" style="Primary">Medium</FluentButton>
          <FluentButton size="Large" style="Primary">Large</FluentButton>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          flexWrap: 'wrap' 
        }}>
          <FluentButton disabled style="Primary">Disabled Primary</FluentButton>
          <FluentButton disabled style="Secondary (Default)">Disabled Secondary</FluentButton>
        </div>
      </section>

      {/* Input Showcase */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 600, 
          color: '#242424', 
          marginBottom: '16px' 
        }}>
          Input Fields
        </h2>
        <p style={{ 
          fontSize: '14px', 
          color: '#605E5C', 
          marginBottom: '16px' 
        }}>
          Focus and hover to see authentic Fluent input styling
        </p>
        
        <div style={{ 
          display: 'grid', 
          gap: '16px', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' 
        }}>
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#242424', 
              marginBottom: '4px' 
            }}>
              Standard Input
            </label>
            <FluentInput
              value={inputValue}
              onChange={setInputValue}
              placeholder="Enter some text..."
            />
          </div>
          
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#242424', 
              marginBottom: '4px' 
            }}>
              Email Input
            </label>
            <FluentInput
              type="email"
              placeholder="Enter your email..."
            />
          </div>
          
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#242424', 
              marginBottom: '4px' 
            }}>
              Error State
            </label>
            <FluentInput
              error
              value="Invalid input"
              placeholder="This has an error..."
            />
          </div>
          
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#242424', 
              marginBottom: '4px' 
            }}>
              Disabled Input
            </label>
            <FluentInput
              disabled
              value="Disabled input"
              placeholder="Cannot edit..."
            />
          </div>
        </div>
      </section>

      {/* Dropdown Showcase */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 600, 
          color: '#242424', 
          marginBottom: '16px' 
        }}>
          Dropdowns
        </h2>
        <p style={{ 
          fontSize: '14px', 
          color: '#605E5C', 
          marginBottom: '16px' 
        }}>
          Click to open, smooth animations, and proper focus states
        </p>
        
        <div style={{ 
          display: 'grid', 
          gap: '16px', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' 
        }}>
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#242424', 
              marginBottom: '4px' 
            }}>
              Standard Dropdown
            </label>
            <FluentDropdown
              options={dropdownOptions}
              value={dropdownValue}
              onChange={setDropdownValue}
              placeholder="Choose an option..."
            />
          </div>
          
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#242424', 
              marginBottom: '4px' 
            }}>
              Disabled Dropdown
            </label>
            <FluentDropdown
              disabled
              options={dropdownOptions}
              placeholder="Cannot interact..."
            />
          </div>
        </div>
        
        {dropdownValue && (
          <div style={{ 
            marginTop: '16px', 
            padding: '12px', 
            backgroundColor: '#F3F2F1', 
            borderRadius: '4px' 
          }}>
            <p style={{ 
              fontSize: '14px', 
              color: '#242424', 
              margin: 0 
            }}>
              Selected: <strong>{dropdownOptions.find(o => o.value === dropdownValue)?.label}</strong>
            </p>
          </div>
        )}
      </section>

              {/* Badge Components */}
        <div className="component-section">
          <h3>Badge Components</h3>
          <p>Badges display short pieces of information and can include status, notifications, and labels.</p>
          
          <div className="component-grid">
            <div className="component-example">
              <h4>Basic Badges</h4>
              <div className="example-row">
                <FluentBadge color="brand">Badge</FluentBadge>
                <FluentBadge color="success">Success</FluentBadge>
                <FluentBadge color="warning">Warning</FluentBadge>
                <FluentBadge color="danger">Error</FluentBadge>
              </div>
            </div>

            <div className="component-example">
              <h4>Badge Sizes</h4>
              <div className="example-row" style={{ alignItems: 'center' }}>
                <FluentBadge color="brand" size="tiny">Tiny</FluentBadge>
                <FluentBadge color="brand" size="extra-small">XS</FluentBadge>
                <FluentBadge color="brand" size="small">Small</FluentBadge>
                <FluentBadge color="brand" size="medium">Medium</FluentBadge>
                <FluentBadge color="brand" size="large">Large</FluentBadge>
                <FluentBadge color="brand" size="extra-large">XL</FluentBadge>
              </div>
            </div>

            <div className="component-example">
              <h4>Badge Appearances</h4>
              <div className="example-row">
                <FluentBadge color="brand" appearance="filled">Filled</FluentBadge>
                <FluentBadge color="brand" appearance="tint">Tint</FluentBadge>
                <FluentBadge color="brand" appearance="outline">Outline</FluentBadge>
                <FluentBadge color="brand" appearance="subtle">Subtle</FluentBadge>
              </div>
            </div>

            <div className="component-example">
              <h4>Color Variants</h4>
              <div className="example-row">
                <FluentBadge color="brand">Brand</FluentBadge>
                <FluentBadge color="danger">Danger</FluentBadge>
                <FluentBadge color="important">Important</FluentBadge>
                <FluentBadge color="informative">Informative</FluentBadge>
                <FluentBadge color="severe">Severe</FluentBadge>
                <FluentBadge color="subtle">Subtle</FluentBadge>
                <FluentBadge color="success">Success</FluentBadge>
                <FluentBadge color="warning">Warning</FluentBadge>
              </div>
            </div>

            <div className="component-example">
              <h4>Icon Badges</h4>
              <div className="example-row">
                <FluentBadge color="success" icon="✓">Completed</FluentBadge>
                <FluentBadge color="warning" icon="⚠">Warning</FluentBadge>
                <FluentBadge color="danger" icon="✗">Error</FluentBadge>
                <FluentBadge color="informative" icon="ℹ">Info</FluentBadge>
              </div>
            </div>

            <div className="component-example">
              <h4>Icon-Only Badges</h4>
              <div className="example-row">
                <FluentBadge color="success" icon="✓" />
                <FluentBadge color="warning" icon="⚠" />
                <FluentBadge color="danger" icon="✗" />
                <FluentBadge color="informative" icon="ℹ" />
                <FluentBadge color="brand" icon="★" />
              </div>
            </div>
          </div>
        </div>

        {/* Presence Badge Components */}
        <div className="component-section">
          <h3>Presence Badges</h3>
          <p>Presence badges indicate user status and availability in Microsoft applications.</p>
          
          <div className="component-grid">
            <div className="component-example">
              <h4>User Status</h4>
              <div className="example-row" style={{ alignItems: 'center', gap: '8px' }}>
                <FluentPresenceBadge status="available" />
                <FluentPresenceBadge status="busy" />
                <FluentPresenceBadge status="away" />
                <FluentPresenceBadge status="do-not-disturb" />
                <FluentPresenceBadge status="offline" />
                <FluentPresenceBadge status="out-of-office" />
                <FluentPresenceBadge status="blocked" />
                <FluentPresenceBadge status="unknown" />
              </div>
            </div>

            <div className="component-example">
              <h4>Presence Sizes</h4>
              <div className="example-row" style={{ alignItems: 'center', gap: '8px' }}>
                <FluentPresenceBadge status="available" size="tiny" />
                <FluentPresenceBadge status="available" size="extra-small" />
                <FluentPresenceBadge status="available" size="small" />
                <FluentPresenceBadge status="available" size="medium" />
                <FluentPresenceBadge status="available" size="large" />
                <FluentPresenceBadge status="available" size="extra-large" />
              </div>
            </div>

            <div className="component-example">
              <h4>In Office vs Remote</h4>
              <div className="example-row" style={{ alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FluentPresenceBadge status="available" inOffice={true} />
                  <span style={{ fontSize: '14px', color: '#605E5C' }}>In Office</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FluentPresenceBadge status="available" inOffice={false} />
                  <span style={{ fontSize: '14px', color: '#605E5C' }}>Remote</span>
                </div>
              </div>
            </div>

            <div className="component-example">
              <h4>Status Combinations</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FluentPresenceBadge status="busy" size="large" />
                  <span style={{ fontSize: '14px' }}>Busy</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FluentPresenceBadge status="away" size="large" />
                  <span style={{ fontSize: '14px' }}>Away</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FluentPresenceBadge status="do-not-disturb" size="large" />
                  <span style={{ fontSize: '14px' }}>Do Not Disturb</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FluentPresenceBadge status="out-of-office" size="large" />
                  <span style={{ fontSize: '14px' }}>Out of Office</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Components */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 600, 
          color: '#242424', 
          marginBottom: '16px' 
        }}>
          Accordions
        </h2>
        <p style={{ 
          fontSize: '14px', 
          color: '#605E5C', 
          marginBottom: '16px' 
        }}>
          Collapsible content sections with smooth animations and proper focus states
        </p>
        
        <div style={{ 
          display: 'grid', 
          gap: '16px', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' 
        }}>
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#242424', 
              marginBottom: '4px' 
            }}>
              Standard Accordion
            </label>
            <FluentAccordion 
              title="Click to expand"
              chevronPosition="before"
            >
              <p>This is the content inside the accordion. It can contain any React components or HTML elements.</p>
            </FluentAccordion>
          </div>
          
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#242424', 
              marginBottom: '4px' 
            }}>
              Chevron After
            </label>
            <FluentAccordion 
              title="Chevron on the right"
              chevronPosition="after"
              size="large"
            >
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#242424' }}>Rich Content</h4>
                <p style={{ margin: '0 0 12px 0' }}>Accordions can contain complex content.</p>
                <FluentButton size="Small" style="Primary">Action Button</FluentButton>
              </div>
            </FluentAccordion>
          </div>
          
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#242424', 
              marginBottom: '4px' 
            }}>
              Small Size
            </label>
            <FluentAccordion 
              title="Small accordion"
              size="small"
              expanded={true}
            >
              <p style={{ fontSize: '12px' }}>This is a small accordion that's expanded by default.</p>
            </FluentAccordion>
          </div>
          
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#242424', 
              marginBottom: '4px' 
            }}>
              Disabled State
            </label>
            <FluentAccordion 
              title="Disabled accordion"
              disabled={true}
            >
              <p>This content cannot be accessed.</p>
            </FluentAccordion>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 600, 
          color: '#242424', 
          marginBottom: '16px' 
        }}>
          Interactive Demo
        </h2>
        <p style={{ 
          fontSize: '14px', 
          color: '#605E5C', 
          marginBottom: '16px' 
        }}>
          Notice the smooth animations, proper hover states, and authentic Microsoft Fluent styling
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          flexWrap: 'wrap', 
          alignItems: 'center' 
        }}>
          <FluentButton 
            style="Primary"
            onClick={() => alert('Button clicked!')}
          >
            Click Me!
          </FluentButton>
          
          <FluentButton 
            style="Outline"
            onClick={() => setIsPressed(!isPressed)}
          >
            {isPressed ? 'Reset State' : 'Change State'}
          </FluentButton>
          
          {isPressed && (
            <div style={{ 
              padding: '8px 12px', 
              backgroundColor: '#0F6CBD', 
              color: 'white', 
              borderRadius: '4px', 
              fontSize: '14px' 
            }}>
              State changed!
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FluentShowcase;
