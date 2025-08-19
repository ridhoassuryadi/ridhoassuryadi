"use client";
import { StickyScroll } from "@/shared/ui/base/sticky-scroll-reveal";
import ProjectItem from "./ProjectItem";

const content = [
  {
    title: "KOPOD",
    description:
      "Podcast for records and amplifies the amazing stories of digital professionals that typically stay hidden in small circles - bringing you inspiring journeys of coders, designers, and analysts who are quietly changing the tech world.",
    content: (
      <ProjectItem videoURL="https://is3.cloudhost.id/treon/kopod-teaser.mp4" />
    ),
  },
  {
    title: "RADAS",
    description:
      "An all-in-one developer toolkit that will revolutionize how Frontend, Backend, DevOps, and Design teams build applications, featuring automatic configuration and type-safe code.",
    content: (
      <ProjectItem videoURL="https://is3.cloudhost.id/treon/radas-use-case.mp4" />
    ),
  },
  {
    title: "Muslimfy",
    description:
      "An application that bridges modern technology with Islamic values. Muslimfy is designed as a digital companion that helps Muslims navigate their spiritual journey and integrate Islamic principles into their daily lives.",
    content: (
      <ProjectItem videoURL="https://is3.cloudhost.id/treon/muslimfy-teaser.mp4" />
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4 sticky top-0 h-full">
      <StickyScroll content={content} />
    </div>
  );
}
