"use client"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { sql } from "@/lib/db"

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  author: string
  created_at: string
  image_url: string
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sql(
      "SELECT id, title, slug, excerpt, author, created_at, image_url FROM blog_posts ORDER BY created_at DESC",
    )
    return posts as BlogPost[]
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

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
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No blog posts available yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
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
          )}
        </div>
      </section>
    </main>
  )
}
