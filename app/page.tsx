import About from "./components/section/about";
import Hero from "./components/section/hero";
import Contact from "./components/section/contact";
import Slogan from "./components/section/slogan";
import Message from "./components/section/message";

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <Slogan />
      <Message />
      <About />
      <Contact />
    </div>
  );
}