interface SubtitleProps {
  children: React.ReactNode;
  size?: 'small' | 'large';
  className?: string;
}

export default function Subtitle({ children, size = 'small', className = '' }: SubtitleProps) {
  const baseStyle = {
    fontFamily: 'Pretendard, sans-serif',
    fontStyle: 'normal' as const,
    fontWeight: 500,
    textAlign: 'center' as const,
    letterSpacing: '-0.03em',
    color: '#B1B1B1',
    flex: 'none',
    order: 1,
    flexGrow: 0
  };

  const sizeStyles = {
    small: {
      fontSize: '20px',
      lineHeight: '120%'
    },
    large: {
      fontSize: '24px',
      lineHeight: '90%'
    }
  };

  return (
    <p 
      style={{
        ...baseStyle,
        ...sizeStyles[size]
      }}
      className={className}
    >
      {children}
    </p>
  );
}
