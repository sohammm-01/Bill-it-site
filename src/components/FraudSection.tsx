const stats = [
  { big: "0—100", caption: "Leakage score per cashier, recalculated daily" },
  { big: "4", caption: "Fraud vectors tracked: voids, cancels, discounts, shorts" },
  { big: "30-day", caption: "Rolling baseline, per-person. No shared thresholds." },
  { big: "PIN", caption: "Locked dashboard. Only owner sees the report." },
];

export function FraudSection() {
  return (
    <section id="fraud" className="section-dark py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-6">02 — The differentiator</p>
            <h2 className="h-display text-[44px] md:text-[64px]">
              Catches the<br />
              <span className="h-italic">₹200 a day</span><br />
              quietly walking<br />
              out the door.
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end">
            <p
              className="text-[18px] md:text-[19px]"
              style={{ color: "rgba(244, 236, 214, 0.78)" }}
            >
              Cashier fraud is the silent tax on every small restaurant.
              Fake voids, fake cancellations, unauthorized discounts,
              register short-counts. Bill it scores every cashier against
              their own 30-day baseline and flags anomalies in yellow or red.
            </p>
            <p
              className="text-[18px] mt-4"
              style={{ color: "rgba(244, 236, 214, 0.78)" }}
            >
              Owners get a nightly WhatsApp summary. No dashboards to log into.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10"
          style={{ borderTop: "1px solid rgba(244, 236, 214, 0.15)" }}
        >
          {stats.map((s, i) => (
            <div key={i}>
              <div className="stat-num" style={{ color: "var(--mustard)" }}>
                {s.big}
              </div>
              <p
                className="mt-3 text-[14px]"
                style={{ color: "rgba(244, 236, 214, 0.6)" }}
              >
                {s.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
