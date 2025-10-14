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
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-8 lg:px-16 xl:px-32">
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
        className={`absolute ${isLeftLayout ? 'left-4 sm:left-8 lg:left-16 xl:left-32' : 'right-4 sm:right-8 lg:right-16 xl:right-32'} top-1/2 transform -translate-y-1/2 w-[calc(50%-2rem)] sm:w-[calc(50%-4rem)] lg:w-[calc(50%-8rem)] xl:w-[calc(50%-16rem)]`}
      />
    </section>
  );

  
  // 중앙 정렬 코드
  // return (
  //   <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  //     {/* Container with max-width */}
  //     <div className="relative w-full max-w-[1280px] mx-auto flex items-center justify-between px-4">
  //       {/* Image */}
  //       <div className={`${isLeftLayout ? 'order-2' : 'order-1'} w-1/2 flex items-center justify-center`}>
  //         <Image 
  //           src={imageSrc}
  //           alt={imageAlt}
  //           width={600}
  //           height={600}
  //           className="w-auto h-auto max-w-full max-h-full object-contain"
  //         />
  //       </div>

  //       {/* Text Content */}
  //       <div className={`${isLeftLayout ? 'order-1' : 'order-2'} w-1/2 flex items-center justify-center`}>
  //         <StepContent
  //           stepNumber={stepNumber}
  //           title={title}
  //           subtitle={subtitle}
  //           description={description}
  //           align={isLeftLayout ? 'left' : 'right'}
  //           className="w-full max-w-[500px]"
  //         />
  //       </div>
  //     </div>
  //   </section>
  // );
}
