'use client'

import { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'

// Form validation schema
const contactSchema = z.object({
  creatorName: z.string().min(2, '크리에이터 이름은 2자 이상이어야 합니다'),
  snsLinks: z.array(
    z.object({
      url: z.string().url('올바른 URL 형식이 아닙니다')
    })
  ).min(1, '최소 1개 이상의 SNS 링크가 필요합니다'),
  content: z.string().min(10, '내용은 10자 이상 작성해주세요')
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
      creatorName: '',
      snsLinks: [{ url: '' }],
      content: ''
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'snsLinks'
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
      className="w-full max-w-2xl mx-auto p-6"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Creator Name Field */}
        <div>
          <label htmlFor="creatorName" className="block text-sm font-medium text-gray-700 mb-2">
            크리에이터 이름 *
          </label>
          <input
            {...register('creatorName')}
            type="text"
            id="creatorName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black"
            placeholder="이름을 입력해주세요"
          />
          {errors.creatorName && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-600"
            >
              {errors.creatorName.message}
            </motion.p>
          )}
        </div>

        {/* SNS Links Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            SNS 링크 * (최소 1개)
          </label>
          <AnimatePresence>
            {fields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex gap-2 mb-3"
              >
                <input
                  {...register(`snsLinks.${index}.url`)}
                  type="url"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black"
                  placeholder="https://instagram.com/username"
                />
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    삭제
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          
          {errors.snsLinks && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-2 text-sm text-red-600"
            >
              {errors.snsLinks.message}
            </motion.p>
          )}
          
          {errors.snsLinks?.root && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-2 text-sm text-red-600"
            >
              {errors.snsLinks.root.message}
            </motion.p>
          )}

          <button
            type="button"
            onClick={() => append({ url: '' })}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            + SNS 링크 추가
          </button>
        </div>

        {/* Content Field */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            내용 * (원하는 디자인, 상품)
          </label>
          <textarea
            {...register('content')}
            id="content"
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-black"
            placeholder="원하시는 디자인이나 상품에 대해 자세히 설명해주세요"
          />
          {errors.content && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-600"
            >
              {errors.content.message}
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              전송 중...
            </span>
          ) : (
            '문의 전송'
          )}
        </motion.button>

        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
            >
              문의가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
            >
              문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  )
}