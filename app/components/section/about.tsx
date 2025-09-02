import { BlingcoGreen, BlingcoLogo } from "../Blingco";
import MarqueeText from "../MarqueeText";
import Image from "next/image";


export default function About() {
  return (
    <div>
      <AboutFirst />
      <MarqueeText />
      <AboutSecond />
    </div>
  )
}

export function AboutFirst() {
  return (
    <section id="about" className="relative w-full bg-white">
      {/* Featured product */}
      <div className="flex flex-col justify-end items-center gap-[8px] w-[1280px] h-[800px]" style={{
        padding: '80px 145px',
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), #333333'
      }}>
        {/* Text content */}
        <div className="flex flex-col justify-center items-center gap-[8px] w-[527px] h-[214px]" style={{ padding: '0px' }}>
          {/* Header and subhead */}
          <div className="flex flex-col justify-center items-center gap-[8px] w-[527px] h-[162px]" style={{ padding: '0px' }}>
            {/* Frame 2147238584 */}
            <div className="flex flex-col items-start gap-[14px] w-[527px] h-[162px]" style={{ padding: '0px' }}>
              {/* About Us */}
              <h2 className="w-[527px] h-[96px] text-[#95FF8D] text-[120px] leading-[80%] tracking-[0.01em] whitespace-nowrap" style={{ fontFamily: 'var(--font-righteous)' }}>
                About Us
              </h2>
              {/* Description text */}
              <p className="w-[527px] h-[52px] text-white text-[20px] leading-[130%] tracking-[0.01em] text-center" style={{ fontFamily: 'Inter' }}>
                A bold, spiced aperitif featuring cardamom, ginger, and cinnamon.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stocklist section */}
      <div className="flex flex-row justify-between items-start w-[1280px] h-[640px] bg-black" style={{ padding: '0px' }}>
        {/* Text content */}
        <div className="flex flex-col justify-center items-start gap-[136px] w-[640px] h-[640px] bg-black flex-1" style={{ padding: '23px 50px' }}>
          {/* 크리에이터님, 혹시 이런 고민 있으셨나요? */}
          <h3 className="w-[580px] h-[108px] text-[40px] font-bold leading-[120%] tracking-[-0.03em] uppercase" style={{
            fontFamily: 'Inter',
            background: 'linear-gradient(180.78deg, #FFFFFF 0.68%, #95FF8D 146.82%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            크리에이터님,<br />
            혹시 이런 고민 있으셨나요?
          </h3>
        </div>
        {/* Image */}
        <div className="w-[640px] h-[640px] flex-1" style={{
          background: 'linear-gradient(90deg, #000000 8.31%, rgba(0, 0, 0, 0.567833) 75.87%, rgba(0, 0, 0, 0) 132.11%), url(/stocklist.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        </div>
      </div>

      {/* Product showcase with text overlay */}
      <div className="relative w-full h-[603px] bg-black flex items-center justify-center overflow-hidden">
        {/* Product images positioned absolutely with opacity */}
        <div className="absolute inset-0 opacity-25">
          {/* Cap - top left */}
          <Image 
            src="/product_showcase/image_16-removebg-preview.png" 
            alt="Product showcase"
            width={300}
            height={300}
            className="absolute w-[300px] h-[300px]"
            style={{
              left: '80px',
              top: '50px'
            }}
          />

          {/* Main jacket - center */}
          <Image 
            src="/product_showcase/image_13-removebg-preview 1.png" 
            alt="Product showcase"
            width={400}
            height={400}
            className="absolute w-[400px] h-[400px]"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))'
            }}
          />

          {/* Hoodie - top right */}
          <Image 
            src="/product_showcase/image_13-removebg-preview 2.png" 
            alt="Product showcase"
            width={280}
            height={280}
            className="absolute w-[280px] h-[280px]"
            style={{
              right: '60px',
              top: '40px',
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))'
            }}
          />

          {/* Bag - bottom left */}
          <Image 
            src="/product_showcase/image_14-removebg-preview.png" 
            alt="Product showcase"
            width={250}
            height={250}
            className="absolute w-[250px] h-[250px]"
            style={{
              left: '100px',
              bottom: '60px',
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.08))'
            }}
          />

          {/* Small accessory - bottom right */}
          <Image 
            src="/product_showcase/image_20-removebg-preview 1.png" 
            alt="Product showcase"
            width={200}
            height={200}
            className="absolute w-[200px] h-[200px]"
            style={{
              right: '80px',
              bottom: '80px'
            }}
          />

          {/* Additional item - left center */}
          <Image 
            src="/product_showcase/image_20-removebg-preview 2.png" 
            alt="Product showcase"
            width={180}
            height={180}
            className="absolute w-[180px] h-[180px]"
            style={{
              left: '40px',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
        </div>

        {/* Text overlay - centered */}
        <div className="relative z-10 text-center max-w-[900px] px-4">
          <p className="text-[#BEBEBE] text-[24px] font-medium text-center uppercase mb-4" style={{
            fontFamily: 'Inter',
            lineHeight: '57px',
            letterSpacing: '-0.72px'
          }}>
            프린팅만 된 심심한 굿즈는 이제 그만!
          </p>
          <p className="text-white text-[36px] font-bold text-center uppercase" style={{
            fontFamily: 'Inter',
            lineHeight: '57px',
            letterSpacing: '-1.08px'
          }}>
            당신만의 특별한 이야기를 <BlingcoGreen suffix="패션 굿즈" />로 만들어 드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export function AboutSecond() {
  return (
    <div>
      {/* Flavors section */}
      <section className="flex flex-col justify-center items-start bg-black gap-[16px] w-[1280px] h-[373px]" style={{ padding: '30px 50px' }}>
        <p className="text-[#95FF8D] text-[40px] leading-[100%] tracking-[0.01em]" style={{ fontFamily: 'var(--font-righteous)' }}>
          One and Only
        </p>
        <h2 className="text-white text-[96px] leading-[100%] tracking-[0.01em]" style={{ fontFamily: 'var(--font-righteous)' }}>
          <BlingcoLogo suffix="'s" />
        </h2>
        <h3 className="text-white text-[96px] leading-[100%] tracking-[0.01em]" style={{ fontFamily: 'var(--font-righteous)' }}>
          Fashion Goods
        </h3>
      </section>

      {/* Product grid */}
      <section className="flex flex-col items-center bg-black gap-[100px] w-[1280px] h-[1295px]" style={{ padding: '36px 50px' }}>
        {/* Products */}
        <div className="flex flex-row flex-wrap items-start content-start gap-[20px] w-[1180px] max-w-[1500px] h-[1240px]" style={{ padding: '0px' }}>
          {/* Product Grid Items */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-start gap-[30px] w-[580px] min-w-[460px] max-w-[600px] h-[580px] flex-1" style={{ padding: '0px' }}>
              {/* Image */}
              <div className="flex flex-col items-start gap-[8px] w-[580px] h-[580px] rounded-[20px]" style={{
                padding: '30px',
                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(/product_grid.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                {/* Text content */}
                <div className="flex flex-col justify-end items-start gap-[168px] w-[520px] h-[460px]" style={{ padding: '0px' }}>
                  <div className="flex-1"></div>
                  <div className="flex flex-col items-start gap-[14px]">
                    {/* 개별 맞춤화 */}
                    <h4 className="w-[177px] h-[40px] text-[#95FF8D] text-[36px] font-semibold leading-[110%] tracking-[0.01em]" style={{ fontFamily: 'Inter' }}>
                      개별 맞춤화
                    </h4>
                    {/* Text */}
                    <div className="relative w-[520px] h-[52px]">
                      {/* 크리에이터님의 아이덴티티 100% 반영한 패션 굿즈 */}
                      <p className="absolute w-[570px] h-[24px] text-white text-[20px] font-medium leading-[24px] tracking-[-0.03em] uppercase" style={{
                        left: '0px',
                        top: '14px',
                        fontFamily: 'Inter'
                      }}>
                        크리에이터님의 아이덴티티 100% 반영한 <BlingcoGreen suffix="패션 굿즈" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}