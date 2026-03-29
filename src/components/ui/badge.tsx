import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/cn";

const badgeVariants = tv({
  base: "inline-flex items-center gap-2 text-xs",
  variants: {
    variant: {
      critical: "text-(--accent-red)",
      warning: "text-(--accent-amber)",
      good: "text-(--accent-green)",
      muted: "text-(--text-secondary)",
    },
  },
  defaultVariants: {
    variant: "muted",
  },
});

export interface BadgeProps
  extends ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

export function Badge({
  className,
  variant,
  dot = true,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot ? <span className="size-2 rounded-full bg-current" /> : null}
      {children}
    </span>
  );
}

export { badgeVariants };
