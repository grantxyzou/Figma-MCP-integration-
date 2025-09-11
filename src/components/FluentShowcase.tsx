import React, { useState } from 'react';
import { FluentButton } from './fluent/Button';
import { FluentInput } from './fluent/Input';
import { FluentDropdown } from './fluent/Dropdown';

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
