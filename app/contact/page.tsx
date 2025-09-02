import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-30 pb-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            문의하기
          </h1>
          <p className="text-lg text-gray-300">
            크리에이터 여러분의 소중한 의견을 기다립니다
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <ContactForm />
        </div>
        
        <div className="mt-8 mb-12 text-center text-sm text-gray-300">
          <p>문의 내용은 blingcoworks@gmail.com으로 전송됩니다.</p>
          <p>영업일 기준 1-2일 이내에 답변드리겠습니다.</p>
        </div>
      </div>
    </div>
  )
}