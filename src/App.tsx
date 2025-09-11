import React, { useState } from 'react'
import './index.css'
import { AzureAssignmentForm } from './components'
import SimpleTest from './components/SimpleTest'
import AzureStorageAssignmentForm from './components/AzureStorageAssignmentForm'

// Simple error boundary component
class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f3f4f6',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '500px',
            textAlign: 'center'
          }}>
            <h1 style={{ color: '#dc2626', marginBottom: '16px' }}>
              🚨 Something went wrong
            </h1>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>
              There was an error loading the component.
            </p>
            <details style={{ textAlign: 'left', marginBottom: '24px' }}>
              <summary style={{ cursor: 'pointer', color: '#374151' }}>
                Error Details
              </summary>
              <pre style={{ 
                fontSize: '12px', 
                color: '#dc2626', 
                marginTop: '8px',
                padding: '8px',
                backgroundColor: '#fef2f2',
                borderRadius: '4px',
                overflow: 'auto'
              }}>
                {this.state.error?.toString()}
              </pre>
            </details>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '8px 16px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Component
const LoadingComponent = ({ message }: { message: string }) => (
  <div style={{ 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#faf9f8'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>⏳</div>
      <p style={{ color: '#605e5c', fontFamily: 'Segoe UI, system-ui, sans-serif' }}>
        {message}
      </p>
    </div>
  </div>
);

// Lazy load components to catch import errors
const AdminDashboard = React.lazy(() => 
  import('./components/AdminDashboard').catch(error => {
    console.error('Failed to load AdminDashboard:', error);
    return {
      default: () => (
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <h2>Dashboard Temporarily Unavailable</h2>
          <p>There was an issue loading the dashboard component.</p>
        </div>
      )
    };
  })
);

const FluentDemo = React.lazy(() => 
  import('./components/FluentDemo').catch(error => {
    console.error('Failed to load FluentDemo:', error);
    return {
      default: () => (
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <h2>Fluent Demo Temporarily Unavailable</h2>
          <p>There was an issue loading the Fluent components demo.</p>
        </div>
      )
    };
  })
);

const FluentImporter = React.lazy(() => 
  import('./components/FluentImporter').catch(error => {
    console.error('Failed to load FluentImporter:', error);
    return {
      default: () => (
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <h2>Fluent Importer Temporarily Unavailable</h2>
          <p>There was an issue loading the component importer.</p>
        </div>
      )
    };
  })
);

function App() {
  const [currentView, setCurrentView] = useState<'azure' | 'dashboard' | 'fluent' | 'importer' | 'test' | 'storage'>('test')

  const views = [
    { key: 'test', label: '🔧 Debug Test', icon: '🔧' },
    { key: 'fluent', label: '🎨 Fluent Demo', icon: '🎨' },
    { key: 'importer', label: '📦 Component Importer', icon: '📦' },
    { key: 'dashboard', label: '📊 Dashboard', icon: '📊' },
    { key: 'azure', label: '🔷 Azure Form', icon: '🔷' },
    { key: 'storage', label: '🗂️ Storage Assignment', icon: '🗂️' }
  ]

  return (
    <AppErrorBoundary>
      <div style={{ minHeight: '100vh' }}>
        {/* Navigation Bar */}
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          display: 'flex',
          gap: '8px',
          backgroundColor: 'white',
          padding: '8px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e1dfdd'
        }}>
          {views.map((view) => (
            <button
              key={view.key}
              onClick={() => setCurrentView(view.key as any)}
              style={{
                padding: '8px 12px',
                backgroundColor: currentView === view.key ? '#0078d4' : 'transparent',
                color: currentView === view.key ? 'white' : '#242424',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontFamily: 'Segoe UI, system-ui, sans-serif',
                fontWeight: currentView === view.key ? '600' : '400',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (currentView !== view.key) {
                  e.currentTarget.style.backgroundColor = '#f3f2f1';
                }
              }}
              onMouseLeave={(e) => {
                if (currentView !== view.key) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {view.icon} {view.label}
            </button>
          ))}
        </div>

        {/* Render Current View */}
        {currentView === 'test' && <SimpleTest />}

        {currentView === 'fluent' && (
          <React.Suspense fallback={<LoadingComponent message="Loading Fluent Demo..." />}>
            <FluentDemo />
          </React.Suspense>
        )}

        {currentView === 'importer' && (
          <React.Suspense fallback={<LoadingComponent message="Loading Component Importer..." />}>
            <FluentImporter />
          </React.Suspense>
        )}

        {currentView === 'dashboard' && (
          <React.Suspense fallback={<LoadingComponent message="Loading Dashboard..." />}>
            <AdminDashboard />
          </React.Suspense>
        )}

        {currentView === 'azure' && (
          <div style={{ 
            minHeight: '100vh', 
            backgroundColor: '#f3f4f6', 
            padding: '40px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <AzureAssignmentForm />
          </div>
        )}

        {currentView === 'storage' && <AzureStorageAssignmentForm />}
      </div>
    </AppErrorBoundary>
  )
}

export default App
