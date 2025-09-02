import Navigation from "./components/section/Navigation";
import About from "./components/section/about";
import Hero, { HeroText } from "./components/section/hero";
import Contact from "./components/section/contact";
import Service from "./components/section/service";
import Footer from "./components/section/footer";

export default function Home() {
  return (
    <div className="relative w-full">
      <Navigation />
      <Hero />
      <About />
      <HeroText />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}