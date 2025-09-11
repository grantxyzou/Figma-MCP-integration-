import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

export default function Button({ 
  children, 
  variant = 'secondary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  style = {}
}: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: disabled ? '#ccc' : '#0078d4',
          color: 'white',
          border: 'none',
          ':hover': {
            backgroundColor: disabled ? '#ccc' : '#106ebe'
          }
        };
      case 'secondary':
        return {
          backgroundColor: 'white',
          color: '#374151',
          border: '1px solid #d1d5db',
          ':hover': {
            backgroundColor: '#f9fafb'
          }
        };
      case 'tertiary':
        return {
          backgroundColor: 'transparent',
          color: '#0078d4',
          border: 'none',
          ':hover': {
            backgroundColor: '#f0f9ff'
          }
        };
      default:
        return {};
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: '4px 12px',
          fontSize: '12px',
          minHeight: '24px'
        };
      case 'medium':
        return {
          padding: '8px 24px',
          fontSize: '14px',
          minHeight: '32px'
        };
      case 'large':
        return {
          padding: '12px 32px',
          fontSize: '16px',
          minHeight: '40px'
        };
      default:
        return {};
    }
  };

  const buttonStyles = {
    ...getVariantStyles(),
    ...getSizeStyles(),
    borderRadius: '4px',
    fontWeight: '600',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'Segoe UI, sans-serif',
    transition: 'all 0.2s ease',
    opacity: disabled ? 0.6 : 1,
    ...style
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={buttonStyles}
    >
      {children}
    </button>
  );
}
