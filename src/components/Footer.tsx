export function Footer() {
  return (
    <footer
      className="border-t border-cream-deep pt-12 pb-10"
      style={{ background: "rgba(238, 228, 200, 0.85)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#" className="flex items-baseline gap-0 mb-3">
              <span className="font-mono font-bold text-[22px] text-ink">Bill</span>
              <span className="font-mono font-bold text-[22px] text-ember"> it.</span>
            </a>
            <p className="text-[14px] max-w-[380px] text-ink-muted">
              Offline-first POS for Indian restaurants &amp; dhabas.
              Built in Manipal, India.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Product</p>
            <ul className="space-y-2 text-[14px] text-ink-soft">
              <li><a href="#features" className="link-u">Features</a></li>
              <li><a href="#fraud" className="link-u">Anti-fraud</a></li>
              <li><a href="#staff" className="link-u">Staff tools</a></li>
              <li><a href="#pricing" className="link-u">Pricing</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-2 text-[14px] text-ink-soft">
              <li><a href="mailto:hello@billit.app" className="link-u">hello@billit.app</a></li>
              <li><a href="#" className="link-u">Docs</a></li>
              <li><a href="#" className="link-u">Changelog</a></li>
            </ul>
          </div>
        </div>
        <hr className="rule my-10" />
        <div className="flex flex-wrap justify-between items-center gap-3 text-[12px] text-ink-muted">
          <p className="font-mono">© 2026 Bill it. · Made for dhabas.</p>
          <p className="font-mono">v2.0 · Electron · SQLite · WhatsApp reports</p>
        </div>
      </div>
    </footer>
  );
}
