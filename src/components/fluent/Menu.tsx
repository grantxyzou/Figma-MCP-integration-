import React, { useState, useRef, useEffect } from 'react';

// Authentic Figma icons from MCP server
const chevronDownIcon = "http://localhost:3845/assets/f243546bba82e8ffcc565f2ef1fa212c4dd5dd08.svg";
const defaultIcon = "http://localhost:3845/assets/3434db8031020a7cb07deb7044c4bc54e68f8fe2.svg";

export interface MenuProps {
  /** Menu items to display */
  children: React.ReactNode;
  /** Whether the menu is open */
  open?: boolean;
  /** Callback when menu open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Custom menu content instead of default items */
  customContent?: React.ReactNode;
  /** Additional CSS class name */
  className?: string;
  /** Position relative to trigger */
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  /** Whether menu closes on item selection */
  closeOnSelect?: boolean;
  /** Minimum width of the menu */
  minWidth?: number;
  /** Maximum height before scrolling */
  maxHeight?: number;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

export interface MenuTriggerProps {
  /** Content to display in the trigger */
  children: React.ReactNode;
  /** Whether trigger is disabled */
  disabled?: boolean;
  /** Additional CSS class name */
  className?: string;
  /** Click handler */
  onClick?: (event: React.MouseEvent) => void;
}

export interface MenuItemProps {
  /** Text content of the menu item */
  children: React.ReactNode;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Whether the item is selected/checked */
  selected?: boolean;
  /** Icon to display (20px SVG or React node) */
  icon?: React.ReactNode | string;
  /** Secondary text displayed on the right */
  secondaryText?: string;
  /** Click handler */
  onClick?: (event: React.MouseEvent) => void;
  /** Additional CSS class name */
  className?: string;
  /** Whether to show chevron for submenu */
  hasSubmenu?: boolean;
  /** Keyboard shortcut text */
  shortcut?: string;
  /** Role for accessibility */
  role?: string;
  /** ARIA label */
  'aria-label'?: string;
  /** Figma node ID for authentic styling */
  'data-node-id'?: string;
}

export interface MenuSplitItemProps extends Omit<MenuItemProps, 'hasSubmenu'> {
  /** Handler for the split button (chevron) click */
  onSplitClick?: (event: React.MouseEvent) => void;
  /** Whether the split button is disabled */
  splitDisabled?: boolean;
}

export interface MenuSectionProps {
  /** Section header text */
  title?: string;
  /** Whether to show divider */
  divider?: boolean;
  /** Section content */
  children: React.ReactNode;
  /** Additional CSS class name */
  className?: string;
}

// Menu Section Component
export function MenuSection({ title, divider = false, children, className = '' }: MenuSectionProps) {
  if (divider) {
    return (
      <div className={`h-[5px] px-[6px] py-[8px] ${className}`} data-name="Menu section divider">
        <div className="bg-[#e0e0e0] h-px w-full" />
      </div>
    );
  }

  if (title) {
    return (
      <div className={`bg-white px-[6px] py-[8px] rounded-[4px] ${className}`} data-name="Menu section">
        <div className="font-['Segoe_UI'] font-semibold text-[12px] leading-[16px] text-[#424242]">
          {title}
        </div>
        {children}
      </div>
    );
  }

  return <div className={className}>{children}</div>;
}

// Menu Item Component
export function MenuItem({ 
  children, 
  disabled = false, 
  selected = false, 
  icon, 
  secondaryText, 
  onClick, 
  className = '', 
  hasSubmenu = false,
  shortcut,
  role = 'menuitem',
  'aria-label': ariaLabel,
  'data-node-id': nodeId = '299494:94466'
}: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    if (disabled) return;
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
    onClick?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick(event as any);
    }
  };

  // Determine background color based on state
  let bgColor = 'bg-white';
  let textColor = '#424242';
  let iconSrc = defaultIcon;

  if (disabled) {
    textColor = '#bdbdbd';
    iconSrc = "http://localhost:3845/assets/54619161328c39dc236e48d49b023170cd1c2f6e.svg";
  } else if (isPressed) {
    bgColor = 'bg-[#e0e0e0]';
    textColor = '#242424';
    iconSrc = "http://localhost:3845/assets/2eb58c0ad617558334d30d7c33c38ad18f06a1bb.svg";
  } else if (selected) {
    bgColor = 'bg-[#ebebeb]';
    textColor = '#242424';
    iconSrc = "http://localhost:3845/assets/5c9804408908055d5dc867e5fa84fc35ad8883ff.svg";
  } else if (isHovered) {
    bgColor = 'bg-neutral-100';
    textColor = '#242424';
    iconSrc = "http://localhost:3845/assets/9a5844b493c5ab796e2882c5c93d4f01228c4569.svg";
  }

  return (
    <div
      className={`${bgColor} min-h-[32px] min-w-[120px] rounded-[4px] flex gap-[4px] items-start justify-start cursor-pointer relative ${className}`}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={role}
      tabIndex={disabled ? -1 : 0}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      aria-selected={selected}
      data-node-id={nodeId}
      style={{
        outline: isFocused ? '2px solid #0078d4' : 'none',
        outlineOffset: isFocused ? '1px' : '0'
      }}
    >
      <div className="flex-1 flex gap-[4px] items-start justify-start pl-[6px] pr-[2px] py-[6px]">
        {icon && (
          <div className="relative shrink-0 size-[20px] overflow-hidden">
            {typeof icon === 'string' ? (
              <img 
                src={icon} 
                alt="" 
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] block max-w-none" 
              />
            ) : (
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px]">
                <img 
                  src={iconSrc} 
                  alt="" 
                  className="block max-w-none size-full" 
                />
              </div>
            )}
          </div>
        )}
        
        <div className="flex-1 flex flex-col items-start justify-center px-[2px] py-0">
          <div 
            className="font-['Segoe_UI'] text-[14px] leading-[20px] w-full"
            style={{ color: textColor }}
          >
            {children}
          </div>
        </div>

        {(secondaryText || shortcut || hasSubmenu) && (
          <div className="flex gap-[4px] items-center justify-start">
            {(secondaryText || shortcut) && (
              <div className="flex items-center justify-end pl-[2px] pr-[6px] py-0">
                <div 
                  className="font-['Segoe_UI'] text-[14px] leading-[20px] text-right whitespace-pre"
                  style={{ color: disabled ? '#bdbdbd' : '#616161' }}
                >
                  {secondaryText || shortcut}
                </div>
              </div>
            )}
            {hasSubmenu && (
              <div className="relative shrink-0 size-[20px] overflow-hidden">
                <img 
                  src={chevronDownIcon} 
                  alt="" 
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[6.499px] h-[12.001px] block max-w-none" 
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Menu Split Item Component
export function MenuSplitItem({ 
  children, 
  disabled = false, 
  selected = false, 
  icon, 
  secondaryText, 
  onClick, 
  onSplitClick,
  splitDisabled = false,
  className = '', 
  shortcut,
  role = 'menuitem',
  'aria-label': ariaLabel,
  'data-node-id': nodeId = '299494:94626'
}: MenuSplitItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isSplitHovered, setIsSplitHovered] = useState(false);
  const [isSplitPressed, setIsSplitPressed] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    if (disabled) return;
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
    onClick?.(event);
  };

  const handleSplitClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (splitDisabled || disabled) return;
    setIsSplitPressed(true);
    setTimeout(() => setIsSplitPressed(false), 150);
    onSplitClick?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick(event as any);
    }
  };

  // Determine background color based on state
  let bgColor = 'bg-white';
  let textColor = '#424242';
  let iconSrc = defaultIcon;

  if (disabled) {
    textColor = '#bdbdbd';
    iconSrc = "http://localhost:3845/assets/54619161328c39dc236e48d49b023170cd1c2f6e.svg";
  } else if (isPressed) {
    bgColor = 'bg-[#e0e0e0]';
    textColor = '#242424';
    iconSrc = "http://localhost:3845/assets/2eb58c0ad617558334d30d7c33c38ad18f06a1bb.svg";
  } else if (selected) {
    bgColor = 'bg-[#ebebeb]';
    textColor = '#242424';
    iconSrc = "http://localhost:3845/assets/5c9804408908055d5dc867e5fa84fc35ad8883ff.svg";
  } else if (isHovered) {
    bgColor = 'bg-neutral-100';
    textColor = '#242424';
    iconSrc = "http://localhost:3845/assets/9a5844b493c5ab796e2882c5c93d4f01228c4569.svg";
  }

  return (
    <div
      className={`${bgColor} min-h-[32px] min-w-[120px] rounded-[4px] flex gap-[4px] items-start justify-start cursor-pointer relative ${className}`}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={role}
      tabIndex={disabled ? -1 : 0}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      aria-selected={selected}
      data-node-id={nodeId}
      style={{
        outline: isFocused ? '2px solid #0078d4' : 'none',
        outlineOffset: isFocused ? '1px' : '0'
      }}
    >
      {/* Main content area */}
      <div className="flex-1 flex gap-[4px] items-start justify-start pl-[6px] pr-[2px] py-[6px]">
        {icon && (
          <div className="relative shrink-0 size-[20px] overflow-hidden">
            {typeof icon === 'string' ? (
              <img 
                src={icon} 
                alt="" 
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] block max-w-none" 
              />
            ) : (
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px]">
                <img 
                  src={iconSrc} 
                  alt="" 
                  className="block max-w-none size-full" 
                />
              </div>
            )}
          </div>
        )}
        
        <div className="flex-1 flex flex-col items-start justify-center px-[2px] py-0">
          <div 
            className="font-['Segoe_UI'] text-[14px] leading-[20px] w-full"
            style={{ color: textColor }}
          >
            {children}
          </div>
        </div>

        {(secondaryText || shortcut) && (
          <div className="flex items-center justify-end px-[2px] py-0">
            <div 
              className="font-['Segoe_UI'] text-[14px] leading-[20px] text-right whitespace-pre"
              style={{ color: disabled ? '#bdbdbd' : '#616161' }}
            >
              {secondaryText || shortcut}
            </div>
          </div>
        )}
      </div>

      {/* Split button */}
      <div 
        className="bg-white flex items-center justify-end w-[25px] px-[2px] py-[6px] rounded-br-[4px] rounded-tr-[4px] self-stretch relative cursor-pointer"
        onMouseEnter={() => !splitDisabled && !disabled && setIsSplitHovered(true)}
        onMouseLeave={() => setIsSplitHovered(false)}
        onMouseDown={() => !splitDisabled && !disabled && setIsSplitPressed(true)}
        onMouseUp={() => setIsSplitPressed(false)}
        onClick={handleSplitClick}
      >
        <div className="relative shrink-0 size-[20px] overflow-hidden">
          <img 
            src={chevronDownIcon} 
            alt="" 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[6.499px] h-[12.001px] block max-w-none" 
          />
        </div>
        <div 
          className="absolute bottom-[4px] left-0 top-[4px] w-px"
          style={{ backgroundColor: disabled ? '#e0e0e0' : '#d1d1d1' }}
        />
      </div>
    </div>
  );
}

