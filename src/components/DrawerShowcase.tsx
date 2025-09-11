import React, { useState } from 'react';
import { FluentDrawer } from './fluent/Drawer';
import { FluentButton } from './fluent/Button';
import { Card } from './fluent/Card';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid, ExampleContainer } from './shared/ComponentShowcaseLayout';

interface DrawerShowcaseProps {
  onBackToShowcase?: () => void;
}

const DrawerShowcase: React.FC<DrawerShowcaseProps> = ({ onBackToShowcase }) => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlaySize, setOverlaySize] = useState<'small' | 'medium' | 'large'>('medium');
  const [inlineOpen, setInlineOpen] = useState(true);

  return (
    <ComponentShowcaseLayout
      title="Drawer Component"
      subtitle="Overlay and inline panel component"
      description="Drawers provide a way to display additional content or controls without navigating away from the current page. They can appear as overlays on top of content or inline as part of the layout, following Fluent 2 Design System specifications."
      onBackToShowcase={onBackToShowcase}
    >
      {/* Quick Demo */}
      <ComponentSection
        title="Interactive Demo"
        description="Try the drawer component with different configurations and see how it behaves in different scenarios."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Overlay Drawer"
            description="Appears on top of content with a backdrop"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#242424' }}>
                  Size:
                </label>
                <select 
                  value={overlaySize} 
                  onChange={(e) => setOverlaySize(e.target.value as any)}
                  style={{ 
                    padding: '6px 12px', 
                    borderRadius: '4px',
                    border: '1px solid #d1d1d1',
                    fontSize: '14px',
                    fontFamily: 'Segoe UI, sans-serif'
                  }}
                >
                  <option value="small">Small (320px)</option>
                  <option value="medium">Medium (592px)</option>
                  <option value="large">Large (940px)</option>
                </select>
              </div>
              
              <FluentButton
                style="Primary"
                onClick={() => setOverlayOpen(true)}
              >
                Open {overlaySize.charAt(0).toUpperCase() + overlaySize.slice(1)} Overlay
              </FluentButton>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Inline Drawer"
            description="Part of the layout flow, pushes content"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '14px', color: '#605e5c', margin: 0 }}>
                Inline drawers appear alongside content and are part of the page layout.
              </p>
              
              <FluentButton
                style="Secondary (Default)"
                onClick={() => setInlineOpen(!inlineOpen)}
              >
                {inlineOpen ? 'Hide' : 'Show'} Inline Drawer
              </FluentButton>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Overlay Drawer Demo */}
      <FluentDrawer
        type="overlay"
        size={overlaySize}
        isOpen={overlayOpen}
        onClose={() => setOverlayOpen(false)}
        title={`${overlaySize.charAt(0).toUpperCase() + overlaySize.slice(1)} Settings Panel`}
        primaryAction={{
          label: 'Save Changes',
          onClick: () => {
            console.log('Save clicked');
            setOverlayOpen(false);
          }
        }}
        secondaryAction={{
          label: 'Cancel',
          onClick: () => setOverlayOpen(false)
        }}
        tertiaryAction={{
          onClick: () => console.log('More options clicked')
        }}
        data-testid="demo-overlay-drawer"
      >
        <div style={{ padding: '24px' }}>
          <h4 style={{ marginTop: 0, marginBottom: '16px' }}>Configuration Settings</h4>
          <p style={{ marginBottom: '20px', color: '#605e5c' }}>
            This {overlaySize} overlay drawer demonstrates how content adapts to different drawer sizes.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                Display Name
              </label>
              <input 
                type="text" 
                placeholder="Enter display name..."
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #d1d1d1',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontFamily: 'Segoe UI, sans-serif'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                Theme Preference
              </label>
              <select style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d1d1',
                borderRadius: '4px',
                fontSize: '14px',
                fontFamily: 'Segoe UI, sans-serif'
              }}>
                <option>Light</option>
                <option>Dark</option>
                <option>System Default</option>
              </select>
            </div>

            <div>
              <h5 style={{ marginTop: '20px', marginBottom: '12px' }}>Notifications</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <input type="checkbox" defaultChecked />
                  Email notifications
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <input type="checkbox" />
                  Push notifications
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <input type="checkbox" defaultChecked />
                  Weekly digest
                </label>
              </div>
            </div>
          </div>
        </div>
      </FluentDrawer>

      {/* Inline Drawer Demo */}
      <ComponentSection
        title="Inline Drawer Layout"
        description="See how inline drawers integrate into page layouts and work alongside main content."
      >
        <div style={{
          border: '1px solid #e1dfdd',
          borderRadius: '8px',
          overflow: 'hidden',
          height: '400px',
          display: 'flex'
        }}>
          <FluentDrawer
            type="inline"
            size="small"
            isOpen={inlineOpen}
            title="Navigation Panel"
            primaryAction={{
              label: 'Apply',
              onClick: () => console.log('Apply clicked')
            }}
            secondaryAction={{
              label: 'Reset',
              onClick: () => console.log('Reset clicked')
            }}
            data-testid="demo-inline-drawer"
          >
            <div style={{ padding: '20px' }}>
              <h4 style={{ marginTop: 0, marginBottom: '16px' }}>Quick Actions</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <FluentButton style="Subtle" size="Small">
                  📁 Recent Files
                </FluentButton>
                <FluentButton style="Subtle" size="Small">
                  ⭐ Favorites
                </FluentButton>
                <FluentButton style="Subtle" size="Small">
                  🗂️ Projects
                </FluentButton>
                <FluentButton style="Subtle" size="Small">
                  ⚙️ Settings
                </FluentButton>
              </div>

              <div style={{ marginTop: '24px' }}>
                <h5 style={{ marginBottom: '12px' }}>Filter Options</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                    <input type="checkbox" defaultChecked />
                    Show completed
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                    <input type="checkbox" defaultChecked />
                    Show drafts
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                    <input type="checkbox" />
                    Show archived
                  </label>
                </div>
              </div>
            </div>
          </FluentDrawer>
          
          <div style={{
            flex: 1,
            padding: '24px',
            backgroundColor: '#faf9f8',
            overflowY: 'auto'
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '16px' }}>Main Content Area</h3>
            <p style={{ marginBottom: '16px', color: '#605e5c' }}>
              This is the main content area. The inline drawer appears to the left and is part of the page layout.
            </p>
            
            <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <Card
                size="small"
                style="filled"
                title="Document 1"
                subtitle="Updated 2 hours ago"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                showPrimaryAction={false}
                showSecondaryAction={false}
              />
              <Card
                size="small"
                style="filled"
                title="Document 2"
                subtitle="Updated yesterday"
                body="Sed do eiusmod tempor incididunt ut labore et dolore magna."
                showPrimaryAction={false}
                showSecondaryAction={false}
              />
            </div>

            <h4 style={{ marginTop: '24px', marginBottom: '12px' }}>Features</h4>
            <ul style={{ color: '#605e5c', fontSize: '14px', lineHeight: '1.6' }}>
              <li>Responsive design that adapts to screen size</li>
              <li>Accessible keyboard navigation</li>
              <li>Customizable header and footer actions</li>
              <li>Multiple size variants (small, medium, large)</li>
              <li>Smooth animations and transitions</li>
              <li>Integration with Fluent 2 Design System</li>
            </ul>
          </div>
        </div>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection
        title="Usage Guidelines"
        description="Best practices for using drawers effectively in your applications."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="✅ Use Overlay Drawers For"
            description="Modal-like experiences that require focus"
            background="#f3f9ff"
          >
            <ul style={{ fontSize: '14px', color: '#605e5c', paddingLeft: '20px', margin: 0 }}>
              <li>Settings and configuration panels</li>
              <li>Form dialogs and data entry</li>
              <li>Quick actions and shortcuts</li>
              <li>Details views and property panels</li>
              <li>Temporary content that shouldn't persist</li>
            </ul>
          </ExampleContainer>

          <ExampleContainer
            title="✅ Use Inline Drawers For"
            description="Persistent navigation and tools"
            background="#f3f9ff"
          >
            <ul style={{ fontSize: '14px', color: '#605e5c', paddingLeft: '20px', margin: 0 }}>
              <li>Primary navigation menus</li>
              <li>Filter and search controls</li>
              <li>Tool palettes and property panels</li>
              <li>Context-sensitive help and information</li>
              <li>Content that should remain visible</li>
            </ul>
          </ExampleContainer>

          <ExampleContainer
            title="❌ Avoid"
            description="Common anti-patterns to prevent"
            background="#fff4f4"
          >
            <ul style={{ fontSize: '14px', color: '#605e5c', paddingLeft: '20px', margin: 0 }}>
              <li>Nesting drawers more than 2 levels deep</li>
              <li>Using drawers for primary page content</li>
              <li>Making drawer content too wide on mobile</li>
              <li>Forgetting keyboard navigation support</li>
              <li>Using overlay drawers for persistent navigation</li>
            </ul>
          </ExampleContainer>

          <ExampleContainer
            title="🎯 Size Guidelines"
            description="Choosing the right drawer size"
            background="#f8f9fa"
          >
            <ul style={{ fontSize: '14px', color: '#605e5c', paddingLeft: '20px', margin: 0 }}>
              <li><strong>Small (320px):</strong> Navigation, simple forms</li>
              <li><strong>Medium (592px):</strong> Settings, detailed forms</li>
              <li><strong>Large (940px):</strong> Complex content, dashboards</li>
            </ul>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Implementation */}
      <ComponentSection
        title="Implementation"
        description="Technical details and API reference for the Drawer component."
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
            <pre style={{ margin: 0, color: '#323130' }}>{`<FluentDrawer
  type="overlay" | "inline"
  size="small" | "medium" | "large"
  isOpen={boolean}
  onClose={() => void}
  title="Drawer Title"
  primaryAction={{
    label: "Save",
    onClick: () => void
  }}
  secondaryAction={{
    label: "Cancel", 
    onClick: () => void
  }}
  tertiaryAction={{
    onClick: () => void
  }}
>
  {/* Drawer content */}
</FluentDrawer>`}</pre>
          </div>
          
          <div style={{ marginTop: '16px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Key Features:</h5>
            <ul style={{ fontSize: '14px', color: '#605e5c', paddingLeft: '20px' }}>
              <li>Two types: overlay (modal) and inline (sidebar)</li>
              <li>Three sizes with responsive behavior</li>
              <li>Customizable header with title and actions</li>
              <li>Optional footer with action buttons</li>
              <li>Full accessibility with ARIA support</li>
              <li>Smooth animations with reduced motion support</li>
              <li>TypeScript definitions for type safety</li>
              <li>Fluent 2 Design System compliance</li>
            </ul>
          </div>
        </ExampleContainer>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default DrawerShowcase;
