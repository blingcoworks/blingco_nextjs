import Hero from "./sections/Hero";
import Slogan from "./sections/Slogan";
import Message from "./sections/Message";
import Contents from "./sections/Contents";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <Slogan />
      <Message />
      <Contents />
      <Contact />
    </div>
  );
}
