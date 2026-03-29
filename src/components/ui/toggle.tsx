"use client";

import { Switch } from "@base-ui/react/switch";
import { cn } from "@/lib/cn";

export interface ToggleProps {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
}

export function Toggle({
  checked,
  onCheckedChange,
  label = "roast mode",
  className,
  disabled,
  id,
  name,
}: ToggleProps) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <Switch.Root
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        id={id}
        name={name}
        nativeButton
        render={<button type="button" />}
        className={cn(
          "flex h-[22px] w-10 items-center rounded-full p-[3px] transition-all duration-200 ease-out",
          checked
            ? "justify-end bg-accent-green"
            : "justify-start bg-border-primary",
        )}
      >
        <Switch.Thumb className="size-4 rounded-full bg-text-primary transition-transform duration-200 ease-out" />
      </Switch.Root>
      <span
        className={cn(
          "text-xs",
          checked ? "text-accent-green" : "text-text-secondary",
        )}
      >
        {label}
      </span>
    </div>
  );
}
