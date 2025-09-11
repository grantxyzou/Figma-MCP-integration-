// FluentDemo - Demonstration of imported Fluent 2 components
// This shows the components generated from the Figma MCP integration with authentic styling

import React from 'react';
import FluentDemoHub from './FluentDemoHub';

interface FluentDemoProps {
  initialView?: string;
}

const FluentDemo: React.FC<FluentDemoProps> = ({ initialView = 'overview' }) => {
  return <FluentDemoHub initialView={initialView} />;
};

export default FluentDemo;
