import { CodeBlock } from "@/components/code-block";
import { HomeNavbar } from "@/components/home-navbar";
import { HomeRoastToggle } from "@/components/home-roast-toggle";
import { Button, LeaderboardRow } from "@/components/ui";

const sampleCode = [
  "function calculateTotal(items) {",
  "  let total = 0;",
  "",
  "  for (var i = 0; i < items.length; i++) {",
  "    if (items[i].price) {",
  "      total += items[i].price * items[i].quantity;",
  "    }",
  "  }",
  "",
  "  // TODO: handle tax calculation",
  "  // TODO: handle currency conversion",
  "",
  "  return total;",
  "}",
].join("\n");

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-page text-text-primary">
      <HomeNavbar />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-10 pt-20">
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold text-accent-green">$</span>
            <h1 className="text-4xl font-bold text-text-primary">
              paste your code. get roasted.
            </h1>
          </div>
          <p className="text-sm text-text-secondary">
            {
              "// drop your code below and we'll rate it - brutally honest or full roast mode"
            }
          </p>
        </section>

        <CodeBlock className="max-w-195" code={sampleCode} />

        <section className="flex w-full max-w-195 items-center justify-between">
          <div className="flex items-center gap-4">
            <HomeRoastToggle />
            <p className="text-xs text-text-tertiary">
              {"// maximum sarcasm enabled"}
            </p>
          </div>
          <Button variant="primary">$ roast_my_code</Button>
        </section>

        <section className="flex items-center justify-center gap-6 text-xs text-text-tertiary">
          <p>2,847 codes roasted</p>
          <p>·</p>
          <p>avg score: 4.2/10</p>
        </section>

        <section className="h-15" />

        <section className="flex w-full max-w-240 flex-col gap-6 pb-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-accent-green">
                {"//"}
              </span>
              <h2 className="text-sm font-bold text-text-primary">
                shame_leaderboard
              </h2>
            </div>

            <Button size="md" variant="link">
              $ view_all &gt;&gt;
            </Button>
          </div>

          <p className="text-sm text-text-tertiary">
            {"// the worst code on the internet, ranked by shame"}
          </p>

          <div className="w-full border border-border-primary bg-bg-surface">
            <div className="flex items-center gap-6 border-b border-border-primary bg-bg-elevated px-5 py-3 text-xs text-text-tertiary">
              <span className="w-12">rank</span>
              <span className="w-16">score</span>
              <span className="flex-1">code</span>
              <span className="w-24">lang</span>
            </div>

            <LeaderboardRow
              codePreview="function calculateTotal(items) { var total = 0; ..."
              language="javascript"
              rank="#1"
              score="2.1"
            />
            <LeaderboardRow
              codePreview="for (i = 0; i <= arr.length; i++) { console.log(arr[i]) }"
              language="javascript"
              rank="#2"
              score="2.8"
            />
            <LeaderboardRow
              codePreview="if (user = null) return false; else return true;"
              language="typescript"
              rank="#3"
              score="3.4"
            />
          </div>

          <p className="text-center text-xs text-text-tertiary">
            showing top 3 of 2,847 - view full leaderboard &gt;&gt;
          </p>
        </section>
      </div>
    </main>
  );
}
