// MCP Integration Script
// This is where you actually use the FigmaMCPHelper with real MCP calls

import { FigmaMCPHelper } from './components/FigmaMCPHelper';

/**
 * Main function to generate React component from current Figma selection
 * This is what you'd call when you want to convert a Figma component to React
 */
export async function generateComponentFromFigmaSelection() {
  try {
    console.log('🎨 Getting current Figma selection...');
    
    // This would be your actual MCP call - you'd use the MCP tools here
    // const metadata = await mcp_figma_get_metadata();
    // For now, let's simulate with a known nodeId
    
    const nodeId = "8:2564"; // Example: dropdown component
    
    console.log(`📍 Selected nodeId: ${nodeId}`);
    
    // Generate the React component
    const result = await FigmaMCPHelper.generateFromSelection(nodeId);
    
    if (result) {
      console.log('\n✅ Component Generated Successfully!');
      console.log(`📦 Component: ${result.componentName}`);
      console.log(`📝 Description: ${result.description}`);
      console.log(`🎛️  Available variants: ${result.variants.join(', ')}`);
      console.log(`💻 React Code:`);
      console.log(`   ${result.code}`);
      
      return result;
    } else {
      console.log('❌ No component mapping found for this selection');
      return null;
    }
    
  } catch (error) {
    console.error('🚨 Error generating component:', error);
    return null;
  }
}

/**
 * Function to show all available components in your library
 */
export function showComponentLibrary() {
  console.log('📚 Component Library:');
  const library = FigmaMCPHelper.getComponentLibrary();
  
  library.forEach(({ componentName, instances, variants }) => {
    console.log(`\n🧩 ${componentName}`);
    console.log(`   Variants: ${variants.join(', ')}`);
    console.log(`   Figma instances: ${instances.length}`);
    
    instances.forEach(instance => {
      console.log(`   • ${instance.description} (${instance.nodeId})`);
    });
  });
}

/**
 * Quick test function - you can run this to see the system in action
 */
export async function testMCPIntegration() {
  console.log('🧪 Testing MCP Integration...\n');
  
  // Show library
  showComponentLibrary();
  
  console.log('\n' + '='.repeat(50) + '\n');
  
  // Test generating components
  const testNodeIds = ['8:2564', '8:7313', '8:8903', '8:8914'];
  
  for (const nodeId of testNodeIds) {
    console.log(`\n🎯 Testing nodeId: ${nodeId}`);
    const result = await FigmaMCPHelper.generateFromSelection(nodeId);
    if (result) {
      console.log(`   Generated: ${result.code}`);
    }
  }
}

// If you run this file directly, it will test the integration
if (require.main === module) {
  testMCPIntegration();
}
