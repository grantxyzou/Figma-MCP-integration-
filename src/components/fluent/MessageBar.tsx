import React from 'react';

// Authentic Figma icons from MCP server
const checkmarkCircleIcon = "http://localhost:3845/assets/2a9784855f9718d14bc1079f9848fba11175b9aa.svg";
const dismissIcon = "http://localhost:3845/assets/b3628032d799ce2b2ec7237c0d91a61ee868cf30.svg";
const infoIcon = "http://localhost:3845/assets/ad564605d3a811968ac98433529dd19bc3ed24e3.svg";
const warningIcon = "http://localhost:3845/assets/e7b878d53c2b7d9c4de3a8e9f39b17c8c23c5672.svg";
const errorIcon = "http://localhost:3845/assets/f5c842a5b2e8a77a3b5d8e7c9d4f2a1b3c6e9f8d.svg";

export type MessageBarIntent = 'success' | 'warning' | 'error' | 'info';
export type MessageBarLayout = 'single-line' | 'multi-line';

export interface MessageBarProps {
  /** Content of the message */
  children: React.ReactNode;
  /** Visual intent of the message */
  intent?: MessageBarIntent;
  /** Layout variant */
  layout?: MessageBarLayout;
  /** Whether to show the dismiss button */
  dismissible?: boolean;
  /** Callback when dismiss button is clicked */
  onDismiss?: () => void;
  /** Custom icon to override the default intent icon */
  icon?: React.ReactNode;
  /** Additional CSS class name */
  className?: string;
  /** ARIA role for accessibility */
  role?: string;
  /** ARIA live region for announcements */
  'aria-live'?: 'polite' | 'assertive' | 'off';
}

export interface MessageBarTitleProps {
  /** Title text content */
  children: React.ReactNode;
  /** Additional CSS class name */
  className?: string;
}

export interface MessageBarBodyProps {
  /** Body text content */
  children: React.ReactNode;
  /** Additional CSS class name */
  className?: string;
}

export function MessageBarTitle({ children, className = '' }: MessageBarTitleProps) {
  return (
    <span 
      className={`font-semibold text-[12px] leading-[16px] ${className}`}
      style={{ fontFamily: '"Segoe UI", sans-serif' }}
    >
      {children}
    </span>
  );
}

export function MessageBarBody({ children, className = '' }: MessageBarBodyProps) {
  return (
    <span 
      className={`font-normal text-[12px] leading-[16px] ${className}`}
      style={{ fontFamily: '"Segoe UI", sans-serif' }}
    >
      {children}
    </span>
  );
}

const intentStyles = {
  success: {
    background: '#f1faf1',
    border: '#9fd89f',
    icon: checkmarkCircleIcon,
    fallback: '✓'
  },
  warning: {
    background: '#fff9f0',
    border: '#fdb94e',
    icon: warningIcon,
    fallback: '⚠'
  },
  error: {
    background: '#fdf2f2',
    border: '#dc3545',
    icon: errorIcon,
    fallback: '✕'
  },
  info: {
    background: '#f0f8ff',
    border: '#0078d4',
    icon: infoIcon,
    fallback: 'ℹ'
  }
};

export function MessageBar({
  children,
  intent = 'info',
  layout = 'single-line',
  dismissible = true,
  onDismiss,
  icon,
  className = '',
  role = 'status',
  'aria-live': ariaLive = 'polite'
}: MessageBarProps) {
  const styles = intentStyles[intent];
  
  const handleDismiss = () => {
    onDismiss?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleDismiss();
    }
  };

  return (
    <div
      className={`box-border flex gap-[8px] items-center justify-start px-[12px] py-[6px] relative rounded-[4px] ${className}`}
      style={{
        backgroundColor: styles.background,
        border: `1px solid ${styles.border}`
      }}
      role={role}
      aria-live={ariaLive}
      data-name="Message bar"
      data-node-id="329958:31585"
    >
      {/* Status icon container */}
      <div className="flex items-center justify-start shrink-0">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          {icon || (
            <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
              <img 
                alt={`${intent} icon`}
                className="block size-[16px]" 
                src={styles.icon}
                width="16"
                height="16"
                onError={(e) => {
                  // Hide broken image and show fallback
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <span 
                className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-[12px] font-semibold hidden"
                style={{ color: styles.border }}
              >
                {styles.fallback}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Message content */}
      <div 
        className={`basis-0 grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#242424] ${
          layout === 'single-line' ? 'overflow-ellipsis overflow-hidden text-nowrap' : ''
        }`}
        style={{ fontFamily: '"Segoe UI", sans-serif' }}
      >
        <div className="text-[12px] leading-[16px]">
          {children}
        </div>
      </div>

      {/* Dismiss button */}
      {dismissible && (
        <div className="bg-transparent box-border flex items-center justify-center p-[2px] rounded-[4px] shrink-0">
          <button
            type="button"
            onClick={handleDismiss}
            onKeyDown={handleKeyDown}
            className="bg-transparent box-border flex items-center justify-center p-[2px] rounded-[4px] hover:bg-black/5 active:bg-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            aria-label="Dismiss message"
            tabIndex={0}
          >
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute left-1/2 size-[12px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <img 
                  alt="Dismiss"
                  className="block size-[12px]" 
                  src={dismissIcon}
                  width="12"
                  height="12"
                  onError={(e) => {
                    // Show text fallback if image fails
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <span className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-[12px] font-bold text-[#424242] hidden">×</span>
              </div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

// Export default for component registry
export default MessageBar;