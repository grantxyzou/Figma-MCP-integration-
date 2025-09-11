// Accordion - Generated from Fluent 2 Web Design System
// Figma Node ID: 113348:3338

import React, { useState } from 'react';
import './fluent-tokens.css';

interface AccordionProps {
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  chevronPosition?: 'before' | 'after';
  expanded?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  onToggle?: (expanded: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const FluentAccordion: React.FC<AccordionProps> = ({
  size = 'medium',
  chevronPosition = 'before',
  expanded: controlledExpanded,
  disabled = false,
  children,
  title = 'Text',
  icon,
  onToggle,
  className = '',
  style
}) => {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;

  const handleToggle = () => {
    if (disabled) return;
    
    const newExpanded = !isExpanded;
    if (controlledExpanded === undefined) {
      setInternalExpanded(newExpanded);
    }
    onToggle?.(newExpanded);
  };

  const getSizeClass = () => {
    const sizeMap = {
      'small': 'fluent-accordion--small',
      'medium': 'fluent-accordion--medium', 
      'large': 'fluent-accordion--large',
      'extra-large': 'fluent-accordion--extra-large'
    };
    return sizeMap[size];
  };

  return (
    <div 
      className={`fluent-accordion ${getSizeClass()} ${chevronPosition === 'after' ? 'fluent-accordion--chevron-after' : ''} ${disabled ? 'fluent-accordion--disabled' : ''} ${className}`}
      style={style}
    >
      <button
        className={`fluent-accordion__header ${isExpanded ? 'fluent-accordion__header--expanded' : ''}`}
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isExpanded}
      >
        {chevronPosition === 'before' && (
          <div className={`fluent-accordion__chevron ${isExpanded ? 'fluent-accordion__chevron--expanded' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4.427 7.427a.6.6 0 0 0 0 .848l3.182 3.183a.6.6 0 0 0 .848 0l3.182-3.183a.6.6 0 1 0-.848-.848L8.283 9.936 5.275 6.927a.6.6 0 0 0-.848 0Z"/>
            </svg>
          </div>
        )}
        
        <div className="fluent-accordion__content">
          {icon && <div className="fluent-accordion__icon">{icon}</div>}
          <span className="fluent-accordion__title">{title}</span>
        </div>

        {chevronPosition === 'after' && (
          <div className={`fluent-accordion__chevron ${isExpanded ? 'fluent-accordion__chevron--expanded' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4.427 7.427a.6.6 0 0 0 0 .848l3.182 3.183a.6.6 0 0 0 .848 0l3.182-3.183a.6.6 0 1 0-.848-.848L8.283 9.936 5.275 6.927a.6.6 0 0 0-.848 0Z"/>
            </svg>
          </div>
        )}
      </button>

      <div 
        className={`fluent-accordion__panel ${isExpanded ? 'fluent-accordion__panel--expanded' : ''}`}
        role="region"
        aria-hidden={!isExpanded}
      >
        <div className="fluent-accordion__panel-content">
          {children || (
            <div className="fluent-accordion__placeholder">
              Content goes here
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FluentAccordion.displayName = 'FluentAccordion';

export default FluentAccordion;
