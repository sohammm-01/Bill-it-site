export function Nav() {
  return (
    <header className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-6 pb-4">
      <nav className="flex items-center justify-between">
        <a href="#" className="flex items-baseline gap-0">
          <span className="font-mono font-bold text-[22px] text-ink">Bill</span>
          <span className="font-mono font-bold text-[22px] text-ember"> it.</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          <a href="#features" className="btn-ghost">Features</a>
          <a href="#fraud" className="btn-ghost">Anti-fraud</a>
          <a href="#staff" className="btn-ghost">Staff</a>
          <a href="#pricing" className="btn-ghost">Pricing</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:inline-block btn-ghost">Sign in</a>
          <a href="#cta" className="btn-primary">Request access</a>
        </div>
      </nav>
    </header>
  );
}
