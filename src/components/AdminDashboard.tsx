import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

// Sidebar Navigation Component
function Sidebar() {
  const navItems = [
    { name: 'Dashboard', icon: '📊', active: true },
    { name: 'Analytics', icon: '📈', active: false },
    { name: 'Users', icon: '👥', active: false },
    { name: 'Settings', icon: '⚙️', active: false },
    { name: 'Reports', icon: '📋', active: false }
  ];

  return (
    <div style={{
      width: '240px',
      height: '100vh',
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '24px 0',
      position: 'fixed',
      left: 0,
      top: 0,
      overflowY: 'auto'
    }}>
      <div style={{ padding: '0 24px', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>
          Admin Dashboard
        </h1>
      </div>
      
      <nav>
        {navItems.map((item, index) => (
          <div
            key={index}
            style={{
              padding: '12px 24px',
              cursor: 'pointer',
              backgroundColor: item.active ? '#3b82f6' : 'transparent',
              borderRight: item.active ? '4px solid #60a5fa' : 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (!item.active) {
                e.currentTarget.style.backgroundColor = '#374151';
              }
            }}
            onMouseLeave={(e) => {
              if (!item.active) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '16px' }}>{item.icon}</span>
              <span style={{ fontSize: '14px' }}>{item.name}</span>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}

// Stats Card Component
function StatsCard({ title, value, change, trend }: StatsCardProps) {
  const isPositive = trend === 'up';
  
  return (
    <div 
      style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div style={{ marginBottom: '8px' }}>
        <h3 style={{ 
          fontSize: '14px', 
          color: '#6b7280', 
          margin: 0,
          fontWeight: '500'
        }}>
          {title}
        </h3>
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <span style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#1f2937' 
        }}>
          {value}
        </span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <span style={{
          fontSize: '12px',
          color: isPositive ? '#10b981' : '#ef4444',
          fontWeight: '500'
        }}>
          {isPositive ? '↗️' : '↘️'} {change}
        </span>
        <span style={{ fontSize: '12px', color: '#6b7280' }}>
          vs last month
        </span>
      </div>
    </div>
  );
}

// Data Table Component
function DataTable() {
  const columns = ['Name', 'Email', 'Status', 'Role', 'Last Login'];
  const data = [
    ['John Doe', 'john@example.com', 'Active', 'Admin', '2 hours ago'],
    ['Jane Smith', 'jane@example.com', 'Active', 'User', '1 day ago'],
    ['Bob Johnson', 'bob@example.com', 'Inactive', 'User', '3 days ago'],
    ['Alice Wilson', 'alice@example.com', 'Active', 'Editor', '5 hours ago'],
    ['Mike Brown', 'mike@example.com', 'Active', 'User', 'Just now']
  ];

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      overflow: 'hidden'
    }}>
      <div style={{ padding: '20px 24px', borderBottom: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: '#1f2937' }}>
          Recent Users
        </h2>
      </div>
      
      <div style={{ overflow: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              {columns.map((column, index) => (
                <th
                  key={index}
                  style={{
                    padding: '12px 24px',
                    textAlign: 'left',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#374151',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                style={{
                  borderBottom: '1px solid #f3f4f6'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f9fafb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    style={{
                      padding: '12px 24px',
                      fontSize: '14px',
                      color: cellIndex === 2 ? 
                        (cell === 'Active' ? '#10b981' : '#6b7280') : 
                        '#1f2937'
                    }}
                  >
                    {cellIndex === 2 ? (
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '500',
                        backgroundColor: cell === 'Active' ? '#d1fae5' : '#f3f4f6',
                        color: cell === 'Active' ? '#065f46' : '#374151'
                      }}>
                        {cell}
                      </span>
                    ) : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Main Dashboard Component
export default function AdminDashboard() {
  const statsData = [
    { title: 'Total Users', value: '12,459', change: '+12%', trend: 'up' },
    { title: 'Revenue', value: '$54,239', change: '+8%', trend: 'up' },
    { title: 'Orders', value: '1,429', change: '-2%', trend: 'down' },
    { title: 'Conversion', value: '3.2%', change: '+5%', trend: 'up' }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div style={{ 
        marginLeft: '240px', 
        padding: '32px',
        width: 'calc(100% - 240px)',
        minHeight: '100vh'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            color: '#1f2937',
            margin: '0 0 8px 0'
          }}>
            Dashboard Overview
          </h1>
          <p style={{ 
            fontSize: '16px', 
            color: '#6b7280',
            margin: 0
          }}>
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} trend={stat.trend as 'up' | 'down'} />
          ))}
        </div>

        {/* Data Table */}
        <DataTable />
      </div>
    </div>
  );
}
