export function Intro() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <p className="eyebrow">01 — The problem</p>
        </div>
        <div className="lg:col-span-8">
          <h2 className="h-display text-[40px] md:text-[56px]">
            Small restaurants don't need<br />
            <span className="h-italic">another</span> cloud SaaS.
          </h2>
          <p className="mt-6 text-[18px] max-w-[640px] text-ink-soft">
            They need a tool that works when the internet drops during the
            dinner rush. That runs on the laptop already on the billing
            counter. That the owner's nephew can operate on day one. That
            flags the cashier pocketing cash through fake voids.
          </p>
          <p className="mt-4 text-[18px] max-w-[640px] text-ink-soft">
            Bill it is that tool.
          </p>
        </div>
      </div>
    </section>
  );
}
