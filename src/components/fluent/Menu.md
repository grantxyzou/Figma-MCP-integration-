# Fluent Menu

## Overview
Complete menu system for context menus and dropdown navigation following Microsoft's Fluent 2 Design System. Includes Menu container, MenuItem, MenuSplitItem, MenuSection, and MenuTrigger components with comprehensive state management and authentic Figma assets.

## Figma Source
### Menu Container
- **Default Menu Node ID**: `301778:9075`
- **Custom Menu Node ID**: `301778:9335`

### Menu Items
- **MenuItem Rest Node ID**: `299494:94466`
- **MenuItem Rest (Checked) Node ID**: `319745:157888`
- **MenuItem Hover Node ID**: `314466:2347`
- **MenuItem Pressed Node ID**: `299494:94482`
- **MenuItem Selected Node ID**: `299494:94498`
- **MenuItem Disabled Node ID**: `299494:94514`
- **MenuItem Disabled (Checked) Node ID**: `319754:1140`

### Menu Split Items
- **MenuSplitItem Rest Node ID**: `299494:94626`
- **MenuSplitItem Rest (Checked) Node ID**: `319754:1119`
- **MenuSplitItem Hover Node ID**: `299494:94642`
- **MenuSplitItem Pressed Node ID**: `299494:94658`
- **MenuSplitItem Selected Node ID**: `299494:94674`
- **MenuSplitItem Disabled Node ID**: `299494:94690`
- **MenuSplitItem Disabled (Checked) Node ID**: `319754:1161`

### Menu Sections
- **MenuSection with Title Node ID**: `299494:95293`
- **MenuSection Divider Node ID**: `299494:95358`

- **Design File**: Fluent 2 Web Design System - Menu Component
- **Last Updated**: September 16, 2025

## Components

### Menu
Main container component for menu content with positioning and state management.

#### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Menu items and sections to display (required) |
| open | boolean | false | Whether the menu is open |
| onOpenChange | (open: boolean) => void | - | Callback when menu open state changes |
| customContent | React.ReactNode | - | Custom content instead of default items |
| className | string | '' | Additional CSS class name |
| placement | 'bottom-start' \| 'bottom-end' \| 'top-start' \| 'top-end' | 'bottom-start' | Position relative to trigger |
| closeOnSelect | boolean | true | Whether menu closes on item selection |
| minWidth | number | 260 | Minimum width of the menu |
| maxHeight | number | 400 | Maximum height before scrolling |
| aria-label | string | 'Menu' | Accessibility label |

### MenuItem
Individual menu item with icon, text, and interactive states.

#### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Text content of the menu item (required) |
| disabled | boolean | false | Whether the item is disabled |
| selected | boolean | false | Whether the item is selected/checked |
| icon | React.ReactNode \| string | - | Icon to display (20px SVG or React node) |
| secondaryText | string | - | Secondary text displayed on the right |
| onClick | (event: React.MouseEvent) => void | - | Click handler |
| className | string | '' | Additional CSS class name |
| hasSubmenu | boolean | false | Whether to show chevron for submenu |
| shortcut | string | - | Keyboard shortcut text |
| role | string | 'menuitem' | Role for accessibility |
| aria-label | string | - | ARIA label |

### MenuSplitItem
Menu item with split button functionality for additional actions.

#### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Text content of the menu item (required) |
| disabled | boolean | false | Whether the item is disabled |
| selected | boolean | false | Whether the item is selected/checked |
| icon | React.ReactNode \| string | - | Icon to display (20px SVG or React node) |
| secondaryText | string | - | Secondary text displayed on the right |
| onClick | (event: React.MouseEvent) => void | - | Main item click handler |
| onSplitClick | (event: React.MouseEvent) => void | - | Handler for the split button (chevron) click |
| splitDisabled | boolean | false | Whether the split button is disabled |
| className | string | '' | Additional CSS class name |
| shortcut | string | - | Keyboard shortcut text |
| role | string | 'menuitem' | Role for accessibility |
| aria-label | string | - | ARIA label |

### MenuSection
Groups menu items with optional title or divider.

#### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Section header text |
| divider | boolean | false | Whether to show divider |
| children | React.ReactNode | - | Section content (required) |
| className | string | '' | Additional CSS class name |

### MenuTrigger
Button component to trigger menu display.

#### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Content to display in the trigger (required) |
| disabled | boolean | false | Whether trigger is disabled |
| className | string | '' | Additional CSS class name |
| onClick | (event: React.MouseEvent) => void | - | Click handler |

## Usage Examples

