import React from 'react';

// Create dynamic styles with hover and selected states
const getDataGridStyles = () => {
  const baseStyles = {
    container: {
      backgroundColor: '#ffffff',
      border: '1px solid #e1e1e1',
      borderRadius: '8px',
      fontFamily: '"Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
      fontSize: '14px',
      lineHeight: '20px',
      overflow: 'hidden',
      width: '100%'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse' as const,
      backgroundColor: '#ffffff'
    },
    headerCell: {
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e1e1e1',
      color: '#616161',
      fontWeight: 600,
      padding: '12px 16px',
      textAlign: 'left' as const,
      fontSize: '14px',
      verticalAlign: 'middle' as const,
      borderRight: '1px solid #e1e1e1',
      cursor: 'pointer',
      transition: 'background-color 0.1s ease',
      boxSizing: 'border-box' as const
    },
    headerCellLast: {
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e1e1e1',
      color: '#616161',
      fontWeight: 600,
      padding: '12px 16px',
      textAlign: 'left' as const,
      fontSize: '14px',
      verticalAlign: 'middle' as const,
      cursor: 'pointer',
      transition: 'background-color 0.1s ease',
      boxSizing: 'border-box' as const
    },
    cell: {
      borderBottom: '1px solid #e1e1e1',
      padding: '12px 16px',
      verticalAlign: 'middle' as const,
      fontSize: '14px',
      lineHeight: '20px',
      borderRight: '1px solid #e1e1e1',
      transition: 'background-color 0.1s ease',
      boxSizing: 'border-box' as const
    },
    cellLast: {
      borderBottom: '1px solid #e1e1e1',
      padding: '12px 16px',
      verticalAlign: 'middle' as const,
      fontSize: '14px',
      lineHeight: '20px',
      transition: 'background-color 0.1s ease',
      boxSizing: 'border-box' as const
    },
    row: {
      cursor: 'pointer',
      transition: 'background-color 0.1s ease'
    },
    rowHover: {
      backgroundColor: '#f3f2f1'
    },
    rowSelected: {
      backgroundColor: '#f3f9fd'
    },
    rowSelectedHover: {
      backgroundColor: '#e8f4fd'
    },
    headerCellHover: {
      backgroundColor: '#f3f2f1'
    },
    contentCell: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    checkbox: {
      margin: 0,
      width: '16px',
      height: '16px',
      accentColor: '#0f6cbd'
    },
    avatar: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: '#0f6cbd',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      fontWeight: 600
    },
    folderIcon: {
      width: '20px',
      height: '20px',
      fill: '#0f6cbd'
    },
    link: {
      color: '#0f6cbd',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    radioButton: {
      margin: 0,
      width: '16px',
      height: '16px',
      accentColor: '#0f6cbd'
    }
  };

  return baseStyles;
};

// Folder Icon SVG Component
const FolderIcon: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg style={style} viewBox="0 0 20 20" fill="currentColor">
    <path d="M8.5 4H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H9.5L8.5 4Z"/>
  </svg>
);

interface DataGridItem {
  id: string;
  selected?: boolean;
  contentType: 'folder' | 'person' | 'radio' | 'link' | 'text';
  content: string;
  icon?: string;
  avatar?: string;
  header1?: string;
  header2?: string;
  header3?: string;
  header4?: string;
}

interface DataGridProps {
  items?: DataGridItem[];
  size?: 'large' | 'medium' | 'small' | 'smaller';
  selectable?: boolean;
  onSelectionChange?: (selectedItems: string[]) => void;
}

const defaultItems: DataGridItem[] = [
  {
    id: '1',
    selected: false,
    contentType: 'folder',
    content: 'Content',
    header1: 'Header',
    header2: 'Header',
    header3: 'Header',
    header4: 'Header'
  },
  {
    id: '2',
    selected: false,
    contentType: 'person',
    content: 'Content',
    avatar: 'person',
    header1: 'Header',
    header2: 'Header',
    header3: 'Header',
    header4: 'Header'
  },
  {
    id: '3',
    selected: false,
    contentType: 'radio',
    content: 'Content',
    header1: 'Header',
    header2: 'Header',
    header3: 'Header',
    header4: 'Header'
  },
  {
    id: '4',
    selected: false,
    contentType: 'link',
    content: 'Link',
    header1: 'Header',
    header2: 'Header',
    header3: 'Header',
    header4: 'Header'
  }
];

