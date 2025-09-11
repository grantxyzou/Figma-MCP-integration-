import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    options: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};

export const SubscriptionDropdown: Story = {
  args: {
    placeholder: 'Select a subscription',
    required: true,
    options: [
      'Visual Studio Professional Subscription',
      'Azure Free Trial',
      'Pay-As-You-Go',
      'Enterprise Agreement'
    ],
  },
};

export const StorageAccountDropdown: Story = {
  args: {
    placeholder: 'Select a storage account',
    required: true,
    options: [
      'myStorageAccount',
      'devStorageAccount',
      'prodStorageAccount'
    ],
  },
};

export const Empty: Story = {
  args: {
    placeholder: 'No options available',
    options: [],
  },
};
