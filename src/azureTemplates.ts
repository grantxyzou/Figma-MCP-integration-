// Azure Component Templates
// Ready-to-use templates for common Azure components

export const AZURE_COMPONENT_TEMPLATES = {
  // Header/Navigation
  header: {
    name: 'AzureHeader',
    description: 'Main Azure application header with navigation',
    props: ['title', 'user', 'searchEnabled', 'navigationItems'],
    styling: 'Dark blue background (#0078d4), white text, 48px height'
  },
  
  // Breadcrumb
  breadcrumb: {
    name: 'AzureBreadcrumb', 
    description: 'Azure-style breadcrumb navigation',
    props: ['items', 'separator', 'onItemClick'],
    styling: 'Light background, blue links, > separator'
  },
  
  // Card
  card: {
    name: 'AzureCard',
    description: 'Azure-style content card',
    props: ['title', 'children', 'actions', 'variant'],
    styling: 'White background, subtle shadow, rounded corners'
  },
  
  // Panel/Blade
  panel: {
    name: 'AzurePanel',
    description: 'Azure blade-style side panel',
    props: ['title', 'width', 'onClose', 'children'],
    styling: 'Slide-in from right, white background, close button'
  },
  
  // Command Bar
  commandBar: {
    name: 'AzureCommandBar',
    description: 'Azure command bar with actions',
    props: ['primaryActions', 'secondaryActions', 'searchBox'],
    styling: 'Light background, button groups, search integration'
  },
  
  // Progress Indicator
  progress: {
    name: 'AzureProgress',
    description: 'Azure-style progress indicator',
    props: ['value', 'max', 'label', 'variant'],
    styling: 'Blue progress bar, percentage text, various sizes'
  }
};

export function createAzureComponentTemplate(templateKey: keyof typeof AZURE_COMPONENT_TEMPLATES) {
  const template = AZURE_COMPONENT_TEMPLATES[templateKey];
  
  return `import React from 'react';

interface ${template.name}Props {
  ${template.props.map(prop => `${prop}?: any;`).join('\n  ')}
}

// ${template.description}
// Styling: ${template.styling}
export default function ${template.name}(props: ${template.name}Props) {
  return (
    <div style={{
      // Add Azure styling here
      backgroundColor: 'white',
      border: '1px solid #e1e5e9',
      borderRadius: '4px',
      padding: '16px'
    }}>
      <h3>${template.name}</h3>
      <p>Template ready for customization</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}`;
}
