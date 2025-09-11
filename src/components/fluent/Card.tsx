import React from 'react';

// Simple icons as components - these would normally be from an icon library
const MoreHorizontalIcon: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg style={style} viewBox="0 0 20 20" fill="currentColor">
    <path d="M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM16 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  </svg>
);

const ChevronRightIcon: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg style={style} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L10.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l3.5 3.25a.75.75 0 0 1 0 1.08l-3.5 3.25a.75.75 0 0 1-1.06-.02Z"/>
  </svg>
);

// Create dynamic styles with hover and selected states
const getCardStyles = () => {
  const baseStyles = {
    container: {
      backgroundColor: '#ffffff',
      borderRadius: '4px',
      fontFamily: '"Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
      position: 'relative' as const,
      overflow: 'hidden',
      transition: 'all 0.1s ease',
      cursor: 'pointer',
      width: '320px', // Default Figma width
      boxSizing: 'border-box' as const
    },
    containerFilled: {
      backgroundColor: '#ffffff',
      boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)'
    },
    containerFilledAlt: {
      backgroundColor: '#ffffff',
      boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)'
    },
    containerOutline: {
      backgroundColor: 'transparent',
      border: '1px solid #d1d1d1'
    },
    containerSubtle: {
      backgroundColor: 'transparent'
    },
    headerContainer: {
      padding: '12px',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '10px'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      width: '100%'
    },
    productIcon: {
      width: '32px',
      height: '32px',
      borderRadius: '4px',
      backgroundColor: '#0f6cbd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'white',
      fontSize: '14px',
      fontWeight: 600
    },
    textContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column' as const,
      minWidth: 0
    },
    title: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      color: '#242424',
      margin: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap' as const
    },
    subtitle: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      color: '#616161',
      margin: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap' as const
    },
    quickAction: {
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '4px',
      padding: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.1s ease',
      flexShrink: 0
    },
    quickActionIcon: {
      width: '20px',
      height: '20px',
      color: '#424242'
    },
    bodyContainer: {
      padding: '0 12px 12px 12px'
    },
    body: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start'
    },
    bodyText: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      color: '#424242',
      margin: 0,
      flex: 1
    },
    footerContainer: {
      padding: '0 12px 12px 12px'
    },
    footer: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    },
    primaryAction: {
      backgroundColor: '#0f6cbd',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '6px 12px',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      transition: 'background-color 0.1s ease'
    },
    secondaryAction: {
      backgroundColor: '#ffffff',
      color: '#242424',
      border: '1px solid #d1d1d1',
      borderRadius: '4px',
      padding: '6px 12px',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      transition: 'all 0.1s ease'
    },
    // Interactive states
    hoverState: {
      backgroundColor: '#f3f2f1'
    },
    selectedState: {
      backgroundColor: '#f3f9fd'
    },
    pressedState: {
      backgroundColor: '#e8f4fd'
    },
    disabledState: {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  };

  return baseStyles;
};

export interface CardProps {
  style?: 'filled' | 'filled-alt' | 'outline' | 'subtle';
  size?: 'small' | 'medium' | 'large';
  layout?: 'default' | 'custom';
  state?: 'rest' | 'hover' | 'pressed' | 'selected' | 'disabled' | 'draggable';
  
  // Header props
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  showQuickAction?: boolean;
  onQuickAction?: () => void;
  
  // Body props
  body?: string | React.ReactNode;
  
  // Footer props
  primaryActionText?: string;
  secondaryActionText?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  showPrimaryAction?: boolean;
  showSecondaryAction?: boolean;
  
  // Event handlers
  onClick?: () => void;
  onHover?: (isHovered: boolean) => void;
  
  // Layout
  width?: string | number;
  height?: string | number;
  
  // Custom content
  children?: React.ReactNode;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  style = 'filled',
  size = 'medium',
  layout = 'default',
  state = 'rest',
  title = 'Card title',
  subtitle = 'Additional metadata',
  icon,
  showQuickAction = true,
  onQuickAction,
  body = 'Copilot is an AI tool designed to improve productivity by integrating with Microsoft applications, offering content generation and task automation features.',
  primaryActionText = 'Button',
  secondaryActionText = 'Button',
  onPrimaryAction,
  onSecondaryAction,
  showPrimaryAction = true,
  showSecondaryAction = true,
  onClick,
  onHover,
  width,
  height,
  children,
  headerContent,
  footerContent
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  
  const styles = getCardStyles();

