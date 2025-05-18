"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText } from "lucide-react"

export default function NotesPage() {
  const router = useRouter()

  const notes = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    title: `Note ${i + 1}`,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2 hours ago",
  }))

  return (
    <ScrollArea className="h-[calc(100vh-8rem)]">
      <div className="p-4 space-y-4">
        {notes.map((note) => (
          <Card
            key={note.id}
            className="cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => router.push(`/notes/${note.id}`)}
          >
            <CardHeader className="p-4">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-muted-foreground" />
                <CardTitle className="text-lg">{note.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground line-clamp-2">{note.content}</p>
              <p className="text-xs text-muted-foreground mt-2">{note.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  )
}

