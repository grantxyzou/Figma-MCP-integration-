import React from 'react';
import { FluentButton } from '../fluent/Button';

interface ComponentShowcaseLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
  onBackToShowcase?: () => void;
  showBackButton?: boolean;
}

// Optimized for MacBook Pro 16" with comfortable padding
// Following Fluent 2 Design System guidelines for spacing and typography
export const ComponentShowcaseLayout: React.FC<ComponentShowcaseLayoutProps> = ({
  title,
  subtitle,
  description,
  children,
  onBackToShowcase,
  showBackButton = true
}) => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#faf9f8', // Fluent 2 neutral background
      fontFamily: 'Segoe UI, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      {/* Header Section */}
      <div style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e1dfdd',
        padding: '24px 0'
      }}>
        <div style={{
          maxWidth: '1200px', // Optimized for MacBook Pro 16"
          margin: '0 auto',
          padding: '0 32px'
        }}>
          {showBackButton && onBackToShowcase && (
            <div style={{ marginBottom: '16px' }}>
              <FluentButton
                style="Subtle"
                size="Medium (Default)"
                onClick={onBackToShowcase}
              >
                ← Back to Fluent Demo
              </FluentButton>
            </div>
          )}
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ flex: 1 }}>
              <h1 style={{
                fontSize: '32px',
                fontWeight: 600,
                color: '#242424',
                marginBottom: '8px',
                lineHeight: '1.25'
              }}>
                {title}
              </h1>
              <p style={{
                fontSize: '18px',
                color: '#605e5c',
                marginBottom: '12px',
                fontWeight: 400
              }}>
                {subtitle}
              </p>
              <p style={{
                fontSize: '16px',
                color: '#605e5c',
                lineHeight: '1.5',
                maxWidth: '800px',
                marginBottom: '8px'
              }}>
                {description}
              </p>
              
              {/* Navigation hint */}
              <p style={{
                fontSize: '14px',
                lineHeight: '20px',
                color: '#8a8886',
                margin: 0,
                fontStyle: 'italic',
                maxWidth: '800px'
              }}>
                💡 Use trackpad swipes, browser back/forward, or ⌘←/⌘→ to navigate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div style={{
        maxWidth: '1200px', // Consistent with header
        margin: '0 auto',
        padding: '32px',
        paddingBottom: '100px' // Space for floating navigation
      }}>
        {children}
      </div>
    </div>
  );
};

// Component section wrapper for consistent styling
export const ComponentSection: React.FC<{
  title: string;
  description?: string;
  children: React.ReactNode;
  marginBottom?: string;
}> = ({ title, description, children, marginBottom = '48px' }) => {
  return (
    <section style={{ marginBottom }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#242424',
          marginBottom: '8px'
        }}>
          {title}
        </h2>
        {description && (
          <p style={{
            fontSize: '16px',
            color: '#605e5c',
            lineHeight: '1.5'
          }}>
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
};

// Grid layout for examples
export const ExampleGrid: React.FC<{
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: string;
}> = ({ children, columns = 2, gap = '24px' }) => {
  const getGridColumns = () => {
    switch (columns) {
      case 1: return '1fr';
      case 2: return 'repeat(auto-fit, minmax(400px, 1fr))';
      case 3: return 'repeat(auto-fit, minmax(300px, 1fr))';
      case 4: return 'repeat(auto-fit, minmax(250px, 1fr))';
      default: return 'repeat(auto-fit, minmax(400px, 1fr))';
    }
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: getGridColumns(),
      gap,
      alignItems: 'start'
    }}>
      {children}
    </div>
  );
};

// Individual example container
export const ExampleContainer: React.FC<{
  title: string;
  description?: string;
  children: React.ReactNode;
  background?: string;
}> = ({ title, description, children, background = 'white' }) => {
  return (
    <div style={{
      backgroundColor: background,
      border: '1px solid #e1dfdd',
      borderRadius: '8px',
      padding: '24px',
      transition: 'box-shadow 0.2s ease',
    }}>
      <div style={{ marginBottom: '16px' }}>
        <h4 style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#242424',
          marginBottom: '4px'
        }}>
          {title}
        </h4>
        {description && (
          <p style={{
            fontSize: '14px',
            color: '#605e5c',
            margin: 0
          }}>
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
};

export default ComponentShowcaseLayout;
