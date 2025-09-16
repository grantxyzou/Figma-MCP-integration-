// Component Registry for Figma MCP Integration
// Maps Figma node IDs to React components with their variants

import { FluentButton } from './fluent/Button';
import { FluentDropdown } from './fluent/Dropdown';
import { Breadcrumb } from './fluent/Breadcrumb';
import { FluentLabel } from './fluent/Label';
import { InfoLabel } from './fluent/InfoLabel';
import FormField from './FormField';
import AzureAssignmentForm from './AzureAssignmentForm';
import AzureStorageConfiguration from './fluent/AzureStorageConfiguration';

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
    component: FluentDropdown,
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
    component: FluentDropdown,
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
    component: FluentButton,
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
    component: FluentButton,
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

  // Breadcrumb Components
  {
    nodeId: '133494:14994', // Breadcrumb Large
    componentName: 'Breadcrumb',
    component: Breadcrumb,
    variants: {
      large: {
        size: 'Large',
        items: [
          { label: 'Home', href: '/home' },
          { label: 'Documents', href: '/home/documents' },
          { label: 'Projects', current: true }
        ]
      }
    },
    description: 'Large breadcrumb navigation'
  },
  {
    nodeId: '133494:15005', // Breadcrumb Medium
    componentName: 'Breadcrumb',
    component: Breadcrumb,
    variants: {
      medium: {
        size: 'Medium',
        items: [
          { label: 'Home', href: '/home' },
          { label: 'Documents', href: '/home/documents' },
          { label: 'Projects', current: true }
        ]
      }
    },
    description: 'Medium breadcrumb navigation'
  },
  {
    nodeId: '133494:15016', // Breadcrumb Small
    componentName: 'Breadcrumb',
    component: Breadcrumb,
    variants: {
      small: {
        size: 'Small',
        items: [
          { label: 'Home', href: '/home' },
          { label: 'Documents', href: '/home/documents' },
          { label: 'Projects', current: true }
        ]
      }
    },
    description: 'Small breadcrumb navigation'
  },

  // InfoLabel Components
  {
    nodeId: '323059:755', // InfoLabel Small
    componentName: 'InfoLabel',
    component: InfoLabel,
    variants: {
      small: {
        size: 'Small',
        children: 'Label',
        infoContent: 'This is helpful information about this field.',
        infoTitle: 'More Information'
      }
    },
    description: 'Small info label with tooltip (12px + 20px icon)'
  },
  {
    nodeId: '323059:756', // InfoLabel Medium
    componentName: 'InfoLabel',
    component: InfoLabel,
    variants: {
      medium: {
        size: 'Medium',
        children: 'Label',
        infoContent: 'This is helpful information about this field.',
        infoTitle: 'More Information'
      }
    },
    description: 'Medium info label with tooltip (14px + 24px icon)'
  },
  {
    nodeId: '323059:757', // InfoLabel Large
    componentName: 'InfoLabel',
    component: InfoLabel,
    variants: {
      large: {
        size: 'Large',
        weight: 'Semibold',
        children: 'Label',
        infoContent: 'This is helpful information about this field.',
        infoTitle: 'More Information'
      }
    },
    description: 'Large info label with tooltip (16px + 24px icon)'
  },

  // Label Components
  {
    nodeId: '7062:121114', // Label Small Regular
    componentName: 'Label',
    component: FluentLabel,
    variants: {
      smallRegular: {
        size: 'Small',
        weight: 'Regular',
        children: 'Label'
      }
    },
    description: 'Small regular label (12px)'
  },
  {
    nodeId: '7062:121116', // Label Small Semibold
    componentName: 'Label',
    component: FluentLabel,
    variants: {
      smallSemibold: {
        size: 'Small',
        weight: 'Semibold',
        children: 'Label'
      }
    },
    description: 'Small semibold label (12px)'
  },
  {
    nodeId: '7062:121126', // Label Medium Regular
    componentName: 'Label',
    component: FluentLabel,
    variants: {
      mediumRegular: {
        size: 'Medium',
        weight: 'Regular',
        children: 'Label'
      }
    },
    description: 'Medium regular label (14px)'
  },
  {
    nodeId: '7062:121128', // Label Medium Semibold
    componentName: 'Label',
    component: FluentLabel,
    variants: {
      mediumSemibold: {
        size: 'Medium',
        weight: 'Semibold',
        children: 'Label'
      }
    },
    description: 'Medium semibold label (14px)'
  },
  {
    nodeId: '7062:121240', // Label Large Semibold
    componentName: 'Label',
    component: FluentLabel,
    variants: {
      largeSemibold: {
        size: 'Large',
        weight: 'Semibold',
        children: 'Label'
      }
    },
    description: 'Large semibold label (16px)'
  },
  {
    nodeId: '13805:184496', // Label Small Regular Disabled
    componentName: 'Label',
    component: FluentLabel,
    variants: {
      smallRegularDisabled: {
        size: 'Small',
        weight: 'Regular',
        disabled: true,
        children: 'Label'
      }
    },
    description: 'Small regular label (disabled)'
  },
  {
    nodeId: '13805:184498', // Label Small Semibold Disabled
    componentName: 'Label',
    component: FluentLabel,
    variants: {
      smallSemiboldDisabled: {
        size: 'Small',
        weight: 'Semibold',
        disabled: true,
        children: 'Label'
      }
    },
    description: 'Small semibold label (disabled)'
  },
  {
    nodeId: '13805:184504', // Label Medium Regular Disabled
    componentName: 'Label',
    component: FluentLabel,
    variants: {
      mediumRegularDisabled: {
        size: 'Medium',
        weight: 'Regular',
        disabled: true,
        children: 'Label'
      }
    },
    description: 'Medium regular label (disabled)'
  },
  {
    nodeId: '13805:184506', // Label Medium Semibold Disabled
    componentName: 'Label',
    component: FluentLabel,
    variants: {
      mediumSemiboldDisabled: {
        size: 'Medium',
        weight: 'Semibold',
        disabled: true,
        children: 'Label'
      }
    },
    description: 'Medium semibold label (disabled)'
  },
  {
    nodeId: '13805:184510', // Label Large Semibold Disabled
    componentName: 'Label',
    component: FluentLabel,
    variants: {
      largeSemiboldDisabled: {
        size: 'Large',
        weight: 'Semibold',
        disabled: true,
        children: 'Label'
      }
    },
    description: 'Large semibold label (disabled)'
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
    componentName: 'AzureStorageConfiguration',
    component: AzureStorageConfiguration,
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
