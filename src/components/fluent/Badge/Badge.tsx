// Badge Component - Generated from Fluent 2 Web Design System
// Figma Node ID: 151708:5233

import React from 'react';
import '../fluent-tokens.css';

export interface FluentBadgeProps {
  /**
   * The color variant of the badge
   * @default 'brand'
   */
  color?: 'brand' | 'danger' | 'important' | 'informative' | 'severe' | 'subtle' | 'success' | 'warning';
  
  /**
   * The size of the badge
   * @default 'medium'
   */
  size?: 'tiny' | 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  
  /**
   * The appearance style of the badge
   * @default 'filled'
   */
  appearance?: 'filled' | 'tint' | 'outline' | 'subtle';
  
  /**
   * Optional icon to display in the badge
   */
  icon?: React.ReactNode;
  
  /**
   * The text content of the badge
   */
  children?: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Additional props to pass to the badge element
   */
  [key: string]: any;
}

export const FluentBadge: React.FC<FluentBadgeProps> = ({
  color = 'brand',
  size = 'medium',
  appearance = 'filled',
  icon,
  children,
  className = '',
  ...props
}) => {
  const isIconOnly = icon && !children;
  
  const badgeClasses = [
    'fluent-badge',
    `fluent-badge--${color}`,
    `fluent-badge--${size}`,
    `fluent-badge--${appearance}`,
    isIconOnly && 'fluent-badge--icon-only',
    className
  ].filter(Boolean).join(' ');

  // Exact Figma structure: outermost div with 100% dimensions and responsive sizing
  return (
    <div 
      className={badgeClasses}
      role="img"
      aria-label={typeof children === 'string' ? children : 'Badge'}
      style={{
        width: 'fit-content', // Text-responsive width
        height: 'fit-content'  // Text-responsive height
      }}
      {...props}
    >
      <div className="fluent-badge__content">
        {icon && (
          <div className="fluent-badge__icon">
            <div className="fluent-badge__icon-inner">
              {icon}
            </div>
          </div>
        )}
        {children && (
          <div className="fluent-badge__text">
            <div className="fluent-badge__text-inner">
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

FluentBadge.displayName = 'FluentBadge';

export default FluentBadge;
