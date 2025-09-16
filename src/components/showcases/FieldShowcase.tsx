import React, { useState } from 'react';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid } from '../shared/ComponentShowcaseLayout';
import { Field } from '../fluent/Field';
import { FluentInput } from '../fluent/Input';

interface FieldShowcaseProps {
  onBackToShowcase: () => void;
}

const FieldShowcase: React.FC<FieldShowcaseProps> = ({ onBackToShowcase }) => {
  const [emailValue, setEmailValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  return (
    <ComponentShowcaseLayout
      title="Field"
      subtitle="Unified form field component"
      description="Complete form field component that combines label, info tooltip, input wrapper, and error handling in one cohesive unit. Matches Figma design system exactly with authentic assets."
      onBackToShowcase={onBackToShowcase}
    >
      <ComponentSection title="Size Variants">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
          <Field
            size="Small"
            label="Small Field"
            required
            infoContent="This is a small field with 12px text and 10px info icon"
            infoTitle="Small Field Info"
            htmlFor="small-input"
          >
            <FluentInput 
              id="small-input"
              placeholder="Enter text"
              value={nameValue}
              onChange={setNameValue}
            />
          </Field>

          <Field
            size="Medium"
            label="Medium Field"
            required
            infoContent="This is a medium field with 14px text and 14px info icon"
            infoTitle="Medium Field Info"
            htmlFor="medium-input"
          >
            <FluentInput 
              id="medium-input"
              placeholder="Enter email"
              type="email"
              value={emailValue}
              onChange={setEmailValue}
            />
          </Field>

          <Field
            size="Large"
            label="Large Field"
            required
            infoContent="This is a large field with 16px semibold text and 16px info icon"
            infoTitle="Large Field Info"
            htmlFor="large-input"
          >
            <FluentInput 
              id="large-input"
              placeholder="Enter phone"
              value={phoneValue}
              onChange={setPhoneValue}
            />
          </Field>
        </div>
      </ComponentSection>

      <ComponentSection title="Error States">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
          <Field
            size="Medium"
            label="Email Address"
            required
            infoContent="We'll never share your email with anyone else"
            infoTitle="Privacy Information"
            errorMessage="Please enter a valid email address"
            htmlFor="error-input"
          >
            <FluentInput 
              id="error-input"
              placeholder="user@example.com"
              type="email"
              error
            />
          </Field>

          <Field
            size="Medium"
            label="Username"
            required
            helperText="Must be 3-20 characters, letters and numbers only"
            htmlFor="helper-input"
          >
            <FluentInput 
              id="helper-input"
              placeholder="username"
            />
          </Field>
        </div>
      </ComponentSection>

      <ComponentSection title="Disabled State">
        <div style={{ maxWidth: '400px' }}>
          <Field
            size="Medium"
            label="Disabled Field"
            required
            disabled
            infoContent="This field is currently disabled"
            htmlFor="disabled-input"
          >
            <FluentInput 
              id="disabled-input"
              placeholder="Cannot edit"
              disabled
            />
          </Field>
        </div>
      </ComponentSection>

      <ComponentSection title="Real-world Example">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
          <Field
            size="Medium"
            label="First Name"
            required
            htmlFor="first-name"
          >
            <FluentInput 
              id="first-name"
              placeholder="Enter your first name"
            />
          </Field>

          <Field
            size="Medium"
            label="Last Name"
            required
            htmlFor="last-name"
          >
            <FluentInput 
              id="last-name"
              placeholder="Enter your last name"
            />
          </Field>

          <Field
            size="Medium"
            label="Email"
            required
            infoContent="We use this to send you important account updates"
            infoTitle="Why we need your email"
            htmlFor="email-field"
          >
            <FluentInput 
              id="email-field"
              type="email"
              placeholder="name@company.com"
            />
          </Field>

          <Field
            size="Medium"
            label="Phone Number"
            infoContent="Optional - for two-factor authentication"
            htmlFor="phone-field"
          >
            <FluentInput 
              id="phone-field"
              type="text"
              placeholder="+1 (555) 123-4567"
            />
          </Field>
        </div>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default FieldShowcase;