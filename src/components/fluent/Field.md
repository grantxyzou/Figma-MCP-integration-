# Fluent Field

## Overview
Complete form field component that combines label, info tooltip, input wrapper, and error handling in one cohesive unit. The Field component follows Microsoft's Fluent 2 Design System and provides a unified interface for creating accessible, consistent form fields throughout the application.

## Figma Source
- **Small Field Node ID**: `32182:95361`
- **Medium Field Node ID**: `32182:95337`
- **Large Field Node ID**: `32182:95385`
- **Design File**: Fluent 2 Web Design System - Field Component
- **Last Updated**: September 16, 2025

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | The label text for the field (required) |
| size | 'Small' \| 'Medium' \| 'Large' | 'Medium' | Size variant of the field |
| required | boolean | false | Whether the field is required |
| disabled | boolean | false | Whether the field is disabled |
| infoContent | React.ReactNode | - | Info tooltip content |
| infoTitle | string | 'More information' | Info tooltip title |
| errorMessage | string | - | Error message to display |
| helperText | string | - | Helper text to display when no error |
| children | React.ReactNode | - | The form input component to render (required) |
| className | string | '' | Additional CSS class name |
| style | React.CSSProperties | - | Inline styles |
| htmlFor | string | - | HTML for attribute for label association |
| id | string | - | Accessibility id |
| onInfoClick | () => void | - | Callback when info button is clicked |

## Usage Examples
```tsx
import { Field } from './components/fluent';
import { FluentInput } from './components/fluent';

// Basic field
<Field label="Email Address" required htmlFor="email">
  <FluentInput id="email" type="email" placeholder="user@example.com" />
</Field>

// Field with info tooltip
<Field 
  label="Password" 
  required 
  infoContent="Must be at least 8 characters with numbers and symbols"
  infoTitle="Password Requirements"
  htmlFor="password"
>
  <FluentInput id="password" type="password" />
</Field>

// Field with error message
<Field 
  label="Username" 
  required 
  errorMessage="Username already exists"
  htmlFor="username"
>
  <FluentInput id="username" error />
</Field>

// Field with helper text
<Field 
  label="Display Name" 
  helperText="This name will be visible to other users"
  htmlFor="display-name"
>
  <FluentInput id="display-name" />
</Field>
```

## Variants

### Size Variants
- **Small**: 12px regular text, 10px info icon, 20px icon button
- **Medium**: 14px regular text, 14px info icon, 24px icon button  
- **Large**: 16px semibold text, 16px info icon, 24px icon button

### State Variants
- **Default**: Normal interactive state
- **Required**: Shows red asterisk (*) after label
- **Disabled**: Grayed out with reduced opacity
- **Error**: Shows error icon and red error message
- **Helper**: Shows gray helper text

## Accessibility
- **ARIA Labels**: Proper label association with `htmlFor` and `id`
- **Keyboard Navigation**: Info button supports Enter and Space key activation
- **Screen Reader**: Tooltip content announced with `aria-describedby`
- **Focus Management**: Clear focus indicators on all interactive elements
- **Required Indicator**: Asterisk properly labeled as "Required" for screen readers

## Design Tokens
The Field component uses authentic Figma design tokens:
- **Colors**: 
  - Label text: `#242424` (Neutral/Foreground/1/Rest)
  - Required indicator: `#b10e1c` (Status/Danger/Foreground/1/Rest)
  - Error text: `#b10e1c` (Status/Danger/Foreground/1/Rest)
  - Helper text: `#424242` (Neutral/Foreground/2/Rest)
- **Typography**: 
  - Small: 12px/16px Segoe UI Regular
  - Medium: 14px/20px Segoe UI Regular
  - Large: 16px/22px Segoe UI Semibold
- **Spacing**: 4px gaps, 2px padding variations by size
- **Icons**: Authentic SVG assets from Figma MCP server

## Icon Assets
All icons are sourced from the Figma MCP server for 100% design fidelity:
- **Info Icon Small**: `http://localhost:3845/assets/835ec72dc7f2a79b8b79763b891244c4714407b9.svg`
- **Info Icon Medium**: `http://localhost:3845/assets/78dc164d41f444140ae2e9a5278940c2f9415eba.svg`
- **Info Icon Large**: `http://localhost:3845/assets/1bd13c9aac0f9ed113aba28b987034704648c44d.svg`
- **Error Icon**: `http://localhost:3845/assets/74b5a4996e546991bd6ed9879cd55d2796da2b28.svg`

## Implementation Details

### Component Architecture
The Field component follows a composition pattern where you pass form controls as children:
```tsx
<Field label="..." props>
  <FluentInput {...inputProps} />
</Field>
```

This design provides:
- **Flexibility**: Works with any input component
- **Consistency**: Unified spacing and styling
- **Accessibility**: Proper label/input association
- **Error Handling**: Built-in error display

### MCP Integration
This component demonstrates the proper Figma MCP workflow:
1. Selected Field components in Figma (nodes 32182:95361, 32182:95337, 32182:95385)
2. Used `mcp_figma_get_code()` to extract authentic specifications
3. Implemented with exact Figma measurements and authentic SVG assets
4. Preserved all design tokens and visual fidelity

### Comparison to Separate Components
The Field component replaces the need for separate:
- `Label` component
- `InfoLabel` component  
- `FormField` wrapper
- Manual error handling

This provides better UX consistency and easier development workflow.

## Changelog
- **v1.0.0** - Initial implementation with Figma MCP integration (September 16, 2025)
  - Three size variants (Small, Medium, Large)
  - Authentic Figma icon assets
  - Complete accessibility support
  - Error and helper text states
  - Info tooltip functionality