import Image from "next/image";
import type { InsightCard } from "../../data/mockData";

interface InsightCardProps {
  card: InsightCard;
  onClick?: () => void;
}

export default function InsightCard({ card, onClick }: InsightCardProps) {
  const isPlaceholder = !card.imageSrc;

  if (isPlaceholder) {
    return (
      <div
        className="flex items-center justify-center cursor-pointer w-[90vw] max-w-[387px] md:w-[387px]"
        style={{
          height: '410px',
          background: '#272727',
          borderRadius: '12px'
        }}
        onClick={onClick}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            background: '#3A3A3A',
            borderRadius: '50%'
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden cursor-pointer w-[90vw] max-w-[385px] md:w-[385px]"
      style={{
        height: '410px',
        borderRadius: '12px'
      }}
      onClick={onClick}
    >
      <Image
        src={card.imageSrc}
        alt={card.imageAlt}
        fill
        className="object-cover object-center"
        style={{ zIndex: 0 }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 66.71%, rgba(0, 0, 0, 0.5) 100%)',
          zIndex: 1
        }}
      />
      <div className="absolute bottom-0 left-0 p-4" style={{ zIndex: 2 }}>
        <p
          style={{
            fontFamily: 'Pretendard, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '120%',
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            marginBottom: '8px'
          }}
        >
          {card.category}
        </p>
        <h3
          style={{
            fontFamily: 'Pretendard, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '48px',
            lineHeight: '120%',
            letterSpacing: '-0.03em',
            color: '#FFFFFF'
          }}
        >
          {card.name}
        </h3>
      </div>
      {card.hasAttribution && card.attributionText && (
        <p
          className="absolute bottom-4 right-4"
          style={{
            fontFamily: 'Pretendard, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '10px',
            lineHeight: '120%',
            letterSpacing: '-0.03em',
            color: '#939393',
            zIndex: 2
          }}
        >
          {card.attributionText}
        </p>
      )}
    </div>
  );
}
