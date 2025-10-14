import About from "./components/section/about";
import Hero, { HeroText } from "./components/section/hero";
import Contact from "./components/section/contact";
import Service from "./components/section/service";
import Slogan from "./components/section/slogan";
import Message from "./components/section/message";

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <Slogan />
      <Message />
      <About />
      <HeroText />
      <Service />
      <Contact />
    </div>
  );
}