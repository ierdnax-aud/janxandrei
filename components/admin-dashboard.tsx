"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Users, ArrowLeft } from "lucide-react"

interface Subscriber {
  id: number
  email: string
  created_at: string
}

export default function AdminDashboard({ userId }: { userId: string }) {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchSubscribers()
  }, [])

  const fetchSubscribers = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/admin/subscribers")

      if (!response.ok) {
        throw new Error("Failed to fetch subscribers")
      }

      const data = await response.json()
      setSubscribers(data.subscribers || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load subscribers")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-primary mb-2 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage your newsletter subscribers</p>
          </div>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="p-6 bg-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Subscribers</p>
                  <p className="text-3xl font-bold mt-2">{subscribers.length}</p>
                </div>
                <Users className="w-8 h-8 text-primary opacity-50" />
              </div>
            </Card>

            <Card className="p-6 bg-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">User ID</p>
                  <p className="text-sm font-mono mt-2 truncate">{userId}</p>
                </div>
                <Mail className="w-8 h-8 text-primary opacity-50" />
              </div>
            </Card>

            <Card className="p-6 bg-card">
              <div>
                <p className="text-muted-foreground text-sm">Status</p>
                <p className="text-lg font-bold mt-2 text-primary">Active</p>
              </div>
            </Card>
          </div>

          {/* Subscribers Table */}
          <Card className="overflow-hidden">
            <div className="bg-card border-b border-border px-6 py-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Mail className="w-6 h-6" />
                Newsletter Subscribers
              </h2>
            </div>

            {error && <div className="bg-destructive/10 text-destructive p-4 m-4 rounded-lg">{error}</div>}

            {loading ? (
              <div className="p-8 text-center text-muted-foreground">Loading subscribers...</div>
            ) : subscribers.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                No subscribers yet. Share your newsletter signup to get started!
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Subscribed Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((subscriber) => (
                      <tr key={subscriber.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm">{subscriber.email}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {new Date(subscriber.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>
      </section>
    </main>
  )
}
