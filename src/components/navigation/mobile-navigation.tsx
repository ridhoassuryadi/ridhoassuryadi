import { LayoutGrid, Star, Plus, Tag, User } from "lucide-react"
import { IconButton } from "@/components/ui/icon-button"

export function MobileNavigation() {
  return (
    <div className="bg-white border-t p-2 flex items-center justify-around">
      <IconButton icon={LayoutGrid} tooltip="All notes" />
      <IconButton icon={Star} tooltip="Favorites" />
      <IconButton icon={Plus} tooltip="New note" className="text-[#00A82D]" />
      <IconButton icon={Tag} tooltip="Tags" />
      <IconButton icon={User} tooltip="Account" />
    </div>
  )
}

