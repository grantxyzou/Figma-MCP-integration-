import React, { useState } from 'react';

// Figma Node IDs:
// Small InfoLabel: 323059:755
// Medium InfoLabel: 323059:756  
// Large InfoLabel: 323059:757

// Real Figma SVG assets from MCP server
const INFO_ICON_SMALL = "http://localhost:3845/assets/76840a3f1c1371b867a829bd7d96c20b497c5fd6.svg";
const INFO_ICON_MEDIUM = "http://localhost:3845/assets/78dc164d41f444140ae2e9a5278940c2f9415eba.svg";
const INFO_ICON_LARGE = "http://localhost:3845/assets/1bd13c9aac0f9ed113aba28b987034704648c44d.svg";

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

  // Get the appropriate icon based on size using real Figma assets
  const getInfoIcon = () => {
    switch (size) {
      case 'Small':
        return <img src={INFO_ICON_SMALL} alt="Info" style={{ width: '12px', height: '12px' }} />;
      case 'Large':
        return <img src={INFO_ICON_LARGE} alt="Info" style={{ width: '16px', height: '16px' }} />;
      default:
        return <img src={INFO_ICON_MEDIUM} alt="Info" style={{ width: '14px', height: '14px' }} />;
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