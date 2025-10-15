import Hero from "./components/section/hero";
import Slogan from "./components/section/slogan";
import Message from "./components/section/message";
import Contents from "./components/section/contents";
import Contact from "./components/section/contact";

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