export const DataGrid: React.FC<DataGridProps> = ({
  items = defaultItems,
  size = 'medium',
  selectable = true,
  onSelectionChange
}) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
  const [hoveredRow, setHoveredRow] = React.useState<string | null>(null);
  const [hoveredHeader, setHoveredHeader] = React.useState<number | null>(null);
  
  const styles = getDataGridStyles();

  const handleSelectionChange = (itemId: string, selected: boolean) => {
    const newSelection = selected
      ? [...selectedItems, itemId]
      : selectedItems.filter(id => id !== itemId);
    
    setSelectedItems(newSelection);
    onSelectionChange?.(newSelection);
  };

  const handleSelectAll = (selected: boolean) => {
    const newSelection = selected ? items.map(item => item.id) : [];
    setSelectedItems(newSelection);
    onSelectionChange?.(newSelection);
  };

  const handleRowClick = (itemId: string) => {
    if (selectable) {
      const isSelected = selectedItems.includes(itemId);
      handleSelectionChange(itemId, !isSelected);
    }
  };

  const getRowStyle = (itemId: string, index: number) => {
    const isSelected = selectedItems.includes(itemId);
    const isHovered = hoveredRow === itemId;
    const isLastRow = index === items.length - 1;
    
    let backgroundColor = '#ffffff';
    if (isSelected && isHovered) {
      backgroundColor = styles.rowSelectedHover.backgroundColor;
    } else if (isSelected) {
      backgroundColor = styles.rowSelected.backgroundColor;
    } else if (isHovered) {
      backgroundColor = styles.rowHover.backgroundColor;
    }
    
    return {
      ...styles.row,
      backgroundColor,
      borderBottom: isLastRow ? 'none' : '1px solid #e1e1e1'
    };
  };

  const getCellStyle = (index: number, isLast: boolean = false) => {
    const sizeStyles = getSizeStyles();
    const baseStyle = isLast ? styles.cellLast : styles.cell;
    const isLastRow = index === items.length - 1;
    
    return {
      ...baseStyle,
      height: sizeStyles.rowHeight,
      borderBottom: isLastRow ? 'none' : baseStyle.borderBottom
    };
  };

  const getHeaderStyle = (headerIndex: number, isLast: boolean = false) => {
    const sizeStyles = getSizeStyles();
    const baseStyle = isLast ? styles.headerCellLast : styles.headerCell;
    const isHovered = hoveredHeader === headerIndex;
    
    return {
      ...baseStyle,
      height: sizeStyles.headerHeight,
      backgroundColor: isHovered ? styles.headerCellHover.backgroundColor : baseStyle.backgroundColor
    };
  };

  const renderContentCell = (item: DataGridItem) => {
    switch (item.contentType) {
      case 'folder':
        return (
          <div style={styles.contentCell}>
            <FolderIcon style={styles.folderIcon} />
            <span>{item.content}</span>
          </div>
        );
      case 'person':
        return (
          <div style={styles.contentCell}>
            <div style={styles.avatar}>
              {item.content.charAt(0).toUpperCase()}
            </div>
            <span>{item.content}</span>
          </div>
        );
      case 'radio':
        return (
          <div style={styles.contentCell}>
            <input 
              type="radio" 
              name="dataGridRadio" 
              defaultChecked={false}
              style={styles.radioButton}
            />
            <span>{item.content}</span>
          </div>
        );
      case 'link':
        return (
          <a style={styles.link} href="#">
            {item.content}
          </a>
        );
      default:
        return <span>{item.content}</span>;
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'large':
        return { 
          headerHeight: '33px',   // All headers are 33px total height in Figma
          rowHeight: '59px'       // Large row total height from Figma
        };
      case 'medium':
        return { 
          headerHeight: '33px',   // All headers are 33px total height in Figma  
          rowHeight: '45px'       // Medium row total height from Figma
        };
      case 'small':
        return { 
          headerHeight: '33px',   // All headers are 33px total height in Figma
          rowHeight: '33px'       // Small row total height from Figma
        };
      case 'smaller':
        return { 
          headerHeight: '33px',   // All headers are 33px total height in Figma
          rowHeight: '24px'       // Smaller row total height from Figma
        };
      default:
        return { 
          headerHeight: '33px',   // Default to medium header
          rowHeight: '45px'       // Default to medium row
        };
    }
  };

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            {selectable && (
              <th 
                style={getHeaderStyle(0)}
                onMouseEnter={() => setHoveredHeader(0)}
                onMouseLeave={() => setHoveredHeader(null)}
              >
                <input
                  type="checkbox"
                  style={styles.checkbox}
                  checked={selectedItems.length === items.length && items.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
            )}
            <th 
              style={getHeaderStyle(1)}
              onMouseEnter={() => setHoveredHeader(1)}
              onMouseLeave={() => setHoveredHeader(null)}
            >
              Header
            </th>
            <th 
              style={getHeaderStyle(2)}
              onMouseEnter={() => setHoveredHeader(2)}
              onMouseLeave={() => setHoveredHeader(null)}
            >
              Header
            </th>
            <th 
              style={getHeaderStyle(3)}
              onMouseEnter={() => setHoveredHeader(3)}
              onMouseLeave={() => setHoveredHeader(null)}
            >
              Header
            </th>
            <th 
              style={getHeaderStyle(4)}
              onMouseEnter={() => setHoveredHeader(4)}
              onMouseLeave={() => setHoveredHeader(null)}
            >
              Header
            </th>
            <th 
              style={getHeaderStyle(5, true)}
              onMouseEnter={() => setHoveredHeader(5)}
              onMouseLeave={() => setHoveredHeader(null)}
            >
              Header
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr 
              key={item.id}
              style={getRowStyle(item.id, index)}
              onMouseEnter={() => setHoveredRow(item.id)}
              onMouseLeave={() => setHoveredRow(null)}
              onClick={() => handleRowClick(item.id)}
            >
              {selectable && (
                <td style={getCellStyle(index)}>
                  <input
                    type="checkbox"
                    style={styles.checkbox}
                    checked={selectedItems.includes(item.id)}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleSelectionChange(item.id, e.target.checked);
                    }}
                  />
                </td>
              )}
              <td style={getCellStyle(index)}>
                {renderContentCell(item)}
              </td>
              <td style={getCellStyle(index)}>
                {item.header1 || 'Header'}
              </td>
              <td style={getCellStyle(index)}>
                {item.header2 || 'Header'}
              </td>
              <td style={getCellStyle(index)}>
                {item.header3 || 'Header'}
              </td>
              <td style={getCellStyle(index, true)}>
                {item.header4 || 'Header'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Named export for compatibility
export const FluentDataGrid = DataGrid;

export default DataGrid;
