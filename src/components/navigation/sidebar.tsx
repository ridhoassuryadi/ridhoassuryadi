"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, Users, BookText, FileText, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  onNavigate?: () => void
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const routes = [
    {
      icon: Home,
      label: "Home",
      href: "/",
    },
    {
      icon: Users,
      label: "Teams",
      href: "/teams",
    },
    {
      icon: BookText,
      label: "Blogs",
      href: "/blogs",
    },
    {
      icon: FileText,
      label: "Notes",
      href: "/notes",
    },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
    onNavigate?.()
  }

  return (
    <div className="h-full bg-[#F8F8F8] border-r">
      <div className="p-3">
        <Button
          className="w-full justify-start gap-2 bg-[#00A82D] text-white hover:bg-[#008F26]"
          onClick={() => {
            const type = pathname.startsWith("/blogs") ? "blogs" : "notes"
            handleNavigation(`/${type}/new`)
          }}
        >
          <Plus className="w-4 h-4" />
          New {pathname.startsWith("/blogs") ? "Blog" : "Note"}
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        <div className="space-y-4 p-2">
          <div className="space-y-1">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant="ghost"
                className={cn("w-full justify-start gap-2 h-8", pathname === route.href && "bg-muted")}
                onClick={() => handleNavigation(route.href)}
              >
                <route.icon className="w-4 h-4" />
                {route.label}
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

