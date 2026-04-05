import type { ReactNode } from "react";

interface FeatureProps {
  num: string;
  image: string;
  alt: string;
  title: ReactNode;
  body: string;
  bullets: string[];
  reverse?: boolean;
}

function Feature({ num, image, alt, title, body, bullets, reverse }: FeatureProps) {
  return (
    <div className="grid lg:grid-cols-12 gap-12 items-center mb-32 last:mb-0">
      <div className={`lg:col-span-7 ${reverse ? "order-2 lg:order-1" : "lg:order-2"}`}>
        <div className="frame">
          <div className="frame-dots"><span></span><span></span><span></span></div>
          <img src={image} alt={alt} />
        </div>
      </div>
      <div className={`lg:col-span-5 ${reverse ? "order-1 lg:order-2" : "lg:order-1"}`}>
        <p className="num-tag mb-4">FEATURE / {num}</p>
        <h3 className="h-display text-[36px] md:text-[44px] mb-5">{title}</h3>
        <p className="text-[17px] text-ink-soft">{body}</p>
        <ul className="mt-6 space-y-2 text-[15px] text-ink-soft">
          {bullets.map((b, i) => <li key={i}>— {b}</li>)}
        </ul>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
      <Feature
        num="01"
        image="/images/table_view.png"
        alt="Tables dashboard"
        reverse
        title={<>Every table,<br />at a glance.</>}
        body="Multi-floor layouts, live KOT timers, running bills, and single-tap order entry. See occupancy across ground floor, level 1, 2, 3 — without switching screens."
        bullets={[
          "Up to 4 floors, 25+ tables per floor",
          "KOT sent status with live minute counter",
          "Merge, split, transfer between tables",
        ]}
      />
      <Feature
        num="02"
        image="/images/pickup_order_view.png"
        alt="Pickup orders queue"
        title={<>Pickup orders,<br />parked neatly.</>}
        body="Takeaway bills live in their own lane — not tangled with dine-in. Ring them up when the customer arrives, print the receipt, done."
        bullets={[
          "Separate pickup queue with running totals",
          "Tag to customer by phone in 3 keystrokes",
          "One-click convert to paid & close",
        ]}
      />
      <Feature
        num="03"
        image="/images/crm2.png"
        alt="Customer detail"
        reverse
        title={<>Remember every<br />regular.</>}
        body="A CRM that fits a dhaba. Phone-first customer lookup, order history, lifetime spend, average ticket, last visit — all on a single card."
        bullets={[
          "Auto-suggest by phone after 3 digits",
          "Per-customer order timeline with discounts",
          "Repeat-visit and spend stats for every guest",
        ]}
      />
      <Feature
        num="04"
        image="/images/past_orders.png"
        alt="Past orders"
        title={<>Every bill,<br />searchable forever.</>}
        body="Filter by date, status, payment mode, cashier, or table. Find that one cancelled bill from two Fridays ago in seconds."
        bullets={[
          "Search bill #, customer name, or phone",
          "Filter by Running / Paid / Cancelled / Due",
          "Per-cashier audit trail on every line",
        ]}
      />
      <Feature
        num="05"
        image="/images/reports.png"
        alt="Daily sales report"
        reverse
        title={<>Reports the<br />owner actually reads.</>}
        body="Daily sales, item-wise movers, category breakdowns, payment-mode splits, KOT log, cancellation reasons. Export to CSV for the CA."
        bullets={[
          "6 report types, filterable by date range",
          "One-click CSV export",
          "Gross, net, tax, and per-method payment totals",
        ]}
      />
    </section>
  );
}
