---
applyTo: '**/*.js, **/*.ts, **/*.jsx, **/*.tsx'
title: Figma Dev Mode MCP rules
description: Guidelines for implementing Figma Dev Mode components in the MCP project.
---
Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.
# Figma Dev Mode MCP Rules & Component Development Guidelines

## 1. Project Overview & Context
This workspace implements Microsoft's Fluent 2 Design System as a React component library with Figma MCP integration for seamless design-to-code workflows.

**Always read these files first to understand the current state:**
- `README.md` - Project overview and component status
- `src/components/AdminDashboard.tsx` - Current metrics and implementation progress
- `src/components/FluentDemoHub.tsx` - Component catalog and showcase structure
- `src/components/ComponentRegistry.ts` - Figma nodeId mappings

## 2. Directory Structure Standards

### Component Organization
```
src/components/fluent/
├── ComponentName/
│   ├── ComponentName.tsx          # Main component file
│   ├── ComponentName.md           # Documentation
│   └── index.ts                   # Export file
├── index.ts                       # Main export file
└── fluent-tokens.css              # Design tokens
```

### Showcase Structure
```
src/components/showcases/
├── ComponentNameShowcase.tsx      # Interactive demo
└── index.ts                       # Export file
```

### Form Components (NEW - Preferred for Complex Forms)
```
src/components/forms/
├── SectionName/                   # Individual form sections
│   ├── SectionName.tsx           # Section component
│   └── index.ts                  # Export file
├── CompositeName.tsx              # Combined form components
└── index.ts                      # Barrel export for all forms
```

### Shared Components
```
src/components/shared/
├── ComponentShowcaseLayout.tsx    # Standard layout wrapper
└── index.ts                       # Export file
```

## 2.5. Modular Component Architecture (Preferred Approach)

### Form Components Organization
When extracting complex forms from Figma, prefer modular approach over monolithic:

**Benefits of Modular Extraction:**
- **Cleaner MCP Output**: Individual sections yield 3-6 assets vs 40+ for full pages
- **Better Maintainability**: Each section independently testable and reusable
- **Focused Development**: Clear separation of concerns and responsibilities
- **Easier Testing**: Unit test individual sections before composition

### Modular Extraction Workflow
1. Use `mcp_figma_get_metadata()` on parent container to identify all sections
2. Extract individual sections using specific node IDs (e.g., 33:10647, 33:10683)
3. Create focused components for each section with proper TypeScript interfaces
4. Build composite component that combines individual sections
5. Create comprehensive showcase demonstrating both individual and composite usage

### Example: Azure Storage Configuration
```typescript
// Individual sections
- PerformanceSection.tsx (node 33:10647) - 6 assets
- SecureTransferSection.tsx (node 33:10683) - 3 assets  
- TlsVersionSection.tsx (node 33:10855) - 2 assets

// Composite component
- StorageConfigurationModular.tsx - combines all sections

// Showcase
- StorageConfigurationModularShowcase.tsx - demonstrates architecture
```

## 3. Component Development Workflow
## 2.5. Modular Component Architecture (Preferred Approach)

### Form Components Organization
When extracting complex forms from Figma, prefer modular approach over monolithic:

## 3. Component Development Workflow

### Step 1: Figma Analysis
1. **Extract Node ID**: Always capture the Figma node ID from the selection
2. **Use MCP Tools**: Call `mcp_figma_get_metadata()` and `mcp_figma_get_code()`
3. **Document Source**: Record the exact Figma frame/component being implemented

### Step 2: Component Implementation
```typescript
// Template structure for new components
import React from 'react';

// Figma Node ID: [INSERT_NODE_ID_HERE]
export interface ComponentNameProps {
  // Props based on Figma variants
}

export const FluentComponentName: React.FC<ComponentNameProps> = ({
  // Destructure props with defaults
}) => {
  return (
    // Implementation matching Figma exactly
  );
};

export default FluentComponentName;
```

### Step 3: Index File Updates
Always update these index files when adding components:
- `src/components/fluent/index.ts`
- `src/components/fluent/ComponentName/index.ts`
- `src/components/showcases/index.ts` (if adding showcase)

### Step 4: Component Registry
Update `src/components/ComponentRegistry.ts`:
```typescript
{
  nodeId: 'FIGMA_NODE_ID',
  componentName: 'FluentComponentName',
  filePath: 'src/components/fluent/ComponentName/ComponentName.tsx',
  description: 'Component description',
  variants: ['variant1', 'variant2'],
  status: 'implemented'
}
```

