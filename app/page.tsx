"use client"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import NewsletterSection from "@/components/newsletter-section"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      {/* Experience Section */}
      <section className="py-16 px-4 md:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-background border-border hover:border-primary transition-colors">
              <div className="mb-4 text-4xl">🛡️</div>
              <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span>→</span>
                  <span>Penetration Testing & Vulnerability Assessment</span>
                </li>
                <li className="flex gap-3">
                  <span>→</span>
                  <span>Network Security & Infrastructure Hardening</span>
                </li>
                <li className="flex gap-3">
                  <span>→</span>
                  <span>Security Architecture & Compliance</span>
                </li>
                <li className="flex gap-3">
                  <span>→</span>
                  <span>Incident Response & Threat Analysis</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-background border-border hover:border-primary transition-colors">
              <div className="mb-4 text-4xl">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AI & Machine Learning</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span>→</span>
                  <span>Large Language Models & Generative AI</span>
                </li>
                <li className="flex gap-3">
                  <span>→</span>
                  <span>Deep Learning & Neural Networks</span>
                </li>
                <li className="flex gap-3">
                  <span>→</span>
                  <span>AI-Powered Security Solutions</span>
                </li>
                <li className="flex gap-3">
                  <span>→</span>
                  <span>Model Training & Optimization</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 md:px-8 bg-card">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Cybersecurity & AI Specialist</p>
          <div className="flex gap-6">
            <Link href="/blog" className="text-sm hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/admin" className="text-sm hover:text-primary transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
