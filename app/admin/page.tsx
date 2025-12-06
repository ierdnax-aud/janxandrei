import AdminDashboard from "@/components/admin-dashboard"

export default async function AdminPage() {
  // Mock user ID for demo purposes
  const userId = "demo-user-001"

  return <AdminDashboard userId={userId} />
}