## 4. Documentation Requirements

### Component Documentation (`ComponentName.md`)
Each component MUST have a markdown file with:

```markdown
# Fluent ComponentName

## Overview
Brief description of the component and its purpose.

## Figma Source
- **Node ID**: `FIGMA_NODE_ID`
- **Design File**: [Link to Figma frame]
- **Last Updated**: [Date]

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| prop1 | string | 'default' | Description |

## Usage Examples
```tsx
import { FluentComponentName } from './components/fluent';

<FluentComponentName prop1="value" />
```

## Variants
- List all supported variants
- Include visual descriptions

## Accessibility
- ARIA labels used
- Keyboard navigation support
- Screen reader compatibility

## Design Tokens
- List CSS custom properties used
- Reference to Fluent 2 tokens

## Changelog
- v1.0.0 - Initial implementation (Date)
```

## 5. Showcase Development

### Create Interactive Showcase
Every component needs a dedicated showcase page:

```typescript
// ComponentNameShowcase.tsx
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid } from '../shared/ComponentShowcaseLayout';

const ComponentNameShowcase = ({ onBackToShowcase }: { onBackToShowcase: () => void }) => {
  return (
    <ComponentShowcaseLayout
      title="ComponentName"
      subtitle="Component description"
      description="Detailed component description with usage context"
      onBackToShowcase={onBackToShowcase}
    >
      <ComponentSection title="Basic Usage">
        {/* Interactive examples */}
      </ComponentSection>
      
      <ComponentSection title="Variants">
        {/* All variants demonstration */}
      </ComponentSection>
      
      <ComponentSection title="Real-world Examples">
        {/* Practical usage patterns */}
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};
```

### Add to FluentDemoHub
Update `src/components/FluentDemoHub.tsx`:
1. Import the showcase component
2. Add to `componentCategories` array
3. Add case to `renderComponentShowcase()` switch statement

### Add to Navigation
Update `src/App.tsx` submenu array:
```typescript
{ key: 'component-name', label: 'ComponentName', icon: '🎯' }
```

## 6. Design System Compliance

### Figma Fidelity Requirements
- **100% Visual Accuracy**: Match spacing, colors, typography exactly
- **Interactive States**: Implement hover, focus, active, disabled states
- **Responsive Behavior**: Follow Figma breakpoint specifications
- **Animation**: Match Figma transition specifications

### Design Tokens Usage
- Use CSS custom properties from `fluent-tokens.css`
- Never use hardcoded values for colors, spacing, typography
- Reference official Fluent 2 design tokens when available

### Accessibility Standards
- WCAG 2.1 AA compliance minimum
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## 7. Dashboard Integration

### Update AdminDashboard
When adding new components, update `src/components/AdminDashboard.tsx`:

```typescript
// Add to implementedComponents array
{
  name: 'ComponentName',
  variants: 'Description of variants implemented',
  filePath: 'src/components/fluent/ComponentName/ComponentName.tsx',
  figmaAccuracy: '100%',
  completionDate: 'YYYY-MM-DD',
  complexity: 'Low|Medium|High'
}
```

### Update Metrics
The dashboard auto-calculates:
- Completion percentage
- Fluent 2 compliance score
- Development velocity
- Quality metrics

## 8. Version Control Standards

### Branch Naming
- `feature/component-name` - New component implementation
- `feature/component-name-enhancement` - Component improvements
- `fix/component-name-issue` - Bug fixes

### Commit Messages
Use imperative mood with clear scope:
- `feat: Add Fluent Button component with all variants`
- `feat: Add Button showcase with interactive examples`
- `docs: Update Button component documentation`
- `fix: Correct Button hover state styling`

### Pull Request Requirements
Include in PR description:
- Figma node ID and design link
- Component variants implemented
- Accessibility features added
- Breaking changes (if any)
- Testing performed

## 9. Quality Assurance Checklist

Before marking component complete:
- [ ] Figma node ID documented
- [ ] Visual design matches Figma 100%
- [ ] All interactive states implemented
- [ ] TypeScript interfaces complete
- [ ] Component documentation written
- [ ] Showcase page created and integrated
- [ ] Dashboard updated
- [ ] Index files updated
- [ ] Component registry updated
- [ ] Accessibility tested
- [ ] Responsive behavior verified

