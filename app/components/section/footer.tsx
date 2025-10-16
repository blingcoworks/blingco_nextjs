import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c0c0c]">
      {/* Top section with links and contact */}
      <div className="flex flex-col md:flex-row justify-between items-start pt-[60px] md:pt-[120px] pb-0 px-4 md:px-[30px] gap-8 md:gap-0">
        {/* Left - Tagline */}
        <div className="flex flex-col gap-[7px] pb-[60px] md:pb-[120px]">
          <p className="text-[#adadad] text-[16px] md:text-[20px] font-semibold leading-[24px] tracking-[-0.2px] uppercase">
            FASHION GOODS<br />
            PUBLINSHING SOLUTION
          </p>
        </div>
        
        {/* Center - Contact info */}
        <div className="flex flex-col gap-0 md:gap-[7px] pb-[60px] md:pb-[120px]">
          <p className="text-white/60 text-[14px] md:text-[16px] leading-[1.39] tracking-[-0.16px] transition-opacity">
            T. +82.10.2602.8219
          </p>
          <p className="text-white/60 text-[14px] md:text-[16px] leading-[1.39] tracking-[-0.16px]">
            E. young@blingco.kr
          </p>
          <p className="text-white/60 text-[14px] md:text-[16px] leading-[1.39] tracking-[-0.16px]">
            A. 서울특별시 금천구 범안로 15길 22-5
          </p>
        </div>
        
        {/* Right - Contact info */}
        <div className="flex flex-col gap-[7px] pb-[60px] md:pb-[120px]">
        </div>
      </div>
      
      {/* Bottom section with logo and copyright */}
      <div className="flex flex-col gap-[17px] pt-[40px] pb-[20px] px-4 md:px-[30px]">
        {/* Logo */}
        <div>
          <Image 
            src="/blingco_logo.svg"
            alt="Blingco"
            width={518}
            height={85}
            className="h-[60px] md:h-[85px] w-auto"
          />
        </div>
        
        {/* Copyright */}
        <p className="text-white/30 text-[12px] md:text-[14.222px] font-medium leading-[1.1] tracking-[-0.7111px] uppercase">
          BLING.co © 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
