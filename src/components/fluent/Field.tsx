import React, { useState } from 'react';

// Figma Node IDs:
// Small Field: 32182:95361
// Medium Field: 32182:95337 
// Large Field: 32182:95385

// Authentic Figma SVG assets from MCP server
const INFO_ICON_SMALL = "http://localhost:3845/assets/835ec72dc7f2a79b8b79763b891244c4714407b9.svg";
const INFO_ICON_MEDIUM = "http://localhost:3845/assets/78dc164d41f444140ae2e9a5278940c2f9415eba.svg";
const INFO_ICON_LARGE = "http://localhost:3845/assets/1bd13c9aac0f9ed113aba28b987034704648c44d.svg";
const ERROR_ICON = "http://localhost:3845/assets/74b5a4996e546991bd6ed9879cd55d2796da2b28.svg";

export interface FieldProps {
  /** The label text for the field */
  label: string;
  /** Size variant of the field */
  size?: 'Small' | 'Medium' | 'Large';
  /** Whether the field is required */
  required?: boolean;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Info tooltip content */
  infoContent?: React.ReactNode;
  /** Info tooltip title */
  infoTitle?: string;
  /** Error message to display */
  errorMessage?: string;
  /** Helper text to display when no error */
  helperText?: string;
  /** The form input component to render */
  children: React.ReactNode;
  /** Additional CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** HTML for attribute for label association */
  htmlFor?: string;
  /** Accessibility id */
  id?: string;
  /** Callback when info button is clicked */
  onInfoClick?: () => void;
}

export const Field: React.FC<FieldProps> = ({
  label,
  size = 'Medium',
  required = false,
  disabled = false,
  infoContent,
  infoTitle = 'More information',
  errorMessage,
  helperText,
  children,
  className = '',
  style,
  htmlFor,
  id,
  onInfoClick,
  ...props
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Get size-specific values based on Figma specs
  const getSizeSpecs = () => {
    switch (size) {
      case 'Small':
        return {
          labelHeight: '20px',
          labelPadding: '2px 0',
          labelFont: "font-['Segoe_UI:Regular',_sans-serif] text-[12px] leading-[16px]",
          infoIconSize: '10px',
          infoIcon: INFO_ICON_SMALL,
          infoButtonSize: '20px',
          infoButtonPadding: '4px'
        };
      case 'Large':
        return {
          labelHeight: '24px',
          labelPadding: '4px 0',
          labelFont: "font-['Segoe_UI:Semibold',_sans-serif] text-[16px] leading-[22px]",
          infoIconSize: '16px',
          infoIcon: INFO_ICON_LARGE,
          infoButtonSize: '24px',
          infoButtonPadding: '2px 4px'
        };
      default: // Medium
        return {
          labelHeight: '26px',
          labelPadding: '2px 0',
          labelFont: "font-['Segoe_UI:Regular',_sans-serif] text-[14px] leading-[20px]",
          infoIconSize: '14px',
          infoIcon: INFO_ICON_MEDIUM,
          infoButtonSize: '24px',
          infoButtonPadding: '2px 4px'
        };
    }
  };

  const sizeSpecs = getSizeSpecs();

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

  // Generate CSS classes based on props
  const containerClasses = [
    'fluent-field',
    `fluent-field--size-${size.toLowerCase()}`,
    disabled && 'fluent-field--disabled',
    errorMessage && 'fluent-field--error',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={containerClasses}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        position: 'relative',
        width: '100%',
        ...style
      }}
      {...props}
    >
      {/* Label + Info Button Section */}
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          height: sizeSpecs.labelHeight,
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: sizeSpecs.labelPadding,
          position: 'relative',
          width: '100%',
          flexShrink: 0
        }}
      >
        {/* Label */}
        <div
          className={sizeSpecs.labelFont}
          style={{
            display: 'flex',
            gap: '4px',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            position: 'relative',
            flexShrink: 0,
            whiteSpace: 'nowrap'
          }}
        >
          <label
            id={id}
            htmlFor={htmlFor}
            style={{
              position: 'relative',
              flexShrink: 0,
              color: disabled ? '#a6a6a6' : '#242424',
              whiteSpace: 'pre',
              margin: 0
            }}
          >
            {label}
          </label>
          {required && (
            <span
              style={{
                position: 'relative',
                flexShrink: 0,
                color: '#b10e1c',
                whiteSpace: 'pre'
              }}
              aria-label="Required"
            >
              *
            </span>
          )}
        </div>

        {/* Info Button */}
        {infoContent && (
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={handleInfoClick}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              aria-label={infoTitle}
              aria-expanded={showTooltip}
              aria-describedby={infoContent ? `${id}-info-tooltip` : undefined}
              style={{
                background: 'rgba(255,255,255,0)',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: sizeSpecs.infoButtonPadding,
                position: 'relative',
                borderRadius: '4px',
                flexShrink: 0,
                width: sizeSpecs.infoButtonSize,
                height: sizeSpecs.infoButtonSize,
                border: 'none',
                cursor: disabled ? 'default' : 'pointer',
                opacity: disabled ? 0.5 : 1
              }}
            >
              <img
                src={sizeSpecs.infoIcon}
                alt="Info"
                style={{
                  display: 'block',
                  maxWidth: 'none',
                  width: sizeSpecs.infoIconSize,
                  height: sizeSpecs.infoIconSize
                }}
              />
            </button>

            {/* Tooltip */}
            {infoContent && showTooltip && (
              <div
                id={`${id}-info-tooltip`}
                role="tooltip"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  marginTop: '4px',
                  padding: '8px 12px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e1e1e1',
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#242424',
                  zIndex: 1000,
                  minWidth: '200px',
                  maxWidth: '300px'
                }}
              >
                {infoTitle && (
                  <div style={{ fontWeight: '600', marginBottom: '4px' }}>
                    {infoTitle}
                  </div>
                )}
                <div>{infoContent}</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Form Input Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          position: 'relative',
          width: '100%',
          flexShrink: 0
        }}
      >
        {/* Input Component Wrapper */}
        <div style={{ width: '100%' }}>
          {children}
        </div>

        {/* Status/Error Text */}
        {(errorMessage || helperText) && (
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              gap: '4px',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              paddingTop: '2px',
              position: 'relative',
              width: '100%',
              flexShrink: 0
            }}
          >
            {/* Error Icon */}
            {errorMessage && (
              <div
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  paddingTop: '2px',
                  position: 'relative',
                  flexShrink: 0
                }}
              >
                <img
                  src={ERROR_ICON}
                  alt="Error"
                  style={{
                    display: 'block',
                    maxWidth: 'none',
                    width: '10px',
                    height: '10px'
                  }}
                />
              </div>
            )}

            {/* Status Text */}
            <div
              className="font-['Segoe_UI:Regular',_sans-serif]"
              style={{
                position: 'relative',
                flexShrink: 0,
                color: errorMessage ? '#b10e1c' : '#424242',
                fontSize: '12px',
                lineHeight: '16px',
                whiteSpace: 'nowrap'
              }}
            >
              {errorMessage || helperText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Field.displayName = 'Field';

export default Field;