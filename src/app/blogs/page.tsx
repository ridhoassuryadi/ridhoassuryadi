"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function BlogsPage() {
  const router = useRouter()

  const blogs = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    title: `Blog Post ${i + 1}`,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2 hours ago",
    category: "Technology",
  }))

  return (
    <ScrollArea className="h-[calc(100vh-8rem)]">
      <div className="p-4 space-y-4">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className="cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => router.push(`/blogs/${blog.id}`)}
          >
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{blog.title}</CardTitle>
              <CardDescription>{blog.category}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground line-clamp-2">{blog.excerpt}</p>
              <p className="text-xs text-muted-foreground mt-2">{blog.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  )
}

