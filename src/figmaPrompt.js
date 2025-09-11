/**
 * FIGMA DESIGN PROMPT FOR DASHBOARD
 * Copy this into Figma to create the design
 */

const FIGMA_DESIGN_PROMPT = `
🎨 FIGMA DESIGN BRIEF: Admin Dashboard

LAYOUT: Grid layout with sidebar + main content area
THEME: Clean, modern light theme with professional styling
DIMENSIONS: Desktop-first (1200px+ width), responsive-friendly

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ LAYOUT STRUCTURE:

┌─────────────┬──────────────────────────────────────────────────────────────┐
│   SIDEBAR   │                     MAIN CONTENT                            │
│   (240px)   │                                                              │
│             │  📊 STATS CARDS ROW                                         │
│ • Dashboard │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                        │
│ • Analytics │  │Card 1│ │Card 2│ │Card 3│ │Card 4│                        │
│ • Users     │  └──────┘ └──────┘ └──────┘ └──────┘                        │
│ • Settings  │                                                              │
│ • Reports   │  📋 DATA TABLE                                               │
│             │  ┌────────────────────────────────────────────────────────┐ │
│             │  │ Name     │ Email          │ Status │ Role │ Last Login │ │
│             │  ├────────────────────────────────────────────────────────┤ │
│             │  │ John Doe │ john@email.com │ Active │ Admin│ 2 hrs ago  │ │
│             │  │ Jane S.  │ jane@email.com │ Active │ User │ 1 day ago  │ │
│             │  └────────────────────────────────────────────────────────┘ │
└─────────────┴──────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 COMPONENT SPECIFICATIONS:

1. SIDEBAR NAVIGATION (240px width):
   • Dark background (#1f2937 or similar)
   • White text (#ffffff)
   • Logo/title at top
   • Navigation items with hover states
   • Icons for each menu item (optional)
   • Active state indicator (blue accent)

2. STATS CARDS (4 cards in a row):
   • White background with subtle shadow
   • Border radius: 8px
   • Padding: 24px
   • Each card contains:
     - Large number/value (24px, bold)
     - Title/label (14px, gray)
     - Change percentage (green for up, red for down)
     - Small trend arrow icon
   
   Card Data:
   • Total Users: 12,459 (+12% ↗️)
   • Revenue: $54,239 (+8% ↗️) 
   • Orders: 1,429 (-2% ↘️)
   • Conversion: 3.2% (+5% ↗️)

3. DATA TABLE:
   • White background
   • Clean borders between rows
   • Header row with bold text
   • Alternating row colors (optional)
   • Proper column spacing
   • Status badges (green for Active, gray for Inactive)
   
   Columns: Name | Email | Status | Role | Last Login
   Sample rows provided above

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎨 DESIGN GUIDELINES:

COLOR PALETTE:
• Primary: #3b82f6 (blue)
• Background: #f8fafc (light gray)
• Text: #1f2937 (dark gray)
• Success: #10b981 (green)
• Warning: #f59e0b (orange)
• Danger: #ef4444 (red)

TYPOGRAPHY:
• Font: Inter, Segoe UI, or system font
• Headers: 24px bold
• Body: 14px regular
• Small text: 12px

SPACING:
• Use 8px grid system
• Component gaps: 24px
• Card padding: 24px
• Table cell padding: 12px

SHADOWS:
• Cards: 0 1px 3px rgba(0, 0, 0, 0.1)
• Hover: 0 4px 6px rgba(0, 0, 0, 0.1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ DESIGN CHECKLIST:
□ Sidebar with navigation items
□ 4 stats cards with numbers and trends
□ Data table with headers and sample data
□ Consistent spacing and typography
□ Hover states for interactive elements
□ Professional, clean appearance
□ Ready for responsive breakpoints

Once designed, use MCP to generate React components! 🚀
`;

console.log("🎨 FIGMA DESIGN PROMPT READY!");
console.log("Copy the prompt above to create your dashboard in Figma");
console.log("━".repeat(60));
