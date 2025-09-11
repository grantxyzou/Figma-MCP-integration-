import React, { useState } from 'react';
import { FluentButton } from './fluent/Button';
import { FluentInput } from './fluent/Input';
import { FluentDropdown } from './fluent/Dropdown';

interface RadioGroupProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string; description?: string }[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ name, value, onChange, options }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {options.map((option) => (
        <label 
          key={option.value}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            cursor: 'pointer',
            padding: '4px 0'
          }}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
            style={{
              width: '16px',
              height: '16px',
              marginTop: '2px',
              accentColor: '#0F6CBD'
            }}
          />
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: '14px',
              fontFamily: 'Segoe UI, system-ui, sans-serif',
              color: '#242424',
              lineHeight: '20px',
              fontWeight: 400
            }}>
              {option.label}
            </div>
            {option.description && (
              <div style={{
                fontSize: '12px',
                fontFamily: 'Segoe UI, system-ui, sans-serif',
                color: '#605E5C',
                lineHeight: '16px',
                marginTop: '2px'
              }}>
                {option.description}
              </div>
            )}
          </div>
        </label>
      ))}
    </div>
  );
};

const AzureStorageAssignmentForm: React.FC = () => {
  // Form state
  const [subscription, setSubscription] = useState('');
  const [storageAccount, setStorageAccount] = useState('');
  const [assignmentName, setAssignmentName] = useState('');
  const [role, setRole] = useState('');
  const [filterBy, setFilterBy] = useState('blob-prefix');
  const [includePrefixes, setIncludePrefixes] = useState('');
  const [excludePrefixes, setExcludePrefixes] = useState('');
  const [runFrequency, setRunFrequency] = useState('single');
  const [runDate, setRunDate] = useState('2019-03-12');
  const [runTime, setRunTime] = useState('2:00:00 AM');
  const [reportContainer, setReportContainer] = useState('');
  const [maxDuration, setMaxDuration] = useState('6');
  const [durationUnit, setDurationUnit] = useState('Days');
  const [reportFormat, setReportFormat] = useState('blob-prefix');

  // Options
  const subscriptionOptions = [
    { label: 'Visual Studio Professional Subscription', value: 'vs-pro' },
    { label: 'Azure Free Trial', value: 'free-trial' },
    { label: 'Pay-As-You-Go', value: 'payg' },
    { label: 'Enterprise Agreement', value: 'ea' }
  ];

  const storageAccountOptions = [
    { label: 'mystorageaccount001', value: 'storage-001' },
    { label: 'prodstorageaccount', value: 'storage-prod' },
    { label: 'devstorage123', value: 'storage-dev' }
  ];

  const roleOptions = [
    { label: 'Storage Blob Data Reader', value: 'blob-reader' },
    { label: 'Storage Blob Data Contributor', value: 'blob-contributor' },
    { label: 'Storage Blob Data Owner', value: 'blob-owner' }
  ];

  const containerOptions = [
    { label: 'reports-container', value: 'reports' },
    { label: 'logs-container', value: 'logs' },
    { label: 'exports-container', value: 'exports' }
  ];

  const durationOptions = [
    { label: 'Days', value: 'Days' },
    { label: 'Hours', value: 'Hours' },
    { label: 'Minutes', value: 'Minutes' }
  ];

  const filterOptions = [
    { value: 'blob-prefix', label: 'Blob prefix' },
    { value: 'no-filter', label: 'Do not filter (run task against entire storage account)' }
  ];

  const frequencyOptions = [
    { value: 'single', label: 'Single run (only once)' },
    { value: 'scheduled', label: 'Scheduled run (recurring)' }
  ];

  const reportFormatOptions = [
    { value: 'blob-prefix', label: 'Blob prefix' },
    { value: 'no-filter', label: 'Do not filter (run task against entire storage account)' }
  ];

  const handleCreate = () => {
    console.log('Creating assignment with data:', {
      subscription, storageAccount, assignmentName, role, filterBy,
      includePrefixes, excludePrefixes, runFrequency, runDate, runTime,
      reportContainer, maxDuration, durationUnit, reportFormat
    });
    alert('Assignment would be created (demo mode)');
  };

  const handleCancel = () => {
    // Reset form or close dialog
    console.log('Cancelled');
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      {/* Azure Header */}
      <div style={{
        backgroundColor: '#0078d4',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        color: 'white'
      }}>
        <div style={{ fontSize: '15px', fontWeight: 600 }}>Microsoft Azure</div>
      </div>

      {/* Breadcrumb */}
      <div style={{
        backgroundColor: '#ffffff',
        padding: '8px 20px',
        borderBottom: '1px solid #e1dfdd',
        fontSize: '14px',
        color: '#0078d4'
      }}>
        Breadcrumb &gt; Breadcrumb &gt; Breadcrumb
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '32px 20px'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px'
        }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#323130',
            margin: 0,
            lineHeight: '32px'
          }}>
            Add assignment
          </h1>
          <button style={{
            background: 'none',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            color: '#605E5C'
          }}>
            ✕
          </button>
        </div>

        {/* Description */}
        <div style={{
          fontSize: '12px',
          color: '#242424',
          lineHeight: '16px',
          marginBottom: '32px'
        }}>
          Assign storage task to a storage account. To add or edit assignment, you must have contributor role access to the storage account. <a href="#" style={{ color: '#115EA3' }}>Learn more</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Select Scope Section */}
          <section>
            <h2 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#242424',
              margin: '0 0 16px 0',
              lineHeight: '22px'
            }}>
              Select scope
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '230px 1fr',
                gap: '16px',
                alignItems: 'center'
              }}>
                <label style={{
                  fontSize: '14px',
                  color: '#242424',
                  fontWeight: 400
                }}>
                  Subscription *
                </label>
                <FluentDropdown
                  options={subscriptionOptions}
                  value={subscription}
                  onChange={setSubscription}
                  placeholder="Select a subscription"
                />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '230px 1fr',
                gap: '16px',
                alignItems: 'center'
              }}>
                <label style={{
                  fontSize: '14px',
                  color: '#242424',
                  fontWeight: 400
                }}>
                  Storage account *
                </label>
                <FluentDropdown
                  options={storageAccountOptions}
                  value={storageAccount}
                  onChange={setStorageAccount}
                  placeholder="Select a storage account"
                />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '230px 1fr',
                gap: '16px',
                alignItems: 'center'
              }}>
                <label style={{
                  fontSize: '14px',
                  color: '#242424',
                  fontWeight: 400
                }}>
                  Assignment name
                </label>
                <FluentInput
                  value={assignmentName}
                  onChange={setAssignmentName}
                  placeholder="Give this assignment a name"
                />
              </div>
            </div>
          </section>

          {/* Role Assignment Section */}
          <section>
            <h2 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#242424',
              margin: '0 0 8px 0',
              lineHeight: '22px'
            }}>
              Role assignment
            </h2>
            <p style={{
              fontSize: '12px',
              color: '#242424',
              lineHeight: '16px',
              margin: '0 0 16px 0'
            }}>
              Select a role assignment for the managed identity of the storage task. The role assignment will determine what permissions (read, write, modify) the managed identity will have. <a href="#" style={{ color: '#115EA3' }}>Learn more</a>
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '230px 1fr',
              gap: '16px',
              alignItems: 'center'
            }}>
              <label style={{
                fontSize: '14px',
                color: '#242424',
                fontWeight: 400
              }}>
                Role *
              </label>
              <FluentDropdown
                options={roleOptions}
                value={role}
                onChange={setRole}
                placeholder="Select a role"
              />
            </div>
          </section>

          {/* Filter Objects Section */}
          <section>
            <h2 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#242424',
              margin: '0 0 8px 0',
              lineHeight: '22px'
            }}>
              Filter objects
            </h2>
            <p style={{
              fontSize: '12px',
              color: '#242424',
              lineHeight: '16px',
              margin: '0 0 16px 0'
            }}>
              Select the blob or file objects you want to target by specifying a container name or path prefix. <a href="#" style={{ color: '#115EA3' }}>Learn more</a>
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '230px 1fr',
              gap: '16px',
              alignItems: 'flex-start'
            }}>
              <label style={{
                fontSize: '14px',
                color: '#242424',
                fontWeight: 400,
                paddingTop: '6px'
              }}>
                Filter by *
              </label>
              <RadioGroup
                name="filterBy"
                value={filterBy}
                onChange={setFilterBy}
                options={filterOptions}
              />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '230px 1fr',
              gap: '16px',
              alignItems: 'center',
              marginTop: '16px'
            }}>
              <label style={{
                fontSize: '14px',
                color: '#242424',
                fontWeight: 400
              }}>
                Include blob prefixes *
              </label>
              <FluentInput
                value={includePrefixes}
                onChange={setIncludePrefixes}
                placeholder='Enter a prefix or file path such as "myContainer/a"'
              />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '230px 1fr',
              gap: '16px',
              alignItems: 'center',
              marginTop: '16px'
            }}>
              <label style={{
                fontSize: '14px',
                color: '#242424',
                fontWeight: 400
              }}>
                Exclude blob prefixes *
              </label>
              <FluentInput
                value={excludePrefixes}
                onChange={setExcludePrefixes}
                placeholder='Enter a prefix or file path such as "myContainer/a"'
              />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '230px 1fr',
              gap: '16px',
              alignItems: 'center',
              marginTop: '16px'
            }}>
              <label style={{
                fontSize: '14px',
                color: '#242424',
                fontWeight: 400
              }}>
                Preview conditions *
              </label>
              <FluentButton style="Secondary (Default)" size="Medium (Default)">
                Open preview
              </FluentButton>
            </div>
          </section>

          {/* Trigger Details Section */}
          <section>
            <h2 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#242424',
              margin: '0 0 8px 0',
              lineHeight: '22px'
            }}>
              Trigger details
            </h2>
            <p style={{
              fontSize: '12px',
              color: '#242424',
              lineHeight: '16px',
              margin: '0 0 16px 0'
            }}>
              Determine how often, when, and where the storage task should execute.
            </p>

            {/* Info Message */}
            <div style={{
              backgroundColor: '#f3f2f1',
              border: '1px solid #d1d1d1',
              borderRadius: '4px',
              padding: '12px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{ color: '#0078d4', fontSize: '16px' }}>ℹ</div>
              <div style={{ fontSize: '12px', color: '#242424' }}>
                <strong>Descriptive title</strong> Assignments processing a large number of blobs may take up to 14 days to finish. <a href="#" style={{ color: '#115EA3' }}>Learn more</a>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '230px 1fr',
              gap: '16px',
              alignItems: 'flex-start',
              marginBottom: '16px'
            }}>
              <label style={{
                fontSize: '14px',
                color: '#242424',
                fontWeight: 400,
                paddingTop: '6px'
              }}>
                Run frequency *
              </label>
              <RadioGroup
                name="runFrequency"
                value={runFrequency}
                onChange={setRunFrequency}
                options={frequencyOptions}
              />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '230px auto auto',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <label style={{
                fontSize: '14px',
                color: '#242424',
                fontWeight: 400
              }}>
                Run date/time *
              </label>
              <div style={{ width: '250px' }}>
                <FluentInput
                  value={runDate}
                  onChange={setRunDate}
                  placeholder="2019-03-12"
                />
              </div>
              <div style={{ width: '250px' }}>
                <FluentInput
                  value={runTime}
                  onChange={setRunTime}
                  placeholder="2:00:00 AM"
                />
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '230px 1fr',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <label style={{
                fontSize: '14px',
                color: '#242424',
                fontWeight: 400
              }}>
                Report export container *
              </label>
              <FluentDropdown
                options={containerOptions}
                value={reportContainer}
                onChange={setReportContainer}
                placeholder="Select a container"
              />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '230px auto auto',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <label style={{
                fontSize: '14px',
                color: '#242424',
                fontWeight: 400
              }}>
                Max run duration *
              </label>
              <div style={{ width: '100px' }}>
                <FluentInput
                  value={maxDuration}
                  onChange={setMaxDuration}
                  placeholder="6"
                />
              </div>
              <div style={{ width: '150px' }}>
                <FluentDropdown
                  options={durationOptions}
                  value={durationUnit}
                  onChange={setDurationUnit}
                  placeholder="Days"
                />
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '230px 1fr',
              gap: '16px',
              alignItems: 'flex-start'
            }}>
              <label style={{
                fontSize: '14px',
                color: '#242424',
                fontWeight: 400,
                paddingTop: '6px'
              }}>
                Report format *
              </label>
              <RadioGroup
                name="reportFormat"
                value={reportFormat}
                onChange={setReportFormat}
                options={reportFormatOptions}
              />
            </div>
          </section>
        </div>

        {/* Footer */}
        <div style={{
          borderTop: '1px solid #cccccc',
          marginTop: '32px',
          paddingTop: '16px',
          display: 'flex',
          gap: '8px'
        }}>
          <FluentButton
            style="Secondary (Default)"
            onClick={handleCancel}
          >
            Cancel
          </FluentButton>
          <FluentButton
            style="Primary"
            onClick={handleCreate}
            disabled={!subscription || !storageAccount || !role}
          >
            Create
          </FluentButton>
        </div>
      </div>
    </div>
  );
};

export default AzureStorageAssignmentForm;
