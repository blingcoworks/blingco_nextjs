import Image from "next/image";
import StepContent from "./StepContent";

interface StepSectionProps {
  stepNumber: string;
  title: {
    primary: string;
    secondary: string;
  };
  subtitle: string;
  description: {
    primary: string;
    secondary: string;
  };
  imageSrc: string;
  imageAlt: string;
  layout?: 'left' | 'right'; // 'left' = 텍스트 왼쪽, 이미지 오른쪽 / 'right' = 텍스트 오른쪽, 이미지 왼쪽
}

export default function StepSection({
  stepNumber,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  layout = 'left'
}: StepSectionProps) {
  const isLeftLayout = layout === 'left';
  
  return (
    <section className="relative min-h-screen flex items-center justify-between overflow-hidden">
      {/* Image */}
      <div className={`absolute ${isLeftLayout ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-center`}>
        <Image 
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={600}
          className="w-auto h-auto max-w-full max-h-full object-contain"
        />
      </div>

      {/* Text Content */}
      <StepContent
        stepNumber={stepNumber}
        title={title}
        subtitle={subtitle}
        description={description}
        align={isLeftLayout ? 'left' : 'right'}
        className={`absolute w-[613px] h-[${isLeftLayout ? '300.98' : '277'}px] ${isLeftLayout ? 'left-[141px]' : 'left-[526px]'} top-1/2 transform -translate-y-1/2`}
      />
    </section>
  );
}
