import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-xs font-mono uppercase tracking-[0.16em] ring-offset-background transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_hsl(var(--foreground)/0.6)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-foreground/40 bg-transparent hover:bg-foreground hover:text-background",
        secondary: "bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
        hero: "bg-foreground text-background hover:-translate-y-0.5 hover:shadow-[0_20px_44px_-24px_hsl(var(--foreground)/0.7)]",
        heroOutline: "border border-foreground/40 bg-transparent text-foreground hover:bg-foreground hover:text-background hover:-translate-y-0.5",
        glow: "bg-foreground text-background shadow-[0_16px_36px_-24px_hsl(var(--foreground)/0.6)] hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-24px_hsl(var(--foreground)/0.75)]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-xs",
        xl: "h-14 px-10 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
