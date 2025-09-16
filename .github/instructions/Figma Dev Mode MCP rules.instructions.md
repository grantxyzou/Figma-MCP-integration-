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
- `src/components/FluentComponentDemo.tsx` - Component catalog and showcase structure
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

### Shared Components
```
src/components/shared/
├── ComponentShowcaseLayout.tsx    # Standard layout wrapper
└── index.ts                       # Export file
```

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

### Add to FluentComponentDemo
Update `src/components/FluentComponentDemo.tsx`:
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

## 10. Icon and Asset Management

### Icons from Figma MCP (REQUIRED)
**All icons MUST come from Figma MCP - never use custom or hardcoded SVG icons.**

#### Workflow for Icons:
1. Select icon component in Figma
2. Use `mcp_figma_get_code()` to extract authentic SVG asset URLs
3. Extract the asset URLs from the response (format: `http://localhost:3845/assets/[hash].svg`)
4. Use as constants in your component:

```typescript
// Example from InfoLabel implementation
const INFO_ICON_SMALL = 'http://localhost:3845/assets/76840a3f1c1371b867a829bd7d96c20b497c5fd6.svg';
const INFO_ICON_MEDIUM = 'http://localhost:3845/assets/78dc164d41f444140ae2e9a5278940c2f9415eba.svg';
const INFO_ICON_LARGE = 'http://localhost:3845/assets/1bd13c9aac0f9ed113aba28b987034704648c44d.svg';

// Use in component as img elements
<img src={INFO_ICON_SMALL} alt="Info" className="info-icon" />
```

#### Asset Server Requirements:
- Figma MCP server must be running on localhost:3845
- All authentic design assets are served from this endpoint
- Never approximate icons with custom SVG - always use authentic Figma assets
- Asset URLs follow pattern: `http://localhost:3845/assets/[unique-hash].svg`

#### Design Fidelity Benefits:
- 100% accurate to Figma design
- Automatic updates when Figma assets change
- Consistent visual language across components
- No manual SVG recreation required

## 11. Context Preservation

### For New Sessions
Always review these key files to understand current state:
1. `README.md` - Project overview and component status
2. `src/components/AdminDashboard.tsx` - Current metrics (line 1-100)
3. `src/components/FluentComponentDemo.tsx` - Component categories and navigation
4. `src/App.tsx` - Navigation structure and routing
5. `src/components/ComponentRegistry.ts` - Figma mappings

### Key Context Points
- **Current Status**: Multiple components implemented with authentic Figma assets
- **Active Components**: Button, Dropdown, Input, Accordion, Badge, PresenceBadge, DataGrid, Card, Drawer, Breadcrumb, InfoLabel
- **Asset Integration**: All icons sourced from Figma MCP server (localhost:3845)
- **Design System**: Microsoft Fluent 2 Web UI Kit
- **Responsive Target**: MacBook Pro 16" optimized (1200px max width)
- **Navigation**: Simplified single-level component demo structure

### MCP Integration Workflow
1. User selects component in Figma
2. Use `mcp_figma_get_metadata()` to get node ID
3. Use `mcp_figma_get_code()` to extract specifications
4. Implement React component matching exact specifications
5. Create showcase and update navigation
6. Update dashboard metrics and component registry

## 11. Icon and Asset Management

### Icons from Figma MCP (REQUIRED)
**All icons MUST come from Figma MCP - never use custom or hardcoded SVG icons.**

#### Workflow for Icons:
1. Select icon component in Figma
2. Use `mcp_figma_get_code()` to extract authentic SVG asset URLs
3. Extract the asset URLs from the response (format: `http://localhost:3845/assets/[hash].svg`)
4. Use as constants in your component:

```typescript
// Example from InfoLabel implementation
const INFO_ICON_SMALL = 'http://localhost:3845/assets/76840a3f1c1371b867a829bd7d96c20b497c5fd6.svg';
const INFO_ICON_MEDIUM = 'http://localhost:3845/assets/78dc164d41f444140ae2e9a5278940c2f9415eba.svg';
const INFO_ICON_LARGE = 'http://localhost:3845/assets/1bd13c9aac0f9ed113aba28b987034704648c44d.svg';

// Use in component as img elements
<img src={INFO_ICON_SMALL} alt="Info" className="info-icon" />

## 12. Implementation Reference: InfoLabel Component

### Complete Implementation Example
The InfoLabel component serves as a reference for the complete Figma-to-React workflow with proper MCP asset integration:

#### Figma Sources
- **Small Icon**: Node ID `323059:755`
- **Medium Icon**: Node ID `323059:756` 
- **Large Icon**: Node ID `323059:757`

#### File Structure Created
```
src/components/fluent/InfoLabel.tsx        # Main component with authentic Figma icons
src/components/showcases/InfoLabelShowcase.tsx  # Interactive demo (if created)
```

#### Key Implementation Features
1. **TypeScript Interfaces**:
   ```typescript
   interface InfoLabelProps {
     label: string;
     infoText?: string;
     size?: 'small' | 'medium' | 'large';
     required?: boolean;
     disabled?: boolean;
   }
   ```

2. **Authentic Figma Icons**: Uses real SVG assets from MCP server
   ```typescript
   const INFO_ICON_SMALL = 'http://localhost:3845/assets/76840a3f1c1371b867a829bd7d96c20b497c5fd6.svg';
   const INFO_ICON_MEDIUM = 'http://localhost:3845/assets/78dc164d41f444140ae2e9a5278940c2f9415eba.svg';
   const INFO_ICON_LARGE = 'http://localhost:3845/assets/1bd13c9aac0f9ed113aba28b987034704648c44d.svg';
   ```

3. **Size Variants**: Small (14px), Medium (16px), Large (18px) with corresponding icons
4. **Interactive States**: Tooltip on hover, focus management
5. **Accessibility**: ARIA labels, screen reader support, keyboard navigation

#### MCP Workflow Demonstrated
1. User selected icon components in Figma (nodes 323059:755-757)
2. Used `mcp_figma_get_code()` to extract authentic SVG asset URLs
3. Replaced custom SVG icons with real Figma assets for 100% design fidelity
4. Implemented proper asset constants and img element usage
5. Demonstrated complete MCP integration workflow

This implementation demonstrates the **correct approach** for icon integration - always use authentic Figma assets via MCP, never custom approximations.

## 13. Common Patterns

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