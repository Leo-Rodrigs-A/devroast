import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function CardRoot({ className, ...props }: ComponentProps<"article">) {
  return (
    <article
      className={cn(
        "flex w-full max-w-120 flex-col gap-3 border border-border-primary bg-bg-page p-5",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex items-center", className)} {...props} />;
}

export function CardTitle({ className, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("text-sm text-text-primary", className)} {...props} />
  );
}

export function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-xs leading-[1.5] text-text-secondary", className)}
      {...props}
    />
  );
}
