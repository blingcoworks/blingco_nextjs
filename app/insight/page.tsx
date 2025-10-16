"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import Subtitle from "../components/common/Subtitle";
import CategoryNavigation from "../components/common/CategoryNavigation";
import InsightCard from "../components/common/InsightCard";
import { mockInsightData, categories } from "../data/mockData";

export default function InsightPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  
  const filteredData = useMemo(() => {
    if (activeCategory === 'ALL') {
      return mockInsightData;
    }
    return mockInsightData.filter(card => card.category === activeCategory);
  }, [activeCategory]);
  return (
    <div className="bg-[#0c0c0c] min-h-screen">
      {/* Main Container */}
      <section
        className="relative mx-auto flex flex-col items-center px-4 md:px-0"
        style={{
          paddingTop: '120px',
          paddingRight: '0px',
          paddingBottom: '40px',
          paddingLeft: '0px',
          gap: '40px',
          width: '1280px',
          maxWidth: '100%'
        }}
      >
        {/* Insight Logo */}
        <div 
          className="relative w-[200px] md:w-[282.23px] h-auto"
          style={{
            flex: 'none',
            order: 0,
            flexGrow: 0
          }}
        >
          <Image 
            src="/insight/Insight.svg"
            alt="Insight"
            width={282.23}
            height={92}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Subtitle */}
        <Subtitle size="large">
          콜라보 사례 소개 준비중 페이지입니다.
        </Subtitle>

        {/* Category Navigation */}
        <CategoryNavigation 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Cards Grid Container */}
        <div
          className="relative w-full max-w-[1189px] flex flex-col items-center"
          style={{
            flex: 'none',
            order: 3,
            flexGrow: 0
          }}
        >
          {/* Top Row */}
          <div
            className={`flex flex-col md:flex-row mb-[14px] gap-4 md:gap-[30.5px] items-center ${filteredData.slice(0, 3).length <= 3 ? 'justify-center' : 'justify-between'}`}
          >
            {filteredData.slice(0, 3).map((card) => (
              <InsightCard
                key={card.id}
                card={card}
                onClick={() => console.log('Card clicked:', card.id)}
              />
            ))}
          </div>

          {/* Bottom Row */}
          <div
            className={`flex flex-col md:flex-row items-center ${filteredData.slice(3, 6).length > 0 ? (filteredData.slice(3, 6).length <= 3 ? 'justify-center' : 'justify-between') : 'justify-center'}`}
            style={{
              gap: '30.5px'
            }}
          >
            {filteredData.slice(3, 6).map((card) => (
              <InsightCard
                key={card.id}
                card={card}
                onClick={() => console.log('Card clicked:', card.id)}
              />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div
          className="flex items-center justify-center"
          style={{
            gap: '31px',
            flex: 'none',
            order: 4,
            flexGrow: 0
          }}
        >
          {/* < */}
          <span
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontStyle: 'normal',
              fontWeight: 300,
              fontSize: '24px',
              lineHeight: '90%',
              textAlign: 'center',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: '#737373'
            }}
          >
            &lt;
          </span>

          {/* 1 - Active */}
          <span
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '90%',
              textAlign: 'center',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: '#FFFFFF'
            }}
          >
            1
          </span>

          {/* 2 */}
          <span
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontStyle: 'normal',
              fontWeight: 300,
              fontSize: '24px',
              lineHeight: '90%',
              textAlign: 'center',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: '#737373'
            }}
          >
            2
          </span>

          {/* 3 */}
          <span
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontStyle: 'normal',
              fontWeight: 300,
              fontSize: '24px',
              lineHeight: '90%',
              textAlign: 'center',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: '#737373'
            }}
          >
            3
          </span>

          {/* > */}
          <span
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontStyle: 'normal',
              fontWeight: 300,
              fontSize: '24px',
              lineHeight: '90%',
              textAlign: 'center',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: '#737373'
            }}
          >
            &gt;
          </span>
        </div>
      </section>
    </div>
  );
}

