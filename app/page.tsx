import { AboutSection } from "./components/section/about";

export default function Home() {
  return (
    <div className="relative w-full">
      
      {/* Hero Section - 00.Main */}
      <section className="relative w-full h-[1080px] overflow-hidden bg-[#292121]">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-50 flex flex-row justify-between items-center px-8 sm:px-12 md:px-20 lg:px-32 xl:px-[180px] py-[27px] bg-gradient-to-b from-[#292121] to-[#292121]">
          {/* Logo */}
          <div className="text-white text-[28px] sm:text-[32px] md:text-[38px] leading-[57px]" style={{ fontFamily: 'AppleSDGothicNeoH00', fontWeight: 400 }}>
            BLING.CO
          </div>
          
          {/* Navigation Container - Desktop */}
          <nav className="hidden md:flex flex-row items-center gap-8 lg:gap-12 xl:gap-[78px]">
            <a href="#about" className="text-white text-[14px] lg:text-[16px] leading-[24px] font-semibold hover:text-[#d7ffb3] transition-colors duration-300" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
              About
            </a>
            <a href="#services" className="text-white text-[14px] lg:text-[16px] leading-[24px] font-semibold hover:text-[#d7ffb3] transition-colors duration-300" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
              Services
            </a>
            <a href="#how-to" className="text-white text-[14px] lg:text-[16px] leading-[24px] font-semibold hover:text-[#d7ffb3] transition-colors duration-300" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
              How to
            </a>
            <a href="#contact" className="text-white text-[14px] lg:text-[16px] leading-[24px] font-semibold hover:text-[#d7ffb3] transition-colors duration-300" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5">
            <span className="w-6 h-0.5 bg-white transition-all duration-300" />
            <span className="w-6 h-0.5 bg-white transition-all duration-300" />
            <span className="w-6 h-0.5 bg-white transition-all duration-300" />
          </button>
        </header>

        {/* Decorative line under header */}
        <div className="absolute top-[148px] left-1/2 -translate-x-1/2 w-[1738px] h-[1px] bg-white/10" />

        {/* Hero Content - Horizontal layout matching Figma */}
        <div className="absolute top-[204px] left-[818px] w-[1567px] h-[207px] flex flex-row items-center gap-[16px]">
          <span className="w-[70px] h-[64px] text-white text-[48px] leading-[64px] flex-none order-0" style={{ fontFamily: 'var(--font-playfair-display)', fontWeight: 400 }}>
            the
          </span>
          <span className="w-[278px] h-[180px] text-white text-[135px] leading-[180px] flex-none order-1" style={{ fontFamily: 'var(--font-playfair-display)', fontWeight: 400 }}>
            Next
          </span>
          <div className="w-[218px] h-[81px] flex-none order-2">
            <p className="text-[#d7ffb3] text-[18px] leading-[148%]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
              We&apos;d love to hear from you! Whether you have questions, feedback.
            </p>
          </div>
          <span className="w-[953px] h-[207px] text-white text-[155px] leading-[207px] flex-none order-3" style={{ fontFamily: 'var(--font-playfair-display)', fontWeight: 400 }}>
            Collaboration
          </span>
        </div>

        {/* Curved decoration line */}
        <svg className="absolute top-[418px] left-[-59px] w-[2092px] h-[620px] pointer-events-none" viewBox="0 0 2092 620" fill="none">
          <path d="M0 300Q500 100 1046 310T2092 300" stroke="white" strokeWidth="1" strokeOpacity="0.15" fill="none" />
        </svg>

        {/* Bottom text */}
        <div className="absolute bottom-[158px] left-[415px]">
          <p className="text-[#d7ffb3] text-[14px] max-w-[341px]">
            Stay updated with the latest trends, offers, and exclusive discounts.
          </p>
        </div>

        {/* Korean text indicator - bottom right */}
        <div className="absolute bottom-[141px] right-[352px] text-white text-[60px] font-semibold" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          배경:영상
        </div>
        
        {/* Product Images with exact positioning from Figma */}
        {/* Image 1 - Top left */}
        <div className="absolute top-[372px] left-[116px] w-[262px] h-[243px] rounded-xl overflow-hidden shadow-[10px_7px_34.3px_rgba(0,0,0,0.1)]">
          <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-500">
            <div className="w-full h-full flex items-center justify-center text-white/50">
              <span className="text-4xl">👒</span>
            </div>
          </div>
        </div>
        
        {/* Image 2 - Center */}
        <div className="absolute top-[372px] left-[528px] w-[299px] h-[299px] rounded-xl overflow-hidden shadow-[10px_10px_44.2px_rgba(0,0,0,0.1)]">
          <div className="w-full h-full bg-gradient-to-br from-rose-300 to-rose-500">
            <div className="w-full h-full flex items-center justify-center text-white/50">
              <span className="text-5xl">🎩</span>
            </div>
          </div>
        </div>
        
        {/* Image 3 - Right */}
        <div className="absolute top-[446px] left-[1358px] w-[175px] h-[202px] rounded-xl overflow-hidden shadow-[10px_10px_28.8px_rgba(0,0,0,0.1)]">
          <div className="w-full h-full bg-gradient-to-br from-sky-300 to-sky-500">
            <div className="w-full h-full flex items-center justify-center text-white/50">
              <span className="text-3xl">🧢</span>
            </div>
          </div>
        </div>
        
        {/* Image 4 - Bottom center */}
        <div className="absolute top-[628px] left-[991px] w-[238px] h-[261px] rounded-xl overflow-hidden shadow-[10px_10px_23.5px_rgba(0,0,0,0.1)]">
          <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500">
            <div className="w-full h-full flex items-center justify-center text-white/50">
              <span className="text-4xl">👒</span>
            </div>
          </div>
        </div>
        
        {/* Small circular image - bottom left */}
        <div className="absolute top-[912px] left-[106px] w-[68px] h-[110px] rounded-[40px] overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600">
            <div className="w-full h-full flex items-center justify-center text-white/50">
              <span className="text-sm">🎓</span>
            </div>
          </div>
        </div>

        {/* Small person image - center bottom */}
        <div className="absolute top-[822px] left-[800px] w-[44px] h-[80px] rounded-[25px] overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600">
            <div className="w-full h-full flex items-center justify-center text-white/50">
              <span className="text-xs">👤</span>
            </div>
          </div>
        </div>

        {/* Decorative circle - left edge */}
        <div className="absolute top-[372px] left-[-74px] w-[149px] h-[149px]">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-400/10 to-gray-600/5 blur-2xl" />
        </div>
        
        {/* Decorative Stars with exact positioning */}
        <div className="absolute top-[411px] left-[1039px] w-[81px] h-[81px]">
          <svg width="81" height="81" viewBox="0 0 81 81" fill="none">
            <path d="M40.5 0L49.6 26.5H77.3L54.4 42.9L63.4 69.4L40.5 53L17.6 69.4L26.6 42.9L3.7 26.5H31.4L40.5 0Z" fill="#d7ffb3" fillOpacity="0.5"/>
          </svg>
        </div>
        
        <div className="absolute top-[681px] left-[137px] w-[99px] h-[99px] rotate-[15deg]">
          <svg width="81" height="81" viewBox="0 0 81 81" fill="none">
            <path d="M40.5 0L49.6 26.5H77.3L54.4 42.9L63.4 69.4L40.5 53L17.6 69.4L26.6 42.9L3.7 26.5H31.4L40.5 0Z" fill="white" fillOpacity="0.3"/>
          </svg>
        </div>
        
        <div className="absolute top-[993px] left-[750px] w-[99px] h-[99px] rotate-[15deg]">
          <svg width="81" height="81" viewBox="0 0 81 81" fill="none">
            <path d="M40.5 0L49.6 26.5H77.3L54.4 42.9L63.4 69.4L40.5 53L17.6 69.4L26.6 42.9L3.7 26.5H31.4L40.5 0Z" fill="white" fillOpacity="0.25"/>
          </svg>
        </div>
        
        <div className="absolute top-[768px] left-[198px] w-[38px] h-[38px] rotate-[345deg]">
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path d="M15.5 0L19.4 10.1H30L21.8 16.4L25.7 26.5L15.5 20.2L5.3 26.5L9.2 16.4L1 10.1H11.6L15.5 0Z" fill="white" fillOpacity="0.4"/>
          </svg>
        </div>
        
        <div className="absolute top-[1079px] left-[811px] w-[38px] h-[38px] rotate-[345deg]">
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path d="M15.5 0L19.4 10.1H30L21.8 16.4L25.7 26.5L15.5 20.2L5.3 26.5L9.2 16.4L1 10.1H11.6L15.5 0Z" fill="#d7ffb3" fillOpacity="0.3"/>
          </svg>
        </div>
        
        <div className="absolute top-[481px] left-[1105px] w-[40px] h-[40px] rotate-[330deg]">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 0L18.8 9.7H29L20.1 15.6L23.9 25.3L15 19.4L6.1 25.3L9.9 15.6L1 9.7H11.2L15 0Z" fill="white" fillOpacity="0.2"/>
          </svg>
        </div>
      </section>

      <AboutSection />

      {/* Services Section - 02.Services */}
      <section id="services" className="relative bg-white py-0">
        <div className="relative h-[1080px] flex">
          {/* POINT 01 */}
          <div className="relative flex-1 bg-black text-white flex items-center justify-center">
            <div className="text-center">
              <p className="text-[#d7ffb3] text-[32px] mb-8">POINT 01</p>
              <h3 className="text-[40px] font-semibold">
                전문 디자이너<br />맞춤 개발
              </h3>
            </div>
          </div>

          {/* POINT 02 */}
          <div className="relative flex-1 bg-black text-white flex items-center justify-center">
            <div className="text-center">
              <p className="text-[#d7ffb3] text-[32px] mb-8">POINT 02</p>
              <h3 className="text-[40px] font-semibold">패션 제조 네트워크</h3>
            </div>
          </div>

          {/* POINT 03 */}
          <div className="relative flex-1 bg-black text-white flex items-center justify-center">
            <div className="text-center">
              <p className="text-[#d7ffb3] text-[32px] mb-8">POINT 03</p>
              <h3 className="text-[40px] font-semibold">0원 시작, 재고 제로</h3>
            </div>
          </div>

          {/* POINT 04 */}
          <div className="relative flex-1 bg-black text-white flex items-center justify-center">
            <div className="text-center">
              <p className="text-[#d7ffb3] text-[32px] mb-8">POINT 04</p>
              <h3 className="text-[40px] font-semibold">프리미엄 수익 모델</h3>
            </div>
          </div>
        </div>
      </section>

      {/* How to Section - 03.How to */}
      <section id="how-to" className="relative bg-black py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-[128px] text-white mb-8" style={{ fontFamily: 'Passion One, sans-serif' }}>
            HOW TO USE
          </h2>
          <p className="text-[96px] text-[#d7ffb3] mb-20" style={{ fontFamily: 'Manrope, sans-serif' }}>
            BLING.CO
          </p>

          {/* Step Card */}
          <div className="bg-gradient-to-b from-transparent to-black/50 rounded-[10px] p-16 max-w-2xl mx-auto">
            <h3 className="text-[32px] font-bold text-white mb-8">STEP 01</h3>
            <p className="text-[20px] text-white">
              크리에이터님 콘텐츠를 분석한 후,<br />
              <span className="text-[#d7ffb3]">패션디자이너와 함께 패션 굿즈를 개발</span>해요
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - 04.Contact */}
      <section id="contact" className="relative bg-[#131313] py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[48px] font-semibold text-white mb-8">
            블링코와 함께 할,<br />
            <span className="text-[#d7ffb3]">크리에이터님</span>을 기다립니다!
          </h2>
          
          <p className="text-[20px] text-white mb-12">
            그래픽이 없어도, 제조를 몰라도 블링코와 함께라면<br />
            <span className="text-[#d7ffb3]">누구나 패션 굿즈를 만들 수 있습니다</span>
          </p>

          <button className="bg-[#d7ffb3] text-black px-12 py-4 rounded-full text-[24px] font-medium hover:opacity-90 transition-opacity">
            Contact us
          </button>

          <div className="flex justify-center gap-12 mt-12 text-white/80 text-[16px]">
            <span>맞춤형 고퀄리티 패션 굿즈</span>
            <span>전문 패션 디자이너</span>
            <span>제로 리스크</span>
            <span>높은 수익</span>
          </div>
        </div>
      </section>

      {/* Footer - 05.footer */}
      <footer className="bg-[#111111] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-12">
            {/* Logo and Description */}
            <div>
              <h3 className="text-[38px] mb-6" style={{ fontFamily: 'AppleSDGothicNeoH00, sans-serif' }}>
                BLING.CO
              </h3>
              <p className="text-[14px] text-white/80 leading-relaxed">
                크리에이터를 위한 패션 굿즈 제작 솔루션<br />
                크리에이터를 위한 패션 굿즈 제작 솔루션<br />
                크리에이터를 위한 패션 굿즈 제작 솔루션
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <div className="space-y-2 text-[14px] text-white/80">
                <p>+1 (406) 555-0120</p>
                <p>+1 (480) 555-0103</p>
                <p>hellp@promptverse.com</p>
              </div>
              <div className="mt-6">
                <p className="text-[12px] text-white/40 mb-2">Location</p>
                <p className="text-[14px] text-white/80">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-end">
              <div className="flex gap-2">
                <div className="w-[50px] h-[50px] bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span>📧</span>
                </div>
                <div className="w-[50px] h-[50px] bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span>📷</span>
                </div>
                <div className="w-[50px] h-[50px] bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span>🔗</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-20 pt-8 border-t border-white/10">
            <p className="text-[14px] text-[#636363]">
              Copyright © Bling.co, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}