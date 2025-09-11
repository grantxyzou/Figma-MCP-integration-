import React from 'react';
import { Card } from './Card';

export default {
  title: 'Fluent/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['filled', 'filled-alt', 'outline', 'subtle'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    layout: {
      control: { type: 'select' },
      options: ['default', 'custom'],
    },
    state: {
      control: { type: 'select' },
      options: ['rest', 'hover', 'pressed', 'selected', 'disabled', 'draggable'],
    },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    body: { control: 'text' },
    primaryActionText: { control: 'text' },
    secondaryActionText: { control: 'text' },
    showQuickAction: { control: 'boolean' },
    showPrimaryAction: { control: 'boolean' },
    showSecondaryAction: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    style: 'filled',
    size: 'medium',
    state: 'rest',
    title: 'Card title',
    subtitle: 'Additional metadata',
    body: 'Copilot is an AI tool designed to improve productivity by integrating with Microsoft applications, offering content generation and task automation features.',
    primaryActionText: 'Button',
    secondaryActionText: 'Button',
    showQuickAction: true,
    showPrimaryAction: true,
    showSecondaryAction: true,
  },
};

export const FilledStyle = {
  args: {
    ...Default.args,
    style: 'filled',
  },
};

export const OutlineStyle = {
  args: {
    ...Default.args,
    style: 'outline',
  },
};

export const SubtleStyle = {
  args: {
    ...Default.args,
    style: 'subtle',
  },
};

export const FilledAltStyle = {
  args: {
    ...Default.args,
    style: 'filled-alt',
  },
};

export const SmallSize = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const LargeSize = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const HoverState = {
  args: {
    ...Default.args,
    state: 'hover',
  },
};

export const SelectedState = {
  args: {
    ...Default.args,
    state: 'selected',
  },
};

export const DisabledState = {
  args: {
    ...Default.args,
    state: 'disabled',
  },
};

export const WithoutActions = {
  args: {
    ...Default.args,
    showPrimaryAction: false,
    showSecondaryAction: false,
  },
};

export const WithoutQuickAction = {
  args: {
    ...Default.args,
    showQuickAction: false,
  },
};

export const CustomContent = {
  args: {
    ...Default.args,
    children: (
      <div style={{ padding: '12px', backgroundColor: '#f3f2f1', borderRadius: '4px' }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#242424' }}>Custom Content</h4>
        <p style={{ margin: 0, color: '#616161', fontSize: '12px' }}>
          This card contains completely custom content instead of the default body text.
        </p>
      </div>
    ),
    body: undefined,
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <Card size="small" title="Small Card" subtitle="Compact size" />
      <Card size="medium" title="Medium Card" subtitle="Default size" />
      <Card size="large" title="Large Card" subtitle="Expanded size" />
    </div>
  ),
};

export const AllStyles = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <Card style="filled" title="Filled" subtitle="With shadow" />
      <Card style="filled-alt" title="Filled Alt" subtitle="Alternative fill" />
      <Card style="outline" title="Outline" subtitle="With border" />
      <Card style="subtle" title="Subtle" subtitle="Minimal style" />
    </div>
  ),
};

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <Card state="rest" title="Rest" subtitle="Default state" />
      <Card state="hover" title="Hover" subtitle="Hovered state" />
      <Card state="selected" title="Selected" subtitle="Selected state" />
      <Card state="disabled" title="Disabled" subtitle="Disabled state" />
    </div>
  ),
};

export const InteractiveDemo = {
  render: () => {
    const [selectedCard, setSelectedCard] = React.useState<string | null>(null);
    
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {['Card 1', 'Card 2', 'Card 3'].map((cardName, index) => (
          <Card
            key={cardName}
            title={cardName}
            subtitle="Click to select"
            body={`This is ${cardName.toLowerCase()}. Click to select it and see the visual feedback.`}
            state={selectedCard === cardName ? 'selected' : 'rest'}
            onClick={() => setSelectedCard(selectedCard === cardName ? null : cardName)}
            onPrimaryAction={() => alert(`Primary action clicked on ${cardName}`)}
            onSecondaryAction={() => alert(`Secondary action clicked on ${cardName}`)}
            onQuickAction={() => alert(`Quick action clicked on ${cardName}`)}
          />
        ))}
      </div>
    );
  },
};
