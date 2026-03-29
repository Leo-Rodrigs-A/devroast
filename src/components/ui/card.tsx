import type { ComponentProps } from "react";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

export interface AnalysisCardProps extends ComponentProps<"article"> {
  title: string;
  description: string;
  badgeLabel: string;
  badgeVariant?: BadgeProps["variant"];
}

export function AnalysisCard({
  className,
  title,
  description,
  badgeLabel,
  badgeVariant = "critical",
  ...props
}: AnalysisCardProps) {
  return (
    <article
      className={cn(
        "flex w-full max-w-[480px] flex-col gap-3 border border-border-primary bg-bg-page p-5",
        className,
      )}
      {...props}
    >
      <Badge variant={badgeVariant}>{badgeLabel}</Badge>
      <p className="text-[13px] text-text-primary">{title}</p>
      <p className="text-xs leading-[1.5] text-text-secondary">{description}</p>
    </article>
  );
}
