import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero-container">
            {/* Fixed background image */}
            <div className="hero-fixed-image">
                <Image 
                    src="/main_visual_img.png"
                    alt="Hero background"
                    fill
                    priority
                    className="object-cover"
                    quality={100}
                />
                <div className="hero-overlay" />
            </div>
            
            {/* Content overlay */}
            <div className="hero-content">
                <div className="flex flex-col items-center gap-12">
                    <h1 className="text-center">
                        <Image 
                            src="/blingco_logo.svg"
                            alt="Blingco"
                            width={788}
                            height={131}
                            priority
                            className="w-full max-w-[788px] h-auto"
                        />
                    </h1>
                    <p className="text-white text-[24px] font-semibold leading-[1.4] text-center tracking-[-0.72px] max-w-[640px]">
                        Fashion goods production solution for creators
                    </p>
                </div>
            </div>
        </section>
    )
}

export function HeroText() {
    return (
      <section className="w-full h-[563px] bg-gradient-to-r from-[#2B2B2B] to-[#919191] flex items-center justify-center">
        <h3 className="text-white text-[40px] font-bold leading-[110%] tracking-[-0.01em] max-w-[419px] text-center">
          전문 디자이너와 함께라면 굿즈를 넘어, 패션으로.
        </h3>
      </section>
    )
}