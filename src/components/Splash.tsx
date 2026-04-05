import { useEffect, useRef } from "react";

/**
 * Intro splash — "Bill it." centered. Fades + scales down as the user
 * scrolls, then auto-hides once past the fade threshold. Body must have
 * `has-splash` class so content is pushed below the initial viewport.
 */
export function Splash() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("has-splash");
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY;
      const d = window.innerHeight * 0.6; // fade over 60vh
      const p = Math.min(y / d, 1);
      el.style.opacity = String(1 - p);
      el.style.transform = `scale(${1 - p * 0.08})`;
      document.body.classList.toggle("splash-done", p >= 1);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div id="splash" ref={ref} aria-hidden="true">
      <div className="splash-mark">
        <span className="a">Bill</span>
        <span className="b">&nbsp;it.</span>
      </div>
      <div className="splash-scroll-hint">scroll ↓</div>
    </div>
  );
}
