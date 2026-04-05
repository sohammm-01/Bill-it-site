export function Hero() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20">
      <div className="grid lg:grid-cols-12 gap-10 items-end">
        {/* Left: headline */}
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6">⟢ &nbsp;Built in Manipal · For Indian restaurants</p>
          <h1 className="h-display text-[56px] md:text-[82px] lg:text-[96px]">
            Billing software<br />
            that runs the <span className="h-italic">whole</span><br />
            restaurant.
          </h1>
          <p className="mt-8 text-[18px] md:text-[19px] max-w-[560px] text-ink-soft">
            Bill it is an offline-first desktop POS built for small Indian
            restaurants and dhabas. Tables, pickups, customers, inventory,
            staff attendance, day-end cash reconciliation —{" "}
            <span className="scribble">one app, one machine, no internet.</span>
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#cta" className="btn-primary">Request access →</a>
            <a href="#features" className="btn-ghost">See every screen</a>
          </div>
          <div className="mt-10 flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-[13px] text-ink-muted">
              <span className="w-2 h-2 rounded-full bg-sage"></span>
              Works fully offline
            </div>
            <div className="flex items-center gap-2 text-[13px] text-ink-muted">
              <span className="w-2 h-2 rounded-full bg-sage"></span>
              Runs on any Windows laptop
            </div>
            <div className="flex items-center gap-2 text-[13px] text-ink-muted">
              <span className="w-2 h-2 rounded-full bg-sage"></span>
              One-time license
            </div>
          </div>
        </div>

        {/* Right: stacked screenshots */}
        <div className="lg:col-span-5 relative">
          <div className="frame tilt-r relative z-10">
            <div className="frame-dots"><span></span><span></span><span></span></div>
            <img src="/images/table_view.png" alt="Bill it tables screen" />
          </div>
          <div className="frame tilt-l absolute -bottom-16 -left-4 w-[70%] z-0 hidden md:block opacity-95">
            <div className="frame-dots"><span></span><span></span><span></span></div>
            <img src="/images/reports.png" alt="Daily sales report" />
          </div>
        </div>
      </div>
    </section>
  );
}
