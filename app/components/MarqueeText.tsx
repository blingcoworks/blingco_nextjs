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
    <div className="relative w-full h-[60px] bg-[#9747FF] overflow-hidden">
      <div className="absolute w-[3840px] h-[60px] blingco-marquee">
        {/* First section - 1920px width */}
        <div className="absolute w-[1920px] h-[60px] left-0">
          {textPositions.map((item, index) => (
              <p
                key={`first-${index}`}
                className="absolute font-medium text-[20px] leading-[110%] tracking-[-0.4px] whitespace-nowrap"
                style={{
                  left: `${item.left}px`,
                  top: 'calc(50% - 11px)',
                  fontFamily: 'Pretendard, sans-serif',
                  color: '#000000'
                }}
              >
                {item.text}
              </p>
          ))}
        </div>
        
        {/* Second section - duplicate for seamless loop */}
        <div className="absolute w-[1920px] h-[60px] left-[1920px]">
          {textPositions.map((item, index) => (
            <p
              key={`second-${index}`}
              className="absolute font-semibold text-[20px] leading-[110%] tracking-[-0.4px] whitespace-nowrap"
              style={{
                left: `${item.left}px`,
                top: 'calc(50% - 11px)',
                fontFamily: 'Pretendard, sans-serif',
                color: '#000000'
              }}
            >
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
