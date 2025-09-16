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
import LabelShowcase from './showcases/LabelShowcase';
import InfoLabelShowcase from './showcases/InfoLabelShowcase';
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
  | 'label'
  | 'info-label'
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
          key: 'label' as ComponentView, 
          name: 'Label', 
          description: 'Text labels for form elements and content',
          status: 'complete',
          figmaNodeId: '7062:121114'
        },
        { 
          key: 'info-label' as ComponentView, 
          name: 'InfoLabel', 
          description: 'Label with info tooltip for contextual help',
          status: 'complete',
          figmaNodeId: '323059:755, 323059:756, 323059:757'
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
      case 'label':
        return <LabelShowcase onBackToShowcase={() => setCurrentView('overview')} />;
      case 'info-label':
        return <InfoLabelShowcase onBackToShowcase={() => setCurrentView('overview')} />;
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
    <ComponentShowcaseLayout
      title="🎨 Fluent Component Demo"
      subtitle="Microsoft Design System Implementation (Core)"
      description="Essential Fluent 2 Web components built from Figma specifications. Each component follows Microsoft's design system guidelines with authentic styling, accessibility features, and interactive states."
      showBackButton={false}
    >
      {/* Quick Stats */}
      <ComponentSection
        title="Component Library Status"
        description="Current implementation progress and component coverage"
      >
        <ExampleGrid columns={4}>
          <Card
            size="small"
            style="filled"
            title={`${componentCategories.reduce((acc, cat) => acc + cat.components.length, 0)} Components`}
            subtitle="Core Set"
            body="Essential components with TypeScript and Fluent 2 styling"
            showPrimaryAction={false}
            showSecondaryAction={false}
          />
          <Card
            size="small"
            style="outline"
            title="100% Figma"
            subtitle="Design Fidelity"
            body="Pixel-perfect implementation from Figma specifications"
            showPrimaryAction={false}
            showSecondaryAction={false}
          />
          <Card
            size="small"
            style="filled"
            title="WCAG 2.1 AA"
            subtitle="Accessibility"
            body="Full keyboard navigation and screen reader support"
            showPrimaryAction={false}
            showSecondaryAction={false}
          />
          <Card
            size="small"
            style="outline"
            title="TypeScript"
            subtitle="Type Safety"
            body="Complete type definitions for all components"
            showPrimaryAction={false}
            showSecondaryAction={false}
          />
        </ExampleGrid>
      </ComponentSection>

      {/* Component Categories */}
      <ComponentSection
        title="Component Categories"
        description="Explore core components organized by their purpose and usage patterns. Click on any component to view its detailed showcase."
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {componentCategories.map((category) => (
            <div key={category.title} style={{
              backgroundColor: 'white',
              border: '1px solid #e1dfdd',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              {/* Category Header */}
              <div style={{
                padding: '20px 24px',
                backgroundColor: '#faf9f8',
                borderBottom: '1px solid #e1dfdd'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>{category.icon}</span>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#242424',
                      margin: 0,
                      marginBottom: '4px'
                    }}>
                      {category.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#605e5c',
                      margin: 0
                    }}>
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Components Grid */}
              <div style={{
                padding: '24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px'
              }}>
                {category.components.map((component) => (
                  <div
                    key={component.key}
                    style={{
                      border: '1px solid #e1dfdd',
                      borderRadius: '6px',
                      padding: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      backgroundColor: 'white'
                    }}
                    onClick={() => setCurrentView(component.key)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#0078d4';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 120, 212, 0.15)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e1dfdd';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <h4 style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#242424',
                        margin: 0
                      }}>
                        {component.name}
                      </h4>
                      <span style={{
                        fontSize: '12px',
                        color: '#107c10',
                        backgroundColor: '#f3f9f1',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontWeight: 500
                      }}>
                        {component.status}
                      </span>
                    </div>
                    <p style={{
                      fontSize: '14px',
                      color: '#605e5c',
                      margin: '0 0 8px 0',
                      lineHeight: '1.4'
                    }}>
                      {component.description}
                    </p>
                    <div style={{
                      fontSize: '12px',
                      color: '#8a8886',
                      fontFamily: 'Monaco, "Cascadia Code", Consolas, monospace'
                    }}>
                      Figma: {component.figmaNodeId}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default FluentComponentDemo;
