import React, { useState } from 'react';
import { Breadcrumb, type BreadcrumbItem } from '../fluent/Breadcrumb';
import { 
  ComponentShowcaseLayout, 
  ComponentSection, 
  ExampleGrid, 
  ExampleContainer 
} from '../shared/ComponentShowcaseLayout';

export const BreadcrumbShowcase: React.FC<{
  onBackToShowcase?: () => void;
}> = ({ onBackToShowcase }) => {
  const [currentPath, setCurrentPath] = useState('/home/documents/projects');

  // Sample breadcrumb data
  const basicItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/home' },
    { label: 'Documents', href: '/home/documents' },
    { label: 'Projects', current: true }
  ];

  const longPathItems: BreadcrumbItem[] = [
    { label: 'Root', href: '/' },
    { label: 'Users', href: '/users' },
    { label: 'John', href: '/users/john' },
    { label: 'Documents', href: '/users/john/documents' },
    { label: 'Work', href: '/users/john/documents/work' },
    { label: 'Projects', href: '/users/john/documents/work/projects' },
    { label: 'React App', current: true }
  ];

  const clickableItems: BreadcrumbItem[] = [
    { label: 'Dashboard', onClick: () => alert('Navigated to Dashboard') },
    { label: 'Settings', onClick: () => alert('Navigated to Settings') },
    { label: 'Profile', current: true }
  ];

  const mixedItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/home' },
    { label: 'Disabled Item', disabled: true },
    { label: 'Active Section', onClick: () => alert('Section clicked') },
    { label: 'Current Page', current: true }
  ];

  const handleItemClick = (item: BreadcrumbItem, index: number) => {
    console.log('Breadcrumb item clicked:', item, 'at index:', index);
  };

  return (
    <ComponentShowcaseLayout
      title="Breadcrumb"
      subtitle="Navigation Component"
      description="Navigation component that shows the current page's location within a hierarchical structure. Perfect for file systems, website navigation, and any multi-level content organization."
      onBackToShowcase={onBackToShowcase}
    >
      <ComponentSection
        title="Basic Examples"
        description="Standard breadcrumb navigation patterns"
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Basic Breadcrumb"
            description="Standard breadcrumb navigation with three levels"
          >
            <Breadcrumb 
              items={basicItems}
              onItemClick={handleItemClick}
            />
          </ExampleContainer>

          <ExampleContainer
            title="Interactive Examples"
            description="Breadcrumbs with onClick handlers instead of href links"
          >
            <Breadcrumb 
              items={clickableItems}
              onItemClick={handleItemClick}
            />
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      <ComponentSection
        title="Size Variants"
        description="Different sizes: Small, Medium (default), and Large"
      >
        <ExampleGrid columns={1}>
          <ExampleContainer
            title="All Size Variants"
            description="Comparison of all available sizes"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#605e5c' }}>Small</h4>
                <Breadcrumb items={basicItems} size="Small" />
              </div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#605e5c' }}>Medium (Default)</h4>
                <Breadcrumb items={basicItems} size="Medium" />
              </div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#605e5c' }}>Large</h4>
                <Breadcrumb items={basicItems} size="Large" />
              </div>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      <ComponentSection
        title="Separator Variants"
        description="Different separators: Chevron (default) and Slash"
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Chevron Separator"
            description="Default arrow-style separator"
          >
            <Breadcrumb items={basicItems} separator="chevron" />
          </ExampleContainer>

          <ExampleContainer
            title="Slash Separator"
            description="Simple slash separator"
          >
            <Breadcrumb items={basicItems} separator="slash" />
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      <ComponentSection
        title="Advanced Features"
        description="Complex scenarios and edge cases"
      >
        <ExampleGrid columns={1}>
          <ExampleContainer
            title="Long Path with Truncation"
            description="Automatically truncates long paths with ellipsis"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#605e5c' }}>Full Path (7 items)</h4>
                <Breadcrumb items={longPathItems} />
              </div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#605e5c' }}>Truncated (max 3 items)</h4>
                <Breadcrumb items={longPathItems} maxItems={3} />
              </div>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Mixed States"
            description="Combination of links, buttons, disabled items, and current page"
          >
            <Breadcrumb 
              items={mixedItems}
              onItemClick={handleItemClick}
            />
          </ExampleContainer>

          <ExampleContainer
            title="Real-world File System Navigation"
            description="Interactive file system breadcrumb with state updates"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ fontSize: '14px', color: '#605e5c', padding: '8px 12px', backgroundColor: '#f3f2f1', borderRadius: '4px' }}>
                Current path: <code style={{ backgroundColor: '#ffffff', padding: '2px 4px', borderRadius: '3px' }}>{currentPath}</code>
              </div>
              <Breadcrumb 
                items={[
                  { 
                    label: 'Home', 
                    onClick: () => setCurrentPath('/home')
                  },
                  { 
                    label: 'Documents', 
                    onClick: () => setCurrentPath('/home/documents')
                  },
                  { 
                    label: 'Projects', 
                    current: true 
                  }
                ]}
                onItemClick={handleItemClick}
              />
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      <ComponentSection
        title="API Documentation"
        description="Component properties and interfaces"
      >
        <ExampleGrid columns={1}>
          <ExampleContainer
            title="Breadcrumb Props"
            description="Main component properties"
          >
            <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e1dfdd' }}>
                    <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600 }}>Prop</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600 }}>Type</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600 }}>Default</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600 }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #f3f2f1' }}>
                    <td style={{ padding: '8px 12px', fontFamily: 'monospace', backgroundColor: '#f9f8f7' }}>items</td>
                    <td style={{ padding: '8px 12px' }}>BreadcrumbItem[]</td>
                    <td style={{ padding: '8px 12px', color: '#605e5c' }}>required</td>
                    <td style={{ padding: '8px 12px' }}>Array of breadcrumb items to display</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f3f2f1' }}>
                    <td style={{ padding: '8px 12px', fontFamily: 'monospace', backgroundColor: '#f9f8f7' }}>size</td>
                    <td style={{ padding: '8px 12px' }}>"Small" | "Medium" | "Large"</td>
                    <td style={{ padding: '8px 12px', color: '#605e5c' }}>"Medium"</td>
                    <td style={{ padding: '8px 12px' }}>Size variant of the breadcrumb</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f3f2f1' }}>
                    <td style={{ padding: '8px 12px', fontFamily: 'monospace', backgroundColor: '#f9f8f7' }}>separator</td>
                    <td style={{ padding: '8px 12px' }}>"chevron" | "slash"</td>
                    <td style={{ padding: '8px 12px', color: '#605e5c' }}>"chevron"</td>
                    <td style={{ padding: '8px 12px' }}>Type of separator between items</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f3f2f1' }}>
                    <td style={{ padding: '8px 12px', fontFamily: 'monospace', backgroundColor: '#f9f8f7' }}>maxItems</td>
                    <td style={{ padding: '8px 12px' }}>number</td>
                    <td style={{ padding: '8px 12px', color: '#605e5c' }}>undefined</td>
                    <td style={{ padding: '8px 12px' }}>Maximum items before truncating with ellipsis</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f3f2f1' }}>
                    <td style={{ padding: '8px 12px', fontFamily: 'monospace', backgroundColor: '#f9f8f7' }}>onItemClick</td>
                    <td style={{ padding: '8px 12px' }}>(item, index) =&gt; void</td>
                    <td style={{ padding: '8px 12px', color: '#605e5c' }}>undefined</td>
                    <td style={{ padding: '8px 12px' }}>Callback fired when item is clicked</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="BreadcrumbItem Interface"
            description="Properties for individual breadcrumb items"
          >
            <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e1dfdd' }}>
                    <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600 }}>Property</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600 }}>Type</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600 }}>Required</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600 }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #f3f2f1' }}>
                    <td style={{ padding: '8px 12px', fontFamily: 'monospace', backgroundColor: '#f9f8f7' }}>label</td>
                    <td style={{ padding: '8px 12px' }}>string</td>
                    <td style={{ padding: '8px 12px', color: '#d13438' }}>Yes</td>
                    <td style={{ padding: '8px 12px' }}>Display text for the breadcrumb item</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f3f2f1' }}>
                    <td style={{ padding: '8px 12px', fontFamily: 'monospace', backgroundColor: '#f9f8f7' }}>href</td>
                    <td style={{ padding: '8px 12px' }}>string</td>
                    <td style={{ padding: '8px 12px', color: '#605e5c' }}>No</td>
                    <td style={{ padding: '8px 12px' }}>URL to navigate to when clicked</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f3f2f1' }}>
                    <td style={{ padding: '8px 12px', fontFamily: 'monospace', backgroundColor: '#f9f8f7' }}>current</td>
                    <td style={{ padding: '8px 12px' }}>boolean</td>
                    <td style={{ padding: '8px 12px', color: '#605e5c' }}>No</td>
                    <td style={{ padding: '8px 12px' }}>Whether this item represents the current page</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f3f2f1' }}>
                    <td style={{ padding: '8px 12px', fontFamily: 'monospace', backgroundColor: '#f9f8f7' }}>disabled</td>
                    <td style={{ padding: '8px 12px' }}>boolean</td>
                    <td style={{ padding: '8px 12px', color: '#605e5c' }}>No</td>
                    <td style={{ padding: '8px 12px' }}>Whether the item is disabled</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 12px', fontFamily: 'monospace', backgroundColor: '#f9f8f7' }}>onClick</td>
                    <td style={{ padding: '8px 12px' }}>() =&gt; void</td>
                    <td style={{ padding: '8px 12px', color: '#605e5c' }}>No</td>
                    <td style={{ padding: '8px 12px' }}>Click handler for the item</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default BreadcrumbShowcase;