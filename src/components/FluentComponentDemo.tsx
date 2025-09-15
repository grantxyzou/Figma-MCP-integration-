import React, { useState, useEffect } from 'react';
import { FluentButton } from './fluent/Button';
import { FluentAccordion } from './fluent/Accordion';
import { Card } from './fluent/Card';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid } from './shared/ComponentShowcaseLayout';

// Import showcase components for basic Fluent components only
import ButtonShowcase from './showcases/ButtonShowcase';
import InputShowcase from './showcases/InputShowcase';
import CardShowcase from './showcases/CardShowcase';
import DropdownShowcase from './showcases/DropdownShowcase';
import AccordionShowcase from './showcases/AccordionShowcase';
import BadgeShowcase from './showcases/BadgeShowcase';
import BreadcrumbShowcase from './showcases/BreadcrumbShowcase';
import DataGridShowcase from './showcases/DataGridShowcase';
import DrawerShowcase from './DrawerShowcase';

type ComponentView = 
  | 'overview' 
  | 'button' 
  | 'input' 
  | 'dropdown' 
  | 'accordion' 
  | 'badge' 
  | 'breadcrumb'
  | 'card' 
  | 'datagrid' 
  | 'drawer';

interface FluentComponentDemoProps {
  className?: string;
  initialView?: string;
}

