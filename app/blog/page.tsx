"use client"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  author: string
  created_at: string
  image_url: string
}

const MOCK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Rise of AI-Powered Cybersecurity",
    slug: "ai-powered-cybersecurity",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the way we detect and prevent cyber threats in real-time.",
    author: "Security Specialist",
    created_at: "2025-01-15",
    image_url: "/ai-cybersecurity-neural-network.jpg",
  },
  {
    id: 2,
    title: "Zero Trust Architecture: The Future of Security",
    slug: "zero-trust-architecture",
    excerpt:
      "Learn why zero trust architecture is becoming the gold standard for protecting modern enterprise networks and cloud infrastructure.",
    author: "Security Specialist",
    created_at: "2025-01-10",
    image_url: "/zero-trust-architecture.png",
  },
  {
    id: 3,
    title: "Machine Learning Models for Threat Detection",
    slug: "ml-threat-detection",
    excerpt:
      "Explore how machine learning models can identify anomalies and predict security threats before they impact your organization.",
    author: "AI Specialist",
    created_at: "2025-01-05",
    image_url: "/ml-threat-detection.png",
  },
  {
    id: 4,
    title: "Quantum Computing and Cryptography",
    slug: "quantum-cryptography",
    excerpt:
      "Understanding the implications of quantum computing on current encryption methods and the transition to quantum-resistant algorithms.",
    author: "Security Specialist",
    created_at: "2024-12-28",
    image_url: "/quantum-computing-cryptography.png",
  },
  {
    id: 5,
    title: "LLMs in Security Operations",
    slug: "llms-security-ops",
    excerpt:
      "How large language models are transforming security operations centers and improving incident response capabilities.",
    author: "AI Specialist",
    created_at: "2024-12-20",
    image_url: "/large-language-models-security.jpg",
  },
  {
    id: 6,
    title: "Supply Chain Security in 2025",
    slug: "supply-chain-security",
    excerpt:
      "Best practices and emerging technologies for securing your software supply chain against evolving threats.",
    author: "Security Specialist",
    created_at: "2024-12-15",
    image_url: "/supply-chain-security.png",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Security & AI Insights</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Expert perspectives on cybersecurity and artificial intelligence
          </p>
        </div>
      </header>

      {/* Blog Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_POSTS.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:border-primary transition-colors flex flex-col">
                <img
                  src={post.image_url || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover bg-muted"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
                    </Link>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
