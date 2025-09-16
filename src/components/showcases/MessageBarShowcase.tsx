import React, { useState } from 'react';
import { MessageBar, MessageBarTitle, MessageBarBody } from '../fluent/MessageBar';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid, ExampleContainer } from '../shared/ComponentShowcaseLayout';

interface MessageBarShowcaseProps {
  onBackToShowcase?: () => void;
}

export const MessageBarShowcase: React.FC<MessageBarShowcaseProps> = ({ onBackToShowcase }) => {
  const [dismissedBars, setDismissedBars] = useState<Set<string>>(new Set());

  const handleDismiss = (id: string) => {
    setDismissedBars(prev => new Set([...prev, id]));
  };

  const resetDismissals = () => {
    setDismissedBars(new Set());
  };

  const messageBarExamples = [
    {
      id: 'success',
      intent: 'success' as const,
      title: 'Saved settings',
      body: 'Dialog saved successfully'
    },
    {
      id: 'warning',
      intent: 'warning' as const,
      title: 'Warning',
      body: 'Please review your settings before continuing'
    },
    {
      id: 'error',
      intent: 'error' as const,
      title: 'Error',
      body: 'Failed to save settings. Please try again'
    },
    {
      id: 'info',
      intent: 'info' as const,
      title: 'Information',
      body: 'Settings will be saved automatically'
    }
  ];

  return (
    <ComponentShowcaseLayout
      title="MessageBar Component"
      subtitle="Display notifications and status messages"
      description="MessageBars provide important information to users about system status, user actions, or contextual guidance. Use different intents to communicate the appropriate level of attention and urgency."
      onBackToShowcase={onBackToShowcase}
    >
      {/* Intent Variants */}
      <ComponentSection
        title="Intent Variants"
        description="Different visual styles to communicate the importance and context of the message."
      >
        <ExampleGrid>
          {messageBarExamples.map((example) => (
            !dismissedBars.has(example.id) && (
              <ExampleContainer 
                key={example.id}
                title={`${example.intent.charAt(0).toUpperCase() + example.intent.slice(1)} Message`}
                description={`Use for ${example.intent} notifications and feedback`}
              >
                <MessageBar
                  intent={example.intent}
                  onDismiss={() => handleDismiss(example.id)}
                >
                  <MessageBarTitle>{example.title}</MessageBarTitle>
                  <MessageBarBody>{example.body}</MessageBarBody>
                </MessageBar>
              </ExampleContainer>
            )
          ))}
        </ExampleGrid>

        <div style={{ marginTop: '16px' }}>
          <button 
            onClick={resetDismissals}
            style={{
              padding: '8px 16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              background: 'white',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Reset All Messages
          </button>
        </div>
      </ComponentSection>

      {/* Persistent Messages */}
      <ComponentSection
        title="Persistent Messages"
        description="MessageBars that cannot be dismissed, typically used for important system information."
      >
        <ExampleGrid>
          <ExampleContainer
            title="Info - No Dismiss"
            description="Important information that should remain visible"
          >
            <MessageBar intent="info" dismissible={false}>
              <MessageBarTitle>System Information</MessageBarTitle>
              <MessageBarBody>This message cannot be dismissed and will remain visible</MessageBarBody>
            </MessageBar>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Content Variations */}
      <ComponentSection
        title="Content Variations"
        description="Different content structures for various use cases."
      >
        <ExampleGrid>
          <ExampleContainer
            title="Body Only"
            description="Simple message without title"
          >
            <MessageBar intent="success" onDismiss={() => {}}>
              <MessageBarBody>Operation completed successfully</MessageBarBody>
            </MessageBar>
          </ExampleContainer>

          <ExampleContainer
            title="Long Content"
            description="MessageBar with longer text content"
          >
            <MessageBar intent="warning" onDismiss={() => {}}>
              <MessageBarTitle>Configuration Warning</MessageBarTitle>
              <MessageBarBody>
                The current configuration may cause performance issues in production environments. 
                Please review the settings in the advanced configuration panel and ensure that 
                caching is properly enabled for optimal performance.
              </MessageBarBody>
            </MessageBar>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* All Intents Reference */}
      <ComponentSection
        title="Intent Reference"
        description="Complete overview of all available intent styles."
      >
        <ExampleGrid columns={2}>
          <ExampleContainer title="Success" description="Positive feedback and confirmations">
            <MessageBar intent="success">
              <MessageBarTitle>Success</MessageBarTitle>
              <MessageBarBody>Operation completed successfully</MessageBarBody>
            </MessageBar>
          </ExampleContainer>

          <ExampleContainer title="Warning" description="Cautions and important notices">
            <MessageBar intent="warning">
              <MessageBarTitle>Warning</MessageBarTitle>
              <MessageBarBody>Please review before continuing</MessageBarBody>
            </MessageBar>
          </ExampleContainer>

          <ExampleContainer title="Error" description="Error states and failures">
            <MessageBar intent="error">
              <MessageBarTitle>Error</MessageBarTitle>
              <MessageBarBody>Operation failed</MessageBarBody>
            </MessageBar>
          </ExampleContainer>

          <ExampleContainer title="Info" description="General information and context">
            <MessageBar intent="info">
              <MessageBarTitle>Information</MessageBarTitle>
              <MessageBarBody>Additional context provided</MessageBarBody>
            </MessageBar>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default MessageBarShowcase;