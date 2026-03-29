import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/cn";

const diffVariants = tv({
  base: "flex w-full items-center gap-2 px-4 py-2 text-[13px]",
  variants: {
    variant: {
      added: "bg-[#0A1A0F] text-(--text-primary)",
      removed: "bg-[#1A0A0A] text-(--text-secondary)",
      context: "text-(--text-secondary)",
    },
  },
  defaultVariants: {
    variant: "context",
  },
});

export interface DiffLineProps
  extends ComponentProps<"div">,
    VariantProps<typeof diffVariants> {
  code: string;
}

const prefixMap = {
  added: "+",
  removed: "-",
  context: " ",
} as const;

export function DiffLine({
  className,
  variant = "context",
  code,
  ...props
}: DiffLineProps) {
  return (
    <div className={cn(diffVariants({ variant }), className)} {...props}>
      <span>{prefixMap[variant]}</span>
      <span>{code}</span>
    </div>
  );
}

export { diffVariants };
