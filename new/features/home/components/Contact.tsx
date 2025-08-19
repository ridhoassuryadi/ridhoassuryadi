"use client"

import { useRef } from "react"

import TextCursorProximity from "@/shared/ui/base/text-cursor-proximity"

const styles = {
  title: {
    filter: {
      from: "blur(0px)",
      to: "blur(8px)",
    },
  },
  details: {
    filter: {
      from: "blur(0px)",
      to: "blur(4px)",
    },
  },
}

export default function Preview() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="w-dvw h-dvh flex flex-col items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24 shadow-lg "
      ref={containerRef}
    >
      <div className="relative min-w-[280px] max-w-[400px] sm:min-w-[350px] h-2/3 sm:h-full overflow-hidden w-full sm:w-4/5 md:w-4/5 lg:w-2/3 justify-between flex-col flex items-start shadow-lg p-4 bg-[#FF5A00] text-white select-none">
        <div className="flex flex-col justify-center uppercase -space-y-2">
          <TextCursorProximity
            className="text-xl will-change-transform sm:text-2xl md:text-3xl lg:text-5xl font-overused-grotesk font-bold"
            styles={styles.title}
            falloff="gaussian"
            radius={100}
            containerRef={containerRef}
          >
            HOUSE
          </TextCursorProximity>
          <TextCursorProximity
            className="text-xl will-change-transform sm:text-2xl md:text-3xl lg:text-5xl font-overused-grotesk font-bold"
            styles={styles.title}
            falloff="gaussian"
            radius={100}
            containerRef={containerRef}
          >
            OF TREON
          </TextCursorProximity>
        </div>

        <div className=" flex w-full justify-between font-medium">
          <div className="flex flex-col w-full leading-tight text-xs sm:text-sm md:text-sm lg:text-base ">
            <TextCursorProximity
              className="text-left"
              styles={styles.details}
              falloff="exponential"
              radius={70}
              containerRef={containerRef}
            >
              YOGYAKARTA ⟡ -7.8074, 110.3262
            </TextCursorProximity>

            <TextCursorProximity
              className=" text-right"
              styles={styles.details}
              falloff="exponential"
              radius={70}
              containerRef={containerRef}
            >
              GEBLAGAN STREET, TAMANTIRTO ⟶
            </TextCursorProximity>

            <TextCursorProximity
              className="text-left"
              styles={styles.details}
              falloff="exponential"
              radius={70}
              containerRef={containerRef}
            >
              MARKETING@TREONSTUDIO.COM
            </TextCursorProximity>

            <TextCursorProximity
              className="text-left"
              styles={styles.details}
              falloff="exponential"
              radius={70}
              containerRef={containerRef}
            >
              @TREONSTUDIO * +62 851-5880-2425
            </TextCursorProximity>
          </div>
        </div>
      </div>
    </div>
  )
}
