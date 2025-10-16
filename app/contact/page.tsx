import ContactForm from '../components/ContactForm'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center pt-24 pb-8 md:py-[140px] px-4" style={{ backgroundImage: 'url(/contact_main_bg.png)' }}>
      <div className="w-full max-w-[400px] md:max-w-[653px]">
        {/* Contact Us 타이틀 */}
        <div className="text-center mb-6 md:mb-[41px] flex flex-col items-center">
          <div className="mb-6 md:mb-[41px]">
            <Image 
              src="/Contact Us.svg"
              alt="Contact Us"
              width={524}
              height={80}
              className="w-auto h-auto max-w-[300px] md:max-w-none"
            />
          </div>
          <p className="text-[#b1b1b1] text-[16px] md:text-[24px] font-medium leading-[0.9] tracking-[-0.72px] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            크리에이터 여러분의 소중한 의견을 기다립니다.
          </p>
        </div>
        
        {/* 폼 컨테이너 */}
        <div className="bg-[#1d1d1d] rounded-[20px] md:rounded-[30px] px-6 md:px-13 py-8 md:py-12">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}