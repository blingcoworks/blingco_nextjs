'use client'

import { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, '크리에이터 이름은 2자 이상이어야 합니다'),
  contact: z.string().min(5, '연락처는 5자 이상이어야 합니다'),
  links: z.array(
    z.object({
      url: z.string().url('올바른 URL 형식이 아닙니다')
    })
  ).min(1, '최소 1개 이상의 SNS 링크가 필요합니다'),
  content: z.string().min(5, '내용은 5자 이상 작성해주세요')
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      links: [{ url: '' }],
      content: ''
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'links'
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Server error:', errorData)
        throw new Error(errorData.error || 'Failed to send email')
      }

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
        {/* Creator Name Field */}
        <div className="space-y-[18px]">
          <label htmlFor="name" className="block text-white text-[20px] leading-[0.22] tracking-[-0.6px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            크리에이터 이름<span className="text-[#95FF8D]">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full bg-transparent text-white text-[16px] leading-[0.22] tracking-[-0.48px] border-0 border-b border-white/50 focus:border-[#95FF8D] focus:outline-none pb-2 transition-colors placeholder:text-white/50"
            placeholder="이름을 입력해 주세요."
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-400"
            >
              {errors.name.message}
            </motion.p>
          )}
        </div>

        {/* Links Field */}
        <div className="space-y-[18px]">
          <label className="block text-white text-[20px] leading-[0.22] tracking-[-0.6px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            SNS 링크<span className="text-[#95FF8D]">*</span> (최소 1개)
          </label>
          <AnimatePresence>
            {fields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-[18px] mb-4"
              >
                <input
                  {...register(`links.${index}.url`)}
                  type="url"
                  className="w-full bg-transparent text-white text-[16px] leading-[0.22] tracking-[-0.48px] border-0 border-b border-white/50 focus:border-[#95FF8D] focus:outline-none pb-2 transition-colors placeholder:text-white/50"
                  placeholder="https://instagram.com/username"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                />
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-sm text-red-400 hover:text-red-300 transition-colors"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    삭제
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          
          {errors.links && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-400"
            >
              {errors.links.message}
            </motion.p>
          )}

          <button
            type="button"
            onClick={() => append({ url: '' })}
            className="bg-[#b3b3b3] text-[#4a4a4a] rounded-[6px] text-[14px] font-medium leading-[0.22] tracking-[-0.42px] hover:bg-[#a3a3a3] transition-colors flex items-center justify-center"
            style={{ 
              fontFamily: 'Pretendard, sans-serif',
              width: '114px',
              height: '37.05px'
            }}
          >
            + SNS 링크 추가
          </button>
        </div>

        {/* Content Field */}
        <div className="space-y-[18px]" style={{ width: '550.01px' }}>
          <label htmlFor="content" className="block text-white text-[20px] font-normal leading-[0.22]" style={{ fontFamily: 'Pretendard, sans-serif', letterSpacing: '-0.03em' }}>
            내용<span className="text-[#95FF8D]">* </span>(원하는 디자인, 상품 등)
          </label>
          <textarea
            {...register('content')}
            id="content"
            rows={1}
            className="w-full bg-transparent text-white text-[16px] font-normal leading-[1.4] border-0 border-b border-white/50 focus:border-[#95FF8D] focus:outline-none pb-2 transition-all resize-none placeholder:text-white/50 overflow-y-auto"
            placeholder="원하시는 디자인이나 상품에 대해 자세히 설명해 주세요."
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement
              target.style.height = 'auto'
              const scrollHeight = target.scrollHeight
              const lineHeight = 22
              const maxHeight = lineHeight * 4
              target.style.height = `${Math.min(scrollHeight, maxHeight)}px`
            }}
            style={{ 
              fontFamily: 'Pretendard, sans-serif', 
              letterSpacing: '-0.03em',
              minHeight: '22px'
            }}
          />
          {errors.content && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-400"
            >
              {errors.content.message}
            </motion.p>
          )}
        </div>

        {/* Creator Contact Information( Phone Number, Email ) Field */}
        <div className="space-y-[18px]">
          <label htmlFor="contact" className="block text-white text-[20px] leading-[0.22] tracking-[-0.6px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            연락처(전화번호, 이메일)<span className="text-[#95FF8D]">*</span>
          </label>
          <input
            {...register('contact')}
            type="text"
            id="contact"
            className="w-full bg-transparent text-white text-[16px] leading-[0.22] tracking-[-0.48px] border-0 border-b border-white/50 focus:border-[#95FF8D] focus:outline-none pb-2 transition-colors placeholder:text-white/50"
            placeholder="연락처(전화번호, 이메일)를 입력해 주세요."
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          />
          {errors.contact && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-400"
            >
              {errors.contact.message}
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-center gap-8">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-[#95FF8D] text-[#2f2f2f] rounded-[64px] text-[20px] font-bold leading-[0.22] text-center transition-all flex items-center justify-center ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#7FE076]'
            }`}
            style={{ 
              fontFamily: 'Pretendard, sans-serif',
              width: '140px',
              height: '57.26px',
              letterSpacing: '-0.03em'
            }}
          >
            {isSubmitting ? '전송 중...' : '문의 전송'}
          </motion.button>

          {/* 안내 텍스트 */}
          <div className="text-center text-[#b1b1b1] text-[18px] leading-[28px] tracking-[-0.54px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            <p className="mb-0">문의 내용은 blingcoworks@gmail.com으로 전송됩니다.</p>
            <p>영업일 기준 1-2일 이내에 답변드리겠습니다.</p>
          </div>
        </div>

        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-[#95FF8D]/20 border border-[#95FF8D] text-[#95FF8D] rounded-lg text-center"
            >
              문의가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-red-500/20 border border-red-400 text-red-400 rounded-lg text-center"
            >
              문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  )
}