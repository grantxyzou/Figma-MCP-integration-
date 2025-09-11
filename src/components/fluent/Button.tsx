// Button - Generated from Fluent 2 Web Design System
// Figma Node ID: 8:8903

import React, { useState } from 'react';
import './fluent-tokens.css';

interface ButtonProps {
  menuButton?: boolean;
  label?: string;
  focus?: boolean;
  icon?: boolean;
  style?: "Primary" | "Secondary (Default)" | "Outline" | "Subtle" | "Transparent";
  state?: "Rest" | "Hover" | "Pressed" | "Selected" | "Disabled";
  size?: "Large" | "Medium (Default)" | "Small";
  layout?: "Icon and label (Default)" | "Icon only";
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const FluentButton: React.FC<ButtonProps> = ({ 
  style = "Secondary (Default)", 
  size = "Medium (Default)", 
  layout = "Icon and label (Default)",
  children,
  onClick,
  disabled = false,
  className = ""
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const displayLabel = children || "Button";
  
  // Map style names to CSS classes
  const getStyleClass = (styleName: string) => {
    const styleMap = {
      "Primary": "fluent-button--primary",
      "Secondary (Default)": "fluent-button--secondary",
      "Outline": "fluent-button--outline",
      "Subtle": "fluent-button--subtle",
      "Transparent": "fluent-button--transparent"
    };
    return styleMap[styleName as keyof typeof styleMap] || "fluent-button--secondary";
  };

  // Map size names to CSS classes
  const getSizeClass = (sizeName: string) => {
    const sizeMap = {
      "Small": "fluent-button--small",
      "Medium (Default)": "fluent-button--medium",
      "Large": "fluent-button--large"
    };
    return sizeMap[sizeName as keyof typeof sizeMap] || "fluent-button--medium";
  };

  const buttonClasses = [
    "fluent-button",
    getStyleClass(style),
    getSizeClass(size),
    isPressed ? "fluent-button--pressed" : "",
    className
  ].filter(Boolean).join(" ");

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      data-testid="fluent-button"
    >
      {layout !== "Icon only" && displayLabel}
    </button>
  );
};

FluentButton.displayName = 'FluentButton';

export default FluentButton;
