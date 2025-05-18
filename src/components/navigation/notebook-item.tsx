import { Button } from "@/components/ui/button"
import { Book, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface NotebookItemProps {
  title: string
  hasChildren?: boolean
  indent?: boolean
}

export function NotebookItem({ title, hasChildren, indent }: NotebookItemProps) {
  return (
    <Button variant="ghost" className={cn("w-full justify-start gap-2 h-8", indent && "pl-8")}>
      <Book className="w-4 h-4" />
      {title}
      {hasChildren && <ChevronDown className="w-3 h-3 ml-auto" />}
    </Button>
  )
}

