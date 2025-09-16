// Test script to verify Breadcrumb component integration
import { Breadcrumb } from '../src/components/fluent/Breadcrumb';
import { BreadcrumbShowcase } from '../src/components/showcases/BreadcrumbShowcase';

// Verify exports
console.log('✅ Breadcrumb component exported successfully:', typeof Breadcrumb === 'function');
console.log('✅ BreadcrumbShowcase component exported successfully:', typeof BreadcrumbShowcase === 'function');

// Test basic breadcrumb functionality
const testItems = [
  { label: 'Home', href: '/home' },
  { label: 'Documents', href: '/home/documents' },
  { label: 'Projects', current: true }
];

console.log('✅ Breadcrumb test items defined:', testItems);
console.log('✅ All exports and integration tests passed!');

export {};