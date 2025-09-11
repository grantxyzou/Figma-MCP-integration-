// Drawer - Generated from Fluent 2 Web Design System
// Figma Node ID: 145579:764 (Overlay), 145579:767 (Inline)

import React, { ReactNode } from 'react';
import { FluentButton } from './Button';
import './fluent-tokens.css';

// Icon components for drawer controls
const DismissIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.0234 5.2891L14.7109 4.9766C14.6141 4.87969 14.4688 4.87969 14.3719 4.9766L10 9.34844L5.62812 4.9766C5.53125 4.87969 5.38594 4.87969 5.28906 4.9766L4.9766 5.2891C4.87969 5.38594 4.87969 5.53125 4.9766 5.62812L9.34844 10L4.9766 14.3719C4.87969 14.4688 4.87969 14.6141 4.9766 14.7109L5.28906 15.0234C5.38594 15.1203 5.53125 15.1203 5.62812 15.0234L10 10.6516L14.3719 15.0234C14.4688 15.1203 14.6141 15.1203 14.7109 15.0234L15.0234 14.7109C15.1203 14.6141 15.1203 14.4688 15.0234 14.3719L10.6516 10L15.0234 5.62812C15.1203 5.53125 15.1203 5.38594 15.0234 5.2891Z" fill="currentColor"/>
  </svg>
);

const MoreHorizontalIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10C6 10.8284 5.32843 11.5 4.5 11.5C3.67157 11.5 3 10.8284 3 10C3 9.17157 3.67157 8.5 4.5 8.5C5.32843 8.5 6 9.17157 6 10ZM11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10ZM15.5 11.5C16.3284 11.5 17 10.8284 17 10C17 9.17157 16.3284 8.5 15.5 8.5C14.6716 8.5 14 9.17157 14 10C14 10.8284 14.6716 11.5 15.5 11.5Z" fill="currentColor"/>
  </svg>
);

interface DrawerHeaderProps {
  title?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}

const DrawerHeaderComponent: React.FC<DrawerHeaderProps> = ({
  title = "Title",
  onClose,
  showCloseButton = true
}) => (
  <div className="fluent-drawer__header">
    <div className="fluent-drawer__header-content">
      <div className="fluent-drawer__title-container">
        <h2 className="fluent-drawer__title">{title}</h2>
      </div>
      {showCloseButton && (
        <FluentButton
          style="Subtle"
          layout="Icon only"
          onClick={onClose}
          className="fluent-drawer__close-button"
        >
          <DismissIcon />
        </FluentButton>
      )}
    </div>
  </div>
);

interface DrawerFooterProps {
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  tertiaryAction?: {
    onClick: () => void;
  };
  children?: ReactNode;
}

const DrawerFooterComponent: React.FC<DrawerFooterProps> = ({
  primaryAction,
  secondaryAction,
  tertiaryAction,
  children
}) => (
  <div className="fluent-drawer__footer">
    <div className="fluent-drawer__button-container">
      {children || (
        <>
          {primaryAction && (
            <FluentButton
              style="Primary"
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </FluentButton>
          )}
          {secondaryAction && (
            <FluentButton
              style="Secondary (Default)"
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </FluentButton>
          )}
          {tertiaryAction && (
            <FluentButton
              style="Subtle"
              layout="Icon only"
              onClick={tertiaryAction.onClick}
            >
              <MoreHorizontalIcon />
            </FluentButton>
          )}
        </>
      )}
    </div>
  </div>
);

interface DrawerProps {
  type?: "overlay" | "inline";
  size?: "small" | "medium" | "large";
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  tertiaryAction?: {
    onClick: () => void;
  };
  className?: string;
  'data-testid'?: string;
}

export const FluentDrawer: React.FC<DrawerProps> = ({
  type = "overlay",
  size = "small",
  isOpen = true,
  onClose,
  title,
  children,
  header,
  footer,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  className = "",
  'data-testid': testId
}) => {
  if (!isOpen && type === "overlay") {
    return null;
  }

  const drawerClasses = [
    "fluent-drawer",
    `fluent-drawer--${type}`,
    `fluent-drawer--${size}`,
    className
  ].filter(Boolean).join(" ");

  const drawerContent = (
    <div 
      className={drawerClasses}
      data-testid={testId}
      role={type === "overlay" ? "dialog" : "complementary"}
      aria-modal={type === "overlay"}
    >
      {header || (
        <DrawerHeaderComponent
          title={title}
          onClose={onClose}
          showCloseButton={!!onClose}
        />
      )}
      
      <div className="fluent-drawer__body">
        {children || (
          <div className="fluent-drawer__placeholder">
            <span className="fluent-drawer__placeholder-text">
              SWAP WITH CONTENT COMPONENT
            </span>
          </div>
        )}
      </div>
      
      {(footer || primaryAction || secondaryAction || tertiaryAction) && (
        footer || (
          <DrawerFooterComponent
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
            tertiaryAction={tertiaryAction}
          />
        )
      )}
    </div>
  );

  if (type === "overlay") {
    return (
      <div className="fluent-drawer-overlay" data-testid={`${testId}-overlay`}>
        <div 
          className="fluent-drawer-overlay__backdrop"
          onClick={onClose}
          aria-hidden="true"
        />
        {drawerContent}
      </div>
    );
  }

  return drawerContent;
};

FluentDrawer.displayName = 'FluentDrawer';

// Export convenience components
export const DrawerHeader = DrawerHeaderComponent;
export const DrawerFooter = DrawerFooterComponent;

export default FluentDrawer;
