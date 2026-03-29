import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export interface CodeBlockProps extends ComponentProps<"section"> {
  fileName?: string;
  codeLines: string[];
}

export function CodeBlock({
  className,
  fileName = "calculate.js",
  codeLines,
  ...props
}: CodeBlockProps) {
  const lineCounter: Record<string, number> = {};
  let lineNumber = 0;

  const lines = codeLines.map((line) => {
    lineNumber += 1;
    lineCounter[line] = (lineCounter[line] ?? 0) + 1;

    return {
      number: lineNumber,
      content: line,
      key: `${line}-${lineCounter[line]}`,
    };
  });

  return (
    <section
      className={cn(
        "w-full max-w-[560px] border border-(--border-primary) bg-(--bg-elevated)",
        className,
      )}
      {...props}
    >
      <header className="flex h-10 items-center gap-3 border-b border-(--border-primary) px-4">
        <span className="size-2.5 rounded-full bg-(--accent-red)" />
        <span className="size-2.5 rounded-full bg-(--accent-amber)" />
        <span className="size-2.5 rounded-full bg-(--accent-green)" />
        <span className="flex-1" />
        <span className="text-xs text-(--text-tertiary)">{fileName}</span>
      </header>

      <div className="flex">
        <div className="flex w-10 flex-col items-end gap-1 border-r border-(--border-primary) bg-(--bg-surface) px-2 py-3 text-xs text-(--text-tertiary)">
          {lines.map((line) => (
            <span key={`number-${line.key}`}>{line.number}</span>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-1 px-3 py-3 text-[13px] text-(--text-primary)">
          {lines.map((line) => (
            <span key={`content-${line.key}`}>{line.content}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
