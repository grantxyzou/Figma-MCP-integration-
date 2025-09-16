// Fluent 2 Web Design System Components
// Auto-generated from Figma MCP integration

import FluentButtonComponent, { FluentButton } from './Button';
import FluentDropdownComponent, { FluentDropdown } from './Dropdown';
import FluentInputComponent, { FluentInput } from './Input';
import FluentAccordionComponent, { FluentAccordion } from './Accordion';
import FluentDataGridComponent, { DataGrid as FluentDataGrid } from './DataGrid';
import FluentCardComponent, { FluentCard } from './Card';
import FluentDrawerComponent, { FluentDrawer, DrawerHeader, DrawerFooter } from './Drawer';
import FluentLabelComponent, { FluentLabel } from './Label';
import InfoLabelComponent, { InfoLabel } from './InfoLabel';
import BreadcrumbComponent, { Breadcrumb } from './Breadcrumb';
import AzureStorageConfiguration from './AzureStorageConfiguration';

// Export named exports
export { FluentButton, FluentDropdown, FluentInput, FluentAccordion, FluentDataGrid, FluentCard, FluentDrawer, DrawerHeader, DrawerFooter, FluentLabel, InfoLabel, Breadcrumb, AzureStorageConfiguration };

// Export Badge components from Badge folder
export * from './Badge';

// Export default exports with new names
export { default as FluentButtonDefault } from './Button';
export { default as FluentDropdownDefault } from './Dropdown';
export { default as FluentInputDefault } from './Input';
export { default as FluentAccordionDefault } from './Accordion';
export { default as FluentDataGridDefault } from './DataGrid';
export { default as FluentCardDefault } from './Card';
export { default as FluentDrawerDefault } from './Drawer';
export { default as FluentLabelDefault } from './Label';
export { default as InfoLabelDefault } from './InfoLabel';
export { default as FluentBreadcrumbDefault } from './Breadcrumb';

// Re-export with shorter names for convenience
export { FluentButton as Button } from './Button';
export { FluentDropdown as Dropdown } from './Dropdown';
export { FluentInput as Input } from './Input';
export { FluentAccordion as Accordion } from './Accordion';
export { FluentDataGrid as DataGrid } from './DataGrid';
export { FluentCard as Card } from './Card';
export { FluentDrawer as Drawer } from './Drawer';
export { FluentLabel as Label } from './Label';

// Component registry for MCP mapping
export const FLUENT_COMPONENT_MAP = {
  '8:8903': 'FluentButton',    // Button
  '8:2564': 'FluentDropdown',  // Dropdown
  '8:2580': 'FluentInput',     // Input
  '113348:3338': 'FluentAccordion', // Accordion
  '328753:21449': 'FluentDataGrid', // DataGrid
  '322781:5156': 'FluentCard',     // Card
  '145579:764': 'FluentDrawer',    // Drawer (Overlay)
  '145579:767': 'FluentDrawer',    // Drawer (Inline)
  '133494:14994': 'FluentBreadcrumb', // Breadcrumb (Size=Large)
  '133494:15005': 'FluentBreadcrumb', // Breadcrumb (Size=Medium)
  '133494:15016': 'FluentBreadcrumb', // Breadcrumb (Size=Small)
  '7062:121114': 'FluentLabel',    // Label Small Regular
  '7062:121116': 'FluentLabel',    // Label Small Semibold
  '7062:121126': 'FluentLabel',    // Label Medium Regular
  '7062:121128': 'FluentLabel',    // Label Medium Semibold
  '7062:121240': 'FluentLabel',    // Label Large Semibold
  '13805:184496': 'FluentLabel',   // Label Small Regular Disabled
  '13805:184498': 'FluentLabel',   // Label Small Semibold Disabled
  '13805:184504': 'FluentLabel',   // Label Medium Regular Disabled
  '13805:184506': 'FluentLabel',   // Label Medium Semibold Disabled
  '13805:184510': 'FluentLabel',   // Label Large Semibold Disabled
  '323059:755': 'InfoLabel',       // InfoLabel Small
  '323059:756': 'InfoLabel',       // InfoLabel Medium
  '323059:757': 'InfoLabel',       // InfoLabel Large
  '8:8914': 'FluentButton',    // Create button variant
  '8:7313': 'FluentDropdown',  // Storage account dropdown
  '8:2562': 'FluentInput',     // Form field input
  '33:10637': 'AzureStorageConfiguration', // Azure Storage Configuration form
};
