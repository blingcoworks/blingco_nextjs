import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Initialize Resend conditionally to prevent build errors
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Validation schema (same as frontend)
const contactSchema = z.object({
  name: z.string().min(2),
  contact: z.string().min(5),
  links: z.array(
    z.object({
      url: z.string().url()
    })
  ).min(1),
  content: z.string().min(5)
})

export async function POST(request: NextRequest) {
  try {
    console.log('Contact API called')
    console.log('API Key exists:', !!process.env.RESEND_API_KEY)
    
    // Check if Resend is configured
    if (!resend || !process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      )
    }
    
    // Parse request body
    const body = await request.json()
    console.log('Request body parsed successfully')
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    console.log('Data validation passed')
    
    // Format SNS links for email
    const linksFormatted = validatedData.links
      .map((link, index) => `${index + 1}. ${link.url}`)
      .join('\n')
    
    // Create email HTML content
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px;">
        
        <h1 style="color: #000; font-size: 24px; font-weight: 600; margin: 0 0 30px 0;">
          새로운 문의
        </h1>
        
        <div style="margin: 25px 0;">
          <p style="color: #666; font-size: 14px; margin: 0 0 5px 0;">크리에이터</p>
          <p style="color: #000; font-size: 16px; font-weight: 500; margin: 0;">${validatedData.name}</p>
        </div>
        
        <div style="margin: 25px 0;">
          <p style="color: #666; font-size: 14px; margin: 0 0 10px 0;">SNS 링크</p>
          ${validatedData.links.map(link => 
            `<p style="margin: 8px 0;"><a href="${link.url}" style="color: #007AFF; text-decoration: none;">${link.url}</a></p>`
          ).join('')}
        </div>
        
        <div style="margin: 25px 0;">
          <p style="color: #666; font-size: 14px; margin: 0 0 10px 0;">문의 내용</p>
          <p style="color: #000; font-size: 16px; line-height: 1.5; margin: 0; white-space: pre-wrap;">${validatedData.content}</p>
        </div>

        <div style="margin: 25px 0;">
          <p style="color: #666; font-size: 14px; margin: 0 0 5px 0;">연락처</p>
          <p style="color: #000; font-size: 16px; font-weight: 500; margin: 0;">${validatedData.contact}</p>
        </div>
        
        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #999; font-size: 12px; margin: 0 0 5px 0;">
            이 이메일은 Blingco 웹사이트의 문의 폼을 통해 자동으로 발송되었습니다.
          </p>
          <p style="color: #999; font-size: 12px; margin: 0;">
            ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}
          </p>
        </div>
        
      </div>
    `
    
    // Create plain text version for better email client compatibility
    const emailText = `새로운 문의

크리에이터: ${validatedData.name}

SNS 링크:
${linksFormatted}

문의 내용:
${validatedData.content}

---
이 이메일은 Blingco 웹사이트의 문의 폼을 통해 자동으로 발송되었습니다.
발송 시간: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}
    `
    
    // Send email using Resend
    console.log('Attempting to send email via Resend')
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Using Resend's default domain
      to: 'contact@blingco.kr', // Must match the email registered with Resend
      subject: `[Blingco 문의] ${validatedData.name}님의 새로운 문의`,
      html: emailHtml,
      text: emailText
    })
    console.log('Resend response:', { data, error })
    
    if (error) {
      console.error('Resend error details:', {
        message: error.message,
        name: error.name,
        error: error
      })
      return NextResponse.json(
        { error: `Email service error: ${error.message}` },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        id: data?.id 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.issues },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}