import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/cn";

const typographyVariants = tv({
  base: "m-0",
  variants: {
    variant: {
      hero: "text-4xl font-bold text-text-primary",
      sectionTitle: "text-sm font-bold text-text-primary",
      body: "text-sm font-normal text-text-secondary",
      meta: "text-xs font-normal text-text-tertiary",
      code: "text-[13px] font-normal text-accent-amber",
      slash: "text-sm font-bold text-accent-green",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TypographyProps
  extends ComponentProps<"p">,
    VariantProps<typeof typographyVariants> {}

export function Typography({ className, variant, ...props }: TypographyProps) {
  return (
    <p className={cn(typographyVariants({ variant }), className)} {...props} />
  );
}

export { typographyVariants };
