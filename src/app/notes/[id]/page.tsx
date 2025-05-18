import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface NoteDetailPageProps {
  params: {
    id: string
  }
}

export default function NoteDetailPage({ params }: NoteDetailPageProps) {
  return (
    <div className="p-4">
      <Card>
        <CardHeader className="p-4">
          <div className="space-y-1">
            <CardTitle>Note {params.id}</CardTitle>
            <div className="text-sm text-muted-foreground">Last edited 2 hours ago</div>
          </div>
        </CardHeader>
        <CardContent className="p-4 prose prose-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <h2>Tasks</h2>
          <ul>
            <li>Complete project documentation</li>
            <li>Review team feedback</li>
            <li>Prepare presentation slides</li>
            <li>Schedule follow-up meeting</li>
          </ul>
          <h2>Notes</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <h2>Next Steps</h2>
          <ol>
            <li>Review current progress</li>
            <li>Identify bottlenecks</li>
            <li>Propose solutions</li>
            <li>Implement changes</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}

