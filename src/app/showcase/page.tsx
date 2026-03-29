import {
  AnalysisCard,
  Badge,
  Button,
  CodeBlock,
  DiffLine,
  LeaderboardRow,
  ScoreRing,
  Toggle,
  Typography,
} from "@/components/ui";

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-bg-page px-6 py-10 text-text-primary">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="flex flex-col gap-2 border-b border-border-primary pb-5">
          <p className="text-xs text-text-secondary">{"// ui_showcase"}</p>
          <h1 className="text-lg font-medium">Reusable Components</h1>
          <p className="text-sm text-text-secondary">
            Visual reference for shared UI primitives.
          </p>
        </header>

        <section className="flex flex-col gap-4 rounded-m border border-border-primary bg-bg-surface p-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-medium">Button</h2>
            <p className="text-xs text-text-secondary">
              Variants extracted from the current Pencil design.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-text-secondary">Primary</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">
                  $ roast_my_code
                </Button>
                <Button variant="primary" size="md">
                  $ roast_my_code
                </Button>
                <Button variant="primary" size="lg">
                  $ roast_my_code
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs text-text-secondary">Secondary</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="secondary" size="sm">
                  $ share_roast
                </Button>
                <Button variant="secondary" size="md">
                  $ share_roast
                </Button>
                <Button variant="secondary" size="lg">
                  $ share_roast
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs text-text-secondary">Link</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="link" size="sm">
                  $ view_all &gt;&gt;
                </Button>
                <Button variant="link" size="md">
                  $ view_all &gt;&gt;
                </Button>
                <Button variant="link" size="lg">
                  $ view_all &gt;&gt;
                </Button>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-border-primary" />

          <div className="flex flex-col gap-3">
            <p className="text-xs text-text-secondary">States</p>
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

        <section className="flex flex-col gap-4 rounded-m border border-border-primary bg-bg-surface p-6">
          <h2 className="text-sm font-medium">Typography</h2>
          <div className="flex flex-col gap-4">
            <Typography variant="hero">
              paste your code. get roasted.
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="slash">{"//"}</Typography>
              <Typography variant="sectionTitle">detailed_analysis</Typography>
            </div>
            <Typography variant="body">description text sample</Typography>
            <Typography variant="meta">lang: javascript · 7 lines</Typography>
            <Typography variant="code">function calculateTotal()</Typography>
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-m border border-border-primary bg-bg-surface p-6">
          <h2 className="text-sm font-medium">Toggle</h2>
          <div className="flex flex-wrap items-center gap-8">
            <Toggle checked />
            <Toggle checked={false} />
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-m border border-border-primary bg-bg-surface p-6">
          <h2 className="text-sm font-medium">Badges</h2>
          <div className="flex flex-wrap items-center gap-6">
            <Badge variant="critical">critical</Badge>
            <Badge variant="warning">warning</Badge>
            <Badge variant="good">good</Badge>
            <Badge variant="critical">needs_serious_help</Badge>
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-m border border-border-primary bg-bg-surface p-6">
          <h2 className="text-sm font-medium">Cards</h2>
          <AnalysisCard
            badgeLabel="critical"
            badgeVariant="critical"
            title="using var instead of const/let"
            description="the var keyword is function-scoped rather than block-scoped, which can lead to unexpected behavior and bugs. modern javascript uses const for immutable bindings and let for mutable ones."
          />
        </section>

        <section className="flex flex-col gap-4 rounded-m border border-border-primary bg-bg-surface p-6">
          <h2 className="text-sm font-medium">Code Block</h2>
          <CodeBlock
            code={[
              "function calculateTotal(items) {",
              "  let total = 0;",
              "  for (let i = 0; i < items.length; i++) {",
              "    total += items[i];",
              "  }",
              "  return total;",
              "}",
            ].join("\n")}
          />
        </section>

        <section className="flex flex-col gap-4 rounded-m border border-border-primary bg-bg-surface p-6">
          <h2 className="text-sm font-medium">Diff Line</h2>
          <div className="flex w-full max-w-[560px] flex-col">
            <DiffLine variant="removed" code="var total = 0;" />
            <DiffLine variant="added" code="const total = 0;" />
            <DiffLine
              variant="context"
              code="for (let i = 0; i < items.length; i++) {"
            />
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-m border border-border-primary bg-bg-surface p-6">
          <h2 className="text-sm font-medium">Table Row</h2>
          <div className="w-full">
            <LeaderboardRow
              rank="#1"
              score="2.1"
              codePreview="function calculateTotal(items) { var total = 0; ..."
              language="javascript"
            />
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-m border border-border-primary bg-bg-surface p-6">
          <h2 className="text-sm font-medium">Score Ring</h2>
          <ScoreRing value={3.5} />
        </section>
      </div>
    </main>
  );
}
