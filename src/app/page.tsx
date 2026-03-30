import Link from "next/link";
import { HomeEditorSection } from "@/components/home-editor-section";
import {
  buttonVariants,
  LeaderboardRowCode,
  LeaderboardRowLanguage,
  LeaderboardRowRank,
  LeaderboardRowRoot,
  LeaderboardRowScore,
} from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-page text-text-primary">
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

        <HomeEditorSection />

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

            <Link
              className={buttonVariants({ size: "md", variant: "link" })}
              href="/leaderboard"
            >
              $ view_all &gt;&gt;
            </Link>
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

            <LeaderboardRowRoot>
              <LeaderboardRowRank>#1</LeaderboardRowRank>
              <LeaderboardRowScore>2.1</LeaderboardRowScore>
              <LeaderboardRowCode>
                {"function calculateTotal(items) { var total = 0; ..."}
              </LeaderboardRowCode>
              <LeaderboardRowLanguage>javascript</LeaderboardRowLanguage>
            </LeaderboardRowRoot>
            <LeaderboardRowRoot>
              <LeaderboardRowRank>#2</LeaderboardRowRank>
              <LeaderboardRowScore>2.8</LeaderboardRowScore>
              <LeaderboardRowCode>
                {"for (i = 0; i <= arr.length; i++) { console.log(arr[i]) }"}
              </LeaderboardRowCode>
              <LeaderboardRowLanguage>javascript</LeaderboardRowLanguage>
            </LeaderboardRowRoot>
            <LeaderboardRowRoot>
              <LeaderboardRowRank>#3</LeaderboardRowRank>
              <LeaderboardRowScore>3.4</LeaderboardRowScore>
              <LeaderboardRowCode>
                if (user = null) return false; else return true;
              </LeaderboardRowCode>
              <LeaderboardRowLanguage>typescript</LeaderboardRowLanguage>
            </LeaderboardRowRoot>
          </div>

          <p className="text-center text-xs text-text-tertiary">
            showing top 3 of 2,847 -{" "}
            <Link
              className="underline-offset-4 transition-colors hover:text-text-secondary hover:underline"
              href="/leaderboard"
            >
              view full leaderboard &gt;&gt;
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
