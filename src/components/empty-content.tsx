import { FileText } from "lucide-react"

export function EmptyContent() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
      <FileText className="h-12 w-12 mb-4" />
      <h3 className="text-lg font-medium mb-2">No content selected</h3>
      <p className="text-sm">Select an item from the list to view its content</p>
    </div>
  )
}

