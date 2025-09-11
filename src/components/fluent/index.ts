// Fluent 2 Web Design System Components
// Auto-generated from Figma MCP integration

import FluentButtonComponent, { FluentButton } from './Button';
import FluentDropdownComponent, { FluentDropdown } from './Dropdown';
import FluentInputComponent, { FluentInput } from './Input';
import FluentAccordionComponent, { FluentAccordion } from './Accordion';
import FluentDataGridComponent, { DataGrid as FluentDataGrid } from './DataGrid';
import FluentCardComponent, { FluentCard } from './Card';

// Export named exports
export { FluentButton, FluentDropdown, FluentInput, FluentAccordion, FluentDataGrid, FluentCard };

// Export Badge components from Badge folder
export * from './Badge';

// Export default exports with new names
export { default as FluentButtonDefault } from './Button';
export { default as FluentDropdownDefault } from './Dropdown';
export { default as FluentInputDefault } from './Input';
export { default as FluentAccordionDefault } from './Accordion';
export { default as FluentDataGridDefault } from './DataGrid';
export { default as FluentCardDefault } from './Card';

// Re-export with shorter names for convenience
export { FluentButton as Button } from './Button';
export { FluentDropdown as Dropdown } from './Dropdown';
export { FluentInput as Input } from './Input';
export { FluentAccordion as Accordion } from './Accordion';
export { FluentDataGrid as DataGrid } from './DataGrid';
export { FluentCard as Card } from './Card';

// Component registry for MCP mapping
export const FLUENT_COMPONENT_MAP = {
  '8:8903': 'FluentButton',    // Button
  '8:2564': 'FluentDropdown',  // Dropdown
  '8:2580': 'FluentInput',     // Input
  '113348:3338': 'FluentAccordion', // Accordion
  '328753:21449': 'FluentDataGrid', // DataGrid
  '322781:5156': 'FluentCard',     // Card
  '8:8914': 'FluentButton',    // Create button variant
  '8:7313': 'FluentDropdown',  // Storage account dropdown
  '8:2562': 'FluentInput',     // Form field input
};
