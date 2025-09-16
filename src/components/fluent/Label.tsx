import React from 'react';

// Figma Node IDs:
// Small Regular: 7062:121114
// Small Semibold: 7062:121116  
// Medium Regular: 7062:121126
// Medium Semibold: 7062:121128
// Large Semibold: 7062:121240
// Disabled variants: 13805:184496, 13805:184498, 13805:184504, 13805:184506, 13805:184510

export interface LabelProps {
  /** The text content of the label */
  children: React.ReactNode;
  /** Size variant of the label */
  size?: 'Small' | 'Medium' | 'Large';
  /** Weight variant of the label */
  weight?: 'Regular' | 'Semibold';
  /** Whether the label is disabled */
  disabled?: boolean;
  /** Whether the label is required */
  required?: boolean;
  /** Additional CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** HTML for attribute for form association */
  htmlFor?: string;
  /** Accessibility id */
  id?: string;
}

export const FluentLabel: React.FC<LabelProps> = ({
  children,
  size = 'Medium',
  weight = 'Regular',
  disabled = false,
  required = false,
  className = '',
  style,
  htmlFor,
  id,
  ...props
}) => {
  // Generate CSS classes based on props
  const labelClasses = [
    'fluent-label',
    `fluent-label--size-${size.toLowerCase()}`,
    `fluent-label--weight-${weight.toLowerCase()}`,
    disabled && 'fluent-label--disabled',
    required && 'fluent-label--required',
    className
  ].filter(Boolean).join(' ');

  return (
    <label
      id={id}
      htmlFor={htmlFor}
      className={labelClasses}
      style={style}
      {...props}
    >
      {children}
      {required && (
        <span className="fluent-label__required-indicator" aria-label="Required">
          *
        </span>
      )}
    </label>
  );
};

export default FluentLabel;