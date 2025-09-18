import React, { useState, useEffect } from 'react';
import { FluentButton } from './fluent/Button';
import { Card } from './fluent/Card';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid } from './shared/ComponentShowcaseLayout';

// Import showcase components for complex applications
import AzureStorageConfigurationShowcase from './showcases/AzureStorageConfigurationShowcase';
import StorageConfigurationShowcase from './showcases/StorageConfigurationShowcase';
import CleanStorageConfigurationShowcase from './showcases/CleanStorageConfigurationShowcase';
import StorageConfigurationModularShowcase from './showcases/StorageConfigurationModularShowcase';

// Import actual component demos
import AzureAssignmentForm from './AzureAssignmentForm';
import AzureStorageAssignmentForm from './AzureStorageAssignmentForm';
import SnackSafeWebsite from './SnackSafeWebsite';

type PlaygroundView = 
  | 'overview' 
  | 'azure-storage-config'
  | 'clean-storage-config'
  | 'storage-configuration'
  | 'modular-storage-config'
  | 'azure-assignment-form'
  | 'storage-assignment-form'
  | 'snacksafe-website';

interface PlaygroundProps {
  className?: string;
  initialView?: string;
}

export const Playground: React.FC<PlaygroundProps> = ({ className = '', initialView = 'overview' }) => {
  const [currentView, setCurrentView] = useState<PlaygroundView>(initialView as PlaygroundView);

  // Update current view when initialView prop changes
  useEffect(() => {
    setCurrentView(initialView as PlaygroundView);
  }, [initialView]);

  // Application categories for complex real-world examples
  const applicationCategories = [
    {
      title: 'Azure Portal Interfaces',
      description: 'Complete Azure portal pages with enterprise-grade design and functionality',
      icon: '🏢',
      applications: [
        { 
          key: 'azure-storage-config' as PlaygroundView, 
          name: 'Azure Storage Configuration', 
          description: 'Complete Azure Storage account configuration page with full portal interface',
          status: 'complete',
          figmaNodeId: '33:10637',
          complexity: 'High',
          technologies: ['React', 'TypeScript', 'Figma MCP', 'Azure Design']
        },
        { 
          key: 'clean-storage-config' as PlaygroundView, 
          name: 'Clean Storage Configuration', 
          description: 'Filtered Azure Storage configuration without hidden elements - cleaner MCP output',
          status: 'complete',
          figmaNodeId: '33:10637 (filtered)',
          complexity: 'High',
          technologies: ['React', 'TypeScript', 'Figma MCP', 'Clean Extraction']
        },
        { 
          key: 'storage-configuration' as PlaygroundView, 
          name: 'Storage Configuration (Stories)', 
          description: 'Azure Storage configuration with Storybook integration',
          status: 'complete',
          figmaNodeId: 'Custom implementation',
          complexity: 'Medium',
          technologies: ['React', 'TypeScript', 'Storybook']
        },
        { 
          key: 'modular-storage-config' as PlaygroundView, 
          name: 'Storage Configuration (Modular)', 
          description: 'Individual form sections extracted from Figma - cleaner, more maintainable approach',
          status: 'complete',
          figmaNodeId: '33:10647, 33:10683, 33:10855',
          complexity: 'Medium',
          technologies: ['React', 'TypeScript', 'Figma MCP', 'Modular Architecture']
        }
      ]
    },
    {
      title: 'Form Applications',
      description: 'Real-world form interfaces with complex validation and workflows',
      icon: '📋',
      applications: [
        { 
          key: 'azure-assignment-form' as PlaygroundView, 
          name: 'Azure Assignment Form', 
          description: 'Multi-step Azure resource assignment workflow',
          status: 'complete',
          figmaNodeId: 'Custom implementation',
          complexity: 'Medium',
          technologies: ['React', 'TypeScript', 'Form Validation']
        },
        { 
          key: 'storage-assignment-form' as PlaygroundView, 
          name: 'Storage Assignment Form', 
          description: 'Azure storage assignment interface with advanced configuration',
          status: 'complete',
          figmaNodeId: 'Custom implementation',
          complexity: 'Medium',
          technologies: ['React', 'TypeScript', 'Azure SDK']
        }
      ]
    },
    {
      title: 'E-Commerce Websites',
      description: 'Complete e-commerce experiences built from Figma designs with Fluent 2 components',
      icon: '🛒',
      applications: [
        { 
          key: 'snacksafe-website' as PlaygroundView, 
          name: 'SnackSafe Website', 
          description: 'Complete e-commerce website for comfort products with hidden storage - built from Figma design using Fluent 2',
          status: 'complete',
          figmaNodeId: '71:3133',
          complexity: 'High',
          technologies: ['React', 'TypeScript', 'Figma MCP', 'Fluent 2', 'E-Commerce']
        }
      ]
    }
  ];

  // Render individual application showcase
  const renderApplicationShowcase = () => {
    switch (currentView) {
      case 'azure-storage-config':
        return <AzureStorageConfigurationShowcase onBackToShowcase={() => setCurrentView('overview')} />;
      case 'clean-storage-config':
        return <CleanStorageConfigurationShowcase onBackToShowcase={() => setCurrentView('overview')} />;
      case 'storage-configuration':
        return <StorageConfigurationShowcase onBackToShowcase={() => setCurrentView('overview')} />;
      case 'modular-storage-config':
        return <StorageConfigurationModularShowcase onBackToShowcase={() => setCurrentView('overview')} />;
      case 'azure-assignment-form':
        return (
          <ComponentShowcaseLayout
            title="Azure Assignment Form"
            subtitle="Multi-step Azure resource assignment"
            description="Complete Azure resource assignment workflow with validation and error handling"
            onBackToShowcase={() => setCurrentView('overview')}
          >
            <ComponentSection title="Live Application" description="Interactive Azure assignment form">
              <div style={{ border: '1px solid #d1d1d1', borderRadius: '8px', overflow: 'hidden' }}>
                <AzureAssignmentForm />
              </div>
            </ComponentSection>
          </ComponentShowcaseLayout>
        );
      case 'storage-assignment-form':
        return (
          <ComponentShowcaseLayout
            title="Storage Assignment Form"
            subtitle="Azure storage assignment interface"
            description="Advanced Azure storage assignment with configuration options"
            onBackToShowcase={() => setCurrentView('overview')}
          >
            <ComponentSection title="Live Application" description="Interactive storage assignment form">
              <div style={{ border: '1px solid #d1d1d1', borderRadius: '8px', overflow: 'hidden' }}>
                <AzureStorageAssignmentForm />
              </div>
            </ComponentSection>
          </ComponentShowcaseLayout>
        );
      case 'snacksafe-website':
        return (
          <ComponentShowcaseLayout
            title="SnackSafe Website"
            subtitle="E-commerce site with Fluent 2 components"
            description="Complete e-commerce website for innovative comfort products with hidden storage compartments. Built from Figma design using Fluent 2 Design System components."
            onBackToShowcase={() => setCurrentView('overview')}
          >
            <ComponentSection title="Live E-Commerce Website" description="Full-featured shopping experience with cart, filtering, and responsive design">
              <div style={{ border: '1px solid #d1d1d1', borderRadius: '8px', overflow: 'hidden' }}>
                <SnackSafeWebsite />
              </div>
            </ComponentSection>
          </ComponentShowcaseLayout>
        );
      // For any other applications that don't have dedicated showcases yet, show a placeholder
      default:
        return (
          <ComponentShowcaseLayout
            title={`${currentView.charAt(0).toUpperCase() + currentView.slice(1)} Application`}
            subtitle="Application showcase"
            description={`Detailed showcase for the ${currentView} application coming soon. This will include interactive examples, usage guidelines, and implementation details.`}
            onBackToShowcase={() => setCurrentView('overview')}
          >
            <ComponentSection
              title="Coming Soon"
              description="This dedicated showcase is being developed with comprehensive examples and documentation."
            >
              <Card
                style="filled"
                title="🚧 Under Development"
                subtitle="Individual application showcase"
                body={`The dedicated ${currentView} application showcase is being created with interactive examples, usage guidelines, accessibility information, and implementation details.`}
                primaryActionText="Back to Overview"
                showSecondaryAction={false}
                onPrimaryAction={() => setCurrentView('overview')}
              />
            </ComponentSection>
          </ComponentShowcaseLayout>
        );
    }
  };

  // If viewing a specific application, render its showcase
  if (currentView !== 'overview') {
    return renderApplicationShowcase();
  }

  // Main overview page
  return (
    <div className={`playground ${className}`} style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
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
          🚀 Playground
        </h1>
        <p style={{ 
          fontSize: '18px', 
          margin: '0 auto', 
          opacity: 0.9,
          maxWidth: '600px'
        }}>
          Real-world applications built with Figma MCP integration and Fluent UI components
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
            title="🏗️ Real Applications"
            subtitle="Production-Ready"
            body={`${applicationCategories.reduce((acc, cat) => acc + cat.applications.length, 0)} complete applications with complex workflows and interactions`}
            showSecondaryAction={false}
            primaryActionText="Explore All"
            onPrimaryAction={() => {}}
          />
          <Card
            style="filled"
            title="🎯 Figma MCP"
            subtitle="Design-to-Code"
            body="Applications built directly from Figma designs using Model Context Protocol integration"
            showSecondaryAction={false}
            primaryActionText="Learn More"
            onPrimaryAction={() => {}}
          />
          <Card
            style="filled"
            title="⚡ Enterprise Scale"
            subtitle="Complex Workflows"
            body="Multi-step forms, validation, error handling, and enterprise-grade user experiences"
            showSecondaryAction={false}
            primaryActionText="Try Now"
            onPrimaryAction={() => {}}
          />
        </div>

        {/* Application Categories */}
        {applicationCategories.map((category) => (
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

            {/* Applications in Category */}
            <ExampleGrid>
              {category.applications.map((app) => (
                <Card
                  key={app.key}
                  style="outline"
                  title={app.name}
                  subtitle={`${app.complexity} Complexity • ${app.technologies.join(', ')}`}
                  body={
                    <div>
                      <p style={{ margin: '0 0 12px 0' }}>{app.description}</p>
                      <div style={{ 
                        fontSize: '12px', 
                        color: '#605e5c',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <span>Figma: {app.figmaNodeId}</span>
                        <span style={{ 
                          backgroundColor: app.status === 'complete' ? '#107c10' : '#ffa500',
                          color: 'white',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontSize: '10px',
                          fontWeight: '600'
                        }}>
                          {app.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  }
                  primaryActionText="Open Application"
                  secondaryActionText="View Code"
                  onPrimaryAction={() => setCurrentView(app.key)}
                  onSecondaryAction={() => setCurrentView(app.key)}
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
            🚀 Playground: Where Figma designs become real applications
          </p>
        </div>
      </div>
    </div>
  );
};

export default Playground;
