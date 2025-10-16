import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="relative w-full overflow-hidden" 
      style={{ 
        height: '524px',
        backgroundImage: 'url(/contact_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#0c0c0c'
      }}
    >
      {/* 메인 컨텐츠 */}
      <div className="relative px-4 md:px-[74px] pt-[156px]">
        {/* Contact Us SVG 로고 */}
        <div className="mb-6 md:mb-[44px]">
          <Image 
            src="/Contact Us.svg"
            alt="Contact Us"
            width={524}
            height={80}
            className="w-auto h-auto max-w-[300px] md:max-w-none"
          />
        </div>

        {/* 블링코와 함께할 크리에이터님을 기다립니다! */}
        <h2 className="text-white text-[16px] md:text-[20px] font-semibold leading-[0.9] tracking-[-0.6px] uppercase mb-4 md:mb-[20px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          블링코와 함께할 <span className="text-[#95FF8D]">크리에이터님</span>을 기다립니다!
        </h2>

        {/* 설명 텍스트 */}
        <div className="text-[#b1b1b1] text-[12px] md:text-[15px] font-medium leading-[20px] tracking-[-0.45px] uppercase mb-6 md:mb-[28px] max-w-[294px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          <p className="mb-0">그래픽이 없어도, 제조를 몰라도 블링코와 함께라면</p>
          <p>당신만의 패션 브랜드를 만들 수 있습니다.</p>
        </div>

        {/* 문의하기 버튼 */}
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#95FF8D] text-[#2f2f2f] text-[16px] md:text-[20px] font-bold rounded-[32px] md:rounded-[64px] hover:bg-[#7FE076] transition-all duration-300 transform hover:scale-105"
          style={{ fontFamily: 'Pretendard, sans-serif', letterSpacing: '-0.6px' }}
        >
          문의하기 <span>→</span>
        </Link>
      </div>
    </section>
  );
}
