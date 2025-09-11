import React, { useState } from 'react';
import { Card } from '../fluent/Card';
import { FluentButton } from '../fluent/Button';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid, ExampleContainer } from '../shared/ComponentShowcaseLayout';

interface CardShowcaseProps {
  onBackToShowcase?: () => void;
}

export const CardShowcase: React.FC<CardShowcaseProps> = ({ onBackToShowcase }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [interactionCount, setInteractionCount] = useState(0);

  return (
    <ComponentShowcaseLayout
      title="Card Component"
      subtitle="Content containers and surfaces"
      description="Cards are flexible containers that group related content and actions. They follow the Fluent 2 Design System elevation and spacing guidelines to create clear visual hierarchy and improve content organization."
      onBackToShowcase={onBackToShowcase}
    >
      {/* Card Styles */}
      <ComponentSection
        title="Card Styles"
        description="Different visual styles to match your design context and content hierarchy."
      >
        <ExampleGrid columns={3}>
          <Card
            style="filled"
            title="Filled Card"
            subtitle="Default surface style"
            body="Filled cards use a subtle background color to create separation from the page background. Best for primary content areas."
            primaryActionText="Primary Action"
            secondaryActionText="Secondary"
            onPrimaryAction={() => setInteractionCount(prev => prev + 1)}
            onSecondaryAction={() => setInteractionCount(prev => prev + 1)}
          />
          
          <Card
            style="outline"
            title="Outline Card"
            subtitle="Bordered container"
            body="Outline cards use borders instead of background fills. Perfect for secondary content or when you need subtle separation."
            primaryActionText="Learn More"
            showSecondaryAction={false}
            onPrimaryAction={() => setInteractionCount(prev => prev + 1)}
          />
          
          <Card
            style="subtle"
            title="Subtle Card"
            subtitle="Minimal styling"
            body="Subtle cards have minimal visual styling, perfect for content that should blend seamlessly with the background."
            showPrimaryAction={false}
            showSecondaryAction={false}
          />
        </ExampleGrid>
        
        {interactionCount > 0 && (
          <div style={{
            backgroundColor: '#f3f9ff',
            padding: '12px 16px',
            borderRadius: '6px',
            marginTop: '16px',
            border: '1px solid #0078d4'
          }}>
            ✨ Card actions triggered {interactionCount} time{interactionCount !== 1 ? 's' : ''}!
          </div>
        )}
      </ComponentSection>

      {/* Card Sizes */}
      <ComponentSection
        title="Card Sizes"
        description="Three size variants to accommodate different content densities and layout needs."
      >
        <ExampleGrid columns={3}>
          <Card
            size="small"
            style="filled"
            title="Small Card"
            subtitle="Compact layout"
            body="Small cards are perfect for lists, summaries, and compact information display."
            primaryActionText="Action"
            showSecondaryAction={false}
          />
          
          <Card
            size="medium"
            style="filled"
            title="Medium Card"
            subtitle="Default size"
            body="Medium cards are the default size, suitable for most content types including descriptions, images, and action buttons."
            primaryActionText="Primary"
            secondaryActionText="Secondary"
          />
          
          <Card
            size="large"
            style="filled"
            title="Large Card"
            subtitle="Expanded layout"
            body="Large cards provide generous space for detailed content, rich media, and multiple actions. Ideal for feature highlights and detailed information displays."
            primaryActionText="Get Started"
            secondaryActionText="Learn More"
          />
        </ExampleGrid>
      </ComponentSection>

      {/* Card States */}
      <ComponentSection
        title="Interactive States"
        description="Cards provide visual feedback for different interaction states to enhance user experience."
      >
        <ExampleGrid columns={3}>
          <Card
            size="medium"
            style="filled"
            state="rest"
            title="Rest State"
            subtitle="Default appearance"
            body="This is the default state when the card is not being interacted with."
            showPrimaryAction={false}
            showSecondaryAction={false}
          />
          
          <Card
            size="medium"
            style="filled"
            state="hover"
            title="Hover State"
            subtitle="Mouse interaction"
            body="Cards show subtle elevation changes on hover to indicate they are interactive."
            showPrimaryAction={false}
            showSecondaryAction={false}
          />
          
          <Card
            size="medium"
            style="filled"
            state="selected"
            title="Selected State"
            subtitle="Active selection"
            body="Selected cards use accent colors to show they are currently active or chosen."
            showPrimaryAction={false}
            showSecondaryAction={false}
          />
        </ExampleGrid>
      </ComponentSection>

      {/* Selectable Cards */}
      <ComponentSection
        title="Selectable Cards"
        description="Cards can be made selectable for choosing options, configurations, or preferences."
      >
        <ExampleGrid columns={2}>
          {['option-1', 'option-2', 'option-3', 'option-4'].map((id, index) => (
            <Card
              key={id}
              size="medium"
              style="outline"
              state={selectedCard === id ? "selected" : "rest"}
              title={`Option ${index + 1}`}
              subtitle={`Choice ${index + 1} description`}
              body={`This is selectable option ${index + 1}. Click anywhere on the card to select it and see the selection state.`}
              onClick={() => setSelectedCard(selectedCard === id ? null : id)}
              showPrimaryAction={false}
              showSecondaryAction={false}
            />
          ))}
        </ExampleGrid>
        
        {selectedCard && (
          <div style={{
            backgroundColor: '#f3f9ff',
            padding: '12px 16px',
            borderRadius: '6px',
            marginTop: '16px',
            border: '1px solid #0078d4'
          }}>
            ✓ You selected: <strong>{selectedCard.replace('-', ' ')}</strong>
          </div>
        )}
      </ComponentSection>

      {/* Content Examples */}
      <ComponentSection
        title="Content Examples"
        description="Real-world examples showing how cards can be used for different types of content."
      >
        <ExampleGrid columns={2}>
          <Card
            style="filled"
            title="Microsoft Copilot"
            subtitle="AI-powered productivity"
            body="Copilot uses advanced AI to help you write, code, create, and get answers. Integrated across Microsoft 365 applications to enhance your productivity and creativity."
            primaryActionText="Get Copilot"
            secondaryActionText="Learn More"
            onPrimaryAction={() => alert('Opening Copilot subscription...')}
            onSecondaryAction={() => alert('Opening Copilot documentation...')}
          />
          
          <Card
            style="outline"
            title="Project Status Update"
            subtitle="Q4 Development Sprint"
            body="Sprint 3 completed successfully with 94% of planned features delivered. Team velocity increased by 15% this quarter. Next sprint focuses on performance optimization and testing."
            primaryActionText="View Details"
            secondaryActionText="Download Report"
            onPrimaryAction={() => alert('Opening project dashboard...')}
            onSecondaryAction={() => alert('Downloading quarterly report...')}
          />
          
          <Card
            style="filled"
            title="Design System Update"
            subtitle="Fluent 2 Web Components"
            body="New component library release includes updated Button, Input, Card, and DataGrid components with improved accessibility and performance. Migration guide available."
            primaryActionText="Update Now"
            secondaryActionText="Migration Guide"
            onPrimaryAction={() => alert('Starting component update...')}
            onSecondaryAction={() => alert('Opening migration documentation...')}
          />
          
          <Card
            style="subtle"
            title="Team Announcement"
            subtitle="Office Hours & Training"
            body="Weekly design system office hours every Friday at 2 PM PST. Advanced component training session scheduled for next month. RSVP required for in-person attendance."
            primaryActionText="RSVP"
            showSecondaryAction={false}
            onPrimaryAction={() => alert('Opening RSVP form...')}
          />
        </ExampleGrid>
      </ComponentSection>

      {/* Layout Patterns */}
      <ComponentSection
        title="Layout Patterns"
        description="Common layout patterns and arrangements using card components effectively."
      >
        <ExampleContainer
          title="Feature Grid Layout"
          description="Using cards in a grid to showcase features or services"
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginBottom: '24px'
          }}>
            {[
              { icon: '🚀', title: 'Fast Performance', desc: 'Lightning-fast load times and smooth interactions' },
              { icon: '🔒', title: 'Secure by Design', desc: 'Enterprise-grade security and privacy protection' },
              { icon: '📱', title: 'Mobile Ready', desc: 'Responsive design that works on any device' },
              { icon: '🎨', title: 'Customizable', desc: 'Flexible theming and branding options' }
            ].map((feature, index) => (
              <Card
                key={index}
                size="small"
                style="outline"
                title={`${feature.icon} ${feature.title}`}
                body={feature.desc}
                showPrimaryAction={false}
                showSecondaryAction={false}
              />
            ))}
          </div>
        </ExampleContainer>
        
        <ExampleContainer
          title="Dashboard Widget Layout"
          description="Cards as dashboard widgets with different content types"
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            <Card
              size="medium"
              style="filled"
              title="📊 Analytics Overview"
              subtitle="Last 30 days"
              body={
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span>Page Views:</span>
                    <strong>24,561</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span>Unique Visitors:</span>
                    <strong>8,334</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Conversion Rate:</span>
                    <strong style={{ color: '#107c10' }}>3.2% ↗</strong>
                  </div>
                </div>
              }
              primaryActionText="View Details"
              showSecondaryAction={false}
            />
            
            <Card
              size="medium"
              style="filled"
              title="🎯 Goals Progress"
              subtitle="Q4 Objectives"
              body={
                <div>
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                      <span>User Adoption</span>
                      <span>85%</span>
                    </div>
                    <div style={{ 
                      height: '6px', 
                      backgroundColor: '#f3f2f1', 
                      borderRadius: '3px',
                      marginTop: '4px'
                    }}>
                      <div style={{ 
                        height: '100%', 
                        width: '85%', 
                        backgroundColor: '#107c10',
                        borderRadius: '3px'
                      }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                      <span>Revenue Target</span>
                      <span>92%</span>
                    </div>
                    <div style={{ 
                      height: '6px', 
                      backgroundColor: '#f3f2f1', 
                      borderRadius: '3px',
                      marginTop: '4px'
                    }}>
                      <div style={{ 
                        height: '100%', 
                        width: '92%', 
                        backgroundColor: '#0078d4',
                        borderRadius: '3px'
                      }} />
                    </div>
                  </div>
                </div>
              }
              primaryActionText="Update Goals"
              showSecondaryAction={false}
            />
          </div>
        </ExampleContainer>
      </ComponentSection>

      {/* Implementation */}
      <ComponentSection
        title="Implementation"
        description="Technical details and API reference for the Card component."
        marginBottom="24px"
      >
        <ExampleContainer
          title="Component API"
          description="Available props and their usage patterns"
        >
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '16px', 
            borderRadius: '6px',
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: '14px',
            overflow: 'auto'
          }}>
            <pre style={{ margin: 0, color: '#323130' }}>{`<Card
  style="filled" | "outline" | "subtle"
  size="small" | "medium" | "large"
  state="rest" | "hover" | "selected"
  title="Card Title"
  subtitle="Card Subtitle"
  body="Card content text or JSX element"
  primaryActionText="Primary Button"
  secondaryActionText="Secondary Button"
  showPrimaryAction={boolean}
  showSecondaryAction={boolean}
  onClick={() => void}
  onPrimaryAction={() => void}
  onSecondaryAction={() => void}
/>`}</pre>
          </div>
          
          <div style={{ marginTop: '16px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Key Features:</h5>
            <ul style={{ fontSize: '14px', color: '#605e5c', paddingLeft: '20px' }}>
              <li>Flexible content with title, subtitle, body, and actions</li>
              <li>Interactive states with hover and selection feedback</li>
              <li>Accessible keyboard navigation and focus management</li>
              <li>Customizable actions with primary and secondary buttons</li>
              <li>Responsive design optimized for all screen sizes</li>
              <li>Full Fluent 2 Design System compliance</li>
            </ul>
          </div>
        </ExampleContainer>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default CardShowcase;
