import React from 'react';
import { DataGrid } from './DataGrid';

// Simple story examples for DataGrid component
export default {
  title: 'Fluent/DataGrid',
  component: DataGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

const sampleItems = [
  {
    id: '1',
    contentType: 'folder' as const,
    content: 'Documents',
    header1: 'Modified',
    header2: 'Type',
    header3: 'Size',
    header4: 'Owner'
  },
  {
    id: '2',
    contentType: 'person' as const,
    content: 'John Doe',
    header1: 'Engineer',
    header2: 'Team Lead',
    header3: 'Available',
    header4: 'Azure'
  },
  {
    id: '3',
    contentType: 'radio' as const,
    content: 'Option A',
    header1: 'Active',
    header2: 'Primary',
    header3: 'High',
    header4: 'Required'
  },
  {
    id: '4',
    contentType: 'link' as const,
    content: 'View Details',
    header1: 'Last week',
    header2: 'Document',
    header3: '2.4 MB',
    header4: 'Admin'
  }
];

export const Default = () => (
  <DataGrid items={sampleItems} size="medium" selectable={true} />
);

export const Large = () => (
  <DataGrid items={sampleItems} size="large" selectable={true} />
);

export const Small = () => (
  <DataGrid items={sampleItems} size="small" selectable={true} />
);

export const WithoutSelection = () => (
  <DataGrid items={sampleItems} size="medium" selectable={false} />
);

export const AllContentTypes = () => (
  <DataGrid 
    items={[
      {
        id: '1',
        contentType: 'folder' as const,
        content: 'My Folder',
        header1: 'Today',
        header2: 'Folder',
        header3: '15 items',
        header4: 'Me'
      },
      {
        id: '2',
        contentType: 'person' as const,
        content: 'Alice Smith',
        header1: 'Online',
        header2: 'Designer',
        header3: 'Available',
        header4: 'Design Team'
      },
      {
        id: '3',
        contentType: 'radio' as const,
        content: 'Primary Option',
        header1: 'Selected',
        header2: 'Radio',
        header3: 'Default',
        header4: 'Config'
      },
      {
        id: '4',
        contentType: 'link' as const,
        content: 'Open Link',
        header1: 'Yesterday',
        header2: 'External',
        header3: 'Public',
        header4: 'System'
      }
    ]} 
    size="medium" 
    selectable={true} 
  />
);

export const InteractiveDemo = () => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
  
  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '16px', color: '#323130' }}>
        Interactive DataGrid with Selection Feedback
      </h3>
      <p style={{ marginBottom: '16px', color: '#605E5C', fontSize: '14px' }}>
        Try hovering over rows and headers, clicking rows to select them, and using the select all checkbox.
      </p>
      <DataGrid 
        items={[
          {
            id: '1',
            contentType: 'folder' as const,
            content: 'Important Documents',
            header1: 'Today 2:30 PM',
            header2: 'Folder',
            header3: '42 files',
            header4: 'John Doe'
          },
          {
            id: '2',
            contentType: 'person' as const,
            content: 'Sarah Wilson',
            header1: 'Available',
            header2: 'Engineer',
            header3: 'Online',
            header4: 'Engineering'
          },
          {
            id: '3',
            contentType: 'link' as const,
            content: 'Project Dashboard',
            header1: 'Yesterday',
            header2: 'External',
            header3: '1.2 MB',
            header4: 'Public'
          }
        ]} 
        size="medium" 
        selectable={true} 
        onSelectionChange={setSelectedItems}
      />
      <div style={{ 
        marginTop: '16px', 
        padding: '12px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '6px',
        border: '1px solid #e1e1e1'
      }}>
        <strong>Selected Items:</strong> {selectedItems.length > 0 ? selectedItems.join(', ') : 'None'}
      </div>
    </div>
  );
};
