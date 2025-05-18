"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, ChevronLeft } from "lucide-react"
import { Sidebar } from "@/components/navigation/sidebar"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { cn } from "@/lib/utils"
import type { BaseProps } from "@/types"

export function MobileLayout({ children }: BaseProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)

  // Get current route type
  const pathParts = pathname.split("/")
  const section = pathParts[1] // '', 'teams', 'blogs', 'notes'
  const id = pathParts[2] // undefined or item id

  // Determine the layout type
  const isMainRoute = pathname === "/" || pathname === "/teams"
  const isListRoute = pathname === "/blogs" || pathname === "/notes"
  const isDetailRoute = !isMainRoute && !isListRoute

  // Get page title based on route
  const getTitle = () => {
    if (isDetailRoute) {
      return section === "blogs" ? "Blog Post" : "Note"
    }
    if (isListRoute) {
      return section === "blogs" ? "Blogs" : "Notes"
    }
    if (pathname === "/teams") return "Teams"
    return "Home"
  }

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 flex h-14 items-center gap-2 border-b bg-background px-4">
        {isDetailRoute ? (
          <Button variant="ghost" size="icon" onClick={() => router.push(`/${section}`)} className="shrink-0">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        ) : (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <Sidebar onNavigate={() => setIsOpen(false)} />
            </SheetContent>
          </Sheet>
        )}
        <div className="flex-1 text-center font-medium">{getTitle()}</div>
        <div className="w-10" /> {/* Spacer for centering */}
      </header>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 overflow-auto",
          !isDetailRoute && "pb-16", // Add padding for bottom nav
        )}
      >
        {children}
      </main>

      {/* Bottom Navigation - Hide on detail pages */}
      {!isDetailRoute && <MobileNav className="fixed bottom-0 left-0 right-0 z-50" />}
    </>
  )
}

