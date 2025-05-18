import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface IconButtonProps {
  icon: LucideIcon
  tooltip?: string
  className?: string
  iconClassName?: string
  onClick?: () => void
}

export function IconButton({ icon: Icon, tooltip, className, iconClassName, onClick }: IconButtonProps) {
  const button = (
    <Button variant="ghost" size="icon" className={cn("h-8 w-8", className)} onClick={onClick}>
      <Icon className={cn("w-4 h-4", iconClassName)} />
    </Button>
  )

  if (tooltip) {
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    )
  }

  return button
}

