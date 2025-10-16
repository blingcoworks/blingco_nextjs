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
  return (
    <div
      className="relative w-full max-w-[640px] overflow-x-auto scrollbar-hide px-4 md:px-0"
      style={{
        flex: 'none',
        order: 2,
        flexGrow: 0
      }}
    >
      <div
        className="flex items-center justify-center gap-6 md:gap-12"
        style={{
          minWidth: 'fit-content',
          height: '28px'
        }}
      >
        {categories.map((category) => (
          <div key={category} className="relative" style={{ width: 'fit-content', flexShrink: 0 }}>
            <span
              className="cursor-pointer transition-colors text-[18px] md:text-[24px]"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontStyle: 'normal',
                fontWeight: category === activeCategory ? 500 : 400,
                lineHeight: '90%',
                textAlign: 'center',
                letterSpacing: '-0.03em',
                color: category === activeCategory ? '#FFFFFF' : '#737373'
              }}
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
    </div>
  );
}
