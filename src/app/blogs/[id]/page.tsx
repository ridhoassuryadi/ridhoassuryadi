import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogDetailPageProps {
  params: {
    id: string
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  return (
    <div className="p-4">
      <Card>
        <CardHeader className="p-4">
          <div className="space-y-1">
            <CardTitle>Blog Post {params.id}</CardTitle>
            <div className="text-sm text-muted-foreground">Published 2 hours ago • Technology</div>
          </div>
        </CardHeader>
        <CardContent className="p-4 prose prose-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <h2>Introduction</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <h2>Main Content</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <ul>
            <li>Point one about the topic</li>
            <li>Another important consideration</li>
            <li>Final key takeaway</li>
          </ul>
          <h2>Conclusion</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

