import React, { useState } from 'react';
import { FluentBadge } from '../fluent/Badge';
import { FluentButton } from '../fluent/Button';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid, ExampleContainer } from '../shared/ComponentShowcaseLayout';

interface BadgeShowcaseProps {
  onBackToShowcase?: () => void;
}

export const BadgeShowcase: React.FC<BadgeShowcaseProps> = ({ onBackToShowcase }) => {
  const [notificationCount, setNotificationCount] = useState(3);
  const [showAllBadges, setShowAllBadges] = useState(false);
  
  return (
    <ComponentShowcaseLayout
      title="Badge Component"
      subtitle="Status indicators and counters"
      description="Badges are small status descriptors for UI elements. They provide quick recognition of an item's status or properties, such as notifications, importance levels, or categories."
      onBackToShowcase={onBackToShowcase}
    >
      {/* Basic Usage */}
      <ComponentSection
        title="Basic Usage"
        description="Standard badge implementations with different appearances and sizes."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Standard Badges"
            description="Basic badge styles for common use cases"
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <FluentBadge appearance="filled" color="brand">
                New
              </FluentBadge>
              <FluentBadge appearance="filled" color="success">
                Active
              </FluentBadge>
              <FluentBadge appearance="filled" color="warning">
                Pending
              </FluentBadge>
              <FluentBadge appearance="filled" color="danger">
                Error
              </FluentBadge>
              <FluentBadge appearance="filled" color="important">
                Critical
              </FluentBadge>
              <FluentBadge appearance="filled" color="informative">
                Info
              </FluentBadge>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Outline Badges"
            description="Subtle badges with outlined appearance"
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <FluentBadge appearance="outline" color="brand">
                Beta
              </FluentBadge>
              <FluentBadge appearance="outline" color="success">
                Verified
              </FluentBadge>
              <FluentBadge appearance="outline" color="warning">
                Review
              </FluentBadge>
              <FluentBadge appearance="outline" color="danger">
                Blocked
              </FluentBadge>
              <FluentBadge appearance="outline" color="important">
                Urgent
              </FluentBadge>
              <FluentBadge appearance="outline" color="informative">
                Draft
              </FluentBadge>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Tint Badges"
            description="Soft badges with background tint"
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <FluentBadge appearance="tint" color="brand">
                Featured
              </FluentBadge>
              <FluentBadge appearance="tint" color="success">
                Complete
              </FluentBadge>
              <FluentBadge appearance="tint" color="warning">
                In Progress
              </FluentBadge>
              <FluentBadge appearance="tint" color="danger">
                Failed
              </FluentBadge>
              <FluentBadge appearance="tint" color="important">
                Priority
              </FluentBadge>
              <FluentBadge appearance="tint" color="informative">
                Note
              </FluentBadge>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Size Variants"
            description="Different sizes for various contexts"
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <FluentBadge appearance="filled" color="brand" size="tiny">
                Tiny
              </FluentBadge>
              <FluentBadge appearance="filled" color="brand" size="extra-small">
                XS
              </FluentBadge>
              <FluentBadge appearance="filled" color="brand" size="small">
                Small
              </FluentBadge>
              <FluentBadge appearance="filled" color="brand" size="medium">
                Medium
              </FluentBadge>
              <FluentBadge appearance="filled" color="brand" size="large">
                Large
              </FluentBadge>
              <FluentBadge appearance="filled" color="brand" size="extra-large">
                Extra Large
              </FluentBadge>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Presence Badges */}
      <ComponentSection
        title="Presence Badges"
        description="Special badges that indicate user or system status."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="User Status"
            description="Presence indicators for user availability"
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#d1d1d1',
                  position: 'relative'
                }}>
                  <FluentBadge 
                    appearance="filled" 
                    color="success" 
                    size="small"
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      right: '-2px'
                    }}
                  >
                    •
                  </FluentBadge>
                </div>
                <span style={{ fontSize: '14px' }}>Available</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#d1d1d1',
                  position: 'relative'
                }}>
                  <FluentBadge 
                    appearance="filled" 
                    color="warning" 
                    size="small"
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      right: '-2px'
                    }}
                  >
                    •
                  </FluentBadge>
                </div>
                <span style={{ fontSize: '14px' }}>Away</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#d1d1d1',
                  position: 'relative'
                }}>
                  <FluentBadge 
                    appearance="filled" 
                    color="danger" 
                    size="small"
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      right: '-2px'
                    }}
                  >
                    •
                  </FluentBadge>
                </div>
                <span style={{ fontSize: '14px' }}>Busy</span>
              </div>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Notification Badges"
            description="Count indicators for notifications and updates"
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <FluentButton size="Medium (Default)" style="Primary">
                  Messages
                </FluentButton>
                <FluentBadge 
                  appearance="filled" 
                  color="danger" 
                  size="small"
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-6px'
                  }}
                >
                  {notificationCount}
                </FluentBadge>
              </div>
              
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <FluentButton size="Medium (Default)" style="Secondary (Default)">
                  Updates
                </FluentButton>
                <FluentBadge 
                  appearance="filled" 
                  color="brand" 
                  size="small"
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-6px'
                  }}
                >
                  12
                </FluentBadge>
              </div>
              
              <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                <FluentButton 
                  size="Small" 
                  style="Outline"
                  onClick={() => setNotificationCount(prev => Math.max(0, prev - 1))}
                >
                  -1
                </FluentButton>
                <FluentButton 
                  size="Small" 
                  style="Outline"
                  onClick={() => setNotificationCount(prev => prev + 1)}
                >
                  +1
                </FluentButton>
                <FluentButton 
                  size="Small" 
                  style="Outline"
                  onClick={() => setNotificationCount(0)}
                >
                  Clear
                </FluentButton>
              </div>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Real-world Examples */}
      <ComponentSection
        title="Real-world Examples"
        description="Common use cases and patterns for badge components in applications."
      >
        <ExampleGrid columns={1}>
          <ExampleContainer
            title="Product Catalog with Status Badges"
            description="E-commerce product listing with various status indicators"
          >
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px'
            }}>
              {[
                { name: 'MacBook Pro 16"', price: '$2,499', status: 'New', statusColor: 'brand' as const, inStock: true },
                { name: 'iPad Air', price: '$599', status: 'Sale', statusColor: 'danger' as const, inStock: true },
                { name: 'iPhone 15 Pro', price: '$999', status: 'Featured', statusColor: 'important' as const, inStock: false },
                { name: 'Apple Watch Series 9', price: '$399', status: 'Popular', statusColor: 'success' as const, inStock: true }
              ].map((product, index) => (
                <div key={index} style={{
                  border: '1px solid #e1e1e1',
                  borderRadius: '8px',
                  padding: '16px',
                  position: 'relative'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '8px'
                  }}>
                    <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
                      {product.name}
                    </h4>
                    <FluentBadge appearance="filled" color={product.statusColor} size="small">
                      {product.status}
                    </FluentBadge>
                  </div>
                  
                  <p style={{ 
                    margin: '0 0 12px 0', 
                    fontSize: '18px', 
                    fontWeight: 600,
                    color: '#107c10'
                  }}>
                    {product.price}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <FluentBadge 
                      appearance={product.inStock ? "tint" : "outline"} 
                      color={product.inStock ? "success" : "danger"} 
                      size="small"
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </FluentBadge>
                    
                    {product.inStock && (
                      <FluentButton size="Small" style="Primary">
                        Add to Cart
                      </FluentButton>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Badge Combinations */}
      <ComponentSection
        title="Badge Combinations"
        description="Examples of using multiple badges together effectively."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Task Management"
            description="Project tasks with priority and status badges"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { task: 'Update user authentication', priority: 'High', status: 'In Progress' },
                { task: 'Fix mobile responsive design', priority: 'Medium', status: 'Pending' },
                { task: 'Optimize database queries', priority: 'Low', status: 'Complete' },
                { task: 'Add error handling', priority: 'Critical', status: 'Blocked' }
              ].map((item, index) => (
                <div key={index} style={{
                  padding: '12px',
                  border: '1px solid #e1e1e1',
                  borderRadius: '6px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '14px', flex: 1 }}>{item.task}</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <FluentBadge 
                      appearance="outline" 
                      color={
                        item.priority === 'Critical' ? 'danger' :
                        item.priority === 'High' ? 'important' :
                        item.priority === 'Medium' ? 'warning' : 'informative'
                      }
                      size="small"
                    >
                      {item.priority}
                    </FluentBadge>
                    <FluentBadge 
                      appearance="tint" 
                      color={
                        item.status === 'Complete' ? 'success' :
                        item.status === 'In Progress' ? 'brand' :
                        item.status === 'Blocked' ? 'danger' : 'warning'
                      }
                      size="small"
                    >
                      {item.status}
                    </FluentBadge>
                  </div>
                </div>
              ))}
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="User Profile Tags"
            description="Skill tags and role indicators"
          >
            <div style={{ 
              padding: '16px',
              border: '1px solid #e1e1e1',
              borderRadius: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#d1d1d1'
                }}></div>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '16px' }}>Sarah Johnson</h4>
                  <FluentBadge appearance="filled" color="brand" size="small">
                    Team Lead
                  </FluentBadge>
                </div>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#605e5c' }}>Skills</h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <FluentBadge appearance="tint" color="informative" size="small">React</FluentBadge>
                  <FluentBadge appearance="tint" color="informative" size="small">TypeScript</FluentBadge>
                  <FluentBadge appearance="tint" color="informative" size="small">Node.js</FluentBadge>
                  <FluentBadge appearance="tint" color="informative" size="small">Azure</FluentBadge>
                  {showAllBadges && (
                    <>
                      <FluentBadge appearance="tint" color="informative" size="small">GraphQL</FluentBadge>
                      <FluentBadge appearance="tint" color="informative" size="small">Docker</FluentBadge>
                    </>
                  )}
                </div>
                <FluentButton 
                  size="Small" 
                  style="Subtle"
                  onClick={() => setShowAllBadges(!showAllBadges)}
                >
                  {showAllBadges ? 'Show Less' : 'Show More'}
                </FluentButton>
              </div>
              
              <div>
                <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#605e5c' }}>Certifications</h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <FluentBadge appearance="outline" color="success" size="small">Azure Certified</FluentBadge>
                  <FluentBadge appearance="outline" color="success" size="small">Scrum Master</FluentBadge>
                </div>
              </div>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection
        title="Usage Guidelines"
        description="Best practices for using badges effectively in your applications."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="✅ Do - Use Consistent Colors"
            description="Maintain consistent color meanings across your application"
            background="#f3f9ff"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ fontSize: '14px', marginBottom: '8px' }}>
                <strong>Status Indicators:</strong>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <FluentBadge appearance="filled" color="success" size="small">Success</FluentBadge>
                <FluentBadge appearance="filled" color="warning" size="small">Warning</FluentBadge>
                <FluentBadge appearance="filled" color="danger" size="small">Error</FluentBadge>
                <FluentBadge appearance="filled" color="informative" size="small">Info</FluentBadge>
              </div>
              <p style={{ fontSize: '12px', color: '#605e5c', margin: '8px 0 0 0' }}>
                Green for success, yellow for warnings, red for errors, blue for information
              </p>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="❌ Don't - Overuse Bright Colors"
            description="Avoid too many high-contrast badges in one view"
            background="#fff4f4"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <FluentBadge appearance="filled" color="danger" size="small">Critical</FluentBadge>
                <FluentBadge appearance="filled" color="important" size="small">Important</FluentBadge>
                <FluentBadge appearance="filled" color="warning" size="small">Alert</FluentBadge>
                <FluentBadge appearance="filled" color="brand" size="small">Featured</FluentBadge>
                <FluentBadge appearance="filled" color="success" size="small">New</FluentBadge>
              </div>
              <p style={{ fontSize: '12px', color: '#d83b01', margin: '8px 0 0 0', fontStyle: 'italic' }}>
                Too many bright badges create visual noise and reduce their effectiveness
              </p>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="✅ Do - Use Appropriate Sizes"
            description="Match badge size to content hierarchy"
            background="#f3f9ff"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3 style={{ margin: 0, fontSize: '18px' }}>Main Heading</h3>
                <FluentBadge appearance="filled" color="brand" size="medium">New</FluentBadge>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '14px' }}>List item</span>
                <FluentBadge appearance="tint" color="informative" size="small">Tag</FluentBadge>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ fontSize: '12px' }}>Small text</span>
                <FluentBadge appearance="outline" color="informative" size="tiny">Label</FluentBadge>
              </div>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="❌ Don't - Use Long Text"
            description="Keep badge text short and concise"
            background="#fff4f4"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FluentBadge appearance="filled" color="brand" size="small">
                This badge text is way too long for a badge
              </FluentBadge>
              <p style={{ fontSize: '12px', color: '#d83b01', margin: '8px 0 0 0', fontStyle: 'italic' }}>
                Long text makes badges hard to scan and breaks layout
              </p>
              <div style={{ marginTop: '8px' }}>
                <strong style={{ fontSize: '12px' }}>Better:</strong>
                <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                  <FluentBadge appearance="filled" color="brand" size="small">New</FluentBadge>
                  <FluentBadge appearance="tint" color="informative" size="small">Premium</FluentBadge>
                </div>
              </div>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Implementation */}
      <ComponentSection
        title="Implementation"
        description="Technical details and API reference for the Badge component."
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
            <pre style={{ margin: 0, color: '#323130' }}>{`<FluentBadge
  appearance="filled" | "outline" | "tint"
  color="brand" | "danger" | "important" | "informative" | "severe" | "subtle" | "success" | "warning"
  size="tiny" | "extra-small" | "small" | "medium" | "large" | "extra-large"
  shape="rounded" | "square"
>
  Badge Text
</FluentBadge>`}</pre>
          </div>
          
          <div style={{ marginTop: '16px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Key Features:</h5>
            <ul style={{ fontSize: '14px', color: '#605e5c', paddingLeft: '20px' }}>
              <li>Three appearance styles: filled, outline, and tint</li>
              <li>Eight semantic color options for different meanings</li>
              <li>Six size variants from tiny to extra-large</li>
              <li>Support for rounded and square shapes</li>
              <li>Perfect for status indicators and labels</li>
              <li>Accessible with proper color contrast</li>
              <li>TypeScript support for type safety</li>
              <li>Fluent 2 Design System compliance</li>
              <li>Optimized for readability at all sizes</li>
            </ul>
          </div>
        </ExampleContainer>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default BadgeShowcase;
