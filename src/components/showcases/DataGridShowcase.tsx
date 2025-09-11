import React, { useState } from 'react';
import { FluentDataGrid } from '../fluent/DataGrid';
import { FluentButton } from '../fluent/Button';
import { FluentInput } from '../fluent/Input';
import { FluentBadge } from '../fluent/Badge';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid, ExampleContainer } from '../shared/ComponentShowcaseLayout';

interface DataGridShowcaseProps {
  onBackToShowcase?: () => void;
}

export const DataGridShowcase: React.FC<DataGridShowcaseProps> = ({ onBackToShowcase }) => {
  const [selectedEmployee, setSelectedEmployee] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample employee data that matches the DataGrid component's expected format
  const employeeData = [
    {
      id: '1',
      selected: false,
      contentType: 'person' as const,
      content: 'Sarah Johnson',
      header1: 'Engineering',
      header2: 'Senior Developer',
      header3: 'Active',
      header4: '2022-03-15'
    },
    {
      id: '2',
      selected: false,
      contentType: 'person' as const,
      content: 'Michael Chen',
      header1: 'Design',
      header2: 'UX Designer',
      header3: 'Active',
      header4: '2021-11-08'
    },
    {
      id: '3',
      selected: false,
      contentType: 'person' as const,
      content: 'Emily Rodriguez',
      header1: 'Engineering',
      header2: 'Tech Lead',
      header3: 'Active',
      header4: '2020-07-22'
    },
    {
      id: '4',
      selected: false,
      contentType: 'person' as const,
      content: 'David Kim',
      header1: 'Product',
      header2: 'Product Manager',
      header3: 'Pending',
      header4: '2024-01-10'
    },
    {
      id: '5',
      selected: false,
      contentType: 'person' as const,
      content: 'Lisa Zhang',
      header1: 'Engineering',
      header2: 'Frontend Developer',
      header3: 'Active',
      header4: '2023-05-03'
    }
  ];

  // Sample project data
  const projectData = [
    {
      id: '1',
      selected: false,
      contentType: 'folder' as const,
      content: 'Mobile App Redesign',
      header1: 'In Progress',
      header2: 'High',
      header3: 'Design',
      header4: '65%'
    },
    {
      id: '2',
      selected: false,
      contentType: 'folder' as const,
      content: 'API Migration',
      header1: 'Planning',
      header2: 'Critical',
      header3: 'Engineering',
      header4: '15%'
    },
    {
      id: '3',
      selected: false,
      contentType: 'folder' as const,
      content: 'User Analytics Dashboard',
      header1: 'Review',
      header2: 'Medium',
      header3: 'Product',
      header4: '90%'
    },
    {
      id: '4',
      selected: false,
      contentType: 'folder' as const,
      content: 'Security Audit',
      header1: 'Complete',
      header2: 'High',
      header3: 'Engineering',
      header4: '100%'
    }
  ];

  const filteredEmployees = employeeData.filter(employee =>
    employee.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.header1?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.header2?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ComponentShowcaseLayout
      title="DataGrid Component"
      subtitle="Tabular data display and interaction"
      description="DataGrid provides a flexible and powerful way to display tabular data with features like sorting, filtering, selection, and pagination. Perfect for dashboards, admin panels, and data-heavy applications."
      onBackToShowcase={onBackToShowcase}
    >
      {/* Basic Usage */}
      <ComponentSection
        title="Basic Usage"
        description="Simple data tables with essential features and styling options."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Employee Directory"
            description="Basic table with employee data and selection"
          >
            <div style={{ marginBottom: '16px' }}>
              <FluentInput
                placeholder="Search employees..."
                value={searchTerm}
                onChange={setSearchTerm}
              />
            </div>

            <FluentDataGrid
              items={filteredEmployees}
              size="medium"
              selectable={true}
              onSelectionChange={setSelectedEmployee}
            />

            <div style={{ 
              marginTop: '12px',
              fontSize: '14px',
              color: '#605e5c'
            }}>
              Showing {filteredEmployees.length} employees
              {selectedEmployee.length > 0 && ` (${selectedEmployee.length} selected)`}
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Project Management"
            description="Project data with folder icons and status tracking"
          >
            <FluentDataGrid
              items={projectData}
              size="large"
              selectable={true}
              onSelectionChange={setSelectedProject}
            />

            <div style={{ 
              marginTop: '12px',
              display: 'flex',
              gap: '8px'
            }}>
              <FluentButton 
                size="Small" 
                style="Primary"
                disabled={selectedProject.length === 0}
              >
                Update Selected ({selectedProject.length})
              </FluentButton>
              <FluentButton 
                size="Small" 
                style="Secondary (Default)"
                disabled={selectedProject.length === 0}
              >
                Export
              </FluentButton>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Size Variants */}
      <ComponentSection
        title="Size Variants"
        description="Different table sizes for various contexts and space constraints."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="Small Size - Compact Lists"
            description="Perfect for dense information display"
          >
            <FluentDataGrid
              items={[
                { id: '1', contentType: 'text', content: 'Item 1', header1: 'Type A', header2: 'Active', header3: 'Details', header4: 'Value' },
                { id: '2', contentType: 'text', content: 'Item 2', header1: 'Type B', header2: 'Pending', header3: 'Details', header4: 'Value' },
                { id: '3', contentType: 'text', content: 'Item 3', header1: 'Type A', header2: 'Complete', header3: 'Details', header4: 'Value' }
              ]}
              size="small"
              selectable={false}
            />
          </ExampleContainer>

          <ExampleContainer
            title="Large Size - Detailed View"
            description="More space for complex data and actions"
          >
            <FluentDataGrid
              items={[
                { id: '1', contentType: 'person', content: 'John Smith', header1: 'Manager', header2: 'Sales', header3: 'Active', header4: '5 years' },
                { id: '2', contentType: 'person', content: 'Jane Doe', header1: 'Developer', header2: 'Tech', header3: 'Active', header4: '3 years' }
              ]}
              size="large"
              selectable={true}
            />
          </ExampleContainer>

          <ExampleContainer
            title="Medium Size - Balanced View"
            description="Default size for most use cases"
          >
            <FluentDataGrid
              items={[
                { id: '1', contentType: 'folder', content: 'Documents', header1: '15 files', header2: 'Shared', header3: 'Modified', header4: 'Owner' },
                { id: '2', contentType: 'folder', content: 'Images', header1: '8 files', header2: 'Private', header3: 'Modified', header4: 'Owner' },
                { id: '3', contentType: 'folder', content: 'Templates', header1: '12 files', header2: 'Public', header3: 'Modified', header4: 'Owner' }
              ]}
              size="medium"
              selectable={true}
            />
          </ExampleContainer>

          <ExampleContainer
            title="Smaller Size - Ultra Compact"
            description="Minimal height for maximum data density"
          >
            <FluentDataGrid
              items={[
                { id: '1', contentType: 'text', content: 'Log Entry 1', header1: 'Info', header2: 'System', header3: '10:30 AM', header4: 'Success' },
                { id: '2', contentType: 'text', content: 'Log Entry 2', header1: 'Warning', header2: 'User', header3: '10:31 AM', header4: 'Warning' },
                { id: '3', contentType: 'text', content: 'Log Entry 3', header1: 'Error', header2: 'System', header3: '10:32 AM', header4: 'Error' },
                { id: '4', contentType: 'text', content: 'Log Entry 4', header1: 'Info', header2: 'User', header3: '10:33 AM', header4: 'Success' }
              ]}
              size="smaller"
              selectable={false}
            />
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Content Types */}
      <ComponentSection
        title="Content Types"
        description="Different content types and interactive elements within data grids."
      >
        <ExampleContainer
          title="Mixed Content Types"
          description="Various content types including links, radio buttons, and different visual elements"
        >
          <FluentDataGrid
            items={[
              {
                id: '1',
                contentType: 'person',
                content: 'Team Member',
                header1: 'Department',
                header2: 'Role',
                header3: 'Status',
                header4: 'Actions'
              },
              {
                id: '2',
                contentType: 'folder',
                content: 'Project Files',
                header1: 'Type',
                header2: 'Size',
                header3: 'Modified',
                header4: 'Owner'
              },
              {
                id: '3',
                contentType: 'link',
                content: 'External Resource',
                header1: 'Category',
                header2: 'Provider',
                header3: 'Status',
                header4: 'Access'
              },
              {
                id: '4',
                contentType: 'radio',
                content: 'Option Selection',
                header1: 'Type',
                header2: 'Value',
                header3: 'Default',
                header4: 'Required'
              }
            ]}
            size="medium"
            selectable={true}
          />
        </ExampleContainer>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection
        title="Usage Guidelines"
        description="Best practices for designing effective data tables and grids."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer
            title="✅ Do - Use Consistent Icons"
            description="Match content types with appropriate visual cues"
            background="#f3f9ff"
          >
            <div style={{ fontSize: '14px' }}>
              <div style={{ marginBottom: '12px' }}>
                <strong>Content Type Guidelines:</strong>
              </div>
              <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: '1.6' }}>
                <li><strong>person:</strong> User profiles, contacts, team members</li>
                <li><strong>folder:</strong> Projects, categories, file collections</li>
                <li><strong>link:</strong> External resources, references, URLs</li>
                <li><strong>radio:</strong> Single-choice options, settings</li>
                <li><strong>text:</strong> Plain data, logs, simple content</li>
              </ul>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="✅ Do - Choose Appropriate Sizes"
            description="Match table density to content complexity"
            background="#f3f9ff"
          >
            <div style={{ fontSize: '14px' }}>
              <div style={{ marginBottom: '12px' }}>
                <strong>Size Recommendations:</strong>
              </div>
              <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: '1.6' }}>
                <li><strong>smaller:</strong> Log entries, simple lists</li>
                <li><strong>small:</strong> Compact data, mobile views</li>
                <li><strong>medium:</strong> Standard business data</li>
                <li><strong>large:</strong> Complex records, rich content</li>
              </ul>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="❌ Don't - Mix Incompatible Content"
            description="Avoid combining content types that don't work well together"
            background="#fff4f4"
          >
            <div style={{ fontSize: '14px' }}>
              <p style={{ margin: '0 0 8px 0', color: '#d83b01' }}>
                <strong>Avoid these combinations:</strong>
              </p>
              <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: '1.6', color: '#605e5c' }}>
                <li>Radio buttons with selectable rows (conflicting selection)</li>
                <li>Too many different icon types in one table</li>
                <li>Links mixed with non-interactive content</li>
                <li>Inconsistent visual hierarchy</li>
              </ul>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="❌ Don't - Overload with Data"
            description="Keep tables scannable and actionable"
            background="#fff4f4"
          >
            <div style={{ fontSize: '14px' }}>
              <p style={{ margin: '0 0 8px 0', color: '#d83b01' }}>
                <strong>Common mistakes:</strong>
              </p>
              <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: '1.6', color: '#605e5c' }}>
                <li>Too many columns making tables hard to scan</li>
                <li>Dense text without visual breaks</li>
                <li>Missing search and filter capabilities</li>
                <li>No clear primary action or purpose</li>
              </ul>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Real-world Examples */}
      <ComponentSection
        title="Real-world Examples"
        description="Common use cases and patterns for data grids in applications."
      >
        <ExampleGrid columns={1}>
          <ExampleContainer
            title="Application Dashboard"
            description="Mixed content types in a business application context"
          >
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '16px'
            }}>
              <div>
                <h5 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Team Members</h5>
                <FluentDataGrid
                  items={[
                    { id: '1', contentType: 'person', content: 'Alex Chen', header1: 'Designer', header2: 'Available', header3: '5h', header4: '98%' },
                    { id: '2', contentType: 'person', content: 'Sam Wilson', header1: 'Developer', header2: 'Busy', header3: '3h', header4: '87%' }
                  ]}
                  size="small"
                  selectable={false}
                />
              </div>
              
              <div>
                <h5 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Recent Projects</h5>
                <FluentDataGrid
                  items={[
                    { id: '1', contentType: 'folder', content: 'Website Redesign', header1: 'Design', header2: 'Active', header3: '85%', header4: 'On Track' },
                    { id: '2', contentType: 'folder', content: 'Mobile App', header1: 'Development', header2: 'Review', header3: '92%', header4: 'Ahead' }
                  ]}
                  size="small"
                  selectable={false}
                />
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '8px',
              flexWrap: 'wrap'
            }}>
              <FluentBadge appearance="tint" color="success" size="small">2 Active Projects</FluentBadge>
              <FluentBadge appearance="tint" color="informative" size="small">5 Team Members</FluentBadge>
              <FluentBadge appearance="tint" color="warning" size="small">1 Review Pending</FluentBadge>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Implementation */}
      <ComponentSection
        title="Implementation"
        description="Technical details and API reference for the DataGrid component."
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
            <pre style={{ margin: 0, color: '#323130' }}>{`<FluentDataGrid
  items={[
    {
      id: string,
      contentType: 'folder' | 'person' | 'radio' | 'link' | 'text',
      content: string,
      header1?: string,
      header2?: string,
      header3?: string,
      header4?: string
    }
  ]}
  size="large" | "medium" | "small" | "smaller"
  selectable={boolean}
  onSelectionChange={(selectedIds: string[]) => void}
/>`}</pre>
          </div>
          
          <div style={{ marginTop: '16px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Key Features:</h5>
            <ul style={{ fontSize: '14px', color: '#605e5c', paddingLeft: '20px' }}>
              <li>Five content types with appropriate visual indicators</li>
              <li>Four size variants for different layout needs</li>
              <li>Optional row selection with multi-select support</li>
              <li>Responsive design that adapts to container width</li>
              <li>Hover states and visual feedback</li>
              <li>Accessible with proper ARIA labels and keyboard navigation</li>
              <li>Fixed 6-column layout with customizable headers</li>
              <li>TypeScript support for type-safe data structures</li>
              <li>Fluent 2 Design System styling and interactions</li>
            </ul>
          </div>
        </ExampleContainer>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default DataGridShowcase;
