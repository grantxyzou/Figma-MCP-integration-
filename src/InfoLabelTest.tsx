import React from 'react';
import { InfoLabel } from './components/fluent/InfoLabel';

const InfoLabelTest: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>InfoLabel Test Page</h1>
      <div style={{ padding: '20px', border: '1px solid #ccc' }}>
        <InfoLabel size="Small" infoTitle="Test Info" infoContent="This is a test">
          Small InfoLabel Test
        </InfoLabel>
        <br /><br />
        <InfoLabel size="Medium" infoTitle="Test Info" infoContent="This is a test">
          Medium InfoLabel Test
        </InfoLabel>
        <br /><br />
        <InfoLabel size="Large" infoTitle="Test Info" infoContent="This is a test">
          Large InfoLabel Test
        </InfoLabel>
      </div>
    </div>
  );
};

export default InfoLabelTest;