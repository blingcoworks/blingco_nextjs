"use client";


export default function Contents() {
  return (
    <div className="next-section-after-hero" style={{ backgroundColor: 'var(--blingco-bg-dark)' }}>
      <section 
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url(/contents_bg.png)' }}
      >
        <div className="absolute flex items-center text-center" style={{
          width: '924px',
          height: '160px',
          left: 'calc(50% - 924px/2)',
          top: 'calc(50% - 160px/2)',
          fontFamily: 'Pretendard',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '64px',
          lineHeight: '80px',
          letterSpacing: '-0.03em',
          color: '#FFFFFF'
        }}>
          한계 없는 스타일, 무한한 패션 굿즈의 세계를 경험하세요.
        </div>
      </section>
    </div>
  )
}