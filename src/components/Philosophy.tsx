const points = [
  {
    title: "Offline-first, always",
    body: "SQLite on disk. Works with zero connectivity. Internet drops don't stop billing — ever.",
  },
  {
    title: "One machine, one license",
    body: "No per-seat SaaS fees. Buy it once, run it on the billing counter forever.",
  },
  {
    title: "Windows-native",
    body: "Electron desktop app. Installs on any Windows 10+ laptop. Starts in under 2 seconds.",
  },
  {
    title: "Your backups, your control",
    body: "Nightly automatic database backups to a folder you choose. Copy to pendrive, Google Drive, wherever.",
  },
];

export function Philosophy() {
  return (
    <section
      className="py-24 lg:py-32 border-y border-cream-deep"
      style={{ background: "rgba(238, 228, 200, 0.85)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">04 — Philosophy</p>
            <h2 className="h-display text-[40px] md:text-[56px]">
              Your data<br />
              <span className="h-italic">stays</span><br />
              on your laptop.
            </h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10">
            {points.map((p, i) => (
              <div key={i}>
                <h4 className="font-display text-[22px] mb-3 text-ink">{p.title}</h4>
                <p className="text-[15px] text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
