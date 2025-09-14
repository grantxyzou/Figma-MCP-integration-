// Component Registry for Figma MCP Integration
// Maps Figma node IDs to React components with their variants

import Button from './Button';
import Dropdown from './Dropdown';
import FormField from './FormField';
import AzureAssignmentForm from './AzureAssignmentForm';
import { StorageConfiguration } from './fluent/StorageConfiguration';

export interface ComponentMapping {
  nodeId: string;
  componentName: string;
  component: React.ComponentType<any>;
  variants?: {
    [key: string]: any;
  };
  props?: {
    [key: string]: any;
  };
  description?: string;
}

export const FIGMA_COMPONENT_REGISTRY: ComponentMapping[] = [
  // Dropdown Components
  {
    nodeId: '8:2564', // Subscription dropdown
    componentName: 'Dropdown',
    component: Dropdown,
    variants: {
      subscription: {
        placeholder: 'Select a subscription',
        required: true,
        options: [
          'Visual Studio Professional Subscription',
          'Azure Free Trial',
          'Pay-As-You-Go',
          'Enterprise Agreement'
        ]
      }
    },
    description: 'Subscription selection dropdown'
  },
  {
    nodeId: '8:7313', // Storage account dropdown
    componentName: 'Dropdown',
    component: Dropdown,
    variants: {
      storageAccount: {
        placeholder: 'Select a storage account',
        required: true,
        options: [
          'myStorageAccount',
          'devStorageAccount',
          'prodStorageAccount'
        ]
      }
    },
    description: 'Storage account selection dropdown'
  },
  
  // Button Components
  {
    nodeId: '8:8903', // Cancel button
    componentName: 'Button',
    component: Button,
    variants: {
      cancel: {
        variant: 'secondary',
        children: 'Cancel'
      }
    },
    description: 'Cancel action button'
  },
  {
    nodeId: '8:8914', // Create button
    componentName: 'Button',
    component: Button,
    variants: {
      create: {
        variant: 'primary',
        children: 'Create'
      }
    },
    description: 'Primary action button'
  },

  // Form Field Components
  {
    nodeId: '8:2562', // Subscription form field
    componentName: 'FormField',
    component: FormField,
    variants: {
      subscription: {
        label: 'Subscription',
        required: true,
        horizontal: true
      }
    },
    description: 'Subscription form field container'
  },
  {
    nodeId: '8:7311', // Storage account form field
    componentName: 'FormField',
    component: FormField,
    variants: {
      storageAccount: {
        label: 'Storage account',
        required: true,
        horizontal: true
      }
    },
    description: 'Storage account form field container'
  },
  {
    nodeId: '8:2578', // Assignment name form field
    componentName: 'FormField',
    component: FormField,
    variants: {
      assignmentName: {
        label: 'Assignment name',
        required: false,
        horizontal: true
      }
    },
    description: 'Assignment name form field container'
  },

  // Full Form Component
  {
    nodeId: '7:3571', // Main Azure form
    componentName: 'AzureAssignmentForm',
    component: AzureAssignmentForm,
    variants: {
      default: {}
    },
    description: 'Complete Azure assignment form'
  },

  // Storage Configuration Component
  {
    nodeId: '33:10637', // Azure Storage Configuration form
    componentName: 'StorageConfiguration',
    component: StorageConfiguration,
    variants: {
      default: {},
      readOnly: {
        readOnly: true
      }
    },
    description: 'Complete Azure Storage configuration form with 13 settings'
  }
];

// Helper functions to work with the registry
export function getComponentByNodeId(nodeId: string): ComponentMapping | undefined {
  return FIGMA_COMPONENT_REGISTRY.find(mapping => mapping.nodeId === nodeId);
}

export function getComponentsByName(componentName: string): ComponentMapping[] {
  return FIGMA_COMPONENT_REGISTRY.filter(mapping => mapping.componentName === componentName);
}

export function getAllNodeIds(): string[] {
  return FIGMA_COMPONENT_REGISTRY.map(mapping => mapping.nodeId);
}

export function getComponentVariants(nodeId: string): any {
  const mapping = getComponentByNodeId(nodeId);
  return mapping?.variants || {};
}

// Usage in MCP workflow:
// 1. Select component in Figma
// 2. Get nodeId from mcp_figma_get_metadata
// 3. Look up component in registry
// 4. Generate code using component + variants
export function generateComponentCode(nodeId: string, variantName?: string): string {
  const mapping = getComponentByNodeId(nodeId);
  if (!mapping) {
    return `// Component not found for nodeId: ${nodeId}`;
  }

  const variant = variantName && mapping.variants?.[variantName] 
    ? mapping.variants[variantName] 
    : Object.values(mapping.variants || {})[0] || {};

  const propsString = Object.entries(variant)
    .map(([key, value]) => {
      if (typeof value === 'string') {
        return `${key}="${value}"`;
      } else if (typeof value === 'boolean') {
        return value ? key : '';
      } else if (Array.isArray(value)) {
        return `${key}={${JSON.stringify(value)}}`;
      } else {
        return `${key}={${JSON.stringify(value)}}`;
      }
    })
    .filter(Boolean)
    .join(' ');

  return `<${mapping.componentName} ${propsString} />`;
}
