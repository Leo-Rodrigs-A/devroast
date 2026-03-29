import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export interface NavbarProps extends ComponentProps<"header"> {
  brand?: string;
  linkLabel?: string;
}

export function Navbar({
  className,
  brand = "devroast",
  linkLabel = "leaderboard",
  ...props
}: NavbarProps) {
  return (
    <header
      className={cn(
        "flex h-14 w-full items-center gap-2 border-b border-(--border-primary) bg-(--bg-page) px-6",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span className="text-[20px] font-bold text-(--accent-green)">
          {">"}
        </span>
        <span className="text-lg font-medium text-(--text-primary)">
          {brand}
        </span>
      </div>
      <span className="flex-1" />
      <span className="text-[13px] text-(--text-secondary)">{linkLabel}</span>
    </header>
  );
}
