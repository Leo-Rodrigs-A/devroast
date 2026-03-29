export function HomeNavbar() {
  return (
    <header className="w-full border-b border-border-primary bg-bg-page">
      <div className="flex h-14 w-full items-center justify-between px-10">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-accent-green">{">"}</span>
          <span className="text-lg font-medium text-text-primary">
            devroast
          </span>
        </div>

        <span className="text-sm text-text-secondary">leaderboard</span>
      </div>
    </header>
  );
}
