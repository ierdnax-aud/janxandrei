// Mock auth functions for demonstration
export async function getAuthUser() {
  return {
    id: "demo-user-001",
    email: "demo@example.com",
    firstName: "Demo",
    lastName: "User",
  }
}

export async function getAuthSession() {
  return {
    userId: "demo-user-001",
  }
}

export async function isAdmin() {
  // For demo purposes, everyone is admin
  return true
}
