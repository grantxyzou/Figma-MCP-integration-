// Input - Generated from Fluent 2 Web Design System
// Figma Node ID: 8:2580

import React, { useState } from 'react';
import './fluent-tokens.css';

interface FluentInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  error?: boolean;
  type?: 'text' | 'email' | 'password' | 'number';
  required?: boolean;
  id?: string;
  name?: string;
}

export const FluentInput: React.FC<FluentInputProps> = ({
  value = "",
  onChange,
  placeholder = "Enter text",
  disabled = false,
  className = "",
  error = false,
  type = "text",
  required = false,
  id,
  name
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const inputClasses = [
    "fluent-input",
    isFocused ? "fluent-input--focused" : "",
    error ? "fluent-input--error" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      id={id}
      name={name}
      className={inputClasses}
      data-testid="fluent-input"
    />
  );
};

FluentInput.displayName = 'FluentInput';

export default FluentInput;