## 10. Context Preservation

### For New Sessions
Always review these key files to understand current state:
1. `README.md` - Project overview and component status
2. `src/components/AdminDashboard.tsx` - Current metrics (line 1-100)
3. `src/components/FluentDemoHub.tsx` - Component categories and individual showcases
4. `src/components/Playground.tsx` - Real-world application examples
5. `src/App.tsx` - Navigation structure and routing
6. `src/components/ComponentRegistry.ts` - Figma nodeId mappings
7. `src/components/forms/index.ts` - Modular form components (if working with forms)

### Key Context Points
- **Current Status**: Enhanced with modular architecture for complex forms
- **Active Components**: Button, Dropdown, Input, Accordion, Badge, PresenceBadge, DataGrid, Card, Drawer
- **Form Sections**: PerformanceSection, SecureTransferSection, TlsVersionSection (from Azure Storage Config)
- **Composite Components**: StorageConfigurationModular (demonstrates modular approach)
- **Design System**: Microsoft Fluent 2 Web UI Kit
- **Responsive Target**: MacBook Pro 16" optimized (1200px max width)
- **Navigation**: Dual-track with FluentComponentDemo and Playground for different use cases
- **Architecture**: Modular form extraction preferred over monolithic filtering

### Navigation Structure (UPDATED)
- **FluentComponentDemo**: Individual Fluent 2 component showcases and catalog
- **Playground**: Real-world application examples and complex interfaces  
- **Dashboard**: Implementation metrics and project status

### MCP Integration Workflow
1. User selects component in Figma
2. Use `mcp_figma_get_metadata()` to get node ID and identify sections
3. **For Complex Forms**: Extract individual sections with `mcp_figma_get_code()` using specific node IDs
4. **For Simple Components**: Extract complete component with `mcp_figma_get_code()`
5. Implement React components matching exact specifications
6. Create showcase and update navigation (FluentComponentDemo vs Playground)
7. Update dashboard metrics and component registry

### Preferred Extraction Approaches (NEW)
- **Modular**: Complex forms, configuration interfaces, multi-step workflows
- **Monolithic**: Simple single-purpose components, marketing pages, static content

## 11. Common Patterns

### Component Props Pattern
```typescript
export interface FluentComponentProps {
  size?: 'small' | 'medium' | 'large';
  appearance?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
```

### CSS Class Pattern
```css
.fluent-component {
  /* Base styles using design tokens */
}

.fluent-component--size-small { /* Size variant */ }
.fluent-component--appearance-primary { /* Appearance variant */ }
.fluent-component:hover { /* Interactive state */ }
.fluent-component:disabled { /* Disabled state */ }
```

This document should be referenced at the start of every session to ensure continuity and consistency in component development.

## 12. Recent Architectural Evolution (September 2025)

### Modular vs Monolithic Approach
The project has evolved from monolithic component extraction to a modular architecture:

**Previous Approach**: Extract entire Figma frames as single components
- Pro: Complete fidelity to design
- Con: Complex MCP output with 40+ assets, harder to maintain

**Current Preferred Approach**: Extract individual sections as focused components
- Pro: Clean MCP output (3-6 assets), better maintainability, reusable sections
- Con: Requires more thoughtful composition

### Implementation Examples
- **Individual Sections**: `PerformanceSection`, `SecureTransferSection`, `TlsVersionSection`
- **Composite Components**: `StorageConfigurationModular`
- **Showcases**: Compare approaches in `StorageConfigurationModularShowcase`

### Navigation Architecture
- **FluentComponentDemo** (`src/components/FluentComponentDemo.tsx`): Individual component catalog
- **Playground** (`src/components/Playground.tsx`): Real-world application examples
- **App.tsx**: Dual navigation with submenu support for both tracks

### Form Component Pattern (NEW)
```typescript
// Individual form section
export interface SectionProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

// Composite form component
export interface CompositeFormProps {
  onSave?: (data: FormData) => void;
  onDiscard?: () => void;
  initialData?: Partial<FormData>;
}
```

### Showcase Integration Checklist
- [ ] Individual component showcase in FluentComponentDemo
- [ ] Real-world application example in Playground
- [ ] Component exported from appropriate index.ts files
- [ ] Navigation updated with proper submenu structure
- [ ] TypeScript interfaces documented
- [ ] Modular vs monolithic approach justified

This architectural evolution should be considered for all new component development.