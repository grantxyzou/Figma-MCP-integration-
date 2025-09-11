// MCP Helper for Figma Component Generation
// This integrates with your MCP server to automatically generate components

import { getComponentByNodeId, generateComponentCode, FIGMA_COMPONENT_REGISTRY } from './ComponentRegistry';

export class FigmaMCPHelper {
  /**
   * Generate React component code from a selected Figma node
   */
  static async generateFromSelection(nodeId?: string): Promise<{
    code: string;
    componentName: string;
    description: string;
    variants: string[];
  } | null> {
    try {
      // If no nodeId provided, this would get current selection from MCP
      if (!nodeId) {
        console.log('No nodeId provided - would get from current Figma selection');
        return null;
      }

      const mapping = getComponentByNodeId(nodeId);
      if (!mapping) {
        console.log(`No component mapping found for nodeId: ${nodeId}`);
        return null;
      }

      const variants = Object.keys(mapping.variants || {});
      const defaultVariant = variants[0];
      const code = generateComponentCode(nodeId, defaultVariant);

      return {
        code,
        componentName: mapping.componentName,
        description: mapping.description || '',
        variants
      };
    } catch (error) {
      console.error('Error generating component from Figma:', error);
      return null;
    }
  }

  /**
   * Get all available components and their states
   */
  static getComponentLibrary() {
    const library = FIGMA_COMPONENT_REGISTRY.reduce((acc, mapping) => {
      const componentName = mapping.componentName;
      if (!acc[componentName]) {
        acc[componentName] = {
          instances: [],
          variants: new Set()
        };
      }
      
      acc[componentName].instances.push({
        nodeId: mapping.nodeId,
        description: mapping.description || '',
        variants: Object.keys(mapping.variants || {})
      });

      // Add variants to the set
      Object.keys(mapping.variants || {}).forEach(variant => {
        acc[componentName].variants.add(variant);
      });

      return acc;
    }, {} as Record<string, { instances: any[], variants: Set<string> }>);

    // Convert Sets to Arrays for JSON serialization
    return Object.entries(library).map(([componentName, data]) => ({
      componentName,
      instances: data.instances,
      variants: Array.from(data.variants)
    }));
  }

  /**
   * Generate documentation for all components
   */
  static generateDocumentation(): string {
    const library = this.getComponentLibrary();
    
    let docs = '# Figma MCP Component Library\n\n';
    docs += 'This library maps Figma components to React components with their variants.\n\n';

    library.forEach(({ componentName, instances, variants }) => {
      docs += `## ${componentName}\n\n`;
      docs += `**Available variants:** ${variants.join(', ')}\n\n`;
      docs += `**Figma instances:**\n`;
      
      instances.forEach(instance => {
        docs += `- **${instance.description}** (Node: \`${instance.nodeId}\`)\n`;
        docs += `  - Variants: ${instance.variants.join(', ')}\n`;
      });
      
      docs += '\n';
    });

    docs += '## Usage with MCP\n\n';
    docs += '1. Select a component in Figma\n';
    docs += '2. Use `mcp_figma_get_metadata` to get the nodeId\n';
    docs += '3. Use `FigmaMCPHelper.generateFromSelection(nodeId)` to get React code\n';
    docs += '4. The helper will return the appropriate component with correct props\n\n';

    return docs;
  }
}

// Example usage in your MCP workflow:
/*
// 1. Get current selection from Figma
const metadata = await mcp_figma_get_metadata();

// 2. Extract nodeId from selection
const nodeId = "8:2564"; // Example: dropdown component

// 3. Generate React component
const result = await FigmaMCPHelper.generateFromSelection(nodeId);

if (result) {
  console.log(`Component: ${result.componentName}`);
  console.log(`Code: ${result.code}`);
  console.log(`Available variants: ${result.variants.join(', ')}`);
}
*/
