import HeroCarousel from './sections/HeroCarousel';
import CoreValues from './sections/CoreValues';
import Benefits from './sections/Benefits';
import CTA from './sections/CTA';
import MarqueeText from '../components/MarqueeText';

export default function AboutPage() {
  return (
    <div className="bg-[var(--blingco-black)]">
      <HeroCarousel />
      <MarqueeText />
      <CoreValues />
      <Benefits />
      <CTA />
    </div>
  );
}
