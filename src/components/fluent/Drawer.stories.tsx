import React, { useState } from 'react';
import { FluentDrawer, DrawerHeader, DrawerFooter } from './Drawer';
import { FluentButton } from './Button';

// Demo component for showcasing the Drawer component
const DrawerDemo: React.FC = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlaySize, setOverlaySize] = useState<'small' | 'medium' | 'large'>('small');

  return (
    <div style={{ padding: '20px', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1>Fluent Drawer Component Demo</h1>
      <p>This demonstrates the Drawer component from the Figma MCP integration.</p>

      {/* Overlay Drawer Demo */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Overlay Drawer</h2>
        <p>Overlay drawers appear on top of the content with a backdrop.</p>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ marginRight: '10px' }}>Size:</label>
          <select 
            value={overlaySize} 
            onChange={(e) => setOverlaySize(e.target.value as any)}
            style={{ marginRight: '20px', padding: '4px 8px' }}
          >
            <option value="small">Small (320px)</option>
            <option value="medium">Medium (592px)</option>
            <option value="large">Large (940px)</option>
          </select>
          
          <FluentButton onClick={() => setOverlayOpen(true)}>
            Open {overlaySize.charAt(0).toUpperCase() + overlaySize.slice(1)} Overlay Drawer
          </FluentButton>
        </div>

        <div style={{ 
          padding: '20px', 
          background: '#f3f2f1', 
          borderRadius: '4px',
          minHeight: '200px'
        }}>
          <h3>Main Content</h3>
          <p>This is the main page content. When you open the overlay drawer, it will appear on top of this content with a backdrop.</p>
          <p>The overlay drawer is commonly used for:</p>
          <ul>
            <li>Settings panels</li>
            <li>Form dialogs</li>
            <li>Details views</li>
            <li>Quick actions</li>
          </ul>
        </div>

        <FluentDrawer
          type="overlay"
          size={overlaySize}
          isOpen={overlayOpen}
          onClose={() => setOverlayOpen(false)}
          title={`${overlaySize.charAt(0).toUpperCase() + overlaySize.slice(1)} Drawer`}
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
          <div style={{ padding: '20px' }}>
            <h4>Drawer Content</h4>
            <p>This is the content inside the {overlaySize} overlay drawer.</p>
            
            <div style={{ marginTop: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                Sample Form Field:
              </label>
              <input 
                type="text" 
                placeholder="Enter some text..."
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

            <div style={{ marginTop: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                Description:
              </label>
              <textarea 
                placeholder="Enter a description..."
                rows={4}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #d1d1d1',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontFamily: 'Segoe UI, sans-serif',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ marginTop: '20px' }}>
              <h5>Settings</h5>
              <label style={{ display: 'block', marginBottom: '8px' }}>
                <input type="checkbox" style={{ marginRight: '8px' }} />
                Enable notifications
              </label>
              <label style={{ display: 'block', marginBottom: '8px' }}>
                <input type="checkbox" style={{ marginRight: '8px' }} />
                Auto-save changes
              </label>
              <label style={{ display: 'block', marginBottom: '8px' }}>
                <input type="checkbox" style={{ marginRight: '8px' }} />
                Show advanced options
              </label>
            </div>
          </div>
        </FluentDrawer>
      </section>

      {/* Inline Drawer Demo */}
      <section>
        <h2>Inline Drawer</h2>
        <p>Inline drawers appear alongside the main content as part of the layout.</p>
        
        <div style={{ 
          display: 'flex', 
          height: '500px', 
          border: '1px solid #d1d1d1',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <FluentDrawer
            type="inline"
            size="small"
            title="Settings Panel"
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
              <h4>Configuration</h4>
              <p>This inline drawer appears alongside the main content.</p>
              
              <div style={{ marginTop: '20px' }}>
                <h5>Display Options</h5>
                <label style={{ display: 'block', marginBottom: '8px' }}>
                  <input type="checkbox" style={{ marginRight: '8px' }} defaultChecked />
                  Show line numbers
                </label>
                <label style={{ display: 'block', marginBottom: '8px' }}>
                  <input type="checkbox" style={{ marginRight: '8px' }} />
                  Word wrap
                </label>
                <label style={{ display: 'block', marginBottom: '8px' }}>
                  <input type="checkbox" style={{ marginRight: '8px' }} defaultChecked />
                  Syntax highlighting
                </label>
              </div>

              <div style={{ marginTop: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                  Theme:
                </label>
                <select style={{ width: '100%', padding: '4px 8px' }}>
                  <option>Light</option>
                  <option>Dark</option>
                  <option>High Contrast</option>
                </select>
              </div>
            </div>
          </FluentDrawer>
          
          <div style={{ 
            flex: 1, 
            padding: '20px', 
            background: '#fafafa',
            overflowY: 'auto'
          }}>
            <h3>Main Content Area</h3>
            <p>This is the main content area. The inline drawer appears to the left of this content.</p>
            <p>Unlike overlay drawers, inline drawers are part of the page layout and don't block interaction with the main content.</p>
            
            <h4>Common Use Cases</h4>
            <ul>
              <li><strong>Navigation:</strong> Primary navigation menus</li>
              <li><strong>Tools:</strong> Toolbars and property panels</li>
              <li><strong>Filters:</strong> Search and filter controls</li>
              <li><strong>Settings:</strong> Configuration panels</li>
            </ul>

            <h4>Features</h4>
            <ul>
              <li>Responsive design</li>
              <li>Accessible keyboard navigation</li>
              <li>Customizable header and footer</li>
              <li>Multiple size variants</li>
              <li>Integration with Fluent Design System</li>
            </ul>

            <p>The drawer component follows the Fluent 2 Design System specifications and provides a consistent user experience across applications.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrawerDemo;
