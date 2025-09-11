import React from 'react';

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  horizontal?: boolean;
  style?: React.CSSProperties;
}

export default function FormField({ 
  label, 
  required = false, 
  children,
  horizontal = true,
  style = {}
}: FormFieldProps) {
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: horizontal ? (window.innerWidth < 768 ? 'column' : 'row') : 'column',
    alignItems: horizontal ? (window.innerWidth < 768 ? 'flex-start' : 'center') : 'flex-start',
    gap: '8px',
    width: '100%',
    ...style
  };

  const labelStyles: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    fontFamily: 'Segoe UI, sans-serif',
    width: horizontal ? (window.innerWidth < 768 ? '100%' : '200px') : '100%',
    minWidth: horizontal ? (window.innerWidth < 768 ? 'auto' : '200px') : 'auto',
    marginBottom: horizontal ? '0' : '4px'
  };

  const fieldStyles: React.CSSProperties = {
    flex: horizontal ? 1 : 'none',
    width: '100%'
  };

  return (
    <div style={containerStyles}>
      <div style={labelStyles}>
        <label style={{ display: 'block' }}>
          {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
        </label>
      </div>
      <div style={fieldStyles}>
        {children}
      </div>
    </div>
  );
}
