import { type ComponentProps, forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/cn";

const buttonVariants = tv({
  base: "inline-flex items-center justify-center gap-2 transition-all duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--border-focus) focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-page) motion-reduce:transform-none motion-reduce:transition-none",
  variants: {
    variant: {
      primary:
        "bg-(--accent-green) font-medium text-(--accent-green-foreground) active:translate-y-px active:scale-[0.98]",
      secondary:
        "border border-(--border-primary) font-normal text-(--text-primary) active:bg-(--bg-elevated)",
      link: "border border-(--border-primary) font-normal text-(--text-secondary) active:translate-x-0.5",
    },
    size: {
      sm: "text-xs",
      md: "text-xs",
      lg: "text-sm",
    },
    fullWidth: { true: "w-full" },
    loading: { true: "cursor-wait" },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
    loading: false,
  },
  compoundVariants: [
    {
      variant: "primary",
      size: "sm",
      class: "px-5 py-2 text-xs",
    },
    {
      variant: "primary",
      size: "md",
      class: "px-6 py-2.5 text-[13px]",
    },
    {
      variant: "primary",
      size: "lg",
      class: "px-7 py-3 text-sm",
    },
    {
      variant: "secondary",
      size: "sm",
      class: "px-3 py-1.5",
    },
    {
      variant: "secondary",
      size: "md",
      class: "px-4 py-2",
    },
    {
      variant: "secondary",
      size: "lg",
      class: "px-5 py-2.5",
    },
    {
      variant: "link",
      size: "sm",
      class: "px-2 py-1",
    },
    {
      variant: "link",
      size: "md",
      class: "px-3 py-1.5",
    },
    {
      variant: "link",
      size: "lg",
      class: "px-4 py-2",
    },
    {
      loading: true,
      class:
        "pointer-events-none active:scale-100 active:translate-x-0 active:translate-y-0",
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
