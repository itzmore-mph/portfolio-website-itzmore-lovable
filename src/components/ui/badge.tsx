import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        expertise:
          "border-accent/40 bg-accent text-white hover:bg-accent-hover hover:border-accent/60 shadow-md font-medium",
        "expertise-alt":
          "border-primary/40 bg-primary text-primary-foreground hover:bg-primary-hover hover:border-primary/60 shadow-md font-medium",
        modern:
          "border-slate-400/60 bg-slate-700 text-white hover:bg-slate-600 hover:border-slate-500/60 shadow-md font-medium",
        professional:
          "border-data-blue/40 bg-data-blue text-white hover:bg-data-blue-dark hover:border-data-blue/60 shadow-md font-medium",
        analytics:
          "border-analytics-purple/40 bg-analytics-purple text-white hover:bg-analytics-purple-dark hover:border-analytics-purple/60 shadow-md font-medium",
        success:
          "border-success/40 bg-success text-white hover:bg-success/90 hover:border-success/60 shadow-md font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
