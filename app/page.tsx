import About from "./components/section/about";
import Hero, { HeroText } from "./components/section/hero";
import Contact from "./components/section/contact";
import Service from "./components/section/service";
import Slogan from "./components/section/slogan";
import Tagline from "./components/section/tagline";

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      {/* mode="scroll": 스크롤 위치에 실시간 반응 (기본값) */}
      {/* mode="trigger": 섹션 진입 시 한 번만 실행 */}
      <Slogan mode="scroll" />
      <Tagline />
      <About />
      <HeroText />
      <Service />
      <Contact />
    </div>
  );
}