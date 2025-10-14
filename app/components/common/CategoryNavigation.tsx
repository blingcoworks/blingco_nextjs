interface CategoryNavigationProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryNavigation({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryNavigationProps) {
  const baseStyle = {
    fontFamily: 'Pretendard, sans-serif',
    fontStyle: 'normal' as const,
    fontSize: '24px',
    lineHeight: '90%',
    textAlign: 'center' as const,
    letterSpacing: '-0.03em',
    cursor: 'pointer',
    transition: 'color 0.2s'
  };

  const activeStyle = {
    ...baseStyle,
    fontWeight: 500,
    color: '#FFFFFF'
  };

  const inactiveStyle = {
    ...baseStyle,
    fontWeight: 400,
    color: '#737373'
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: '640px',
        height: '28px',
        flex: 'none',
        order: 2,
        flexGrow: 0,
        gap: '48px'
      }}
    >
      {categories.map((category) => (
        <div key={category} className="relative" style={{ width: 'fit-content' }}>
          <span
            style={category === activeCategory ? activeStyle : inactiveStyle}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </span>
          {category === activeCategory && (
            <div
              className="absolute"
              style={{
                width: '100%',
                height: '0px',
                left: '0px',
                top: '28px',
                border: '2px solid #FFFFFF'
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
