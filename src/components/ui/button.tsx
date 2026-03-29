import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/cn";

const buttonVariants = tv({
  base: "inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]",
  variants: {
    variant: {
      primary:
        "bg-[var(--accent-green)] px-6 py-2.5 text-[13px] text-[var(--accent-green-foreground)]",
      secondary:
        "border border-[var(--border-primary)] px-4 py-2 text-xs font-normal text-[var(--text-primary)]",
      link: "border border-[var(--border-primary)] px-3 py-1.5 text-xs font-normal text-[var(--text-secondary)]",
    },
    fullWidth: { true: "w-full" },
    loading: { true: "cursor-wait" },
  },
  defaultVariants: {
    variant: "primary",
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
          buttonVariants({ variant, fullWidth, loading }),
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
