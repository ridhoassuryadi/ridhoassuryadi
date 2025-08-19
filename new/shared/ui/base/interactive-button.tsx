import React from "react";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverButtonProps {
  text?: string;
  className?: string;
}

export function InteractiveHoverButton({
  text = "Button",
  className,
}: InteractiveHoverButtonProps = {}) {
  return (
    <a
      href="https://wa.me/6285158802425?text=Hi%20there,%0A%0AHave%20a%20project%20in%20mind%20and%20would%20love%20to%20discuss%20it%20with%20you.%0A%0AWhen's%20a%20good%20time%20for%20a%20call?"
      className={`group relative w-32 cursor-pointer overflow-hidden rounded-full button-emboss p-3 py-3 text-center font-semibold text-white ${className}`}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-sm">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 text-sm">
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className="absolute left-[18%] top-[48%] h-1 w-1 scale-[1] rounded-lg bg-[#ff5941] transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-[#ff5941]"></div>
    </a>
  );
}
