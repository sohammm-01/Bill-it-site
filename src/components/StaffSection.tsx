export function StaffSection() {
  return (
    <section
      id="staff"
      className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24 lg:py-32"
    >
      <div className="mb-16">
        <p className="eyebrow mb-4">03 — Running the place</p>
        <h2 className="h-display text-[40px] md:text-[56px] max-w-[720px]">
          The unglamorous stuff <span className="h-italic">nobody</span> else builds.
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Employees */}
        <div>
          <div className="frame mb-6">
            <div className="frame-dots"><span></span><span></span><span></span></div>
            <img src="/images/emp_amangement.png" alt="Employee attendance calendar" />
          </div>
          <div className="caption-card">
            <p className="num-tag mb-3">STAFF / ATTENDANCE &amp; SALARY</p>
            <h3 className="h-display text-[26px] mb-3 text-ink">
              Attendance on a calendar.
            </h3>
            <p className="text-[15px] text-ink-soft">
              Tap a day to cycle Present → Absent → Half Day → Leave.
              Auto-computes monthly salary with advances deducted.
              Roles: waiter, cashier, manager, kitchen.
            </p>
          </div>
        </div>

        {/* Day End */}
        <div>
          <div className="frame mb-6">
            <div className="frame-dots"><span></span><span></span><span></span></div>
            <img src="/images/day_end_reports.png" alt="Day end cash reconciliation" />
          </div>
          <div className="caption-card">
            <p className="num-tag mb-3">CLOSING / CASH RECONCILIATION</p>
            <h3 className="h-display text-[26px] mb-3 text-ink">
              Close the day in 90 seconds.
            </h3>
            <p className="text-[15px] text-ink-soft">
              Opening + cash in − cash out = expected. Count the drawer,
              type the number, see the difference. Expenses, withdrawals,
              cash top-ups all logged against the shift.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