// Menu Trigger Component
export function MenuTrigger({ children, disabled = false, className = '', onClick }: MenuTriggerProps) {
  return (
    <button
      className={`bg-white border border-[#d1d1d1] rounded-[4px] px-[12px] py-[6px] font-['Segoe_UI'] text-[14px] leading-[20px] text-[#424242] cursor-pointer hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-[#0078d4] disabled:bg-[#f5f5f5] disabled:text-[#bdbdbd] disabled:cursor-not-allowed ${className}`}
      disabled={disabled}
      onClick={onClick}
      aria-expanded="false"
      aria-haspopup="menu"
    >
      {children}
    </button>
  );
}

// Main Menu Component
export function Menu({ 
  children, 
  open = false, 
  onOpenChange, 
  customContent,
  className = '', 
  placement = 'bottom-start',
  closeOnSelect = true,
  minWidth = 260,
  maxHeight = 400,
  'aria-label': ariaLabel = 'Menu'
}: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onOpenChange?.(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange?.(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      ref={menuRef}
      className={`bg-white flex flex-col gap-[2px] items-start justify-start overflow-hidden p-[4px] rounded-[4px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] z-50 ${className}`}
      style={{
        minWidth: `${minWidth}px`,
        maxHeight: `${maxHeight}px`,
        overflowY: 'auto'
      }}
      role="menu"
      aria-label={ariaLabel}
      data-node-id="301778:9075"
    >
      {customContent || children}
    </div>
  );
}

// Export default for component registry
export default Menu;

// Complete Menu variant matching Figma design 329640:13586
export interface CompleteMenuProps {
  /** Whether to show custom menu variant */
  customMenu?: boolean;
  /** Menu sections and items */
  sections?: {
    header?: string;
    items: {
      text: string;
      icon?: string;
      shortcut?: string;
      hasChevron?: boolean;
      disabled?: boolean;
    }[];
  }[];
  /** Additional CSS class name */
  className?: string;
}

export function CompleteMenu({ 
  customMenu = false,
  sections = [],
  className = ''
}: CompleteMenuProps) {
  // Authentic Figma assets
  const actionIcon = "http://localhost:3845/assets/3434db8031020a7cb07deb7044c4bc54e68f8fe2.svg";
  const chevronIcon = "http://localhost:3845/assets/f243546bba82e8ffcc565f2ef1fa212c4dd5dd08.svg";

  // Default sections if none provided
  const defaultSections = [
    {
      header: "Section header",
      items: [
        { text: "Action", icon: actionIcon, disabled: false, hasChevron: false, shortcut: undefined },
        { text: "Action", icon: actionIcon, disabled: false, hasChevron: false, shortcut: undefined },
        { text: "Action", icon: actionIcon, disabled: false, hasChevron: false, shortcut: undefined }
      ]
    },
    {
      header: "Section header", 
      items: [
        { text: "Action", icon: actionIcon, shortcut: "Shortcut text", hasChevron: true, disabled: false },
        { text: "Action", icon: actionIcon, shortcut: "Shortcut text", hasChevron: true, disabled: false },
        { text: "Action", icon: actionIcon, shortcut: "Shortcut text", hasChevron: true, disabled: false }
      ]
    }
  ];

  const menuSections = sections.length > 0 ? sections : defaultSections;

  return (
    <div 
      className={`bg-white box-border flex flex-col gap-[2px] items-start justify-start overflow-clip p-[4px] rounded-[4px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] w-[260px] ${className}`}
      data-name="Menu/Menu"
      data-node-id="329640:13586"
    >
      {menuSections.map((section, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          {/* Section header */}
          {section.header && (
            <div 
              className="bg-white box-border flex items-start justify-start min-h-[32px] min-w-[120px] px-[6px] py-[8px] rounded-[4px] w-full"
              data-name="Menu section"
            >
              <div className="flex flex-col font-semibold grow justify-center text-[#424242] text-[12px] leading-[16px]">
                {section.header}
              </div>
            </div>
          )}

          {/* Section items */}
          {section.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`bg-white flex gap-[4px] items-start justify-start min-h-[32px] min-w-[120px] rounded-[4px] w-full cursor-pointer hover:bg-[#f3f2f1] ${
                item.disabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              data-name={item.hasChevron ? "Menu split item" : "Menu item"}
            >
              {/* Main item content */}
              <div className="flex gap-[4px] grow items-start justify-start pl-[6px] pr-[2px] py-[6px]">
                {/* Icon */}
                {item.icon && (
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute left-1/2 size-[14px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                      <img 
                        alt="" 
                        className="block max-w-none size-full" 
                        src={item.icon}
                      />
                    </div>
                  </div>
                )}

                {/* Text container */}
                <div className="flex flex-col grow items-start justify-center px-[2px] py-0">
                  <div className="flex flex-col font-normal justify-center text-[#424242] text-[14px] leading-[20px] w-full">
                    {item.text}
                  </div>
                </div>

                {/* Shortcut text */}
                {item.shortcut && (
                  <div className="flex items-center justify-end px-[2px] py-0">
                    <div className="flex flex-col font-normal justify-center text-[#616161] text-[14px] leading-[20px] text-right whitespace-nowrap">
                      {item.shortcut}
                    </div>
                  </div>
                )}
              </div>

              {/* Split button with chevron */}
              {item.hasChevron && (
                <div className="bg-white box-border flex items-center justify-end max-w-[25px] min-w-[25px] px-[2px] py-[6px] rounded-br-[4px] rounded-tr-[4px] self-stretch w-[25px] hover:bg-[#f3f2f1]">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div 
                      className="absolute h-[12.001px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[6.499px]"
                      style={{ left: "calc(50% + 0.75px)" }}
                    >
                      <img 
                        alt="" 
                        className="block max-w-none size-full" 
                        src={chevronIcon}
                      />
                    </div>
                  </div>
                  <div className="absolute bg-[#d1d1d1] bottom-[4px] left-0 top-[4px] w-px" />
                </div>
              )}
            </div>
          ))}

          {/* Section divider (except for last section) */}
          {sectionIndex < menuSections.length - 1 && (
            <div className="box-border flex h-[5px] items-start justify-start max-h-[5px] min-w-[120px] px-[6px] py-[8px] w-full">
              <div className="absolute bg-[#e0e0e0] h-px left-[-4px] right-[-4px] top-1/2 translate-y-[-50%]" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}