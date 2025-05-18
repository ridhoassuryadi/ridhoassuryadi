"use client"

import * as React from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Header } from "@/components/header"
import { MobileLayout } from "@/components/layouts/mobile-layout"
import { DesktopLayout } from "@/components/layouts/desktop-layout"

export function MainLayout() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [showNoteList, setShowNoteList] = React.useState(true)
  const [isEditing, setIsEditing] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <TooltipProvider>
      <div className="h-screen flex flex-col bg-[#F8F8F8]">
        <Header isMobile={isMobile} setIsEditing={setIsEditing} setShowNoteList={setShowNoteList} />
        {isMobile ? (
          <MobileLayout
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            showNoteList={showNoteList}
            setShowNoteList={setShowNoteList}
          />
        ) : (
          <DesktopLayout />
        )}
      </div>
    </TooltipProvider>
  )
}

