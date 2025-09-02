import About from "./components/section/about";
import Hero, { HeroText } from "./components/section/hero";
import Contact from "./components/section/contact";
import Service from "./components/section/service";

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <About />
      <HeroText />
      <Service />
      <Contact />
    </div>
  );
}