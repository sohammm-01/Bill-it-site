import { BeamsBackground } from "./components/ui/beams-background";
import { Splash } from "./components/Splash";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Intro } from "./components/Intro";
import { Features } from "./components/Features";
import { FraudSection } from "./components/FraudSection";
import { StaffSection } from "./components/StaffSection";
import { CustomerShowcase } from "./components/CustomerShowcase";
import { Philosophy } from "./components/Philosophy";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="grain">
      {/* Intro splash — fades on scroll */}
      <Splash />

      {/* Animated beams background — fixed, site-wide. Warm ember→amber
          hue range, heavy blur for a soft hazy glow on the cream palette.
          Change `intensity` to "subtle" / "medium" / "strong" to taste. */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <BeamsBackground intensity="medium" />
      </div>

      {/* Main content — z-index 1 above the fixed bg */}
      <Nav />
      <hr className="rule max-w-[1280px] mx-auto" />
      <Hero />
      <Marquee />
      <Intro />
      <hr className="rule max-w-[1280px] mx-auto" />
      <Features />
      <hr className="rule max-w-[1280px] mx-auto" />
      <FraudSection />
      <StaffSection />
      <hr className="rule max-w-[1280px] mx-auto" />
      <CustomerShowcase />
      <Philosophy />
      <CTA />
      <Footer />
    </div>
  );
}
