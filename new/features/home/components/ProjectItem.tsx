import { useRef } from "react"
import PixelateSvgFilter from "@/shared/ui/base/pixelate-svg-filter"
import { useMousePosition } from "@/shared/hooks/use-mouse-position"

export type ProjectItemProps = {
    videoURL: string
}
export default function ProjectItem({ videoURL }: ProjectItemProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const mousePosition = useMousePosition(containerRef)
    const pixelSize = Math.min(Math.max(mousePosition.x / 30, 1), 64)

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full gap-4 bg-black" ref={containerRef}>
      <div 
        id="image-container"
        className="w-full h-full overflow-hidden relative text-white"
        style={{ filter: "url(#pixelate-filter)" }}
      >
        <video
          src={videoURL}
          className="w-full h-full object-cover absolute inset-0"
          autoPlay
          muted
          playsInline
          loop
          //style={{ filter: "url(#pixelate-filter)" }}

        />
      </div>
      
    </div>
  )
}
