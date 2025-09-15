// Breadcrumb - Generated from Fluent 2 Web Design System
// Figma Node ID: 133494:14994

import React from 'react';
import './fluent-tokens.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  size?: "Small" | "Medium" | "Large";
  separator?: "chevron" | "slash";
  maxItems?: number;
  className?: string;
  onItemClick?: (item: BreadcrumbItem, index: number) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  size = "Medium",
  separator = "chevron",
  maxItems,
  className = "",
  onItemClick
}) => {
  // Truncate items if maxItems is specified
  const displayItems = maxItems && items.length > maxItems 
    ? [...items.slice(0, 1), { label: "...", disabled: true }, ...items.slice(-1)]
    : items;

  const getSizeClass = () => {
    const sizeMap = {
      "Small": "fluent-breadcrumb--small",
      "Medium": "fluent-breadcrumb--medium", 
      "Large": "fluent-breadcrumb--large"
    };
    return sizeMap[size];
  };

  const getSeparatorIcon = () => {
    if (separator === "slash") {
      return <span className="fluent-breadcrumb__separator fluent-breadcrumb__separator--slash">/</span>;
    }
    
    // Default chevron separator
    return (
      <div className="fluent-breadcrumb__separator fluent-breadcrumb__separator--chevron">
        <svg width="6.5" height="12" viewBox="0 0 6.5 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="currentColor"/>
        </svg>
      </div>
    );
  };

  const handleItemClick = (item: BreadcrumbItem, index: number, event: React.MouseEvent) => {
    if (item.disabled || item.current) {
      event.preventDefault();
      return;
    }

    if (item.onClick) {
      event.preventDefault();
      item.onClick();
    }

    if (onItemClick) {
      onItemClick(item, index);
    }
  };

  const breadcrumbClasses = [
    "fluent-breadcrumb",
    getSizeClass(),
    className
  ].filter(Boolean).join(" ");

  return (
    <nav className={breadcrumbClasses} role="navigation" aria-label="Breadcrumb">
      <ol className="fluent-breadcrumb__list">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const itemClasses = [
            "fluent-breadcrumb__item",
            item.current ? "fluent-breadcrumb__item--current" : "",
            item.disabled ? "fluent-breadcrumb__item--disabled" : ""
          ].filter(Boolean).join(" ");

          return (
            <li key={index} className={itemClasses}>
              {item.href && !item.disabled && !item.current ? (
                <a 
                  href={item.href}
                  className="fluent-breadcrumb__link"
                  onClick={(e) => handleItemClick(item, index, e)}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.label}
                </a>
              ) : (
                <span 
                  className={`fluent-breadcrumb__text ${item.disabled ? 'fluent-breadcrumb__text--disabled' : ''}`}
                  onClick={item.onClick && !item.disabled ? (e) => handleItemClick(item, index, e) : undefined}
                  role={item.onClick && !item.disabled ? "button" : undefined}
                  tabIndex={item.onClick && !item.disabled ? 0 : undefined}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && getSeparatorIcon()}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;