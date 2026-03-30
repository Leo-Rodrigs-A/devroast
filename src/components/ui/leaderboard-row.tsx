import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function LeaderboardRowRoot({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-6 border-b border-border-primary px-5 py-4",
        className,
      )}
      {...props}
    />
  );
}

export function LeaderboardRowRank({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("w-10 text-sm text-text-tertiary", className)}
      {...props}
    />
  );
}

export function LeaderboardRowScore({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("w-16 text-sm font-bold text-accent-red", className)}
      {...props}
    />
  );
}

export function LeaderboardRowCode({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("flex-1 text-xs text-text-secondary", className)}
      {...props}
    />
  );
}

export function LeaderboardRowLanguage({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("w-24 text-xs text-text-tertiary", className)}
      {...props}
    />
  );
}
