"use client";

export default function MarqueeText() {
  // Figma 디자인 스펙에 따른 정확한 위치값들
  const textPositions = [
    { text: "JEWELRY", left: 20 },
    { text: "APPAREL", left: 137 },
    { text: "BAG", left: 251 },
    { text: "SHOES", left: 330 },
    { text: "JEWELRY", left: 429 },
    { text: "APPAREL", left: 546 },
    { text: "BAG", left: 660 },
    { text: "SHOES", left: 739 },
    { text: "JEWELRY", left: 838 },
    { text: "APPAREL", left: 955 },
    { text: "BAG", left: 1069 },
    { text: "SHOES", left: 1148 },
    { text: "JEWELRY", left: 1247 },
    { text: "APPAREL", left: 1364 },
    { text: "BAG", left: 1478 },
    { text: "SHOES", left: 1557 },
    { text: "JEWELRY", left: 1656 },
    { text: "BAG", left: 1773 },
    { text: "SHOES", left: 1852 },
  ];
  
  return (
    <div className="relative w-full h-[60px] bg-[#1F41FF] overflow-hidden">
      <div className="absolute w-[3840px] h-[60px] blingco-marquee">
        {/* First section - 1920px width */}
        <div className="absolute w-[1920px] h-[60px] left-0">
          {textPositions.map((item, index) => (
            <span
              key={`first-${index}`}
              className="absolute text-white font-inter font-semibold text-[20px] leading-[110%] tracking-[-0.02em]"
              style={{
                left: `${item.left}px`,
                top: 'calc(50% - 11px + 3px)', // 22px height / 2 = 11px
                width: item.text === 'JEWELRY' ? '92px' : 
                       item.text === 'APPAREL' ? '88px' : 
                       item.text === 'BAG' ? '42px' : '67px',
                height: '22px'
              }}
            >
              {item.text}
            </span>
          ))}
        </div>
        
        {/* Second section - duplicate for seamless loop */}
        <div className="absolute w-[1920px] h-[60px] left-[1920px]">
          {textPositions.map((item, index) => (
            <span
              key={`second-${index}`}
              className="absolute text-white font-inter font-semibold text-[20px] leading-[110%] tracking-[-0.02em]"
              style={{
                left: `${item.left}px`,
                top: 'calc(50% - 11px + 3px)',
                width: item.text === 'JEWELRY' ? '92px' : 
                       item.text === 'APPAREL' ? '88px' : 
                       item.text === 'BAG' ? '42px' : '67px',
                height: '22px'
              }}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
