// Component Registry for Figma MCP Integration
// Maps Figma node IDs to React components with their variants

import { FluentButton } from './fluent/Button';
import { FluentDropdown } from './fluent/Dropdown';
import { Breadcrumb } from './fluent/Breadcrumb';
import { FluentLabel } from './fluent/Label';
import { InfoLabel } from './fluent/InfoLabel';
import { Field } from './fluent/Field';
import { Link } from './fluent/Link';
import { Menu, MenuItem, MenuSplitItem, MenuSection, CompleteMenu } from './fluent/Menu';
import { MessageBar, MessageBarTitle, MessageBarBody } from './fluent/MessageBar';
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

  // Field Components (Unified Label + Input + Error)
  {
    nodeId: '32182:95361', // Field Small
    componentName: 'Field',
    component: Field,
    variants: {
      small: {
        size: 'Small',
        label: 'Label',
        required: true,
        infoContent: 'This is helpful information about this field.',
        infoTitle: 'More Information'
      }
    },
    description: 'Small form field with label, info button, and error handling'
  },
  {
    nodeId: '32182:95337', // Field Medium
    componentName: 'Field',
    component: Field,
    variants: {
      medium: {
        size: 'Medium',
        label: 'Label',
        required: true,
        infoContent: 'This is helpful information about this field.',
        infoTitle: 'More Information'
      }
    },
    description: 'Medium form field with label, info button, and error handling'
  },
  {
    nodeId: '32182:95385', // Field Large
    componentName: 'Field',
    component: Field,
    variants: {
      large: {
        size: 'Large',
        label: 'Label',
        required: true,
        infoContent: 'This is helpful information about this field.',
        infoTitle: 'More Information'
      }
    },
    description: 'Large form field with label, info button, and error handling'
  },

  // Link Components
  {
    nodeId: '6401:122465', // Link Default Rest
    componentName: 'Link',
    component: Link,
    variants: {
      default: {
        variant: 'default',
        children: 'Link',
        href: '#',
        external: true
      }
    },
    description: 'Default link with external icon'
  },
  {
    nodeId: '6401:122632', // Link Subtle Rest
    componentName: 'Link',
    component: Link,
    variants: {
      subtle: {
        variant: 'subtle',
        children: 'Link',
        href: '#',
        external: true
      }
    },
    description: 'Subtle link variant'
  },
  {
    nodeId: '6401:122744', // Link OnBrand Rest
    componentName: 'Link',
    component: Link,
    variants: {
      onbrand: {
        variant: 'onbrand',
        children: 'Link',
        href: '#',
        external: true
      }
    },
    description: 'OnBrand link variant'
  },
  {
    nodeId: '348781:2232', // Link Inverted Rest
    componentName: 'Link',
    component: Link,
    variants: {
      inverted: {
        variant: 'inverted',
        children: 'Link',
        href: '#',
        external: true
      }
    },
    description: 'Inverted link for dark backgrounds'
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
  },

  // Menu Components
  {
    nodeId: '301778:9076', // Main Menu container
    componentName: 'Menu',
    component: Menu,
    variants: {
      default: {
        open: true,
        'aria-label': 'Main menu'
      },
      customContent: {
        open: true,
        customContent: true
      }
    },
    description: 'Context menu container with items and sections'
  },
  {
    nodeId: '299494:94466', // MenuItem Rest state
    componentName: 'MenuItem',
    component: MenuItem,
    variants: {
      rest: {
        children: 'Menu Item',
        icon: true
      }
    },
    description: 'Menu item in rest state'
  },
  {
    nodeId: '319745:157888', // MenuItem Rest (Checked only)
    componentName: 'MenuItem',
    component: MenuItem,
    variants: {
      restChecked: {
        children: 'Menu Item',
        icon: true,
        selected: true
      }
    },
    description: 'Menu item in rest state (checked)'
  },
  {
    nodeId: '314466:2347', // MenuItem Hover state
    componentName: 'MenuItem',
    component: MenuItem,
    variants: {
      hover: {
        children: 'Menu Item',
        icon: true
      }
    },
    description: 'Menu item in hover state'
  },
  {
    nodeId: '299494:94482', // MenuItem Pressed state
    componentName: 'MenuItem',
    component: MenuItem,
    variants: {
      pressed: {
        children: 'Menu Item',
        icon: true
      }
    },
    description: 'Menu item in pressed state'
  },
  {
    nodeId: '299494:94498', // MenuItem Selected state
    componentName: 'MenuItem',
    component: MenuItem,
    variants: {
      selected: {
        children: 'Menu Item',
        icon: true,
        selected: true
      }
    },
    description: 'Menu item in selected state'
  },
  {
    nodeId: '299494:94514', // MenuItem Disabled state
    componentName: 'MenuItem',
    component: MenuItem,
    variants: {
      disabled: {
        children: 'Menu Item',
        icon: true,
        disabled: true
      }
    },
    description: 'Menu item in disabled state'
  },
  {
    nodeId: '319754:1140', // MenuItem Disabled (Checked only)
    componentName: 'MenuItem',
    component: MenuItem,
    variants: {
      disabledChecked: {
        children: 'Menu Item',
        icon: true,
        disabled: true,
        selected: true
      }
    },
    description: 'Menu item in disabled state (checked)'
  },
  {
    nodeId: '299494:94626', // MenuSplitItem Rest state
    componentName: 'MenuSplitItem',
    component: MenuSplitItem,
    variants: {
      rest: {
        children: 'Split Item',
        icon: true
      }
    },
    description: 'Menu split item in rest state'
  },
  {
    nodeId: '319754:1119', // MenuSplitItem Rest (Checked only)
    componentName: 'MenuSplitItem',
    component: MenuSplitItem,
    variants: {
      restChecked: {
        children: 'Split Item',
        icon: true,
        selected: true
      }
    },
    description: 'Menu split item in rest state (checked)'
  },
  {
    nodeId: '299494:94642', // MenuSplitItem Hover state
    componentName: 'MenuSplitItem',
    component: MenuSplitItem,
    variants: {
      hover: {
        children: 'Split Item',
        icon: true
      }
    },
    description: 'Menu split item in hover state'
  },
  {
    nodeId: '299494:94658', // MenuSplitItem Pressed state
    componentName: 'MenuSplitItem',
    component: MenuSplitItem,
    variants: {
      pressed: {
        children: 'Split Item',
        icon: true
      }
    },
    description: 'Menu split item in pressed state'
  },
  {
    nodeId: '299494:94674', // MenuSplitItem Selected state
    componentName: 'MenuSplitItem',
    component: MenuSplitItem,
    variants: {
      selected: {
        children: 'Split Item',
        icon: true,
        selected: true
      }
    },
    description: 'Menu split item in selected state'
  },
  {
    nodeId: '299494:94690', // MenuSplitItem Disabled state
    componentName: 'MenuSplitItem',
    component: MenuSplitItem,
    variants: {
      disabled: {
        children: 'Split Item',
        icon: true,
        disabled: true
      }
    },
    description: 'Menu split item in disabled state'
  },
  {
    nodeId: '319754:1161', // MenuSplitItem Disabled (Checked only)
    componentName: 'MenuSplitItem',
    component: MenuSplitItem,
    variants: {
      disabledChecked: {
        children: 'Split Item',
        icon: true,
        disabled: true,
        selected: true
      }
    },
    description: 'Menu split item in disabled state (checked)'
  },
  {
    nodeId: '299494:95293', // MenuSection with title
    componentName: 'MenuSection',
    component: MenuSection,
    variants: {
      withTitle: {
        title: 'Section Header',
        children: null
      }
    },
    description: 'Menu section with title'
  },
  {
    nodeId: '299494:95358', // MenuSection divider
    componentName: 'MenuSection',
    component: MenuSection,
    variants: {
      divider: {
        divider: true,
        children: null
      }
    },
    description: 'Menu section divider'
  },
  {
    nodeId: '329640:13586', // Complete Menu variant with sections and shortcuts  
    componentName: 'CompleteMenu',
    component: CompleteMenu,
    variants: {
      default: {
        customMenu: false,
        sections: [
          {
            header: "Section header",
            items: [
              { text: "Action", icon: "http://localhost:3845/assets/3434db8031020a7cb07deb7044c4bc54e68f8fe2.svg", disabled: false, hasChevron: false },
              { text: "Action", icon: "http://localhost:3845/assets/3434db8031020a7cb07deb7044c4bc54e68f8fe2.svg", disabled: false, hasChevron: false },
              { text: "Action", icon: "http://localhost:3845/assets/3434db8031020a7cb07deb7044c4bc54e68f8fe2.svg", disabled: false, hasChevron: false }
            ]
          },
          {
            header: "Section header",
            items: [
              { text: "Action", icon: "http://localhost:3845/assets/3434db8031020a7cb07deb7044c4bc54e68f8fe2.svg", shortcut: "Shortcut text", hasChevron: true, disabled: false },
              { text: "Action", icon: "http://localhost:3845/assets/3434db8031020a7cb07deb7044c4bc54e68f8fe2.svg", shortcut: "Shortcut text", hasChevron: true, disabled: false },
              { text: "Action", icon: "http://localhost:3845/assets/3434db8031020a7cb07deb7044c4bc54e68f8fe2.svg", shortcut: "Shortcut text", hasChevron: true, disabled: false }
            ]
          }
        ]
      }
    },
    description: 'Complete menu with sections, headers, actions, and shortcuts'
  },

  // MessageBar Components
  {
    nodeId: '329958:31585', // MessageBar Success
    componentName: 'MessageBar',
    component: MessageBar,
    variants: {
      success: {
        intent: 'success',
        title: 'Saved settings',
        body: 'Dialog saved successfully'
      },
      warning: {
        intent: 'warning', 
        title: 'Warning',
        body: 'Please review your settings before continuing'
      },
      error: {
        intent: 'error',
        title: 'Error', 
        body: 'Failed to save settings. Please try again'
      },
      info: {
        intent: 'info',
        title: 'Information',
        body: 'Settings will be saved automatically'
      }
    },
    description: 'Message notification bar with success, warning, error, and info intents'
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
