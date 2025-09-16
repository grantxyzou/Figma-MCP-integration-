import React, { useState } from 'react';
import { StatusBadge, StatusType } from '../fluent/StatusBadge';
import { ComponentShowcaseLayout, ComponentSection, ExampleGrid, ExampleContainer } from '../shared/ComponentShowcaseLayout';

interface StatusBadgeShowcaseProps {
  onBackToShowcase?: () => void;
}

export const StatusBadgeShowcase: React.FC<StatusBadgeShowcaseProps> = ({ onBackToShowcase }) => {
  const [interactiveStatus, setInteractiveStatus] = useState<StatusType>('complete');
  const [multipleStatuses, setMultipleStatuses] = useState<Record<string, StatusType>>({
    component1: 'complete',
    component2: 'in-progress',
    component3: 'bug',
    component4: 'planned',
    component5: 'deprecated'
  });

  const updateMultipleStatus = (key: string, newStatus: StatusType) => {
    setMultipleStatuses(prev => ({
      ...prev,
      [key]: newStatus
    }));
  };

  const allStatuses: StatusType[] = ['complete', 'in-progress', 'bug', 'planned', 'deprecated'];
  const allSizes: Array<'tiny' | 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'> = ['tiny', 'extra-small', 'small', 'medium', 'large', 'extra-large'];

  return (
    <ComponentShowcaseLayout
      title="StatusBadge Component"
      subtitle="Interactive status indicators"
      description="StatusBadges provide visual indicators for component or task status. They support interactive cycling through different states and follow Fluent design principles with proper hover, focus, and active states."
      onBackToShowcase={onBackToShowcase}
    >
      {/* Sizes */}
      <ComponentSection
        title="Badge Sizes"
        description="Different sizes for status badges with responsive padding and typography."
      >
        <ExampleGrid>
          {allSizes.map((size) => (
            <ExampleContainer 
              key={size}
              title={size.charAt(0).toUpperCase() + size.slice(1).replace('-', ' ')}
              description={`${size} size status badge`}
            >
              <StatusBadge status="complete" size={size} readonly />
            </ExampleContainer>
          ))}
        </ExampleGrid>
      </ComponentSection>

      {/* All Status Types */}
      <ComponentSection
        title="Status Types"
        description="Different status types with their associated colors and meanings."
      >
        <ExampleGrid>
          {allStatuses.map((status) => (
            <ExampleContainer 
              key={status}
              title={status.charAt(0).toUpperCase() + status.slice(1)}
              description={`${status} status indicator`}
            >
              <StatusBadge status={status} readonly />
            </ExampleContainer>
          ))}
        </ExampleGrid>
      </ComponentSection>

      {/* Interactive Examples */}
      <ComponentSection
        title="Interactive Badges"
        description="Click on badges to cycle through different status types."
      >
        <ExampleGrid>
          <ExampleContainer
            title="Single Interactive Badge"
            description="Click to cycle through all status types"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <StatusBadge
                status={interactiveStatus}
                onClick={setInteractiveStatus}
              />
              <span style={{ fontSize: '14px', color: '#605e5c' }}>
                Current: {interactiveStatus}
              </span>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Multiple Interactive Badges"
            description="Each badge maintains its own state"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {Object.entries(multipleStatuses).map(([key, status]) => (
                <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <StatusBadge
                    status={status}
                    onClick={(newStatus) => updateMultipleStatus(key, newStatus)}
                  />
                  <span style={{ fontSize: '14px', color: '#605e5c' }}>
                    Component {key.slice(-1)}: {status}
                  </span>
                </div>
              ))}
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* States and Interactions */}
      <ComponentSection
        title="Interactive States"
        description="Hover, focus, and active states for interactive badges."
      >
        <ExampleGrid>
          <ExampleContainer
            title="Hover State"
            description="Hover over the badge to see the background change"
          >
            <StatusBadge
              status="complete"
              onClick={() => {}}
            />
          </ExampleContainer>

          <ExampleContainer
            title="Focus State"
            description="Tab to focus the badge (keyboard navigation)"
          >
            <StatusBadge
              status="in-progress"
              onClick={() => {}}
            />
          </ExampleContainer>

          <ExampleContainer
            title="Readonly Badge"
            description="Non-interactive badge with no hover effects"
          >
            <StatusBadge
              status="bug"
              readonly
            />
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Usage Examples */}
      <ComponentSection
        title="Usage Examples"
        description="Real-world examples of how StatusBadges can be used in different contexts."
      >
        <ExampleGrid>
          <ExampleContainer
            title="Component Library Status"
            description="Track implementation status of UI components"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ minWidth: '100px', fontSize: '14px' }}>Button</span>
                <StatusBadge status="complete" readonly />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ minWidth: '100px', fontSize: '14px' }}>Input</span>
                <StatusBadge status="complete" readonly />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ minWidth: '100px', fontSize: '14px' }}>Avatar</span>
                <StatusBadge status="in-progress" readonly />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ minWidth: '100px', fontSize: '14px' }}>Toast</span>
                <StatusBadge status="planned" readonly />
              </div>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Task Management"
            description="Track task or project status"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ minWidth: '120px', fontSize: '14px' }}>Design Review</span>
                <StatusBadge status="complete" readonly />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ minWidth: '120px', fontSize: '14px' }}>Development</span>
                <StatusBadge status="in-progress" readonly />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ minWidth: '120px', fontSize: '14px' }}>Bug Fix #123</span>
                <StatusBadge status="bug" readonly />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ minWidth: '120px', fontSize: '14px' }}>Testing</span>
                <StatusBadge status="planned" readonly />
              </div>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>

      {/* Accessibility */}
      <ComponentSection
        title="Accessibility Features"
        description="StatusBadge components include proper accessibility support."
      >
        <ExampleGrid>
          <ExampleContainer
            title="Keyboard Navigation"
            description="Use Tab to focus, Enter/Space to activate"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <StatusBadge status="complete" onClick={() => {}} />
              <small style={{ color: '#605e5c', fontSize: '12px' }}>
                ↳ Tab to focus, Enter/Space to cycle status
              </small>
            </div>
          </ExampleContainer>

          <ExampleContainer
            title="Screen Reader Support"
            description="Proper ARIA labels and announcements"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <StatusBadge status="in-progress" onClick={() => {}} />
              <small style={{ color: '#605e5c', fontSize: '12px' }}>
                ↳ Announces status and interaction instructions
              </small>
            </div>
          </ExampleContainer>
        </ExampleGrid>
      </ComponentSection>
    </ComponentShowcaseLayout>
  );
};

export default StatusBadgeShowcase;