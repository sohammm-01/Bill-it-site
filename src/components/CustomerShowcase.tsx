export function CustomerShowcase() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <p className="num-tag mb-4">FEATURE / 06</p>
          <h3 className="h-display text-[36px] md:text-[44px] mb-5">
            Phone number<br />
            in, <span className="h-italic">everything</span> out.
          </h3>
          <p className="text-[17px] text-ink-soft">
            Customers are indexed by phone. Orders, total spend, last visit,
            and member-since date — all on one searchable table. Add new
            customers in-line during billing without breaking flow.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="frame">
            <div className="frame-dots"><span></span><span></span><span></span></div>
            <img src="/images/crm1.png" alt="Customers list table" />
          </div>
        </div>
      </div>
    </section>
  );
}
