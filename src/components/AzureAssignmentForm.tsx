import React from 'react';

export default function AzureAssignmentForm() {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      {/* Azure Header */}
      <div style={{
        backgroundColor: '#0078d4',
        color: 'white',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px',
          flexWrap: 'wrap',
          minWidth: '0'
        }}>
          <div style={{ fontSize: '14px', fontWeight: '600' }}>Microsoft Azure</div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#106ebe',
            padding: '4px 12px',
            borderRadius: '4px',
            fontSize: '12px',
            minWidth: '0'
          }}>
            <span style={{ display: 'none' }}>🔍</span>
            <span style={{ 
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>Search (G+/)</span>
          </div>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          minWidth: '0'
        }}>
          <div style={{ 
            textAlign: 'right',
            minWidth: '0'
          }}>
            <div style={{ 
              fontSize: '14px',
              whiteSpace: 'nowrap'
            }}>Connie Wilson</div>
            <div style={{ 
              fontSize: '12px', 
              opacity: 0.9,
              whiteSpace: 'nowrap'
            }}>CONTOSO</div>
          </div>
          <div style={{
            width: '28px',
            height: '28px',
            backgroundColor: '#ccc',
            borderRadius: '50%',
            flexShrink: 0
          }}></div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '8px 16px',
        fontSize: '12px',
        color: '#0078d4',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }}>
        <span style={{ display: 'inline-block' }}>Home &gt; Storage accounts &gt; myStorageAccount</span>
      </div>

      {/* Header */}
      <div style={{
        padding: '16px 24px',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px',
          flexWrap: 'wrap',
          minWidth: '0'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(18px, 4vw, 24px)', 
            fontWeight: '600', 
            margin: 0, 
            color: '#1f2937',
            minWidth: '0'
          }}>
            Add assignment
          </h1>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4px'
          }}>
            <button style={{
              padding: '8px',
              border: 'none',
              background: 'transparent',
              borderRadius: '4px',
              cursor: 'pointer',
              minWidth: '32px',
              minHeight: '32px'
            }}>📌</button>
            <button style={{
              padding: '8px',
              border: 'none',
              background: 'transparent',
              borderRadius: '4px',
              cursor: 'pointer',
              minWidth: '32px',
              minHeight: '32px'
            }}>⋯</button>
          </div>
        </div>
        <button style={{
          padding: '8px',
          border: 'none',
          background: 'transparent',
          borderRadius: '4px',
          cursor: 'pointer',
          minWidth: '32px',
          minHeight: '32px'
        }}>✕</button>
      </div>

      {/* Form Content */}
      <div style={{ padding: 'clamp(16px, 4vw, 24px)' }}>
        {/* Description */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ 
            fontSize: '14px', 
            color: '#6b7280', 
            margin: '0 0 4px 0',
            lineHeight: '1.5'
          }}>
            Assign storage task to a storage account. To add or edit assignment, you must have contributor role access to the storage account.{' '}
            <a href="#" style={{ color: '#0078d4', textDecoration: 'none' }}>Learn more</a>
          </p>
        </div>

        {/* Form Section */}
        <div>
          <h2 style={{ 
            fontSize: 'clamp(16px, 3vw, 18px)', 
            fontWeight: '600', 
            color: '#1f2937', 
            marginBottom: '16px' 
          }}>
            Select scope
          </h2>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px' 
          }}>
            {/* Subscription Field */}
            <div style={{ 
              display: 'flex', 
              flexDirection: window.innerWidth < 768 ? 'column' : 'row',
              alignItems: window.innerWidth < 768 ? 'flex-start' : 'center',
              gap: '8px'
            }}>
              <div style={{ 
                width: window.innerWidth < 768 ? '100%' : '200px',
                minWidth: window.innerWidth < 768 ? 'auto' : '200px'
              }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  color: '#374151',
                  marginBottom: '4px'
                }}>
                  Subscription <span style={{ color: '#ef4444' }}>*</span>
                </label>
              </div>
              <div style={{ flex: 1, width: '100%' }}>
                <select style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  fontSize: '14px',
                  minHeight: '40px'
                }}>
                  <option value="">Select a subscription</option>
                </select>
              </div>
            </div>

            {/* Storage Account Field */}
            <div style={{ 
              display: 'flex', 
              flexDirection: window.innerWidth < 768 ? 'column' : 'row',
              alignItems: window.innerWidth < 768 ? 'flex-start' : 'center',
              gap: '8px'
            }}>
              <div style={{ 
                width: window.innerWidth < 768 ? '100%' : '200px',
                minWidth: window.innerWidth < 768 ? 'auto' : '200px'
              }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  color: '#374151',
                  marginBottom: '4px'
                }}>
                  Storage account <span style={{ color: '#ef4444' }}>*</span>
                </label>
              </div>
              <div style={{ flex: 1, width: '100%' }}>
                <select style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  fontSize: '14px',
                  minHeight: '40px'
                }}>
                  <option value="">Select a storage account</option>
                </select>
              </div>
            </div>

            {/* Assignment Name Field */}
            <div style={{ 
              display: 'flex', 
              flexDirection: window.innerWidth < 768 ? 'column' : 'row',
              alignItems: window.innerWidth < 768 ? 'flex-start' : 'center',
              gap: '8px'
            }}>
              <div style={{ 
                width: window.innerWidth < 768 ? '100%' : '200px',
                minWidth: window.innerWidth < 768 ? 'auto' : '200px'
              }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  color: '#374151',
                  marginBottom: '4px'
                }}>
                  Assignment name
                </label>
              </div>
              <div style={{ flex: 1, width: '100%' }}>
                <input
                  type="text"
                  placeholder="Give this assignment a name"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px',
                    minHeight: '40px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: 'clamp(12px, 3vw, 16px) clamp(16px, 4vw, 24px)',
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: window.innerWidth < 480 ? 'column' : 'row',
        alignItems: 'center',
        gap: '12px'
      }}>
        <button style={{
          padding: '8px 24px',
          border: '1px solid #d1d5db',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: '600',
          color: '#374151',
          backgroundColor: 'white',
          cursor: 'pointer',
          minHeight: '36px',
          width: window.innerWidth < 480 ? '100%' : 'auto'
        }}>
          Cancel
        </button>
        <button style={{
          padding: '8px 24px',
          backgroundColor: '#0078d4',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          minHeight: '36px',
          width: window.innerWidth < 480 ? '100%' : 'auto'
        }}>
          Create
        </button>
      </div>
    </div>
  );
}
