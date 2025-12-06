import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { sql } from "@/lib/db"

interface BlogPost {
  title: string
  content: string
  author: string
  created_at: string
  image_url: string
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const result = await sql("SELECT title, content, author, created_at, image_url FROM blog_posts WHERE slug = $1", [
      slug,
    ])
    return result.length > 0 ? (result[0] as BlogPost) : null
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

export async function generateStaticParams() {
  try {
    const posts = await sql("SELECT slug FROM blog_posts")
    return posts.map((post: any) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

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
          src={post.image_url || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-8 bg-muted"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

        <div className="flex justify-between items-center text-muted-foreground mb-8 pb-8 border-b border-border">
          <span>{post.author}</span>
          <span>{new Date(post.created_at).toLocaleDateString()}</span>
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
