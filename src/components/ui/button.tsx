import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/cn";

const buttonVariants = tv({
  base: "inline-flex items-center justify-center gap-2 rounded-md transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 active:translate-y-px",
  variants: {
    variant: {
      primary:
        "bg-emerald-500 text-zinc-950 hover:bg-emerald-400 [font-family:JetBrains_Mono,monospace]",
      secondary:
        "bg-zinc-200 text-zinc-900 hover:bg-zinc-300 [font-family:JetBrains_Mono,monospace]",
      ghost:
        "bg-transparent text-zinc-900 hover:bg-zinc-100 [font-family:JetBrains_Mono,monospace]",
      destructive:
        "bg-rose-500 text-white hover:bg-rose-400 [font-family:JetBrains_Mono,monospace]",
    },
    size: {
      sm: "px-4 py-2 text-xs font-medium",
      md: "px-6 py-2.5 text-[13px] font-medium",
      lg: "px-7 py-3 text-sm font-medium",
      icon: "size-10 p-0 text-sm",
    },
    fullWidth: {
      true: "w-full",
    },
    loading: {
      true: "cursor-wait",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
    loading: false,
  },
  compoundVariants: [
    {
      loading: true,
      class: "pointer-events-none",
    },
  ],
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      type = "button",
      variant,
      size,
      fullWidth,
      loading,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cn(
          buttonVariants({ variant, size, fullWidth, loading }),
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { buttonVariants };
