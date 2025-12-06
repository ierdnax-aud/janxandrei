"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe")
      }

      setSuccess(true)
      setEmail("")
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="newsletter" className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Stay Updated</h2>
            </div>

            <p className="text-muted-foreground text-lg">
              Get the latest insights on cybersecurity threats, AI innovations, and technology trends delivered to your
              inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="bg-background border-border"
                />
                <Button type="submit" disabled={loading} className="sm:w-auto">
                  {loading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>

              {success && (
                <div className="flex items-center gap-2 text-primary bg-primary/10 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thanks for subscribing! Check your email for confirmation.</span>
                </div>
              )}

              {error && <div className="bg-destructive/10 text-destructive p-4 rounded-lg text-sm">{error}</div>}
            </form>
          </div>
        </Card>
      </div>
    </section>
  )
}
