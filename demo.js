// Simple Demo - Run this in Node.js or VS Code terminal
// This shows exactly where your code example goes

const { FigmaMCPHelper } = require('./components/FigmaMCPHelper');

console.log('🎨 Figma MCP Component Generation Demo\n');

// THIS IS WHERE YOUR CODE GOES:
// When you select a component in Figma, you run this:

async function demonstrateMCPWorkflow() {
  // Step 1: In VS Code, you'd select a component in Figma
  // Step 2: Copilot calls mcp_figma_get_metadata() to get nodeId
  // Step 3: This is where your example code runs:
  
  const nodeId = "8:2564"; // From mcp_figma_get_metadata
  const result = await FigmaMCPHelper.generateFromSelection(nodeId);
  
  if (result) {
    console.log('✅ Generated Component:');
    console.log(`📦 Component: ${result.componentName}`);
    console.log(`💻 Code: ${result.code}`);
    console.log(`🎛️  Variants: ${result.variants.join(', ')}`);
  }
  
  // Test other components too
  const testComponents = [
    { nodeId: '8:7313', name: 'Storage Account Dropdown' },
    { nodeId: '8:8903', name: 'Cancel Button' },
    { nodeId: '8:8914', name: 'Create Button' }
  ];
  
  console.log('\n🧪 Testing other components:');
  for (const test of testComponents) {
    const result = await FigmaMCPHelper.generateFromSelection(test.nodeId);
    if (result) {
      console.log(`${test.name}: ${result.code}`);
    }
  }
}

// Run the demo
demonstrateMCPWorkflow().catch(console.error);

console.log('\n📋 USAGE IN VS CODE:');
console.log('1. Select component in Figma');
console.log('2. Ask Copilot: "Generate React component from this"');
console.log('3. Copilot runs: mcp_figma_get_metadata()');
console.log('4. Copilot extracts nodeId and runs your code:');
console.log('   const nodeId = "8:2564";');
console.log('   const result = FigmaMCPHelper.generateFromSelection(nodeId);');
console.log('   console.log(result.code);');
console.log('5. You get the React component! 🎉');
