"use client";

import { type ComponentProps, forwardRef, useMemo } from "react";
import { cn } from "@/lib/cn";

export interface CodeEditorProps
  extends Omit<ComponentProps<"textarea">, "value" | "onChange"> {
  value: string;
  onValueChange: (value: string) => void;
  fileName?: string;
}

export const CodeEditor = forwardRef<HTMLTextAreaElement, CodeEditorProps>(
  (
    {
      className,
      fileName = "snippet.js",
      value,
      onValueChange,
      placeholder,
      onInput,
      ...props
    },
    ref,
  ) => {
    const lineCount = useMemo(
      () => Math.max(1, value.split("\n").length),
      [value],
    );

    return (
      <section
        className={cn(
          "w-full max-w-195 border border-border-primary bg-bg-elevated",
          className,
        )}
      >
        <header className="flex h-10 items-center gap-3 border-b border-border-primary px-4">
          <span className="size-2.5 rounded-full bg-accent-red" />
          <span className="size-2.5 rounded-full bg-accent-amber" />
          <span className="size-2.5 rounded-full bg-accent-green" />
          <span className="flex-1" />
          <span className="text-xs text-text-tertiary">{fileName}</span>
        </header>

        <div className="flex min-h-90 w-full">
          <div className="w-12 shrink-0 border-r border-border-primary bg-bg-surface px-2 py-4 text-right text-xs text-text-tertiary">
            {Array.from({ length: lineCount }, (_, index) => (
              <div className="leading-5" key={`line-${index + 1}`}>
                {index + 1}
              </div>
            ))}
          </div>

          <textarea
            className="h-90 w-full resize-none overflow-auto bg-transparent px-4 py-4 text-xs leading-5 text-text-primary outline-none placeholder:text-text-tertiary"
            onChange={(event) => onValueChange(event.target.value)}
            onInput={(event) => {
              onValueChange(event.currentTarget.value);
              onInput?.(event);
            }}
            placeholder={placeholder}
            ref={ref}
            spellCheck={false}
            value={value}
            wrap="off"
            {...props}
          />
        </div>
      </section>
    );
  },
);

CodeEditor.displayName = "CodeEditor";
