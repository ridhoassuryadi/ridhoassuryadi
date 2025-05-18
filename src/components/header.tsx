import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search, Share2, Info, User } from "lucide-react"
import { Sidebar } from "@/components/navigation/sidebar"
import { IconButton } from "@/components/ui/icon-button"

interface HeaderProps {
  isMobile: boolean
  setIsEditing?: (value: boolean) => void
  setShowNoteList?: (value: boolean) => void
}

export function Header({ isMobile }: HeaderProps) {
  return (
    <header className="bg-white border-b">
      <div className="flex items-center p-2 gap-2">
        <div className="flex items-center flex-1 gap-2">
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-72">
                <Sidebar />
              </SheetContent>
            </Sheet>
          ) : (
            <Button size="icon" variant="ghost" className="text-[#00A82D] hover:text-[#00A82D] hover:bg-[#E6F4EA]">
              <User className="w-5 h-5" />
            </Button>
          )}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9 bg-muted border-0 focus-visible:ring-0" placeholder="Search" type="search" />
          </div>
        </div>
        {!isMobile && (
          <div className="flex items-center gap-1">
            <IconButton icon={Share2} tooltip="Share note" />
            <IconButton icon={Info} tooltip="Note info" />
          </div>
        )}
      </div>
    </header>
  )
}