### Basic Menu
```tsx
import { Menu, MenuItem, MenuTrigger } from './components/fluent';

function BasicMenuExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <MenuTrigger onClick={() => setIsOpen(!isOpen)}>
        Actions
      </MenuTrigger>
      
      <Menu open={isOpen} onOpenChange={setIsOpen}>
        <MenuItem icon={saveIcon} shortcut="Ctrl+S">
          Save
        </MenuItem>
        <MenuItem icon={copyIcon} shortcut="Ctrl+C">
          Copy
        </MenuItem>
        <MenuItem icon={deleteIcon} disabled>
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
}
```

### Menu with Sections
```tsx
<Menu open={isOpen} onOpenChange={setIsOpen}>
  <MenuSection title="File Operations">
    <MenuItem icon={newIcon} shortcut="Ctrl+N">New</MenuItem>
    <MenuItem icon={openIcon} shortcut="Ctrl+O">Open</MenuItem>
    <MenuItem icon={saveIcon} shortcut="Ctrl+S">Save</MenuItem>
  </MenuSection>
  
  <MenuSection divider>
    <div />
  </MenuSection>
  
  <MenuSection title="Edit">
    <MenuItem icon={copyIcon} shortcut="Ctrl+C">Copy</MenuItem>
    <MenuItem icon={pasteIcon} shortcut="Ctrl+V">Paste</MenuItem>
  </MenuSection>
</Menu>
```

### Split Items Menu
```tsx
<Menu open={isOpen} onOpenChange={setIsOpen}>
  <MenuSplitItem 
    icon={saveIcon}
    onClick={handleSave}
    onSplitClick={handleSaveOptions}
    shortcut="Ctrl+S"
  >
    Save Document
  </MenuSplitItem>
  
  <MenuSplitItem 
    icon={exportIcon}
    onClick={handleExport}
    onSplitClick={handleExportOptions}
  >
    Export
  </MenuSplitItem>
</Menu>
```

### Context Menu with States
```tsx
<Menu open={isOpen} onOpenChange={setIsOpen}>
  <MenuItem icon={viewIcon} selected={showToolbar}>
    Show Toolbar
  </MenuItem>
  <MenuItem icon={viewIcon} selected={showStatusBar}>
    Show Status Bar
  </MenuItem>
  <MenuItem icon={settingsIcon} hasSubmenu>
    Preferences
  </MenuItem>
  <MenuItem icon={helpIcon} secondaryText="F1">
    Help
  </MenuItem>
</Menu>
```

## Interactive States

