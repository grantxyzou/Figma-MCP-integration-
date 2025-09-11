# Fluent Drawer Component

A comprehensive Drawer component implementation from the Fluent 2 Web Design System, directly imported from Figma via MCP integration.

## Overview

The FluentDrawer component provides both overlay and inline drawer functionality with multiple size variants, following the exact specifications from Microsoft's Fluent 2 Design System.

## Features

- **Two Types**: Overlay (modal) and Inline (sidebar) drawers
- **Three Sizes**: Small (320px), Medium (592px), Large (940px)
- **Accessible**: Full keyboard navigation and screen reader support
- **Responsive**: Adapts to mobile viewports
- **Customizable**: Support for custom headers, footers, and content
- **Actions**: Built-in support for primary, secondary, and tertiary actions
- **Animations**: Smooth transitions with respect for reduced motion preferences

## Figma Source

- **Overlay Drawer**: Node ID `145579:764`
- **Inline Drawer**: Node ID `145579:767`
- **Source**: Fluent 2 Web Design System in Figma

## Usage

### Basic Overlay Drawer

```tsx
import { FluentDrawer } from './components/fluent';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
      
      <FluentDrawer
        type="overlay"
        size="medium"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Settings"
        primaryAction={{
          label: 'Save',
          onClick: () => {
            console.log('Save clicked');
            setIsOpen(false);
          }
        }}
        secondaryAction={{
          label: 'Cancel',
          onClick: () => setIsOpen(false)
        }}
      >
        <div>Your content here</div>
      </FluentDrawer>
    </>
  );
}
```

### Basic Inline Drawer

```tsx
<div style={{ display: 'flex', height: '100vh' }}>
  <FluentDrawer
    type="inline"
    size="small"
    title="Navigation"
  >
    <nav>Your navigation content</nav>
  </FluentDrawer>
  
  <main style={{ flex: 1 }}>
    Your main content
  </main>
</div>
```

### Custom Header and Footer

```tsx
import { FluentDrawer, DrawerHeader, DrawerFooter } from './components/fluent';

<FluentDrawer
  type="overlay"
  size="large"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  header={
    <DrawerHeader 
      title="Custom Header" 
      onClose={() => setIsOpen(false)}
    />
  }
  footer={
    <DrawerFooter>
      <FluentButton style="Primary">Custom Action</FluentButton>
      <FluentButton style="Outline">Another Action</FluentButton>
    </DrawerFooter>
  }
>
  <div>Content with custom header and footer</div>
</FluentDrawer>
```

## Props

### FluentDrawer Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'overlay' \| 'inline'` | `'overlay'` | Type of drawer |
| `size` | `'small' \| 'medium' \| 'large'` | `'small'` | Size of the drawer |
| `isOpen` | `boolean` | `true` | Whether the drawer is open (mainly for overlay) |
| `onClose` | `() => void` | - | Callback when drawer should close |
| `title` | `string` | - | Title displayed in header |
| `children` | `ReactNode` | - | Content of the drawer body |
| `header` | `ReactNode` | - | Custom header component |
| `footer` | `ReactNode` | - | Custom footer component |
| `primaryAction` | `ActionProps` | - | Primary action button config |
| `secondaryAction` | `ActionProps` | - | Secondary action button config |
| `tertiaryAction` | `TertiaryActionProps` | - | Tertiary action button config |
| `className` | `string` | `''` | Additional CSS class |
| `data-testid` | `string` | - | Test identifier |

### ActionProps

```tsx
interface ActionProps {
  label: string;
  onClick: () => void;
}
```

### TertiaryActionProps

```tsx
interface TertiaryActionProps {
  onClick: () => void;
}
```

## Size Specifications

- **Small**: 320px width
- **Medium**: 592px width  
- **Large**: 940px width

## Accessibility

- **ARIA Roles**: `dialog` for overlay, `complementary` for inline
- **Modal Behavior**: `aria-modal="true"` for overlay drawers
- **Keyboard Support**: 
  - Escape key closes overlay drawers
  - Tab navigation within drawer
  - Focus trapping for overlay drawers
- **Screen Reader**: Proper labeling and announcements

## Design Tokens

The component uses Fluent 2 design tokens:

```css
--Drawer-Shadow-Overlay: 0px 32px 64px 0px rgba(0, 0, 0, 0.24), 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
--Brand-Background-2-Rest: #ebf3fc;
--Spacing-Vertical-XXL: 24px;
--Spacing-Horizontal-XXL: 24px;
```

## Responsive Behavior

- **Mobile**: On screens < 768px, overlay drawers expand to full width
- **Desktop**: Maintains specified size constraints
- **Reduced Motion**: Animations are disabled when `prefers-reduced-motion: reduce`

## Common Patterns

### Settings Panel

```tsx
<FluentDrawer
  type="inline"
  size="small"
  title="Settings"
  primaryAction={{ label: 'Apply', onClick: applySettings }}
  secondaryAction={{ label: 'Reset', onClick: resetSettings }}
>
  <SettingsForm />
</FluentDrawer>
```

### Property Inspector

```tsx
<FluentDrawer
  type="overlay"
  size="medium"
  isOpen={showProperties}
  onClose={() => setShowProperties(false)}
  title="Properties"
>
  <PropertyInspector selectedItem={selectedItem} />
</FluentDrawer>
```

### Navigation Drawer

```tsx
<FluentDrawer
  type="inline"
  size="small"
  title="Navigation"
>
  <NavigationMenu />
</FluentDrawer>
```

## Styling

The component includes comprehensive CSS with Fluent 2 design system compliance:

- Semantic color tokens
- Consistent spacing
- Proper typography
- Interactive states (hover, focus, pressed)
- Smooth animations
- Dark mode support (via design tokens)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Related Components

- **FluentButton**: Used in drawer actions
- **DrawerHeader**: Standalone header component
- **DrawerFooter**: Standalone footer component
