# Fluent StorageConfiguration

## Overview
A comprehensive Azure Storage Configuration form component implementing Microsoft's Azure portal design system. This component provides a complete interface for configuring various storage account settings with proper form validation and state management.

## Figma Source
- **Node ID**: `33:10637`
- **Design File**: Azure Storage Configuration blade
- **Last Updated**: 2025-09-12

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| initialValues | StorageConfigurationValues | {} | Initial form values |
| onSave | (values: any) => void | undefined | Callback when save is clicked |
| onDiscard | () => void | undefined | Callback when discard is clicked |
| readOnly | boolean | false | Whether form is read-only |
| className | string | '' | Additional CSS classes |

## Usage Examples
```tsx
import { StorageConfiguration } from './components/fluent';

// Basic usage
<StorageConfiguration />

// With initial values and callbacks
<StorageConfiguration
  initialValues={{
    performance: 'Premium',
    secureTransferRequired: true,
    encryptionInTransitSMB: true,
    allowBlobAnonymousAccess: false
  }}
  onSave={(values) => console.log('Saved:', values)}
  onDiscard={() => console.log('Discarded')}
/>

// Read-only mode
<StorageConfiguration readOnly />
```

## Form Fields
1. **Account kind** - Display only (StorageV2)
2. **Performance** - Radio buttons (Standard/Premium)
3. **Secure transfer required** - Radio buttons (Disable/Enable)
4. **Encryption in transit for SMB** - Radio buttons (Disable/Enable)
5. **Encryption in transit for NFS** - Radio buttons (Disable/Enable)
6. **Allow Blob anonymous access** - Radio buttons (Disable/Enable)
7. **Allow storage account key access** - Radio buttons (Disable/Enable)
8. **Allow upper limit for SAS expiry interval** - Radio buttons (Disable/Enable)
9. **Default to Microsoft Entra authorization** - Radio buttons (Disable/Enable)
10. **Minimum TLS version** - Dropdown (Version 1.0-1.3)
11. **Permitted scope for copy operations** - Dropdown (Multiple options)
12. **Default access tier** - Radio buttons (Hot/Cool/Cold)
13. **Large file shares** - Radio buttons (Disable/Enable)

## Variants
- **Interactive Form**: Full form with save/discard functionality
- **Read-only Display**: Form disabled for viewing only
- **Customizable Initial Values**: Pre-populate any form fields

## Accessibility
- ARIA labels for all form controls
- Keyboard navigation support
- Screen reader compatibility
- Proper form validation messages
- Focus management

## Design Tokens
- Uses Azure portal color scheme
- Microsoft Azure font family (Segoe UI)
- Consistent spacing and sizing
- Azure-specific blue accent colors (#0078d4)

## Changelog
- v1.0.0 - Initial implementation (2025-09-12)
  - Complete form structure
  - All form fields implemented
  - Save/discard functionality
  - Read-only mode support
  - TypeScript interfaces
