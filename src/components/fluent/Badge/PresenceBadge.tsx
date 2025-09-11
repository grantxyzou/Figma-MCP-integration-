// Presence Badge Component - Generated from Fluent 2 Web Design System
// Used for showing user status (available, busy, away, offline, etc.)

import React from 'react';
import '../fluent-tokens.css';

export interface FluentPresenceBadgeProps {
  /**
   * The status of the user
   * @default 'available'
   */
  status?: 'available' | 'away' | 'busy' | 'do-not-disturb' | 'offline' | 'out-of-office' | 'blocked' | 'unknown';
  
  /**
   * Whether the user is in office or not
   * @default false
   */
  inOffice?: boolean;
  
  /**
   * The size of the presence badge
   * @default 'medium'
   */
  size?: 'tiny' | 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Additional props to pass to the badge element
   */
  [key: string]: any;
}

export const FluentPresenceBadge: React.FC<FluentPresenceBadgeProps> = ({
  status = 'available',
  inOffice = false,
  size = 'medium',
  className = '',
  ...props
}) => {
  const presenceClasses = [
    'fluent-presence-badge',
    `fluent-presence-badge--${status}`,
    `fluent-presence-badge--${size}`,
    inOffice && 'fluent-presence-badge--in-office',
    className
  ].filter(Boolean).join(' ');

  const getAriaLabel = () => {
    const statusText = status.replace(/-/g, ' ');
    const officeText = inOffice ? 'in office' : 'out of office';
    return `${statusText}, ${officeText}`;
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'available':
        return (
          <svg viewBox="0 0 16 16" className="fluent-presence-badge__icon">
            <path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm2.12 4.164L7.25 9.042 5.88 7.836a.5.5 0 0 0-.76.628l1.5 1.83a.75.75 0 0 0 1.16.02l3-3.5a.5.5 0 1 0-.76-.652z" fill="currentColor"/>
          </svg>
        );
      case 'busy':
      case 'do-not-disturb':
        return (
          <svg viewBox="0 0 16 16" className="fluent-presence-badge__icon">
            <path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zM4.646 4.646a.5.5 0 0 0 0 .708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646a.5.5 0 0 0-.708 0z" fill="currentColor"/>
          </svg>
        );
      case 'away':
        return (
          <svg viewBox="0 0 16 16" className="fluent-presence-badge__icon">
            <path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm3.5 6a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 .5-.5z" fill="currentColor"/>
          </svg>
        );
      case 'offline':
        return (
          <svg viewBox="0 0 16 16" className="fluent-presence-badge__icon">
            <circle cx="8" cy="8" r="6" fill="currentColor"/>
          </svg>
        );
      case 'out-of-office':
        return (
          <svg viewBox="0 0 16 16" className="fluent-presence-badge__icon">
            <path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm-.25 2.5v3.25H5.5a.75.75 0 0 0 0 1.5h2.25V12.5a.75.75 0 0 0 1.5 0V9.25H12.5a.75.75 0 0 0 0-1.5H9.25V4.5a.75.75 0 0 0-1.5 0z" fill="currentColor"/>
          </svg>
        );
      case 'blocked':
        return (
          <svg viewBox="0 0 16 16" className="fluent-presence-badge__icon">
            <path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zM5.404 5.404a.5.5 0 0 0 0 .707L7.293 8l-1.89 1.89a.5.5 0 1 0 .708.707L8 8.707l1.89 1.89a.5.5 0 0 0 .707-.707L8.707 8l1.89-1.89a.5.5 0 0 0-.707-.707L8 7.293 6.11 5.404a.5.5 0 0 0-.707 0z" fill="currentColor"/>
          </svg>
        );
      case 'unknown':
      default:
        return (
          <svg viewBox="0 0 16 16" className="fluent-presence-badge__icon">
            <path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM8 4a2 2 0 0 0-1.85 1.24.5.5 0 0 0 .93.32A1 1 0 0 1 9 6a1 1 0 0 1-.5.87v.63a.5.5 0 0 0 1 0v-.27A2 2 0 0 0 8 4z" fill="currentColor"/>
          </svg>
        );
    }
  };

  return (
    <div 
      className={presenceClasses}
      role="img"
      aria-label={getAriaLabel()}
      {...props}
    >
      <div className="fluent-presence-badge__ring" />
      <div className="fluent-presence-badge__content">
        {getStatusIcon()}
      </div>
    </div>
  );
};

FluentPresenceBadge.displayName = 'FluentPresenceBadge';

export default FluentPresenceBadge;
