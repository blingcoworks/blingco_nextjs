export const AboutSection = () => {
  return (
    <section id="about" className="relative bg-[#3a3a3a] min-h-screen">
      <div className="relative w-full h-[1080px]">
        {/* Main Title */}
        <div className="absolute left-1/2 top-[120px] -translate-x-1/2 text-center">
          <h2 className="text-[72px] font-bold text-white tracking-wider" style={{ fontFamily: 'var(--font-passion-one)' }}>
            BLING.CO
          </h2>
          <p className="text-[20px] text-white mt-4" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            크리에이터를 위한 패션 굿즈 제작 솔루션
          </p>
          <p className="text-[14px] text-gray-300 mt-2" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            세상에 하나뿐인 크리에이터님만의 그만의가치로 메리트있는 제품창출을 하여드립니다.
          </p>
        </div>

        {/* Question Section */}
        <div className="absolute left-1/2 top-[340px] -translate-x-1/2 w-full max-w-[1200px] px-6">
          <h3 className="text-[32px] text-center text-white mb-12" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            왜 맞춤형 굿즈를 만들어야 할까요?
          </h3>

          {/* Cards Container */}
          <div className="flex justify-center items-center gap-4">
            {/* Card 1 - 개성 반영력 */}
            <div className="bg-white rounded-[20px] w-[200px] h-[220px] p-5 flex flex-col items-center justify-center text-center">
              <div className="w-[50px] h-[50px] bg-[#E8F8D7] rounded-lg mb-3 flex items-center justify-center">
                <span className="text-xl">📦</span>
              </div>
              <h4 className="text-[16px] font-bold text-black mb-2" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                개성 반영력
              </h4>
              <p className="text-[11px] text-[#575757] leading-[1.4]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                기성 상품이 나타낼 수 없는<br/>
                아이덴티티, 창작물을<br/>
                나만의 제품으로
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M10 15L20 15M20 15L15 10M20 15L15 20" stroke="white" strokeWidth="2"/>
              </svg>
            </div>

            {/* Card 2 - 만족 보장 */}
            <div className="bg-white rounded-[20px] w-[200px] h-[220px] p-5 flex flex-col items-center justify-center text-center">
              <div className="w-[50px] h-[50px] bg-[#E8F8D7] rounded-lg mb-3 flex items-center justify-center">
                <span className="text-xl">🎨</span>
              </div>
              <h4 className="text-[16px] font-bold text-black mb-2" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                만족 보장
              </h4>
              <p className="text-[11px] text-[#575757] leading-[1.4]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                내가 원하는대로 기획,<br/>
                디자인 수정을 거쳐<br/>
                제품 반영!
              </p>
            </div>

            {/* Plus Sign */}
            <div className="flex items-center justify-center mx-2">
              <span className="text-white text-2xl font-light">+</span>
            </div>

            {/* Card 3 - 브랜드 가치 */}
            <div className="bg-white rounded-[20px] w-[200px] h-[220px] p-5 flex flex-col items-center justify-center text-center">
              <div className="w-[50px] h-[50px] bg-[#E8F8D7] rounded-lg mb-3 flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
              <h4 className="text-[16px] font-bold text-black mb-2" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                브랜드 가치
              </h4>
              <p className="text-[11px] text-[#575757] leading-[1.4]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                크리에이터님의<br/>
                아이덴티티 100% 반영한<br/>
                패션 굿즈!
              </p>
            </div>

            {/* Plus Sign */}
            <div className="flex items-center justify-center mx-2">
              <span className="text-white text-2xl font-light">+</span>
            </div>

            {/* Card 4 - 수익 구조 */}
            <div className="bg-[#d7ffb3] rounded-[20px] w-[200px] h-[220px] p-5 flex flex-col items-center justify-center text-center">
              <div className="w-[50px] h-[50px] bg-white/30 rounded-lg mb-3 flex items-center justify-center">
                <span className="text-xl">💰</span>
              </div>
              <h4 className="text-[16px] font-bold text-black mb-2" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                수익 구조
              </h4>
              <p className="text-[11px] text-black/70 leading-[1.4]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                높은 마진과 반복 재발매로<br/>
                안정적,지속적 수익 확보!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section with Fashion Images */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="relative h-[360px] bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a]">
            {/* Left Text */}
            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 z-10">
              <p className="text-[18px] text-white mb-2" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                전문 디자이너와 함께라면
              </p>
              <h3 className="text-[40px] font-bold leading-[1.2]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <span className="text-white">굿즈를 넘어,</span><br/>
                <span className="text-[#d7ffb3]">패션으로.</span>
              </h3>
            </div>

            {/* Right Fashion Images - Overlapping squares */}
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[300px]">
              {/* Back image */}
              <div className="absolute top-0 left-0 w-[240px] h-[240px] bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400/80 to-blue-600/80 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Fashion Image</span>
                </div>
              </div>
              {/* Front image */}
              <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-gray-400/80 to-gray-600/80 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Fashion Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};