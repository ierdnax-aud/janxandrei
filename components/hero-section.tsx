"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden bg-gradient-to-b from-background via-background to-card">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            Securing the Future with <span className="text-primary">AI Intelligence</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cybersecurity and AI specialist helping organizations navigate digital threats and harness the power of
            intelligent systems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" className="gap-2" asChild>
            <Link href="#newsletter">Subscribe to Newsletter</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/blog">Read My Blog</Link>
          </Button>
        </div>

        <div className="pt-12 grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-primary">10+</div>
            <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">50+</div>
            <p className="text-sm text-muted-foreground mt-2">Projects Completed</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">100%</div>
            <p className="text-sm text-muted-foreground mt-2">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
