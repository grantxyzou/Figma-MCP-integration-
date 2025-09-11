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
  const [navVisible, setNavVisible] = useState(true)

  const views = [
    { key: 'test', label: 'Debug Test', icon: '🔧' },
    { key: 'fluent', label: 'Fluent Demo', icon: '🎨' },
    { key: 'importer', label: 'Component Importer', icon: '📦' },
    { key: 'dashboard', label: 'Dashboard', icon: '📊' },
    { key: 'azure', label: 'Azure Form', icon: '🔷' },
    { key: 'storage', label: 'Storage Assignment', icon: '🗂️' }
  ]

  return (
    <AppErrorBoundary>
      <div style={{ minHeight: '100vh' }}>
        {/* Hide/Show Toggle Button */}
        <button
          onClick={() => setNavVisible(!navVisible)}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1001,
            width: '48px',
            height: '48px',
            backgroundColor: '#0078d4',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 120, 212, 0.3)',
            transition: 'all 0.3s ease',
            transform: navVisible ? 'rotate(45deg)' : 'rotate(0deg)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#106ebe';
            e.currentTarget.style.transform = navVisible ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0078d4';
            e.currentTarget.style.transform = navVisible ? 'rotate(45deg) scale(1)' : 'rotate(0deg) scale(1)';
          }}
        >
          {navVisible ? '✕' : '☰'}
        </button>

        {/* Navigation Bar */}
        <div style={{
          position: 'fixed',
          bottom: navVisible ? '80px' : '-200px',
          right: '20px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          backgroundColor: 'white',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
          border: '1px solid #e1dfdd',
          minWidth: '220px',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          opacity: navVisible ? 1 : 0,
          transform: navVisible ? 'translateY(0)' : 'translateY(20px)'
        }}>
          <div style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#605e5c',
            marginBottom: '8px',
            fontFamily: 'Segoe UI, system-ui, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Navigation
          </div>
          {views.map((view) => (
            <button
              key={view.key}
              onClick={() => setCurrentView(view.key as any)}
              style={{
                padding: '12px 16px',
                backgroundColor: currentView === view.key ? '#0078d4' : 'transparent',
                color: currentView === view.key ? 'white' : '#242424',
                border: currentView === view.key ? 'none' : '1px solid #e1dfdd',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontFamily: 'Segoe UI, system-ui, sans-serif',
                fontWeight: currentView === view.key ? '600' : '400',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                textAlign: 'left',
                width: '100%',
                outline: 'none'
              }}
              onMouseEnter={(e) => {
                if (currentView !== view.key) {
                  e.currentTarget.style.backgroundColor = '#f3f2f1';
                  e.currentTarget.style.borderColor = '#d1d1d1';
                  e.currentTarget.style.transform = 'translateX(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentView !== view.key) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = '#e1dfdd';
                  e.currentTarget.style.transform = 'translateX(0)';
                }
              }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 2px rgba(0, 120, 212, 0.3)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: '16px' }}>{view.icon}</span>
              <span>{view.label}</span>
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
