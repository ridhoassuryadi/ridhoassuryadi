import * as React from "react";
import { cn } from "@/shared/lib/utils";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "accent" | "muted" | "link";
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl";
  gap?: "xs" | "sm" | "base" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onlyIconSize?: boolean;
}

const variantClasses = {
  default: [
    "text-white dark:text-base-900",
    "bg-black dark:",
    "focus:outline-black dark:focus:outline-white",
  ],
  accent: [
    "text-white dark:text-base-900",
    "bg-accent-600 dark:bg-accent-500",
    "focus:outline-accent-600 dark:focus:outline-accent-600",
  ],
  muted: [
    "text-base-500 dark:text-white",
    "bg-base-50 dark:bg-base-800",
    "focus:outline-base-500 dark:focus:outline-base-800",
  ],
};

const sizeClasses = {
  xs: ["h-8", "px-4", "py-2", "text-xs"],
  sm: ["h-9", "px-4", "py-2", "text-xs"],
  base: ["h-10", "px-6", "py-3", "text-base"],
  md: ["h-11", "px-6", "py-3", "text-md"],
  lg: ["h-12", "px-6", "py-3", "text-lg"],
  xl: ["h-14", "px-6", "py-3", "text-base"],
};

const gapClasses = {
  xs: ["gap-2"],
  sm: ["gap-4"],
  base: ["gap-8"],
  md: ["gap-10"],
  lg: ["gap-12"],
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant = "default",
      size = "base",
      gap = "xs",
      leftIcon,
      rightIcon,
      children,
      onlyIconSize,
      ...rest
    },
    ref
  ) => {
    const isLink = variant === "link";
    const classes = isLink
      ? cn(className)
      : cn(
          "font-medium group relative flex transition text-center outline-transparent rounded-full items-center justify-center duration-500 ease-in-out transition-colors focus:outline-2 outline-offset-2 overflow-hidden",
          variant && variantClasses[variant],
          size && sizeClasses[size],
          gap && gapClasses[gap],
          className
        );

    return (
      <a ref={ref} className={classes} {...rest}>
        <span className="relative z-10 flex items-center">
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </span>
        {!isLink && (
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 /20 dark:bg-base-950/10"></div>
          </div>
        )}
      </a>
    );
  }
);

Link.displayName = "Link";

export default Link;
