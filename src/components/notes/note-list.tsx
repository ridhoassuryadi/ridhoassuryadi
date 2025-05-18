"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MoreHorizontal } from "lucide-react"
import { NoteCard } from "@/components/notes/note-card"
import type { NoteType } from "@/types"

interface NoteListProps {
  title: string
  type: NoteType
  currentId?: string
}

export function NoteList({ title, type, currentId }: NoteListProps) {
  const router = useRouter()

  return (
    <div className="h-full bg-white border-r">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-medium">{title}</h2>
            <p className="text-sm text-muted-foreground">12 items</p>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)] md:h-[calc(100vh-4rem)]">
        {Array.from({ length: 10 }).map((_, i) => (
          <NoteCard
            key={i}
            title={`${type === "blog" ? "Blog" : "Note"} ${i + 1}`}
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            time="2 hours ago"
            isActive={currentId === (i + 1).toString()}
            onClick={() => router.push(`/${type}s/${i + 1}`)}
          />
        ))}
      </ScrollArea>
    </div>
  )
}

