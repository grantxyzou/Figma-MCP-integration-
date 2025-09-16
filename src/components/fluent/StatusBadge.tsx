import React, { useState } from 'react';

export type StatusType = 'complete' | 'in-progress' | 'bug' | 'planned' | 'deprecated';

export interface StatusBadgeProps {
  status: StatusType;
  onClick?: (newStatus: StatusType) => void;
  readonly?: boolean;
  className?: string;
  size?: 'tiny' | 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
}

const statusConfig = {
  complete: {
    label: 'Complete',
    background: '#f3f9f1',
    color: '#107c10',
    borderColor: '#9fd89f',
    hoverBackground: '#e8f5e5',
    activeBackground: '#dff2dc'
  },
  'in-progress': {
    label: 'In Progress',
    background: '#fff9f0',
    color: '#f7630c',
    borderColor: '#fdb94e',
    hoverBackground: '#fff4e6',
    activeBackground: '#ffeedc'
  },
  bug: {
    label: 'Bug',
    background: '#fdf2f2',
    color: '#dc3545',
    borderColor: '#f5c6cb',
    hoverBackground: '#fce8e8',
    activeBackground: '#fad7d7'
  },
  planned: {
    label: 'Planned',
    background: '#f0f8ff',
    color: '#0078d4',
    borderColor: '#a6d8ff',
    hoverBackground: '#e6f3ff',
    activeBackground: '#d9ecff'
  },
  deprecated: {
    label: 'Deprecated',
    background: '#f5f5f5',
    color: '#605e5c',
    borderColor: '#c8c6c4',
    hoverBackground: '#f0f0f0',
    activeBackground: '#e6e6e6'
  }
};

const statusCycle: StatusType[] = ['complete', 'in-progress', 'bug', 'planned', 'deprecated'];

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  onClick,
  readonly = false,
  className = '',
  size = 'small'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const config = statusConfig[status];

  const handleClick = (event: React.MouseEvent) => {
    if (readonly || !onClick) return;
    
    // Prevent event from bubbling up to parent elements (like cards)
    event.stopPropagation();
    event.preventDefault();
    
    const currentIndex = statusCycle.indexOf(status);
    const nextIndex = (currentIndex + 1) % statusCycle.length;
    const nextStatus = statusCycle[nextIndex];
    onClick(nextStatus);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (readonly || !onClick) return;
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      
      // For keyboard events, we need to call the onClick directly
      const currentIndex = statusCycle.indexOf(status);
      const nextIndex = (currentIndex + 1) % statusCycle.length;
      const nextStatus = statusCycle[nextIndex];
      onClick(nextStatus);
    }
  };

  // Determine background color based on state
  let backgroundColor = config.background;
  if (!readonly && onClick) {
    if (isPressed) {
      backgroundColor = config.activeBackground;
    } else if (isHovered || isFocused) {
      backgroundColor = config.hoverBackground;
    }
  }

  const sizeConfig = {
    tiny: { fontSize: '8px', padding: '0.75em 1em', lineHeight: 1.25 },
    'extra-small': { fontSize: '9px', padding: '0.67em 0.89em', lineHeight: 1.33 },
    small: { fontSize: '10px', padding: '0.6em 0.8em', lineHeight: 1.4 },
    medium: { fontSize: '11px', padding: '0.55em 0.73em', lineHeight: 1.45 },
    large: { fontSize: '12px', padding: '0.5em 0.67em', lineHeight: 1.33 },
    'extra-large': { fontSize: '12px', padding: '0.5em 0.67em', lineHeight: 1.33 }
  };

  const currentSize = sizeConfig[size];

  return (
    <span
      className={`box-border inline-flex items-center justify-center transition-all duration-150 ${
        !readonly && onClick ? 'cursor-pointer select-none' : 'cursor-default'
      } ${className}`}
      style={{
        backgroundColor,
        color: config.color,
        borderRadius: '9999px',
        outline: `1px solid ${config.borderColor}`,
        outlineOffset: '-1px',
        fontFamily: '"Segoe UI", sans-serif',
        fontSize: currentSize.fontSize,
        lineHeight: currentSize.lineHeight,
        padding: currentSize.padding,
        fontWeight: 600, // semibold
        boxShadow: isFocused && !readonly && onClick ? `0 0 0 2px ${config.color}40` : 'none',
        gap: '2px',
        whiteSpace: 'nowrap'
      }}
      onClick={handleClick}
      onMouseEnter={() => !readonly && onClick && setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => !readonly && onClick && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onFocus={() => !readonly && onClick && setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={!readonly && onClick ? 0 : -1}
      role={!readonly && onClick ? 'button' : undefined}
      aria-label={!readonly && onClick ? `Change status from ${config.label}. Click to cycle through statuses.` : config.label}
      data-testid="status-badge"
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;