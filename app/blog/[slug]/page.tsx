"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const MOCK_POSTS: Record<string, any> = {
  "ai-powered-cybersecurity": {
    title: "The Rise of AI-Powered Cybersecurity",
    author: "Security Specialist",
    date: "2025-01-15",
    image: "/ai-cybersecurity-neural-network.jpg",
    content: `
      <p>Artificial Intelligence is fundamentally transforming how organizations approach cybersecurity. Traditional rule-based security systems are giving way to intelligent, adaptive systems that can detect anomalies and respond to threats in real-time.</p>

      <h2>The Challenge</h2>
      <p>The volume and sophistication of cyber attacks have grown exponentially. Security teams are overwhelmed with false positives, making it difficult to identify genuine threats. This is where AI makes a significant difference.</p>

      <h2>AI-Powered Solutions</h2>
      <p>Machine learning models can analyze vast amounts of network traffic and security logs to identify patterns indicative of attacks. These systems learn from historical data and continuously improve their detection capabilities.</p>

      <ul>
        <li>Real-time threat detection and prevention</li>
        <li>Behavioral analytics for identifying compromised accounts</li>
        <li>Automated incident response and remediation</li>
        <li>Predictive threat intelligence</li>
      </ul>

      <h2>Implementation Considerations</h2>
      <p>While AI-powered security solutions offer tremendous benefits, organizations must consider data privacy, model interpretability, and the need for human oversight. The goal is to augment human security experts, not replace them.</p>
    `,
  },
  "zero-trust-architecture": {
    title: "Zero Trust Architecture: The Future of Security",
    author: "Security Specialist",
    date: "2025-01-10",
    image: "/zero-trust-architecture.png",
    content: `
      <p>Zero Trust Architecture represents a fundamental shift in how we think about security. Instead of assuming everything inside the network perimeter is trustworthy, zero trust requires verification for every access request.</p>

      <h2>Core Principles</h2>
      <p>Zero Trust is built on several core principles that challenge traditional network security models.</p>

      <ul>
        <li>Never trust, always verify</li>
        <li>Assume breach mentality</li>
        <li>Verify explicitly with available data points</li>
        <li>Secure every access with least-privilege principles</li>
      </ul>

      <h2>Implementation Strategy</h2>
      <p>Moving to a zero trust architecture requires careful planning and phased implementation. Organizations should start with inventory of assets and users, then gradually implement controls.</p>

      <h2>Benefits</h2>
      <p>Organizations adopting zero trust see significant improvements in security posture, faster breach detection, and reduced lateral movement of attackers.</p>
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = MOCK_POSTS[params.slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto py-16 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto py-8 px-4">
        <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-8 bg-muted"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

        <div className="flex justify-between items-center text-muted-foreground mb-8 pb-8 border-b border-border">
          <span>{post.author}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-foreground">
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/(<h2>|<p>|<ul>|<li>)/g, '<$1 class="my-4">')
                .replace(/(<\/h2>|<\/p>|<\/ul>)/g, "</$1>"),
            }}
          />
        </div>
      </article>
    </main>
  )
}
