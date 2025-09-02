import { BlingcoLogo } from "../Blingco";

export default function Footer() {
  return (
    <footer className="w-full bg-[#181818] py-12 px-24">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex justify-between items-start py-8">
          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="text-[#DADADA] text-[14px] leading-[139%] tracking-[-0.01em] uppercase hover:text-white cursor-pointer transition-colors">
              Find Stockists
            </p>
            <p className="text-[#DADADA] text-[14px] leading-[139%] tracking-[-0.01em] uppercase hover:text-white cursor-pointer transition-colors">
              About
            </p>
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col gap-2">
            <p className="text-[#DADADA] text-[14px] font-light leading-[139%] tracking-[-0.01em] uppercase">
              (646) 555-4567
            </p>
            <p className="text-[#DADADA] text-[14px] font-light leading-[139%] tracking-[-0.01em] uppercase">
              (646) 555-4567
            </p>
            <p className="text-[#DADADA] text-[14px] font-light leading-[139%] tracking-[-0.01em] uppercase">
              (646) 555-4567
            </p>
          </div>
        </div>
        
        {/* Brand name */}
        <div className="py-8">
          <h4 className="text-white text-[140px] leading-[84%] tracking-[0.01em]" style={{ fontFamily: 'var(--font-righteous)' }}>
            <BlingcoLogo />
          </h4>
        </div>
      </div>
    </footer>
  );
}
