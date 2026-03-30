"use client";

import { useEffect, useRef, useState } from "react";
import { CodeEditor } from "@/components/code-editor";
import { HomeRoastToggle } from "@/components/home-roast-toggle";
import { Button } from "@/components/ui";

export function HomeEditorSection() {
  const [code, setCode] = useState("");
  const editorRef = useRef<HTMLTextAreaElement | null>(null);
  const isSubmitDisabled = code.trim().length === 0;

  useEffect(() => {
    const syncFromTextarea = () => {
      const textareaValue = editorRef.current?.value ?? "";
      setCode(textareaValue);
    };

    syncFromTextarea();
    window.addEventListener("pageshow", syncFromTextarea);

    return () => {
      window.removeEventListener("pageshow", syncFromTextarea);
    };
  }, []);

  return (
    <section className="mx-auto w-full max-w-195 border border-border-primary bg-bg-elevated">
      <CodeEditor
        className="max-w-none border-x-0 border-t-0"
        fileName="calculate.js"
        onValueChange={setCode}
        placeholder="function calculateTotal(items) {"
        ref={editorRef}
        value={code}
      />

      <div className="flex items-center justify-between border-t border-border-primary px-4 py-3">
        <div className="flex items-center gap-4">
          <HomeRoastToggle />
          <p className="text-xs text-text-tertiary">
            {"// maximum sarcasm enabled"}
          </p>
        </div>

        <Button disabled={isSubmitDisabled} variant="primary">
          $ roast_my_code
        </Button>
      </div>
    </section>
  );
}
