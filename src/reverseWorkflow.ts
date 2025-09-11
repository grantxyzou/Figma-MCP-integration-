// Reverse Workflow: Natural Language → Figma → React
// This orchestrates the complete reverse workflow

import { NaturalLanguageUIGenerator, UISpec } from './naturalLanguageUI';

export class ReverseWorkflow {
  /**
   * Complete reverse workflow: Text → Figma Design → React Code
   */
  static async generateUIFromDescription(description: string): Promise<{
    spec: UISpec;
    figmaPrompt: string;
    reactCode: string;
    instructions: string;
  }> {
    console.log('🎯 Starting Reverse Workflow...');
    console.log(`📝 Input: "${description}"\n`);
    
    // Step 1: Parse natural language
    console.log('🧠 Step 1: Parsing natural language...');
    const spec = NaturalLanguageUIGenerator.parseUIDescription(description);
    console.log(`   Generated spec: ${spec.title} with ${spec.components.length} components`);
    
    // Step 2: Generate Figma creation prompt
    console.log('\n🎨 Step 2: Generating Figma design prompt...');
    const figmaPrompt = NaturalLanguageUIGenerator.generateFigmaPrompt(spec);
    
    // Step 3: Generate React code
    console.log('\n💻 Step 3: Generating React component code...');
    const reactCode = NaturalLanguageUIGenerator.generateReactCode(spec);
    
    // Step 4: Provide workflow instructions
    const instructions = `
🔄 REVERSE WORKFLOW COMPLETE!

NEXT STEPS:
1. 🎨 Copy the Figma prompt below and create the design in Figma
2. 📋 Select components in Figma
3. 🤖 Use MCP to generate React code: mcp_figma_get_code()
4. 🔗 Map components using your ComponentRegistry
5. ✨ Get production-ready React components!

ALTERNATIVE:
- Use the generated React code below as a starting point
- Refine the design in Figma
- Use MCP to sync any changes back to React
`;
    
    return {
      spec,
      figmaPrompt,
      reactCode,
      instructions
    };
  }
  
  /**
   * Quick demo of the reverse workflow
   */
  static async demo() {
    const examples = [
      "Create an Azure form with subscription dropdown, storage account dropdown, and name input with create and cancel buttons",
      "Create a user settings page with email input, password input, notification toggles, and save button",
      "Create a dashboard with navigation sidebar, stats cards, and data table",
      "Create a login form with email, password, remember me checkbox, and login button"
    ];
    
    console.log('🚀 REVERSE WORKFLOW DEMO\n');
    console.log('Transform natural language into UI designs and React code!\n');
    
    for (let i = 0; i < examples.length; i++) {
      const description = examples[i];
      console.log(`\n${'='.repeat(60)}`);
      console.log(`EXAMPLE ${i + 1}: ${description}`);
      console.log('='.repeat(60));
      
      const result = await this.generateUIFromDescription(description);
      
      console.log('\n📋 FIGMA PROMPT:');
      console.log('```');
      console.log(result.figmaPrompt);
      console.log('```');
      
      console.log('\n💻 GENERATED REACT CODE:');
      console.log('```tsx');
      console.log(result.reactCode);
      console.log('```');
      
      if (i < examples.length - 1) {
        console.log('\n⏳ Next example in 2 seconds...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    console.log('\n🎉 Demo complete! Try your own descriptions!');
  }
}

// Interactive function you can call
export async function createUIFromText(description: string) {
  const result = await ReverseWorkflow.generateUIFromDescription(description);
  
  console.log('\n🎨 FIGMA DESIGN PROMPT:');
  console.log('```');
  console.log(result.figmaPrompt);
  console.log('```');
  
  console.log('\n💻 REACT CODE:');
  console.log('```tsx');
  console.log(result.reactCode);
  console.log('```');
  
  console.log(result.instructions);
  
  return result;
}

// Example usage:
// createUIFromText("Create a contact form with name, email, message, and submit button");
