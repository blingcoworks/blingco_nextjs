export default function Service() {
  return (
    <section id="services" className="bg-[#252525] flex flex-col items-center justify-start relative w-full">
      <div className="flex flex-col items-start justify-start relative w-[1280px]">
        {/* Featured product */}
        <div 
          className="bg-[#00000033] flex flex-col gap-2 h-[800px] items-center justify-end px-[145px] py-20 relative w-full"
          style={{
            backgroundImage: `url(/service.png)`,
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover'
          }}
          aria-label="A cocktail with cardamom in a short glass"
        >
          <div className="flex flex-col items-start justify-start relative">
            {/* Circular Tag placeholder */}
            <div className="h-11 w-[115px]" />
            
            {/* Header and subhead */}
            <div className="flex flex-col gap-2 items-center justify-center relative w-full">
              <h1 className="font-['Righteous'] text-[40px] text-white tracking-[0.4px] leading-[0.8] whitespace-nowrap">
                How to use
              </h1>
              
              <div className="flex flex-col gap-3.5 items-start justify-start relative w-full">
                <h1 className="font-['Righteous'] text-[#95ff8d] text-[120px] tracking-[1.2px] leading-[0.8] whitespace-nowrap">
                  Our services
                </h1>
                
                <p className="font-['Inter'] font-medium text-[20px] text-center text-white tracking-[0.2px] leading-[1.3] w-full">
                  A bold, spiced aperitif featuring cardamom, ginger, and cinnamon.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services content - Image slider */}
        <div className="bg-gradient-to-b from-[#000000] to-[#444e44] h-[800px] overflow-hidden relative w-[1280px]">
          <div 
            className="absolute bottom-0 h-[878px] w-[798.182px]"
            style={{ left: "calc(50% + 0.091px)", transform: "translateX(-50%)" }}
          >
            {/* 슬라이드 container */}
            <div 
              className="absolute top-[135.35px]"
              style={{ left: "calc(100% + 505.915px)", transform: "translateX(-50%)" }}
            >
              {/* 이미지1 - Main central image */}
              <div 
                className="absolute bg-[#d9d9d9] h-[665.678px] w-[488.164px] top-[135.35px]"
                style={{
                  left: "calc(50% + 13.314px)",
                  transform: "translateX(-50%)",
                  backgroundImage: "url(/service.png)",
                  backgroundPosition: "50% 50%",
                  backgroundSize: "cover"
                }}
              />
              
              {/* 이미지2 - Right image (black placeholder) */}
              <div 
                className="absolute bg-black w-[488.164px] h-[488.164px] top-[312.87px]"
                style={{
                  left: "calc(100% + 208.579px)",
                  transform: "translateX(-50%)"
                }}
              />
              
              {/* 이미지3 - Far right image */}
              <div 
                className="absolute bg-[#d9d9d9] w-[488.164px] h-[488.164px] top-[312.87px]"
                style={{
                  left: "calc(100% + 803.251px)",
                  transform: "translateX(-50%)",
                  backgroundImage: "url(/service.png)",
                  backgroundPosition: "50% 50%",
                  backgroundSize: "cover"
                }}
              />
              
              {/* 이미지4 - Furthest right image */}
              <div 
                className="absolute bg-[#d9d9d9] w-[488.164px] h-[488.164px] top-[312.87px]"
                style={{
                  left: "calc(100% + 1397.92px)",
                  transform: "translateX(-50%)",
                  backgroundImage: "url(/service.png)",
                  backgroundPosition: "50% 50%",
                  backgroundSize: "cover"
                }}
              />
            </div>
            
            {/* Navigation area */}
            <div className="absolute h-[181.952px] left-[35.5px] top-[982.99px] w-[763.311px]" />
          </div>
          
          {/* Right side panel */}
          <div className="absolute h-[781px] left-[897px] top-[19px] w-[568px]" />
        </div>
      </div>
    </section>
  );
}
