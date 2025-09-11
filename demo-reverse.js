// Demo: Natural Language to UI
console.log('🚀 REVERSE WORKFLOW DEMO');
console.log('Natural Language → Figma → React\n');

// Simulate the natural language processing
function parseUIRequest(description) {
  console.log(`📝 Input: "${description}"`);
  
  const components = [];
  const lower = description.toLowerCase();
  
  if (lower.includes('contact form') || lower.includes('form')) {
    if (lower.includes('name')) {
      components.push({ type: 'input', label: 'Name', placeholder: 'Enter your name', required: true });
    }
    if (lower.includes('email')) {
      components.push({ type: 'input', label: 'Email', placeholder: 'Enter your email', required: true });
    }
    if (lower.includes('message') || lower.includes('textarea')) {
      components.push({ type: 'textarea', label: 'Message', placeholder: 'Enter your message', required: true });
    }
    if (lower.includes('submit') || lower.includes('send')) {
      components.push({ type: 'button', label: 'Send Message', variant: 'primary' });
    }
  }
  
  return {
    title: 'Contact Form',
    theme: 'modern',
    layout: 'vertical',
    components
  };
}

// Demo with your request
const examples = [
  "Create a contact form with name input, email input, message textarea, and submit button",
  "Create an Azure storage form with subscription dropdown and create button",
  "Create a user settings page with profile picture, name input, email input, and save button"
];

examples.forEach((description, index) => {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`EXAMPLE ${index + 1}:`);
  console.log('='.repeat(50));
  
  const spec = parseUIRequest(description);
  
  console.log('\n🧠 Parsed Components:');
  spec.components.forEach(comp => {
    console.log(`  • ${comp.type}: "${comp.label}" ${comp.required ? '(required)' : ''}`);
  });
  
  console.log('\n🎨 Figma Design Prompt:');
  console.log(`"Create a ${spec.theme} ${spec.title} in Figma with:`);
  spec.components.forEach(comp => {
    console.log(`- ${comp.label} (${comp.type}) with placeholder "${comp.placeholder}"`);
  });
  console.log('Use clean, modern design with proper spacing."`');
  
  console.log('\n💻 Generated React Component:');
  console.log('```tsx');
  console.log(`export default function ${spec.title.replace(/\s/g, '')}() {`);
  console.log('  return (');
  console.log('    <form style={{ maxWidth: "400px", margin: "0 auto", padding: "24px" }}>');
  console.log(`      <h1>${spec.title}</h1>`);
  
  spec.components.forEach(comp => {
    if (comp.type === 'input') {
      console.log(`      <div style={{ marginBottom: "16px" }}>`);
      console.log(`        <label>${comp.label}:</label>`);
      console.log(`        <input placeholder="${comp.placeholder}" ${comp.required ? 'required' : ''} />`);
      console.log(`      </div>`);
    } else if (comp.type === 'textarea') {
      console.log(`      <div style={{ marginBottom: "16px" }}>`);
      console.log(`        <label>${comp.label}:</label>`);
      console.log(`        <textarea placeholder="${comp.placeholder}" ${comp.required ? 'required' : ''} />`);
      console.log(`      </div>`);
    } else if (comp.type === 'button') {
      console.log(`      <button type="submit">${comp.label}</button>`);
    }
  });
  
  console.log('    </form>');
  console.log('  );');
  console.log('}');
  console.log('```');
});

console.log('\n🔄 COMPLETE WORKFLOW:');
console.log('1. 📝 Describe UI in natural language');
console.log('2. 🧠 System parses and generates component spec');
console.log('3. 🎨 Creates Figma design prompt');
console.log('4. 👨‍🎨 You create the design in Figma');
console.log('5. 🔗 Use MCP to generate production React code');
console.log('6. ✨ Get pixel-perfect components!');
