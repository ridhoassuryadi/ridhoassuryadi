import { Button } from "@/components/ui/button"
import { Tag } from "lucide-react"

interface TagItemProps {
  title: string
}

export function TagItem({ title }: TagItemProps) {
  return (
    <Button variant="ghost" className="w-full justify-start gap-2 h-8">
      <Tag className="w-4 h-4" />
      {title}
    </Button>
  )
}

