import { Button } from "@/components/ui/button";

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-(--bg-page) px-6 py-10 text-(color:--text-primary)">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="flex flex-col gap-2 border-b border-(--border-primary) pb-5">
          <p className="text-xs text-(color:--text-secondary)">
            {"// ui_showcase"}
          </p>
          <h1 className="text-lg font-medium">Reusable Components</h1>
          <p className="text-sm text-(color:--text-secondary)">
            Visual reference for shared UI primitives.
          </p>
        </header>

        <section className="flex flex-col gap-4 rounded-(--radius-m) border border-(--border-primary) bg-(--bg-surface) p-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-medium">Button</h2>
            <p className="text-xs text-(color:--text-secondary)">
              Variants extracted from the current Pencil design.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">$ roast_my_code</Button>
            <Button variant="secondary">$ share_roast</Button>
            <Button variant="link">$ view_all &gt;&gt;</Button>
          </div>

          <div className="h-px w-full bg-(--border-primary)" />

          <div className="flex flex-col gap-3">
            <p className="text-xs text-(color:--text-secondary)">States</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" disabled>
                $ disabled
              </Button>
              <Button variant="primary" loading>
                $ loading
              </Button>
              <div className="w-full max-w-sm">
                <Button variant="primary" fullWidth>
                  $ full_width
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
