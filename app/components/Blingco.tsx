interface BlingcoLogoProps {
  className?: string;
  suffix?: string;
}

export function BlingcoLogo({ className, suffix = "" }: BlingcoLogoProps) {
  return (
    <span className={className}>
      Bling<span className="blingco-green">.</span>co{suffix}
    </span>
  );
}

export function BlingcoGreen({ className, suffix = "" }: BlingcoLogoProps) {
  return (
    <span className={className}>
      <span className="blingco-green">{suffix}</span>
    </span>
  );
}
