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
  const progress = normalized / max;
  const size = 180;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);
  const gradientId = `score-gradient-${Math.round(normalized * 100)}`;

  return (
    <div className={cn("relative size-[180px]", className)} {...props}>
      <svg
        aria-hidden="true"
        className="absolute inset-0 -rotate-90"
        viewBox={`0 0 ${size} ${size}`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent-green)" />
            <stop offset="100%" stopColor="var(--color-accent-amber)" />
          </linearGradient>
        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          fill="none"
          r={radius}
          stroke="var(--color-border-primary)"
          strokeWidth={strokeWidth}
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          fill="none"
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center gap-1">
        <span className="text-5xl font-bold text-text-primary">
          {normalized.toFixed(1)}
        </span>
        <span className="text-base text-text-tertiary">/{max}</span>
      </div>
    </div>
  );
}
