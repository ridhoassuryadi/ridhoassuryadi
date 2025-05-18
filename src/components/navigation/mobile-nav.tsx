"use client"

import { usePathname, useRouter } from "next/navigation"
import { Home, Users, BookText, FileText, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  className?: string
}

export function MobileNav({ className }: MobileNavProps) {
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

  return (
    <div className={cn("bg-background border-t px-2 py-2", className)}>
      <nav className="flex items-center justify-around">
        {routes.map((route) => (
          <Button
            key={route.href}
            variant="ghost"
            size="sm"
            className={cn(
              "flex flex-col items-center gap-1 h-auto py-2 px-3",
              pathname === route.href && "text-primary bg-muted",
            )}
            onClick={() => router.push(route.href)}
          >
            <route.icon className="h-5 w-5" />
            <span className="text-xs">{route.label}</span>
          </Button>
        ))}
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center gap-1 h-auto py-2 px-3 text-primary"
          onClick={() => {
            const type = pathname.startsWith("/blogs") ? "blogs" : "notes"
            router.push(`/${type}/new`)
          }}
        >
          <Plus className="h-5 w-5" />
          <span className="text-xs">New</span>
        </Button>
      </nav>
    </div>
  )
}

