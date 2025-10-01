import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline:
          "border-2 border-primary/40 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary/60 hover:text-primary shadow-sm backdrop-blur-sm",
        "outline-light":
          "border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 hover:text-white backdrop-blur-sm shadow-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
        "secondary-solid":
          "bg-white text-primary hover:bg-slate-50 font-semibold shadow-md border border-slate-200/50",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm",
        ghost: "hover:bg-accent/50 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "gradient-primary": 
          "bg-gradient-to-r from-primary to-primary-light text-white hover:from-primary/90 hover:to-primary-light/90 shadow-md",
        "gradient-accent":
          "bg-gradient-to-r from-accent to-accent-light text-white hover:from-accent/90 hover:to-accent-light/90 shadow-md",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 rounded-md px-3 text-xs font-medium",
        lg: "h-12 rounded-lg px-6 text-base font-medium",
        xl: "h-14 rounded-xl px-8 text-lg font-semibold",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
