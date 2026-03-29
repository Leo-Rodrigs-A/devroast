import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export interface ScoreRingProps extends ComponentProps<"div"> {
  value: number;
  max?: number;
}

export function ScoreRing({
  className,
  value,
  max = 10,
  ...props
}: ScoreRingProps) {
  const normalized = Math.max(0, Math.min(value, max));
  const progress = (normalized / max) * 100;

  return (
    <div className={cn("relative size-[180px]", className)} {...props}>
      <div className="absolute inset-0 rounded-full border-4 border-(--border-primary)" />
      <div
        className="absolute inset-0 rounded-full border-4 border-transparent"
        style={{
          background: `conic-gradient(var(--accent-green) 0% ${progress * 0.6}%, var(--accent-amber) ${
            progress * 0.6
          }% ${progress}%, transparent ${progress}% 100%)`,
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 0)",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 0)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center gap-1">
        <span className="text-5xl font-bold text-(--text-primary)">
          {normalized.toFixed(1)}
        </span>
        <span className="text-base text-(--text-tertiary)">/{max}</span>
      </div>
    </div>
  );
}
