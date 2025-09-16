import React, { useState } from 'react';
import { ComponentShowcaseLayout } from '../shared/ComponentShowcaseLayout';
import { Menu, MenuItem, MenuSplitItem, MenuSection, MenuTrigger, CompleteMenu } from '../fluent/Menu';

// Authentic Figma icons
const homeIcon = "http://localhost:3845/assets/3434db8031020a7cb07deb7044c4bc54e68f8fe2.svg";
const saveIcon = "http://localhost:3845/assets/5c9804408908055d5dc867e5fa84fc35ad8883ff.svg";
const copyIcon = "http://localhost:3845/assets/9a5844b493c5ab796e2882c5c93d4f01228c4569.svg";
const deleteIcon = "http://localhost:3845/assets/54619161328c39dc236e48d49b023170cd1c2f6e.svg";

interface MenuShowcaseProps {
  onBackToShowcase?: () => void;
}

export function MenuShowcase({ onBackToShowcase }: MenuShowcaseProps) {
  const [basicMenuOpen, setBasicMenuOpen] = useState(false);
  const [complexMenuOpen, setComplexMenuOpen] = useState(false);
  const [splitMenuOpen, setSplitMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set(['item1']));

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    console.log(`Menu item clicked: ${item}`);
  };

  const handleSplitClick = (item: string) => {
    console.log(`Split action for: ${item}`);
  };

  const toggleChecked = (item: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(item)) {
      newChecked.delete(item);
    } else {
      newChecked.add(item);
    }
    setCheckedItems(newChecked);
  };

  return (
    <ComponentShowcaseLayout
      title="Menu"
      subtitle="Navigation Component"
      description="Context menus and dropdowns with support for items, sections, and split actions. Follows Microsoft Fluent 2 Design System with authentic Figma assets."
      onBackToShowcase={onBackToShowcase}
    >
      {/* Basic Menu */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Basic Menu</h3>
          <p className="text-gray-600 mb-4">Simple menu with standard items and icons.</p>
          
          <div className="relative inline-block">
            <MenuTrigger 
              onClick={() => setBasicMenuOpen(!basicMenuOpen)}
              className="mb-4"
            >
              Basic Menu
            </MenuTrigger>
            
            <div className="absolute top-full left-0 mt-1">
              <Menu 
                open={basicMenuOpen} 
                onOpenChange={setBasicMenuOpen}
                aria-label="Basic menu example"
              >
                <MenuItem 
                  icon={homeIcon}
                  onClick={() => handleItemClick('home')}
                >
                  Home
                </MenuItem>
                <MenuItem 
                  icon={saveIcon}
                  onClick={() => handleItemClick('save')}
                  shortcut="Ctrl+S"
                >
                  Save
                </MenuItem>
                <MenuItem 
                  icon={copyIcon}
                  onClick={() => handleItemClick('copy')}
                  shortcut="Ctrl+C"
                >
                  Copy
                </MenuItem>
                <MenuItem 
                  icon={deleteIcon}
                  onClick={() => handleItemClick('delete')}
                  disabled
                >
                  Delete (Disabled)
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>

        {/* Menu States */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Menu Item States</h3>
          <p className="text-gray-600 mb-4">All interactive states of menu items.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="font-medium">Rest State</p>
              <div className="border rounded p-2">
                <MenuItem icon={homeIcon}>Normal Item</MenuItem>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="font-medium">Selected State</p>
              <div className="border rounded p-2">
                <MenuItem icon={saveIcon} selected>Selected Item</MenuItem>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="font-medium">Disabled State</p>
              <div className="border rounded p-2">
                <MenuItem icon={deleteIcon} disabled>Disabled Item</MenuItem>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="font-medium">With Shortcut</p>
              <div className="border rounded p-2">
                <MenuItem icon={copyIcon} shortcut="Ctrl+C">Copy</MenuItem>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="font-medium">With Submenu</p>
              <div className="border rounded p-2">
                <MenuItem icon={homeIcon} hasSubmenu>More Options</MenuItem>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="font-medium">Secondary Text</p>
              <div className="border rounded p-2">
                <MenuItem icon={saveIcon} secondaryText="Recently used">Save As</MenuItem>
              </div>
            </div>
          </div>
        </div>

        {/* Complex Menu with Sections */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Sectioned Menu</h3>
          <p className="text-gray-600 mb-4">Menu with sections, dividers, and mixed content types.</p>
          
          <div className="relative inline-block">
            <MenuTrigger 
              onClick={() => setComplexMenuOpen(!complexMenuOpen)}
              className="mb-4"
            >
              Complex Menu
            </MenuTrigger>
            
            <div className="absolute top-full left-0 mt-1">
              <Menu 
                open={complexMenuOpen} 
                onOpenChange={setComplexMenuOpen}
                aria-label="Complex menu example"
                minWidth={280}
              >
                <MenuSection title="File Operations">
                  <MenuItem 
                    icon={homeIcon}
                    onClick={() => handleItemClick('new')}
                    shortcut="Ctrl+N"
                  >
                    New File
                  </MenuItem>
                  <MenuItem 
                    icon={saveIcon}
                    onClick={() => handleItemClick('open')}
                    shortcut="Ctrl+O"
                  >
                    Open File
                  </MenuItem>
                  <MenuItem 
                    icon={saveIcon}
                    onClick={() => handleItemClick('save')}
                    shortcut="Ctrl+S"
                  >
                    Save
                  </MenuItem>
                </MenuSection>
                
                <MenuSection divider>
                  <div />
                </MenuSection>
                
                <MenuSection title="Edit Operations">
                  <MenuItem 
                    icon={copyIcon}
                    onClick={() => handleItemClick('copy')}
                    shortcut="Ctrl+C"
                  >
                    Copy
                  </MenuItem>
                  <MenuItem 
                    icon={copyIcon}
                    onClick={() => handleItemClick('paste')}
                    shortcut="Ctrl+V"
                  >
                    Paste
                  </MenuItem>
                  <MenuItem 
                    icon={deleteIcon}
                    onClick={() => handleItemClick('delete')}
                    shortcut="Del"
                  >
                    Delete
                  </MenuItem>
                </MenuSection>
                
                <MenuSection divider>
                  <div />
                </MenuSection>
                
                <MenuSection title="View Options">
                  <MenuItem 
                    icon={homeIcon}
                    selected={checkedItems.has('view1')}
                    onClick={() => toggleChecked('view1')}
                  >
                    Show Toolbar
                  </MenuItem>
                  <MenuItem 
                    icon={homeIcon}
                    selected={checkedItems.has('view2')}
                    onClick={() => toggleChecked('view2')}
                  >
                    Show Status Bar
                  </MenuItem>
                  <MenuItem 
                    icon={homeIcon}
                    hasSubmenu
                  >
                    View Mode
                  </MenuItem>
                </MenuSection>
              </Menu>
            </div>
          </div>
        </div>

        {/* Split Items Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Split Items Menu</h3>
          <p className="text-gray-600 mb-4">Menu items with split button functionality for additional actions.</p>
          
          <div className="relative inline-block">
            <MenuTrigger 
              onClick={() => setSplitMenuOpen(!splitMenuOpen)}
              className="mb-4"
            >
              Split Items Menu
            </MenuTrigger>
            
            <div className="absolute top-full left-0 mt-1">
              <Menu 
                open={splitMenuOpen} 
                onOpenChange={setSplitMenuOpen}
                aria-label="Split items menu example"
              >
                <MenuSplitItem 
                  icon={saveIcon}
                  onClick={() => handleItemClick('save')}
                  onSplitClick={() => handleSplitClick('save')}
                  shortcut="Ctrl+S"
                >
                  Save
                </MenuSplitItem>
                <MenuSplitItem 
                  icon={copyIcon}
                  onClick={() => handleItemClick('copy')}
                  onSplitClick={() => handleSplitClick('copy')}
                  shortcut="Ctrl+C"
                >
                  Copy
                </MenuSplitItem>
                <MenuSplitItem 
                  icon={homeIcon}
                  onClick={() => handleItemClick('export')}
                  onSplitClick={() => handleSplitClick('export')}
                  selected={selectedItem === 'export'}
                >
                  Export
                </MenuSplitItem>
                <MenuSplitItem 
                  icon={deleteIcon}
                  onClick={() => handleItemClick('delete')}
                  onSplitClick={() => handleSplitClick('delete')}
                  disabled
                >
                  Delete (Disabled)
                </MenuSplitItem>
              </Menu>
            </div>
          </div>
        </div>

        {/* Split Item States */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Split Item States</h3>
          <p className="text-gray-600 mb-4">All interactive states of split menu items.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-medium">Normal Split Item</p>
              <div className="border rounded p-2">
                <MenuSplitItem 
                  icon={saveIcon}
                  onClick={() => handleItemClick('normal')}
                  onSplitClick={() => handleSplitClick('normal')}
                >
                  Normal Split Item
                </MenuSplitItem>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="font-medium">Selected Split Item</p>
              <div className="border rounded p-2">
                <MenuSplitItem 
                  icon={copyIcon}
                  selected
                  onClick={() => handleItemClick('selected')}
                  onSplitClick={() => handleSplitClick('selected')}
                >
                  Selected Split Item
                </MenuSplitItem>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="font-medium">Disabled Split Item</p>
              <div className="border rounded p-2">
                <MenuSplitItem 
                  icon={deleteIcon}
                  disabled
                  onClick={() => handleItemClick('disabled')}
                  onSplitClick={() => handleSplitClick('disabled')}
                >
                  Disabled Split Item
                </MenuSplitItem>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="font-medium">Split Item with Shortcut</p>
              <div className="border rounded p-2">
                <MenuSplitItem 
                  icon={homeIcon}
                  shortcut="Ctrl+E"
                  onClick={() => handleItemClick('shortcut')}
                  onSplitClick={() => handleSplitClick('shortcut')}
                >
                  Export Document
                </MenuSplitItem>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Information */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Accessibility Features</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <ul className="space-y-2 text-sm">
              <li><strong>Keyboard Navigation:</strong> Use Tab to navigate, Enter/Space to activate items</li>
              <li><strong>Screen Reader:</strong> Proper ARIA labels and roles for menu semantics</li>
              <li><strong>Focus Management:</strong> Clear focus indicators with 2px blue outline</li>
              <li><strong>State Announcements:</strong> Selected, disabled, and checked states are announced</li>
              <li><strong>Escape Handling:</strong> Press Escape to close any open menu</li>
              <li><strong>Click Outside:</strong> Menus close when clicking outside the menu area</li>
            </ul>
          </div>
        </div>

        {/* Usage Examples */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Usage Examples</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <pre className="text-sm overflow-x-auto">
{`// Basic Menu
<Menu open={isOpen} onOpenChange={setIsOpen}>
  <MenuItem icon={homeIcon} onClick={handleClick}>
    Home
  </MenuItem>
  <MenuItem icon={saveIcon} shortcut="Ctrl+S">
    Save
  </MenuItem>
</Menu>

// Menu with Sections
<Menu open={isOpen} onOpenChange={setIsOpen}>
  <MenuSection title="File Operations">
    <MenuItem icon={saveIcon}>Save</MenuItem>
    <MenuItem icon={homeIcon}>Open</MenuItem>
  </MenuSection>
  <MenuSection divider />
  <MenuSection title="Edit">
    <MenuItem icon={copyIcon}>Copy</MenuItem>
  </MenuSection>
</Menu>

// Split Items
<MenuSplitItem 
  icon={saveIcon}
  onClick={handleMainAction}
  onSplitClick={handleSplitAction}
  shortcut="Ctrl+S"
>
  Save Document
</MenuSplitItem>`}
            </pre>
          </div>
        </div>

        {/* Complete Menu from Figma */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Complete Menu (Figma Design)</h3>
          <p className="text-gray-600 mb-4">
            Complete menu implementation matching the exact Figma design with sections, headers, actions, and shortcuts.
            <br />
            <span className="text-sm text-gray-500">Figma Node ID: 329640:13586</span>
          </p>
          
          <div className="flex flex-wrap gap-4 items-start">
            <CompleteMenu />
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-w-md">
              <h4 className="font-medium mb-2">Features</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Section headers with proper typography</li>
                <li>• Menu items with authentic Figma icons</li>
                <li>• Split items with shortcut text and chevrons</li>
                <li>• Section dividers for visual hierarchy</li>
                <li>• Exact spacing and styling from Figma</li>
                <li>• Hover states and interactions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Design Tokens */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Design Tokens</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium mb-2">Colors</h4>
              <ul className="space-y-1 text-sm">
                <li><span className="inline-block w-4 h-4 bg-[#424242] rounded mr-2"></span>Text Rest: #424242</li>
                <li><span className="inline-block w-4 h-4 bg-[#242424] rounded mr-2"></span>Text Hover: #242424</li>
                <li><span className="inline-block w-4 h-4 bg-[#616161] rounded mr-2"></span>Secondary: #616161</li>
                <li><span className="inline-block w-4 h-4 bg-[#bdbdbd] rounded mr-2"></span>Disabled: #bdbdbd</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium mb-2">Backgrounds</h4>
              <ul className="space-y-1 text-sm">
                <li><span className="inline-block w-4 h-4 bg-white border rounded mr-2"></span>Rest: #ffffff</li>
                <li><span className="inline-block w-4 h-4 bg-neutral-100 rounded mr-2"></span>Hover: #f5f5f5</li>
                <li><span className="inline-block w-4 h-4 bg-[#e0e0e0] rounded mr-2"></span>Pressed: #e0e0e0</li>
                <li><span className="inline-block w-4 h-4 bg-[#ebebeb] rounded mr-2"></span>Selected: #ebebeb</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ComponentShowcaseLayout>
  );
}

export default MenuShowcase;