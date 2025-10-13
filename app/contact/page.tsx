import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center py-[140px] px-4">
      <div className="w-full max-w-[653px]">
        {/* Contact Us 타이틀 */}
        <div className="text-center mb-[84px]">
          <h1 className="text-[#95FF8D] text-[72px] font-bold leading-[1] mb-[41px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Contact Us
          </h1>
          <p className="text-[#b1b1b1] text-[24px] font-medium leading-[0.9] tracking-[-0.72px] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            크리에이터 여러분의 소중한 의견을 기다립니다.
          </p>
        </div>
        
        {/* 폼 컨테이너 */}
        <div className="bg-[#1d1d1d] rounded-[30px] px-[51px] py-[48px] pb-[59px]">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}