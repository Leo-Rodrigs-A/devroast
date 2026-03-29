import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export interface LeaderboardRowProps extends ComponentProps<"div"> {
  rank: string;
  score: string;
  codePreview: string;
  language: string;
}

export function LeaderboardRow({
  className,
  rank,
  score,
  codePreview,
  language,
  ...props
}: LeaderboardRowProps) {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-6 border-b border-(--border-primary) px-5 py-4",
        className,
      )}
      {...props}
    >
      <div className="w-10 text-[13px] text-(--text-tertiary)">{rank}</div>
      <div className="w-[60px] text-[13px] font-bold text-(--accent-red)">
        {score}
      </div>
      <div className="flex-1 text-xs text-(--text-secondary)">
        {codePreview}
      </div>
      <div className="w-[100px] text-xs text-(--text-tertiary)">{language}</div>
    </div>
  );
}
