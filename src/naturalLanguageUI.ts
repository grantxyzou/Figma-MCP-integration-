// Natural Language to UI Generator
// Takes natural language descriptions and creates UI specifications

export interface UIComponent {
  type: 'form' | 'button' | 'input' | 'dropdown' | 'card' | 'layout' | 'navigation';
  label?: string;
  placeholder?: string;
  variant?: string;
  required?: boolean;
  options?: string[];
  children?: UIComponent[];
  props?: Record<string, any>;
}

export interface UISpec {
  title: string;
  description: string;
  layout: 'vertical' | 'horizontal' | 'grid' | 'card';
  components: UIComponent[];
  theme?: 'light' | 'dark' | 'azure' | 'material';
}

export class NaturalLanguageUIGenerator {
  /**
   * Parse natural language into UI specification
   */
  static parseUIDescription(description: string): UISpec {
    const lower = description.toLowerCase();
    
    // Extract intent and components
    const components: UIComponent[] = [];
    
    // Detect form elements
    if (lower.includes('form') || lower.includes('create') || lower.includes('add') || lower.includes('submit')) {
      // Look for specific field types
      if (lower.includes('dropdown') || lower.includes('select')) {
        if (lower.includes('subscription')) {
          components.push({
            type: 'dropdown',
            label: 'Subscription',
            placeholder: 'Select a subscription',
            required: true,
            options: ['Visual Studio Professional', 'Azure Free Trial', 'Pay-As-You-Go']
          });
        }
        if (lower.includes('storage') || lower.includes('account')) {
          components.push({
            type: 'dropdown',
            label: 'Storage Account',
            placeholder: 'Select a storage account',
            required: true,
            options: ['myStorageAccount', 'devStorageAccount', 'prodStorageAccount']
          });
        }
      }
      
      if (lower.includes('text input') || lower.includes('name') || lower.includes('title')) {
        components.push({
          type: 'input',
          label: 'Name',
          placeholder: 'Enter a name',
          required: false
        });
      }
      
      // Add form buttons
      if (lower.includes('submit') || lower.includes('create') || lower.includes('save')) {
        components.push({
          type: 'button',
          label: 'Create',
          variant: 'primary'
        });
      }
      
      if (lower.includes('cancel') || lower.includes('close')) {
        components.push({
          type: 'button',
          label: 'Cancel',
          variant: 'secondary'
        });
      }
    }
    
    // Detect specific UI patterns
    if (lower.includes('azure') || lower.includes('microsoft')) {
      return {
        title: 'Azure Form',
        description: 'Microsoft Azure-style form interface',
        layout: 'vertical',
        theme: 'azure',
        components
      };
    }
    
    if (lower.includes('dashboard') || lower.includes('admin')) {
      return {
        title: 'Dashboard',
        description: 'Admin dashboard interface',
        layout: 'grid',
        theme: 'light',
        components: [
          { type: 'card', label: 'Overview', children: components },
          { type: 'navigation', label: 'Sidebar' }
        ]
      };
    }
    
    return {
      title: 'Custom UI',
      description: 'Generated from natural language',
      layout: 'vertical',
      theme: 'light',
      components
    };
  }
  
  /**
   * Convert UI spec to React component code
   */
  static generateReactCode(spec: UISpec): string {
    const importStatements = new Set<string>();
    
    const generateComponent = (component: UIComponent): string => {
      switch (component.type) {
        case 'dropdown':
          importStatements.add('Dropdown');
          return `<Dropdown 
            placeholder="${component.placeholder || 'Select an option'}"
            options={${JSON.stringify(component.options || [])}}
            ${component.required ? 'required' : ''}
          />`;
          
        case 'input':
          return `<input
            type="text"
            placeholder="${component.placeholder || ''}"
            ${component.required ? 'required' : ''}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px'
            }}
          />`;
          
        case 'button':
          importStatements.add('Button');
          return `<Button variant="${component.variant || 'primary'}">
            ${component.label || 'Button'}
          </Button>`;
          
        case 'form':
          const fields = component.children?.map(generateComponent).join('\n      ') || '';
          return `<form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      ${fields}
    </form>`;
          
        default:
          return `<!-- ${component.type} component -->`;
      }
    };
    
    const componentsCode = spec.components.map(generateComponent).join('\n    ');
    const imports = Array.from(importStatements).join(', ');
    
    return `import React from 'react';
${imports ? `import { ${imports} } from './components';` : ''}

// ${spec.description}
export default function ${spec.title.replace(/\s+/g, '')}() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '24px',
      backgroundColor: '${spec.theme === 'azure' ? '#f8f9fa' : 'white'}',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>
        ${spec.title}
      </h1>
      
      <div style={{
        display: 'flex',
        flexDirection: '${spec.layout === 'horizontal' ? 'row' : 'column'}',
        gap: '16px'
      }}>
        ${componentsCode}
      </div>
    </div>
  );
}`;
  }
  
  /**
   * Generate Figma creation prompt
   */
  static generateFigmaPrompt(spec: UISpec): string {
    const componentDescriptions = spec.components.map(comp => {
      switch (comp.type) {
        case 'dropdown':
          return `- Dropdown field labeled "${comp.label}" with placeholder "${comp.placeholder}"${comp.required ? ' (required)' : ''}`;
        case 'input':
          return `- Text input field labeled "${comp.label}" with placeholder "${comp.placeholder}"${comp.required ? ' (required)' : ''}`;
        case 'button':
          return `- ${comp.variant || 'Primary'} button with text "${comp.label}"`;
        default:
          return `- ${comp.type} component`;
      }
    }).join('\n');
    
    return `Please create a ${spec.theme || 'modern'} UI design in Figma with the following specifications:

TITLE: ${spec.title}
LAYOUT: ${spec.layout} layout
THEME: ${spec.theme || 'light'} theme

COMPONENTS:
${componentDescriptions}

STYLE GUIDELINES:
- Use ${spec.theme === 'azure' ? 'Microsoft Azure design system colors and typography' : 'clean, modern design'}
- Ensure proper spacing and alignment
- Make it responsive-friendly
- Use consistent component sizing
- Add proper visual hierarchy

Once created in Figma, I can use MCP to generate the exact React components!`;
  }
}

// Example usage:
export const EXAMPLE_PROMPTS = {
  azureForm: "Create an Azure form with subscription dropdown, storage account dropdown, and name input with create and cancel buttons",
  dashboard: "Create an admin dashboard with navigation sidebar and overview cards",
  loginForm: "Create a login form with email input, password input, and submit button",
  settings: "Create a settings page with toggle switches, dropdown preferences, and save button"
};
