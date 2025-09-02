import { BlingcoGreen } from "../Blingco";

export default function Contact() {
  return (
    <section id="contact" className="relative flex flex-col items-center gap-[20px] w-full mx-auto min-h-[1371px] bg-black" style={{
      padding: '0px'
    }}>
      {/* Featured product */}
      <div className="relative w-full flex flex-col justify-end items-center gap-[8px] h-[800px]" style={{
        padding: '80px 145px',
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/contact.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Text content */}
        <div className="flex flex-col items-start w-[642px] h-[136px]" style={{ padding: '0px' }}>
          {/* Header and subhead */}
          <div className="flex flex-col justify-center items-center gap-[14px] w-[642px] h-[136px]" style={{ padding: '0px' }}>
            {/* Contact Us */}
            <h2 className="w-[639px] h-[96px] text-[#95FF8D] text-[120px] leading-[80%] tracking-[0.01em] whitespace-nowrap" style={{ fontFamily: 'var(--font-righteous)' }}>
              Contact Us
            </h2>
            
            {/* Description */}
            <p className="w-[642px] h-[26px] text-white text-[20px] font-medium leading-[130%] tracking-[0.01em] text-center whitespace-nowrap" style={{ fontFamily: 'Inter' }}>
              A bold, spiced aperitif featuring cardamom, ginger, and cinnamon.
            </p>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="relative w-full flex flex-row justify-center items-center w-[1280px] h-[550px] bg-black" style={{ padding: '40px 100px 120px' }}>
        {/* Inner content */}
        <div className="flex flex-col items-center gap-[24px] w-[837px] max-w-[1200px] h-[377px] bg-[#727272] rounded-[24px]" style={{ padding: '50px 44px' }}>
          {/* Frame 2147238587 */}
          <div className="flex flex-col justify-center items-center gap-[36px] w-[749px] h-[74px]" style={{ padding: '0px' }}>
            {/* 블링코와 함께할 크리에이터님을 기다립니다! */}
            <h3 className="w-[644px] h-[26px] text-white text-[36px] font-semibold leading-[90%] tracking-[-0.03em] uppercase text-center" style={{ fontFamily: 'Inter' }}>
              블링코와 함께할 <BlingcoGreen suffix="크리에이터님" />을 기다립니다!
            </h3>
            
            {/* 서브 텍스트 문장 입력서브 텍스트 문장 입력서브 텍스트 문장 입력 */}
            <p className="w-[749px] h-[12px] text-white text-[16px] font-semibold leading-[22%] tracking-[-0.03em] uppercase text-center" style={{ fontFamily: 'Inter' }}>
              서브 텍스트 문장 입력서브 텍스트 문장 입력서브 텍스트 문장 입력
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
