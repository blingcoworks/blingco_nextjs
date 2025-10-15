interface StepContentProps {
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
  className?: string;
  align?: 'left' | 'right';
}

export default function StepContent({ 
  stepNumber, 
  title, 
  subtitle, 
  description, 
  className = "",
  align = 'left'
}: StepContentProps) {
  const alignmentClass = align === 'right' ? 'items-end text-right' : 'items-start text-left';
  const titleWidth = align === 'right' ? 'w-[395px] 2xl:w-[520px]' : 'w-full';

  return (
    <div className={`flex flex-col ${alignmentClass} gap-8 ${className}`}>
      {/* Step Number */}
      <h3 className="w-full text-white text-2xl 2xl:text-3xl font-medium leading-[120%] tracking-[-0.03em]">
        {stepNumber}
      </h3>

      {/* Main Title */}
      <h2 className={`${titleWidth} text-[60px] 2xl:text-[72px] leading-[64px] 2xl:leading-[76px] font-bold`}>
        <span className="text-[#95FF8D] tracking-[-1.8px] block whitespace-nowrap">{title.primary}</span>
        {title.secondary && (
          <span className="text-[#ECECEC] tracking-[-1.8px] block whitespace-nowrap">{title.secondary}</span>
        )}
      </h2>

      {/* Subtitle */}
      <h3 className="w-full text-[24px] 2xl:text-[28px] font-semibold leading-[120%] tracking-[-0.03em] uppercase text-[#DCDCDC]">
        {subtitle}
      </h3>

      {/* Description */}
      <div className="w-[480px] 2xl:w-[540px] text-lg 2xl:text-xl font-medium leading-7 2xl:leading-8 tracking-[-0.03em] uppercase text-[#C4C4C4]">
        <p>{description.primary}</p>
        <p>{description.secondary}</p>
      </div>
    </div>
  );
}
