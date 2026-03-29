import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/cn";

const trackVariants = tv({
  base: "flex h-[22px] w-10 items-center rounded-full p-[3px] transition-colors",
  variants: {
    checked: {
      true: "justify-end bg-(--accent-green)",
      false: "justify-start bg-(--border-primary)",
    },
  },
});

export interface ToggleProps
  extends Omit<ComponentProps<"button">, "onChange"> {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
}

export function Toggle({
  checked,
  onCheckedChange,
  label = "roast mode",
  className,
  onClick,
  ...props
}: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={cn("inline-flex items-center gap-3", className)}
      onClick={(event) => {
        onClick?.(event);
        onCheckedChange?.(!checked);
      }}
      {...props}
    >
      <span className={trackVariants({ checked })}>
        <span className="size-4 rounded-full bg-(--text-primary)" />
      </span>
      <span
        className={cn(
          "text-xs",
          checked ? "text-(--accent-green)" : "text-(--text-secondary)",
        )}
      >
        {label}
      </span>
    </button>
  );
}
