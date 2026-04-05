const items = [
  "Tables", "Pickup", "Orders", "Customers", "Inventory", "Reports",
  "Employees", "Fraud detection", "Day-end cash", "Petty cash",
];

export function Marquee() {
  // Duplicate for seamless loop
  const loop = [...items, ...items];
  return (
    <section
      className="py-6 border-y border-cream-deep"
      style={{ background: "rgba(238, 228, 200, 0.85)" }}
    >
      <div className="marquee">
        <div className="marquee-track font-display text-[28px] md:text-[36px] text-ink">
          {loop.map((word, i) => (
            <span key={i} className="flex items-baseline gap-12">
              <span className={word === "Fraud detection" ? "italic" : ""}>{word}</span>
              <span className="text-ember">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
