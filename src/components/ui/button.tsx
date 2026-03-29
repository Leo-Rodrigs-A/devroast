import { type ComponentProps, forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/cn";

const buttonVariants = tv({
  base: "inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--border-focus) focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-page)",
  variants: {
    variant: {
      primary:
        "bg-(--accent-green) px-6 py-2.5 text-[13px] text-(--accent-green-foreground)",
      secondary:
        "border border-(--border-primary) px-4 py-2 text-xs font-normal text-(--text-primary)",
      link: "border border-(--border-primary) px-3 py-1.5 text-xs font-normal text-(--text-secondary)",
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
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
