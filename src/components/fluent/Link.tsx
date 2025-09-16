import React, { useState } from 'react';

// Figma Node IDs:
// Default Rest: 6401:122465
// Default Hover: 6401:122474
// Default Pressed: 6401:122488
// Default Focused: 6401:122502
// Default Disabled: 6401:122869
// Subtle Rest: 6401:122632
// Subtle Hover: 6401:122640
// Subtle Pressed: 6401:122644
// Subtle Focused: 6401:122636
// Subtle Disabled: 6401:122883
// OnBrand Rest: 6401:122744
// OnBrand Hover: 6401:122748
// OnBrand Pressed: 6401:122752
// OnBrand Focused: 6401:122756
// OnBrand Disabled: 6401:123019
// Inverted Rest: 348781:2232
// Inverted Hover: 348781:2237
// Inverted Pressed: 348781:2242
// Inverted Focused: 348781:2247
// Inverted Disabled: 348781:2252

// Authentic Figma SVG assets from MCP server
const EXTERNAL_LINK_DEFAULT = "http://localhost:3845/assets/2eba5483ab13de2a9fd3d1fd16f374a84503830d.svg";
const EXTERNAL_LINK_SUBTLE = "http://localhost:3845/assets/6372858cd75526858ef1340e33431aa7efa7030f.svg";
const EXTERNAL_LINK_HOVER = "http://localhost:3845/assets/4032066a61ba58f1e91a54377dd2e53c47cc3715.svg";

export interface LinkProps {
  /** The text content of the link */
  children: React.ReactNode;
  /** Visual style variant */
  variant?: 'default' | 'subtle' | 'onbrand' | 'inverted';
  /** URL to navigate to */
  href?: string;
  /** Whether the link opens in a new tab */
  external?: boolean;
  /** Whether to show an external link icon */
  showIcon?: boolean;
  /** Whether the link is disabled */
  disabled?: boolean;
  /** Whether the link is currently visited */
  visited?: boolean;
  /** Additional CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Click handler for non-href links */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Accessibility props */
  'aria-label'?: string;
  /** HTML target attribute */
  target?: string;
  /** HTML rel attribute */
  rel?: string;
}

export const Link: React.FC<LinkProps> = ({
  children,
  variant = 'default',
  href,
  external = false,
  showIcon = true,
  disabled = false,
  visited = false,
  className = '',
  style,
  onClick,
  target,
  rel,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Get style-specific colors and icons
  const getVariantStyles = () => {
    const baseStyles = {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
      textDecoration: 'none',
      display: 'flex',
      gap: '4px',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      position: 'relative' as const,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      outline: 'none'
    };

    switch (variant) {
      case 'subtle':
        return {
          ...baseStyles,
          color: disabled ? '#a6a6a6' : (isPressed ? '#2b2b2b' : (isHovered ? '#383838' : '#424242')),
          icon: EXTERNAL_LINK_SUBTLE
        };
      case 'onbrand':
        return {
          ...baseStyles,
          color: disabled ? '#a6a6a6' : (isPressed ? '#0a4473' : (isHovered ? '#0d4f83' : '#115ea3')),
          icon: EXTERNAL_LINK_DEFAULT
        };
      case 'inverted':
        return {
          ...baseStyles,
          color: disabled ? '#666666' : (isPressed ? '#e6e6e6' : (isHovered ? '#f0f0f0' : '#ffffff')),
          icon: EXTERNAL_LINK_DEFAULT
        };
      default: // 'default'
        return {
          ...baseStyles,
          color: disabled ? '#a6a6a6' : (isPressed ? '#0a4473' : (isHovered ? '#0f548c' : '#115ea3')),
          icon: isHovered ? EXTERNAL_LINK_HOVER : EXTERNAL_LINK_DEFAULT
        };
    }
  };

  const variantStyles = getVariantStyles();

  const handleMouseEnter = () => {
    if (!disabled) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setIsHovered(false);
      setIsPressed(false);
    }
  };

  const handleMouseDown = () => {
    if (!disabled) setIsPressed(true);
  };

  const handleMouseUp = () => {
    if (!disabled) setIsPressed(false);
  };

  const handleFocus = () => {
    if (!disabled) setIsFocused(true);
  };

  const handleBlur = () => {
    if (!disabled) setIsFocused(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      if (!disabled) {
        setIsPressed(true);
      }
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsPressed(false);
    }
  };

  // Generate CSS classes for additional styling
  const linkClasses = [
    'fluent-link',
    `fluent-link--variant-${variant}`,
    disabled && 'fluent-link--disabled',
    visited && 'fluent-link--visited',
    isHovered && 'fluent-link--hovered',
    isPressed && 'fluent-link--pressed',
    isFocused && 'fluent-link--focused',
    className
  ].filter(Boolean).join(' ');

  return (
    <a
      href={disabled ? undefined : href}
      target={external ? '_blank' : target}
      rel={external ? 'noopener noreferrer' : rel}
      className={linkClasses}
      style={{
        ...variantStyles,
        ...style
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      {...props}
    >
      {/* Text Content */}
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingBottom: '2px',
          position: 'relative',
          flexShrink: 0
        }}
      >
        <div
          style={{
            marginBottom: '-2px',
            position: 'relative',
            flexShrink: 0,
            whiteSpace: 'pre'
          }}
        >
          {children}
        </div>
        {/* Hover Underline */}
        {isHovered && !disabled && (
          <div
            style={{
              height: '3px',
              marginBottom: '-2px',
              position: 'relative',
              flexShrink: 0,
              width: '100%'
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                borderTop: `1px solid ${variantStyles.color}`,
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: 'none'
              }}
            />
          </div>
        )}
        {/* Focus Indicator */}
        {isFocused && !disabled && (
          <div
            style={{
              position: 'absolute',
              inset: '-2px',
              border: '2px solid #0078d4',
              borderRadius: '2px',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* External Link Icon */}
      {showIcon && (external || (!href && onClick)) && (
        <div
          style={{
            overflow: 'hidden',
            position: 'relative',
            flexShrink: 0,
            width: '20px',
            height: '20px'
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '14px',
              height: '14px'
            }}
          >
            <img
              alt=""
              style={{
                display: 'block',
                maxWidth: 'none',
                width: '100%',
                height: '100%'
              }}
              src={variantStyles.icon}
            />
          </div>
        </div>
      )}
    </a>
  );
};

Link.displayName = 'Link';

export default Link;