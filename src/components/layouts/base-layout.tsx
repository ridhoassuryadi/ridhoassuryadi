"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Sidebar } from "@/components/navigation/sidebar"
import { EmptyContent } from "@/components/empty-content"
import { MobileLayout } from "@/components/layouts/mobile-layout"
import { NoteList } from "@/components/notes/note-list"
import type { BaseProps } from "@/types"

export function BaseLayout({ children }: BaseProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = React.useState(false)

  // Determine the current route type
  const pathParts = pathname.split("/")
  const section = pathParts[1] // '', 'teams', 'blogs', 'notes'
  const id = pathParts[2] // The ID if we're on a detail page

  // Determine conditions
  const isMainRoute = pathname === "/" || pathname === "/teams"
  const isListRoute = pathname === "/blogs" || pathname === "/notes"
  const isDetailRoute = !isMainRoute && !isListRoute

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isMobile) {
    return <MobileLayout>{children}</MobileLayout>
  }

  return (
    <div className="h-screen flex">
      <ResizablePanelGroup direction="horizontal">
        {/* Section 1: Sidebar - Always visible */}
        <ResizablePanel defaultSize={20} minSize={15}>
          <Sidebar />
        </ResizablePanel>

        {/* Section 2: List View - Only for blogs and notes routes */}
        {!isMainRoute && (
          <>
            <ResizableHandle />
            <ResizablePanel defaultSize={30} minSize={20}>
              <div className="h-full bg-white border-r">
                {section === "blogs" && <NoteList title="Blogs" type="blog" currentId={id} />}
                {section === "notes" && <NoteList title="Notes" type="note" currentId={id} />}
              </div>
            </ResizablePanel>
          </>
        )}

        {/* Section 3: Content View */}
        <ResizableHandle />
        <ResizablePanel defaultSize={isMainRoute ? 80 : 50}>
          <div className="h-full bg-white">{isListRoute ? <EmptyContent /> : children}</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

