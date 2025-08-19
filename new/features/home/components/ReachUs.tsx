import { useCallback, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { Button } from "@/shared/ui/base/button"
import AnimatedPathText from "@/shared/ui/base/text-along-path"

export default function Preview() {
  // Rounded rectangle path
  const rectPath =
    "M 20,20 L 180,20 A 20,20 0 0,1 200,40 L 200,160 A 20,20 0 0,1 180,180 L 20,180 A 20,20 0 0,1 0,160 L 0,40 A 20,20 0 0,1 20,20"
  const [buttonState, setButtonState] = useState<
    "idle" | "loading" | "success"
  >("idle")
  const [email, setEmail] = useState("")

  const buttonCopy = {
    idle: "Lets Talk",
    loading: (
      <motion.div className="h-2 w-2 sm:h-4 sm:w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
    ),
    success: "Done ✓",
  } as const

  const handleSubmit = useCallback(() => {
    console.log(email)
    if (buttonState === "success") return

    setButtonState("loading")

    setTimeout(() => {
      setButtonState("success")
    }, 1750)

    setTimeout(() => {
      setButtonState("idle")
      setEmail("")
    }, 3500)
  }, [buttonState])

  return (
    <div className="w-[100%] h-[420px] max-w-[560px] flex justify-center items-center text-[#0015ff] relative  mx-auto my-0">
      <AnimatedPathText
        path={rectPath}
        svgClassName="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 sm:py-8"
        viewBox="-20 10 240 180"
        text="TALK WITH US ✉ TALK WITH US ✉ TALK WITH US ✉ TALK WITH US ✉ TALK WITH US ✉ TALK WITH US ✉ TALK WITH US ✉ TALK WITH US ✉ TALK WITH US ✉ TALK WITH US ✉"
        textClassName="text-[10.6px] lowercase font-azeret-mono text-[#ff5941]"
        duration={20}
        preserveAspectRatio="none"
        textAnchor="start"
      />

      {/* This is just fluff for the demo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 p-6 ">
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Hi TreonStudio, I want to..."  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-[#ff5941] focus:outline-hidden focus:ring-[#ff5941]/50 font-azeret-mono text-xs sm:text-base placeholder:text-[#ff5941] rounded-lg "
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={buttonState === "loading"}
            className="w-full px-3 py-2 h-9 sm:h-11 sm:px-8 sm:py-2 bg-[#ff5941] text-white hover:bg-[#f1543e] transition-colors font-azeret-mono text-xs sm:text-base rounded-lg"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 25 }}
                key={buttonState}
              >
                {buttonCopy[buttonState]}
              </motion.span>
            </AnimatePresence>
          </Button>
        </div>
      </div>
    </div>
  )
}
