import React, { useState } from 'react';
import { FluentButton } from '../fluent/Button';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid, ExampleContainer } from '../shared/ComponentShowcaseLayout';

interface ButtonShowcaseProps {
  onBackToShowcase?: () => void;
}

export const ButtonShowcase: React.FC<ButtonShowcaseProps> = ({ onBackToShowcase }) => {
  const [clickCount, setClickCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsyncAction = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setClickCount(prev => prev + 1);
    }, 2000);
  };

  return (
    <ComponentShowcaseLayout
      title="Button Component"
      subtitle="Primary interactive element"
      description="Buttons are the primary way for users to trigger actions. They should have clear, actionable text and follow the Fluent 2 Design System visual hierarchy. Use different styles to indicate importance and context."
      onBackToShowcase={onBackToShowcase}
    >
      {/* Button Styles */}
      <ComponentSection
        title="Button Styles"
        description="Different visual styles to communicate button importance and context. Primary for main actions, secondary for supporting actions."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Primary & Secondary"
            description="Most common button styles for primary and secondary actions"
          >
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <FluentButton style="Primary">Primary Action</FluentButton>
              <FluentButton style="Secondary (Default)">Secondary Action</FluentButton>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Outline & Subtle"
            description="Lower emphasis styles for tertiary actions and navigation"
          >
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <FluentButton style="Outline">Outline Button</FluentButton>
              <FluentButton style="Subtle">Subtle Button</FluentButton>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Transparent"
            description="Minimal style for inline actions and icon buttons"
          >
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <FluentButton style="Transparent">Transparent Button</FluentButton>
              <FluentButton style="Transparent">🔍 With Icon</FluentButton>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Interactive Demo"
            description="Click to see hover and active states in action"
          >
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <FluentButton 
                style="Primary"
                onClick={() => setClickCount(prev => prev + 1)}
              >
                Clicked {clickCount} times
              </FluentButton>
              <FluentButton style="Secondary (Default)">Hover me!</FluentButton>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Button Sizes */}
      <ComponentSection
        title="Button Sizes"
        description="Three sizes available: Small for compact layouts, Medium (default) for general use, and Large for prominent actions."
      >
        <ExampleGrid columns={1}>
          <ExampleContainer
            title="Size Variants"
            description="All sizes shown with primary style"
          >
            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              alignItems: 'center',
              flexWrap: 'wrap' 
            }}>
              <FluentButton size="Small" style="Primary">Small Button</FluentButton>
              <FluentButton size="Medium (Default)" style="Primary">Medium Button (Default)</FluentButton>
              <FluentButton size="Large" style="Primary">Large Button</FluentButton>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Button States */}
      <ComponentSection
        title="Button States"
        description="Buttons provide clear visual feedback for different interaction states including disabled, loading, and error states."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Disabled States"
            description="Disabled buttons prevent interaction and use reduced opacity"
          >
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <FluentButton disabled style="Primary">Disabled Primary</FluentButton>
              <FluentButton disabled style="Secondary (Default)">Disabled Secondary</FluentButton>
              <FluentButton disabled style="Outline">Disabled Outline</FluentButton>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Loading State Demo"
            description="Simulates async actions with loading feedback"
          >
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <FluentButton 
                style="Primary"
                disabled={isLoading}
                onClick={handleAsyncAction}
              >
                {isLoading ? '⏳ Loading...' : 'Start Async Action'}
              </FluentButton>
              {clickCount > 0 && (
                <span style={{ color: '#107c10', fontSize: '14px' }}>
                  ✓ Completed {clickCount} time{clickCount !== 1 ? 's' : ''}
                </span>
              )}
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection
        title="Usage Guidelines"
        description="Best practices for using buttons effectively in your applications."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="✅ Do - Clear Actions"
            description="Use clear, actionable language"
            background="#f3f9ff"
          >
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <FluentButton style="Primary">Save Changes</FluentButton>
              <FluentButton style="Secondary (Default)">Cancel</FluentButton>
              <FluentButton style="Outline">Learn More</FluentButton>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="❌ Don't - Vague Labels"
            description="Avoid unclear or generic button text"
            background="#fff4f4"
          >
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <FluentButton style="Primary">OK</FluentButton>
              <FluentButton style="Secondary (Default)">Submit</FluentButton>
              <FluentButton style="Outline">Click Here</FluentButton>
            </div>
            <p style={{ 
              fontSize: '14px', 
              color: '#d83b01', 
              marginTop: '12px',
              fontStyle: 'italic'
            }}>
              These labels don't clearly communicate what will happen
            </p>
          </ExampleContainer>

          <ExampleContainer
            title="✅ Do - Proper Hierarchy"
            description="Use visual hierarchy to guide user attention"
            background="#f3f9ff"
          >
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <FluentButton style="Primary">Complete Purchase</FluentButton>
              <FluentButton style="Secondary (Default)">Save for Later</FluentButton>
              <FluentButton style="Subtle">Continue Shopping</FluentButton>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="❌ Don't - Multiple Primary"
            description="Avoid multiple primary buttons in the same context"
            background="#fff4f4"
          >
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <FluentButton style="Primary">Save</FluentButton>
              <FluentButton style="Primary">Cancel</FluentButton>
              <FluentButton style="Primary">Delete</FluentButton>
            </div>
            <p style={{ 
              fontSize: '14px', 
              color: '#d83b01', 
              marginTop: '12px',
              fontStyle: 'italic'
            }}>
              Multiple primary buttons create confusion about the main action
            </p>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Technical Implementation */}
      <ComponentSection
        title="Implementation"
        description="Technical details and code examples for implementing buttons in your application."
        marginBottom="24px"
      >
        <ExampleContainer
          title="Component API"
          description="Available props and their usage"
        >
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '16px', 
            borderRadius: '6px',
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: '14px',
            overflow: 'auto'
          }}>
            <pre style={{ margin: 0, color: '#323130' }}>{`<FluentButton
  style="Primary" | "Secondary (Default)" | "Outline" | "Subtle" | "Transparent"
  size="Small" | "Medium (Default)" | "Large"
  disabled={boolean}
  onClick={() => void}
>
  Button Text
</FluentButton>`}</pre>
          </div>
          
          <div style={{ marginTop: '16px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Key Features:</h5>
            <ul style={{ fontSize: '14px', color: '#605e5c', paddingLeft: '20px' }}>
              <li>Authentic Fluent 2 Design System styling</li>
              <li>Accessible keyboard navigation and focus management</li>
              <li>Smooth hover and click animations</li>
              <li>TypeScript support with full type safety</li>
              <li>Responsive design optimized for all screen sizes</li>
            </ul>
          </div>
        </ExampleContainer>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default ButtonShowcase;
