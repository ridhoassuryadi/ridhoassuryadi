import { FileText } from "lucide-react"
import { cn } from "@/lib/utils"

interface NoteCardProps {
  title: string
  excerpt: string
  time: string
  isActive?: boolean
  onClick?: () => void
}

export function NoteCard({ title, excerpt, time, isActive, onClick }: NoteCardProps) {
  return (
    <button
      className={cn(
        "w-full text-left p-4 border-b hover:bg-[#F8F8F8] transition-colors active:bg-muted",
        isActive && "bg-[#F8F8F8]",
      )}
      onClick={onClick}
      type="button"
    >
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
          <h3 className="font-medium truncate">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{time}</span>
        </div>
      </div>
    </button>
  )
}