### MenuItem States
- **Rest**: Default appearance with neutral background
- **Hover**: Light gray background (#f5f5f5) with darker text
- **Pressed**: Darker gray background (#e0e0e0) during click
- **Selected**: Medium gray background (#ebebeb) for active/checked items
- **Focused**: 2px blue outline for keyboard navigation
- **Disabled**: Grayed out text and icons, non-interactive

### MenuSplitItem States
Split items have the same states as regular items, plus:
- **Split Button Hover**: Independent hover state for the chevron button
- **Split Button Pressed**: Visual feedback when chevron is clicked
- **Split Disabled**: Separate disabled state for the split button

## Accessibility Features

### Keyboard Navigation
- **Tab**: Navigate between menu triggers
- **Enter/Space**: Activate menu items
- **Arrow Keys**: Navigate within open menus
- **Escape**: Close any open menu
- **Home/End**: Navigate to first/last item

### Screen Reader Support
- **ARIA Labels**: Proper menu semantics with role="menu" and role="menuitem"
- **State Announcements**: Selected, disabled, and checked states are announced
- **Hierarchy**: MenuSections provide proper grouping with aria-labelledby
- **Focus Management**: Clear focus indicators and logical tab order

### Mouse Interaction
- **Click Outside**: Menus close when clicking outside the menu area
- **Hover States**: Visual feedback for all interactive elements
- **Split Actions**: Clear distinction between main and split button areas

## Design Tokens

### Colors
The Menu components use authentic Figma design tokens:
- **Text Colors**:
  - Rest: `#424242` (Neutral/Foreground/2/Rest)
  - Hover/Pressed/Selected: `#242424` (Neutral/Foreground/2/Hover)
  - Secondary: `#616161` (Neutral/Foreground/3/Rest)
  - Disabled: `#bdbdbd` (Neutral/Foreground/Disabled/Rest)

- **Background Colors**:
  - Rest: `#ffffff` (Neutral/Background/1/Rest)
  - Hover: `#f5f5f5` (Neutral/Background/1/Hover)
  - Pressed: `#e0e0e0` (Neutral/Background/1/Pressed)
  - Selected: `#ebebeb` (Neutral/Background/1/Selected)

- **Border Colors**:
  - Divider: `#d1d1d1` (Neutral/Stroke/1/Rest)
  - Section Divider: `#e0e0e0` (Neutral/Stroke/2/Rest)

### Typography
- **Font Family**: Segoe UI (Typography/Font-family/Base)
- **Font Size**: 14px (Typography/Body 1/Font-size)
- **Font Weight**: Regular 400 (Typography/Body 1/Weight)
- **Line Height**: 20px (Typography/Body 1/Line-height)
- **Section Headers**: 12px Semibold (Typography/Caption 1 Strong)

### Spacing
- **Menu Padding**: 4px (Web/Spacing/XS)
- **Item Padding**: 6px horizontal, 6px vertical (Web/Spacing/SNudge)
- **Icon Size**: 20px with 14px content area
- **Gap Between Items**: 2px (Web/Spacing/XXS)
- **Corner Radius**: 4px (Corner-radius/40)

### Shadows
- **Menu Shadow**: `0px 8px 16px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)`

## Icon Assets
All icons are sourced from the Figma MCP server for 100% design fidelity:
- **Default Icon**: `http://localhost:3845/assets/3434db8031020a7cb07deb7044c4bc54e68f8fe2.svg`
- **Chevron Down**: `http://localhost:3845/assets/f243546bba82e8ffcc565f2ef1fa212c4dd5dd08.svg`
- **State-specific Icons**: Different icons for hover, pressed, selected, and disabled states

## MCP Integration
This component demonstrates proper Figma MCP workflow:
1. Selected Menu components in Figma (multiple variants and states)
2. Used `mcp_figma_get_code()` to extract authentic specifications
3. Implemented with exact Figma measurements and authentic SVG assets
4. Preserved all design tokens and interactive behaviors
5. Maintained component registry mapping for all node IDs

## Common Use Cases

### Context Menus
```tsx
// Right-click context menu
<Menu open={contextMenuOpen} placement="bottom-start">
  <MenuItem icon={cutIcon} shortcut="Ctrl+X">Cut</MenuItem>
  <MenuItem icon={copyIcon} shortcut="Ctrl+C">Copy</MenuItem>
  <MenuItem icon={pasteIcon} shortcut="Ctrl+V">Paste</MenuItem>
</Menu>
```

### Toolbar Dropdowns
```tsx
// File menu in toolbar
<MenuTrigger onClick={() => setFileMenuOpen(!fileMenuOpen)}>
  File
</MenuTrigger>
<Menu open={fileMenuOpen} onOpenChange={setFileMenuOpen}>
  <MenuItem icon={newIcon}>New</MenuItem>
  <MenuItem icon={openIcon}>Open</MenuItem>
  <MenuSplitItem icon={saveIcon} onSplitClick={handleSaveAs}>
    Save
  </MenuSplitItem>
</Menu>
```

### Settings Menus
```tsx
// Preferences with checkable items
<Menu open={settingsOpen} onOpenChange={setSettingsOpen}>
  <MenuSection title="View Options">
    <MenuItem selected={showToolbar} onClick={toggleToolbar}>
      Show Toolbar
    </MenuItem>
    <MenuItem selected={showSidebar} onClick={toggleSidebar}>
      Show Sidebar
    </MenuItem>
  </MenuSection>
</Menu>
```

## Implementation Details

### State Management
The Menu system uses React state to track:
- **Menu Open State**: Controls visibility and positioning
- **Item States**: Hover, pressed, focused, and selected states
- **Split Button States**: Independent state for split actions

### Event Handling
- **Click Events**: Proper event propagation and preventDefault
- **Keyboard Events**: Full keyboard navigation support
- **Focus Events**: Managed focus for accessibility
- **Outside Clicks**: Automatic menu closing

### Performance
- **Lazy Rendering**: Menus only render when open
- **Event Cleanup**: Proper cleanup of event listeners
- **Optimized Re-renders**: Minimal re-rendering with React state

## Changelog
- **v1.0.0** - Initial implementation with Figma MCP integration (September 16, 2025)
  - Complete Menu system with authentic Figma assets
  - MenuItem with 7 interactive states
  - MenuSplitItem with split button functionality
  - MenuSection with titles and dividers
  - MenuTrigger for menu activation
  - Full keyboard navigation and accessibility
  - Component registry integration
  - Comprehensive documentation and examples