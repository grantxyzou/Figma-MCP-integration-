import React from 'react';

interface DropdownProps {
  placeholder?: string;
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  style?: React.CSSProperties;
}

export default function Dropdown({ 
  placeholder = "Select an option", 
  options = [],
  value,
  onChange,
  required = false,
  style = {}
}: DropdownProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div style={{ position: 'relative', width: '100%', ...style }}>
      <select
        value={value || ''}
        onChange={handleChange}
        required={required}
        style={{
          width: '100%',
          padding: '8px 32px 8px 12px',
          border: '1px solid #d1d1d1',
          borderRadius: '4px',
          backgroundColor: 'white',
          fontSize: '13px',
          fontFamily: 'Segoe UI, sans-serif',
          color: '#605e5c',
          lineHeight: '18px',
          appearance: 'none',
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: 'right 8px center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '16px',
          minHeight: '32px',
          boxSizing: 'border-box' as const
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
