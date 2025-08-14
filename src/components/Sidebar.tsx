"use client";
import { navigationSections } from "@/constants/navlinks";
import { Navlink, NavigationSection } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { HamburgerButton, Right } from "@icon-park/react";
import { isMobile } from "@/lib/utils";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-6  z-[100] py-10 bg-neutral-100 max-w-[14rem] lg:w-fit  fixed lg:relative  h-screen left-0 flex flex-col justify-between"
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div onClick={() => isMobile() && setOpen(false)}>
              <Badge href="/resume" text="Read Resume" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50"
        onClick={() => setOpen(!open)}
      >
        <HamburgerButton className="h-4 w-4 text-secondary" theme="outline" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  
  // Check if icon is a custom SVG component (doesn't need theme prop)
  const isCustomIcon = (icon: any) => {
    return icon.name && (
      icon.name.includes('RaizoraIcon') ||
      icon.name.includes('HimajinHobbyIcon') ||
      icon.name.includes('TreonStudioIcon') ||
      icon.name.includes('GeaTourismIcon') ||
      icon.name.includes('TempatTeduhIcon') ||
      icon.name.includes('DigitalCraftedsIcon')
    );
  };

  return (
    <div className="flex flex-col my-10 relative z-[100]">
      {navigationSections.map((section: NavigationSection, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          {section.title && (
            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3 px-2">
              {section.title}
            </div>
          )}
          <div className="space-y-1">
            {section.items.map((link: Navlink) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => isMobile() && setOpen(false)}
                className={twMerge(
                  "text-neutral-600 hover:text-white hover:bg-neutral-800 transition duration-200 flex items-center justify-between py-2 px-2 rounded-md text-sm group",
                  isActive(link.href) && "bg-neutral-900 text-white"
                )}
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                <div className="flex items-center space-x-4">
                  <link.icon
                    className={twMerge(
                      "h-4 w-4 flex-shrink-0",
                      isActive(link.href) ? "text-white" : "text-neutral-600 group-hover:text-white"
                    )}
                    size={16}
                    {...(!isCustomIcon(link.icon) && {
                      theme: isActive(link.href) ? "filled" : "outline"
                    })}
                  />
                  <span>{link.label}</span>
                </div>
                {link.external && (
                  <Right className="h-3 w-3 text-neutral-400 group-hover:text-white transition-colors" />
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="mb-6">
        <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3 px-2">
          Online
        </div>
        <div className="space-y-1">
          {socials.map((link: Navlink) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={twMerge(
                "text-neutral-600 hover:text-white hover:bg-neutral-800 transition duration-200 flex items-center justify-between py-2 px-2 rounded-md text-sm group"
              )}
            >
              <div className="flex items-center space-x-3">
                <link.icon
                  className="h-4 w-4 flex-shrink-0 text-neutral-600 group-hover:text-white"
                  theme="outline"
                  size={16}
                />
                <span>{link.label}</span>
              </div>
              <Right className="h-3 w-3 text-neutral-400 group-hover:text-white transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2">
      <Image
        src="/images/profile.webp"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">Ridho A.</p>
        <p className="font-light text-secondary">Software Designer</p>
      </div>
    </div>
  );
};