  const handleMouseEnter = () => {
    if (state !== 'disabled') {
      setIsHovered(true);
      onHover?.(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
    onHover?.(false);
  };

  const handleMouseDown = () => {
    if (state !== 'disabled') {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleClick = () => {
    if (state !== 'disabled') {
      onClick?.();
    }
  };

  const getContainerStyle = () => {
    let containerStyle = { ...styles.container };
    
    // Apply style variant
    switch (style) {
      case 'filled':
        containerStyle = { ...containerStyle, ...styles.containerFilled };
        break;
      case 'filled-alt':
        containerStyle = { ...containerStyle, ...styles.containerFilledAlt };
        break;
      case 'outline':
        containerStyle = { ...containerStyle, ...styles.containerOutline };
        break;
      case 'subtle':
        containerStyle = { ...containerStyle, ...styles.containerSubtle };
        break;
    }
    
    // Apply size adjustments
    switch (size) {
      case 'small':
        containerStyle.width = '280px';
        break;
      case 'medium':
        containerStyle.width = '320px';
        break;
      case 'large':
        containerStyle.width = '360px';
        break;
    }
    
    // Apply state
    if (state === 'disabled') {
      containerStyle = { ...containerStyle, ...styles.disabledState };
    } else if (state === 'selected' || (isPressed && state === 'rest')) {
      containerStyle = { ...containerStyle, ...styles.selectedState };
    } else if (state === 'hover' || (isHovered && state === 'rest')) {
      containerStyle = { ...containerStyle, ...styles.hoverState };
    } else if (state === 'pressed') {
      containerStyle = { ...containerStyle, ...styles.pressedState };
    }
    
    // Apply custom dimensions
    if (width) containerStyle.width = typeof width === 'number' ? `${width}px` : width;
    if (height) (containerStyle as any).height = typeof height === 'number' ? `${height}px` : height;
    
    return containerStyle;
  };

  const renderIcon = () => {
    if (icon) return icon;
    
    return (
      <div style={styles.productIcon}>
        <span>⚡</span>
      </div>
    );
  };

  const renderHeader = () => {
    if (headerContent) return headerContent;
    
    return (
      <div style={styles.header}>
        {renderIcon()}
        <div style={styles.textContainer}>
          <h3 style={styles.title}>{title}</h3>
          {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
        </div>
        {showQuickAction && (
          <button
            style={styles.quickAction}
            onClick={(e) => {
              e.stopPropagation();
              onQuickAction?.();
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f2f1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <MoreHorizontalIcon style={styles.quickActionIcon} />
          </button>
        )}
      </div>
    );
  };

  const renderBody = () => {
    if (typeof body === 'string') {
      return (
        <div style={styles.body}>
          <p style={styles.bodyText}>{body}</p>
        </div>
      );
    }
    return body;
  };

  const renderFooter = () => {
    if (footerContent) return footerContent;
    
    if (!showPrimaryAction && !showSecondaryAction) return null;
    
    return (
      <div style={styles.footer}>
        {showPrimaryAction && (
          <button
            style={styles.primaryAction}
            onClick={(e) => {
              e.stopPropagation();
              onPrimaryAction?.();
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0e5ba6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0f6cbd';
            }}
          >
            {primaryActionText}
          </button>
        )}
        {showSecondaryAction && (
          <button
            style={styles.secondaryAction}
            onClick={(e) => {
              e.stopPropagation();
              onSecondaryAction?.();
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f2f1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
          >
            {secondaryActionText}
          </button>
        )}
      </div>
    );
  };

  return (
    <div
      style={getContainerStyle()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
    >
      {/* Header */}
      <div style={styles.headerContainer}>
        {renderHeader()}
      </div>
      
      {/* Body */}
      {(body || children) && (
        <div style={styles.bodyContainer}>
          {children || renderBody()}
        </div>
      )}
      
      {/* Footer */}
      {(showPrimaryAction || showSecondaryAction || footerContent) && (
        <div style={styles.footerContainer}>
          {renderFooter()}
        </div>
      )}
    </div>
  );
};

// Named export for compatibility
export const FluentCard = Card;

export default Card;
