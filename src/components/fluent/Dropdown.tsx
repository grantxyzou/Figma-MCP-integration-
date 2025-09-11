// Dropdown - Generated from Fluent 2 Web Design System
// Figma Node ID: 8:2564

import React, { useState, useRef, useEffect } from 'react';
import './fluent-tokens.css';

interface DropdownOption {
  label: string;
  value: string;
}

interface FluentDropdownProps {
  options?: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  error?: boolean;
}

export const FluentDropdown: React.FC<FluentDropdownProps> = ({
  options = [],
  value = "",
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className = "",
  error = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const selectedOption = options.find(opt => opt.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };
  
  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  const triggerClasses = [
    "fluent-dropdown__trigger",
    isOpen ? "fluent-dropdown__trigger--open" : "",
    error ? "fluent-dropdown__trigger--error" : ""
  ].filter(Boolean).join(" ");

  const menuClasses = [
    "fluent-dropdown__menu",
    isOpen ? "fluent-dropdown__menu--open" : ""
  ].filter(Boolean).join(" ");

  return (
    <div ref={dropdownRef} className={`fluent-dropdown ${className}`}>
      <div 
        className={triggerClasses}
        onClick={handleToggle}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
        style={{
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1
        }}
        data-testid="fluent-dropdown-trigger"
      >
        <span className={selectedOption ? '' : 'fluent-dropdown__placeholder'}>
          {displayText}
        </span>
        
        <svg 
          className={`fluent-dropdown__arrow ${isOpen ? 'fluent-dropdown__arrow--open' : ''}`}
          width="12" 
          height="7" 
          viewBox="0 0 12 7" 
          fill="none"
        >
          <path 
            d="M1 1L6 6L11 1" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      <div className={menuClasses}>
        {options.map((option) => (
          <div
            key={option.value}
            className={`fluent-dropdown__option ${option.value === value ? 'fluent-dropdown__option--selected' : ''}`}
            onClick={() => handleSelect(option.value)}
            data-testid="fluent-dropdown-option"
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

FluentDropdown.displayName = 'FluentDropdown';

export default FluentDropdown;
