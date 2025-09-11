// Dashboard UI Specification - Generated from Natural Language
// Input: "Create a dashboard with sidebar navigation, stats cards, and a data table"

export const DASHBOARD_SPEC = {
  title: "Admin Dashboard",
  description: "Dashboard with sidebar navigation, stats cards, and data table",
  layout: "grid",
  theme: "light",
  components: [
    {
      type: "navigation",
      label: "Sidebar Navigation",
      position: "left",
      items: [
        "Dashboard",
        "Analytics", 
        "Users",
        "Settings",
        "Reports"
      ]
    },
    {
      type: "stats",
      label: "Statistics Cards",
      cards: [
        { title: "Total Users", value: "12,459", change: "+12%", trend: "up" },
        { title: "Revenue", value: "$54,239", change: "+8%", trend: "up" },
        { title: "Orders", value: "1,429", change: "-2%", trend: "down" },
        { title: "Conversion", value: "3.2%", change: "+5%", trend: "up" }
      ]
    },
    {
      type: "datatable",
      label: "Data Table",
      columns: ["Name", "Email", "Status", "Role", "Last Login"],
      data: [
        ["John Doe", "john@example.com", "Active", "Admin", "2 hours ago"],
        ["Jane Smith", "jane@example.com", "Active", "User", "1 day ago"],
        ["Bob Johnson", "bob@example.com", "Inactive", "User", "3 days ago"]
      ]
    }
  ]
};

console.log('📊 Dashboard Specification Generated!');
console.log(`Title: ${DASHBOARD_SPEC.title}`);
console.log(`Components: ${DASHBOARD_SPEC.components.length}`);
console.log('✅ Ready for Figma design and React generation!');
