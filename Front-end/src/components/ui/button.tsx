import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-4 focus-visible:ring-offset-2 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-white text-gray-900 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/60 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-gray-300/50 border border-gray-100",

        glass:
          "bg-white/10 text-white backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5 hover:bg-white/20 hover:border-white/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-white/30",

        gradient:
          "bg-gradient-to-r from-white to-gray-100 text-gray-900 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:from-gray-50 hover:to-white hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-gray-300/50 border border-gray-200/50",

        outline:
          "border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-white/40",

        ghost:
          "bg-transparent text-white hover:bg-white/10 hover:backdrop-blur-sm focus-visible:ring-white/20",

        elevated:
          "bg-white text-gray-900 shadow-2xl shadow-gray-300/40 border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:translate-y-0 focus-visible:ring-gray-300/50",

        soft:
          "bg-white/80 text-gray-900 backdrop-blur-sm border border-white/40 shadow-md shadow-gray-200/30 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-gray-200/50",

        minimal:
          "text-white hover:text-white/80 underline-offset-4 hover:underline transition-colors",
      },
      size: {
        sm: "h-9 px-4 py-2 text-xs rounded-lg has-[>svg]:px-3",
        default: "h-11 px-6 py-2.5 has-[>svg]:px-4",
        lg: "h-14 px-8 py-3 text-base rounded-2xl has-[>svg]:px-6",
        xl: "h-16 px-10 py-4 text-lg rounded-2xl has-[>svg]:px-8",
        icon: "size-11 rounded-xl",
        "icon-sm": "size-9 rounded-lg",
        "icon-lg": "size-14 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