export const FluentComponentDemo: React.FC<FluentComponentDemoProps> = ({ className = '', initialView = 'overview' }) => {
  const [currentView, setCurrentView] = useState<ComponentView>(initialView as ComponentView);

  // Update current view when initialView prop changes
  useEffect(() => {
    setCurrentView(initialView as ComponentView);
  }, [initialView]);

  // Component categories for basic Fluent components only
  const componentCategories = [
    {
      title: 'Form Controls',
      description: 'Interactive form elements for user input',
      icon: '📝',
      components: [
        { 
          key: 'button' as ComponentView, 
          name: 'Button', 
          description: 'Primary interactive element for actions',
          status: 'complete',
          figmaNodeId: 'Multiple nodes'
        },
        { 
          key: 'input' as ComponentView, 
          name: 'Input', 
          description: 'Text input fields with validation',
          status: 'complete',
          figmaNodeId: '8:2580'
        },
        { 
          key: 'dropdown' as ComponentView, 
          name: 'Dropdown', 
          description: 'Selection from a list of options',
          status: 'complete',
          figmaNodeId: 'TBD'
        }
      ]
    },
    {
      title: 'Layout & Content',
      description: 'Components for organizing and displaying content',
      icon: '📦',
      components: [
        { 
          key: 'breadcrumb' as ComponentView, 
          name: 'Breadcrumb', 
          description: 'Navigation component showing hierarchical location',
          status: 'complete',
          figmaNodeId: '133494:14994'
        },
        { 
          key: 'card' as ComponentView, 
          name: 'Card', 
          description: 'Flexible content containers',
          status: 'complete',
          figmaNodeId: 'Multiple variants'
        },
        { 
          key: 'accordion' as ComponentView, 
          name: 'Accordion', 
          description: 'Collapsible content sections',
          status: 'complete',
          figmaNodeId: 'TBD'
        },
        { 
          key: 'drawer' as ComponentView, 
          name: 'Drawer', 
          description: 'Overlay and inline panel component',
          status: 'complete',
          figmaNodeId: '145579:764, 145579:767'
        }
      ]
    },
    {
      title: 'Data & Feedback',
      description: 'Components for displaying data and status',
      icon: '📊',
      components: [
        { 
          key: 'datagrid' as ComponentView, 
          name: 'DataGrid', 
          description: 'Interactive tabular data display',
          status: 'complete',
          figmaNodeId: 'TBD'
        },
        { 
          key: 'badge' as ComponentView, 
          name: 'Badge', 
          description: 'Status indicators and labels',
          status: 'complete',
          figmaNodeId: 'TBD'
        }
      ]
    }
  ];

  // Render individual component showcase
  const renderComponentShowcase = () => {
    switch (currentView) {
      case 'button':
        return <ButtonShowcase onBackToShowcase={() => setCurrentView('overview')} />;
      case 'input':
        return <InputShowcase onBackToShowcase={() => setCurrentView('overview')} />;
      case 'card':
        return <CardShowcase onBackToShowcase={() => setCurrentView('overview')} />;
      case 'dropdown':
        return <DropdownShowcase onBackToShowcase={() => setCurrentView('overview')} />;
      case 'accordion':
        return <AccordionShowcase onBackToShowcase={() => setCurrentView('overview')} />;
      case 'badge':
        return <BadgeShowcase onBackToShowcase={() => setCurrentView('overview')} />;
      case 'breadcrumb':
        return <BreadcrumbShowcase onBackToShowcase={() => setCurrentView('overview')} />;
      case 'datagrid':
        return <DataGridShowcase onBackToShowcase={() => setCurrentView('overview')} />;
      case 'drawer':
        return <DrawerShowcase onBackToShowcase={() => setCurrentView('overview')} />;
      // For any other components that don't have dedicated showcases yet, show a placeholder
      default:
        return (
          <ComponentShowcaseLayout
            title={`${currentView.charAt(0).toUpperCase() + currentView.slice(1)} Component`}
            subtitle="Component showcase"
            description={`Detailed showcase for the ${currentView} component coming soon. This will include interactive examples, usage guidelines, and implementation details.`}
            onBackToShowcase={() => setCurrentView('overview')}
          >
            <ComponentSection
              title="Coming Soon"
              description="This dedicated showcase is being developed with comprehensive examples and documentation."
            >
              <Card
                style="filled"
                title="🚧 Under Development"
                subtitle="Individual component showcase"
                body={`The dedicated ${currentView} component showcase is being created with interactive examples, usage guidelines, accessibility information, and implementation details following Fluent 2 Design System standards.`}
                primaryActionText="Back to Overview"
                showSecondaryAction={false}
                onPrimaryAction={() => setCurrentView('overview')}
              />
            </ComponentSection>
          </ComponentShowcaseLayout>
        );
    }
  };

  // If viewing a specific component, render its showcase
  if (currentView !== 'overview') {
    return renderComponentShowcase();
  }

  // Main overview page
  return (
    <div className={`fluent-component-demo ${className}`} style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0078d4 0%, #106ebe 100%)',
        color: 'white',
        padding: '48px 32px',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: '300', 
          margin: '0 0 16px 0',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          🎨 Fluent Component Demo
        </h1>
        <p style={{ 
          fontSize: '18px', 
          margin: '0 auto', 
          opacity: 0.9,
          maxWidth: '600px'
        }}>
          Explore individual Fluent UI components with interactive examples, usage guidelines, and best practices
        </p>
      </div>

      {/* Main Content */}
      <div style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Quick Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          <Card
            style="filled"
            title="🧩 Components"
            subtitle="Available Components"
            body={`${componentCategories.reduce((acc, cat) => acc + cat.components.length, 0)} Fluent UI components ready to explore`}
            showSecondaryAction={false}
            primaryActionText="Explore All"
            onPrimaryAction={() => {}}
          />
          <Card
            style="filled"
            title="📖 Documentation"
            subtitle="Comprehensive Guides"
            body="Each component includes usage examples, props documentation, and accessibility guidelines"
            showSecondaryAction={false}
            primaryActionText="Learn More"
            onPrimaryAction={() => {}}
          />
          <Card
            style="filled"
            title="🎯 Interactive"
            subtitle="Live Examples"
            body="Try components in real-time with configurable props and see the code behind each example"
            showSecondaryAction={false}
            primaryActionText="Try Now"
            onPrimaryAction={() => {}}
          />
        </div>

        {/* Component Categories */}
        {componentCategories.map((category, categoryIndex) => (
          <div key={category.title} style={{ marginBottom: '48px' }}>
            {/* Category Header */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              marginBottom: '24px',
              padding: '16px 0',
              borderBottom: '2px solid #f0f0f0'
            }}>
              <span style={{ fontSize: '32px' }}>{category.icon}</span>
              <div>
                <h2 style={{ 
                  fontSize: '28px', 
                  fontWeight: '600', 
                  margin: '0 0 4px 0',
                  color: '#323130'
                }}>
                  {category.title}
                </h2>
                <p style={{ 
                  fontSize: '16px', 
                  margin: 0, 
                  color: '#605e5c'
                }}>
                  {category.description}
                </p>
              </div>
            </div>

            {/* Components in Category */}
            <ExampleGrid>
              {category.components.map((component) => (
                <Card
                  key={component.key}
                  style="outline"
                  title={component.name}
                  subtitle={`Figma Node: ${component.figmaNodeId}`}
                  body={component.description}
                  primaryActionText="View Details"
                  secondaryActionText="Quick Demo"
                  onPrimaryAction={() => setCurrentView(component.key)}
                  onSecondaryAction={() => setCurrentView(component.key)}
                  showSecondaryAction={true}
                />
              ))}
            </ExampleGrid>
          </div>
        ))}

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          padding: '48px 0',
          borderTop: '1px solid #edebe9',
          marginTop: '48px'
        }}>
          <p style={{ color: '#605e5c', margin: 0 }}>
            Built with ❤️ using Microsoft Fluent UI Design System
          </p>
        </div>
      </div>
    </div>
  );
};

export default FluentComponentDemo;
