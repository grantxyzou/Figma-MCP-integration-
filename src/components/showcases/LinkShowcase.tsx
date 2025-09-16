import React from 'react';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid } from '../shared/ComponentShowcaseLayout';
import { Link } from '../fluent/Link';

interface LinkShowcaseProps {
  onBackToShowcase: () => void;
}

const LinkShowcase: React.FC<LinkShowcaseProps> = ({ onBackToShowcase }) => {
  return (
    <ComponentShowcaseLayout
      title="Link"
      subtitle="Navigation and external links"
      description="Interactive link component following Microsoft's Fluent 2 Design System with multiple style variants and comprehensive state management. Supports both internal navigation and external links with authentic Figma icons."
      onBackToShowcase={onBackToShowcase}
    >
      <ComponentSection title="Style Variants">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', backgroundColor: '#f9f9f9' }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ minWidth: '80px', fontSize: '12px', color: '#666' }}>Default:</span>
            <Link href="#" variant="default">Learn more about this feature</Link>
          </div>
          
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ minWidth: '80px', fontSize: '12px', color: '#666' }}>Subtle:</span>
            <Link href="#" variant="subtle">View documentation</Link>
          </div>
          
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ minWidth: '80px', fontSize: '12px', color: '#666' }}>OnBrand:</span>
            <Link href="#" variant="onbrand">Get started now</Link>
          </div>
          
          <div style={{ backgroundColor: '#333', padding: '16px', borderRadius: '4px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <span style={{ minWidth: '80px', fontSize: '12px', color: '#ccc' }}>Inverted:</span>
              <Link href="#" variant="inverted">View on dark background</Link>
            </div>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Interactive States">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ minWidth: '100px', fontSize: '12px', color: '#666' }}>Normal:</span>
            <Link href="#" variant="default">Hover over me</Link>
          </div>
          
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ minWidth: '100px', fontSize: '12px', color: '#666' }}>Visited:</span>
            <Link href="#" variant="default" visited>Already visited link</Link>
          </div>
          
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ minWidth: '100px', fontSize: '12px', color: '#666' }}>Disabled:</span>
            <Link href="#" variant="default" disabled>Disabled link</Link>
          </div>
          
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ minWidth: '100px', fontSize: '12px', color: '#666' }}>Focus:</span>
            <Link href="#" variant="default">Tab to focus me</Link>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Icon Options">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ minWidth: '120px', fontSize: '12px', color: '#666' }}>With Icon:</span>
            <Link href="https://microsoft.com" external showIcon>External website</Link>
          </div>
          
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ minWidth: '120px', fontSize: '12px', color: '#666' }}>Without Icon:</span>
            <Link href="#" showIcon={false}>Internal link without icon</Link>
          </div>
          
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ minWidth: '120px', fontSize: '12px', color: '#666' }}>Button Link:</span>
            <Link onClick={() => alert('Link clicked!')} showIcon>Clickable action</Link>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Real-world Examples">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '16px' }}>
          {/* Navigation Menu */}
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Navigation Menu</h4>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link href="#" variant="subtle">Home</Link>
              <Link href="#" variant="subtle">Products</Link>
              <Link href="#" variant="subtle">Services</Link>
              <Link href="#" variant="subtle">About</Link>
              <Link href="#" variant="subtle">Contact</Link>
            </div>
          </div>

          {/* Help Documentation */}
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Help & Documentation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div>
                <span>Need help? </span>
                <Link href="#" variant="default">Read our documentation</Link>
                <span> or </span>
                <Link href="#" variant="default">contact support</Link>
              </div>
              <div>
                <span>For developers: </span>
                <Link href="https://github.com" external variant="default">View on GitHub</Link>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Footer Links</h4>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="#" variant="subtle" showIcon={false}>Privacy Policy</Link>
              <Link href="#" variant="subtle" showIcon={false}>Terms of Service</Link>
              <Link href="#" variant="subtle" showIcon={false}>Accessibility</Link>
              <Link href="#" variant="subtle" showIcon={false}>Cookies</Link>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{ padding: '16px', backgroundColor: '#f0f8ff', borderRadius: '4px' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Get Started</h4>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>
              Ready to begin? 
              <Link href="#" variant="onbrand" style={{ marginLeft: '4px' }}>Start your free trial</Link>
              <span> or </span>
              <Link href="#" variant="default">learn more about our features</Link>
            </p>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Accessibility Features">
        <div style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.5' }}>
            <li>Keyboard navigation with Tab and Enter/Space</li>
            <li>Focus indicators with 2px blue outline</li>
            <li>Hover effects with underlines and color changes</li>
            <li>Proper ARIA attributes for external links</li>
            <li>Screen reader compatible with semantic HTML</li>
            <li>Disabled state prevents interaction</li>
          </ul>
        </div>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default LinkShowcase;