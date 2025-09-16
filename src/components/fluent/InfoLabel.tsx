import React, { useState } from 'react';

// Figma Node IDs:
// Small InfoLabel: 323059:755
// Medium InfoLabel: 323059:756  
// Large InfoLabel: 323059:757

// Info icon SVGs (inline for reliability)
const InfoIconSmall = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10ZM5.25 5.25V8.5h1.5V5.25h-1.5ZM6 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"/>
  </svg>
);

const InfoIconMedium = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12ZM6.25 6.25V10h1.5V6.25h-1.5ZM7 5.25a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"/>
  </svg>
);

const InfoIconLarge = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM7.25 7.25V11.5h1.5V7.25h-1.5ZM8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
  </svg>
);

export interface InfoLabelProps {
  /** The text content of the label */
  children: React.ReactNode;
  /** Size variant of the info label */
  size?: 'Small' | 'Medium' | 'Large';
  /** Weight variant of the label text */
  weight?: 'Regular' | 'Semibold';
  /** Whether the label is disabled */
  disabled?: boolean;
  /** Whether the label is required */
  required?: boolean;
  /** Info tooltip content */
  infoContent?: React.ReactNode;
  /** Info tooltip title */
  infoTitle?: string;
  /** Additional CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** HTML for attribute for form association */
  htmlFor?: string;
  /** Accessibility id */
  id?: string;
  /** Callback when info button is clicked */
  onInfoClick?: () => void;
}

export const InfoLabel: React.FC<InfoLabelProps> = ({
  children,
  size = 'Medium',
  weight = 'Regular',
  disabled = false,
  required = false,
  infoContent,
  infoTitle = 'More information',
  className = '',
  style,
  htmlFor,
  id,
  onInfoClick,
  ...props
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Get the appropriate icon based on size
  const getInfoIcon = () => {
    switch (size) {
      case 'Small':
        return <InfoIconSmall />;
      case 'Large':
        return <InfoIconLarge />;
      default:
        return <InfoIconMedium />;
    }
  };

  // Generate CSS classes based on props
  const containerClasses = [
    'fluent-info-label',
    `fluent-info-label--size-${size.toLowerCase()}`,
    disabled && 'fluent-info-label--disabled',
    className
  ].filter(Boolean).join(' ');

  const labelClasses = [
    'fluent-info-label__label',
    `fluent-info-label__label--size-${size.toLowerCase()}`,
    `fluent-info-label__label--weight-${weight.toLowerCase()}`,
    disabled && 'fluent-info-label__label--disabled',
    required && 'fluent-info-label__label--required'
  ].filter(Boolean).join(' ');

  const buttonClasses = [
    'fluent-info-label__button',
    `fluent-info-label__button--size-${size.toLowerCase()}`,
    disabled && 'fluent-info-label__button--disabled'
  ].filter(Boolean).join(' ');

  const handleInfoClick = () => {
    if (disabled) return;
    onInfoClick?.();
    setShowTooltip(!showTooltip);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleInfoClick();
    }
  };

  return (
    <div
      className={containerClasses}
      style={style}
      {...props}
    >
      <label
        id={id}
        htmlFor={htmlFor}
        className={labelClasses}
      >
        {children}
        {required && (
          <span className="fluent-info-label__required-indicator" aria-label="Required">
            *
          </span>
        )}
      </label>
      
      <div className="fluent-info-label__info-wrapper">
        <button
          type="button"
          className={buttonClasses}
          onClick={handleInfoClick}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-label={infoTitle}
          aria-expanded={showTooltip}
          aria-describedby={infoContent ? `${id}-info-tooltip` : undefined}
        >
          {getInfoIcon()}
        </button>

        {infoContent && showTooltip && (
          <div
            id={`${id}-info-tooltip`}
            className="fluent-info-label__tooltip"
            role="tooltip"
          >
            {infoTitle && (
              <div className="fluent-info-label__tooltip-title">
                {infoTitle}
              </div>
            )}
            <div className="fluent-info-label__tooltip-content">
              {infoContent}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoLabel;