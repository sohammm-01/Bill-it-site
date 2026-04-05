export function CTA() {
  return (
    <section id="cta" className="max-w-[1280px] mx-auto px-6 lg:px-10 py-32">
      <div className="text-center max-w-[820px] mx-auto">
        <p className="eyebrow mb-8">⟢ &nbsp;Currently onboarding early restaurants</p>
        <h2 className="h-display text-[56px] md:text-[88px] mb-8">
          Try Bill it<br />
          in your <span className="h-italic">restaurant.</span>
        </h2>
        <p className="text-[18px] mb-10 max-w-[560px] mx-auto text-ink-soft">
          We're working with a small group of restaurants in Karnataka
          to get Bill it production-ready. One-on-one setup, free for
          the first 3 months.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:hello@billit.app" className="btn-primary">
            Request early access →
          </a>
          <a href="#features" className="btn-ghost">Re-read the features</a>
        </div>
      </div>
    </section>
  );
}
