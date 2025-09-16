# Fluent Link

## Overview
Interactive link component following Microsoft's Fluent 2 Design System with multiple style variants and comprehensive state management. Supports both internal navigation and external links with authentic Figma icons and proper accessibility features.

## Figma Source
- **Default Rest Node ID**: `6401:122465`
- **Default Hover Node ID**: `6401:122474`
- **Default Pressed Node ID**: `6401:122488`
- **Default Focused Node ID**: `6401:122502`
- **Default Disabled Node ID**: `6401:122869`
- **Subtle Rest Node ID**: `6401:122632`
- **Subtle Hover Node ID**: `6401:122640`
- **Subtle Pressed Node ID**: `6401:122644`
- **Subtle Focused Node ID**: `6401:122636`
- **Subtle Disabled Node ID**: `6401:122883`
- **OnBrand Rest Node ID**: `6401:122744`
- **OnBrand Hover Node ID**: `6401:122748`
- **OnBrand Pressed Node ID**: `6401:122752`
- **OnBrand Focused Node ID**: `6401:122756`
- **OnBrand Disabled Node ID**: `6401:123019`
- **Inverted Rest Node ID**: `348781:2232`
- **Inverted Hover Node ID**: `348781:2237`
- **Inverted Pressed Node ID**: `348781:2242`
- **Inverted Focused Node ID**: `348781:2247`
- **Inverted Disabled Node ID**: `348781:2252`
- **Design File**: Fluent 2 Web Design System - Link Component
- **Last Updated**: September 16, 2025

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | The text content of the link (required) |
| variant | 'default' \| 'subtle' \| 'onbrand' \| 'inverted' | 'default' | Visual style variant |
| href | string | - | URL to navigate to |
| external | boolean | false | Whether the link opens in a new tab |
| showIcon | boolean | true | Whether to show an external link icon |
| disabled | boolean | false | Whether the link is disabled |
| visited | boolean | false | Whether the link is currently visited |
| className | string | '' | Additional CSS class name |
| style | React.CSSProperties | - | Inline styles |
| onClick | (event: React.MouseEvent) => void | - | Click handler for non-href links |
| aria-label | string | - | Accessibility label |
| target | string | - | HTML target attribute |
| rel | string | - | HTML rel attribute |

## Usage Examples
```tsx
import { Link } from './components/fluent';

// Basic internal link
<Link href="/dashboard">Go to Dashboard</Link>

// External link with icon
<Link href="https://microsoft.com" external>
  Visit Microsoft
</Link>

// Different style variants
<Link href="#" variant="default">Default link</Link>
<Link href="#" variant="subtle">Subtle link</Link>
<Link href="#" variant="onbrand">OnBrand link</Link>
<Link href="#" variant="inverted">Inverted link</Link>

// Button-style link
<Link onClick={() => handleAction()} showIcon>
  Perform Action
</Link>

// Without external icon
<Link href="/internal" showIcon={false}>
  Internal Navigation
</Link>

// Disabled state
<Link href="#" disabled>
  Disabled Link
</Link>
```

## Variants

### Style Variants
- **Default**: Primary blue color (`#115ea3`) - main brand links
- **Subtle**: Gray color (`#424242`) - secondary navigation links  
- **OnBrand**: Brand blue color - prominent call-to-action links
- **Inverted**: White/light colors - for use on dark backgrounds

### Interactive States
- **Rest/Visited**: Normal static state
- **Hover**: Underlined with darker color and icon change
- **Pressed**: Darker color when clicked/pressed
- **Focused**: 2px blue focus outline for keyboard navigation
- **Disabled**: Grayed out, non-interactive state

### Icon Options
- **With Icon**: Shows external link icon (default for external links)
- **Without Icon**: Text only (for internal navigation)
- **Button Links**: JavaScript onClick handlers with icon

## Accessibility
- **ARIA Labels**: Proper link semantics with optional aria-label
- **Keyboard Navigation**: Full support for Tab, Enter, and Space keys
- **Focus Management**: Clear 2px blue focus indicators
- **Screen Reader**: Semantic HTML with proper link announcements
- **External Links**: Automatic `rel="noopener noreferrer"` for security
- **Disabled State**: Prevents interaction and tab navigation

## Design Tokens
The Link component uses authentic Figma design tokens:
- **Colors**: 
  - Default: `#115ea3` (Brand/Foreground/Link/Rest)
  - Default Hover: `#0f548c` (Brand/Foreground/Link/Hover)
  - Subtle: `#424242` (Neutral/Foreground/2/Link/Rest)
- **Typography**: 
  - Font: Segoe UI Regular
  - Size: 14px
  - Line Height: 20px
- **Spacing**: 4px gap between text and icon
- **Focus**: 2px solid `#0078d4` outline

## Icon Assets
All icons are sourced from the Figma MCP server for 100% design fidelity:
- **Default External Icon**: `http://localhost:3845/assets/2eba5483ab13de2a9fd3d1fd16f374a84503830d.svg`
- **Subtle External Icon**: `http://localhost:3845/assets/6372858cd75526858ef1340e33431aa7efa7030f.svg`
- **Hover External Icon**: `http://localhost:3845/assets/4032066a61ba58f1e91a54377dd2e53c47cc3715.svg`

## Implementation Details

### State Management
The Link component uses React state to track:
- `isHovered`: For hover effects and underlines
- `isPressed`: For pressed/active state styling
- `isFocused`: For keyboard focus indicators

### Color Transitions
Each variant has specific color transitions:
```typescript
// Default variant
Rest: #115ea3 → Hover: #0f548c → Pressed: #0a4473

// Subtle variant  
Rest: #424242 → Hover: #383838 → Pressed: #2b2b2b
```

### Hover Effects
- **Underline**: Appears on hover using border-top
- **Icon Change**: Default variant changes icon on hover
- **Color Transition**: Smooth color changes between states

### MCP Integration
This component demonstrates proper Figma MCP workflow:
1. Selected Link components in Figma (multiple variants and states)
2. Used `mcp_figma_get_code()` to extract authentic specifications
3. Implemented with exact Figma measurements and authentic SVG assets
4. Preserved all design tokens and interactive behaviors

## Common Use Cases
- **Navigation Menus**: Use subtle variant for secondary navigation
- **Content Links**: Use default variant for in-content links
- **Call-to-Actions**: Use onbrand variant for prominent actions
- **External References**: Use with external=true and icon
- **Dark Themes**: Use inverted variant on dark backgrounds

## Changelog
- **v1.0.0** - Initial implementation with Figma MCP integration (September 16, 2025)
  - Four style variants (Default, Subtle, OnBrand, Inverted)
  - Five interactive states per variant
  - Authentic Figma icon assets
  - Complete accessibility support
  - External link handling
  - Keyboard navigation support