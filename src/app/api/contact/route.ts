import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate input types and lengths
    if (typeof name !== 'string' || name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      )
    }

    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    if (typeof message !== 'string' || message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 2000 characters' },
        { status: 400 }
      )
    }

    // Sanitize inputs to prevent XSS
    const sanitizedName = name.replace(/[<>]/g, '').trim()
    const sanitizedEmail = email.trim().toLowerCase()
    const sanitizedMessage = message.replace(/[<>]/g, '').trim()

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || 'contact@danielmcgrath.dev',
      to: process.env.CONTACT_TO || 'danmcgrath1035@gmail.com',
      replyTo: sanitizedEmail, // Allow replying directly to the sender
      subject: `💼 New Portfolio Contact from ${sanitizedName}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%); color: white; border-radius: 12px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(90deg, #00d4ff 0%, #0066cc 100%); padding: 30px 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              🚀 New Contact Message
            </h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">
              From your galactic portfolio contact form
            </p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px 20px;">
            <div style="background: rgba(0, 212, 255, 0.1); border: 1px solid #00d4ff; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
              <div style="margin-bottom: 20px;">
                <h3 style="color: #00d4ff; margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Contact Details</h3>
                <p style="margin: 5px 0; font-size: 16px;"><strong>Name:</strong> ${sanitizedName}</p>
                <p style="margin: 5px 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${sanitizedEmail}" style="color: #00d4ff; text-decoration: none;">${sanitizedEmail}</a></p>
              </div>
              
              <div>
                <h3 style="color: #00d4ff; margin: 0 0 15px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
                <div style="background: rgba(255, 255, 255, 0.05); border-radius: 6px; padding: 20px; font-size: 16px; line-height: 1.6; border-left: 4px solid #00d4ff;">
                  ${sanitizedMessage.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            
            <!-- Quick Actions -->
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${sanitizedEmail}?subject=Re: Your portfolio inquiry" 
                 style="display: inline-block; background: linear-gradient(90deg, #00d4ff 0%, #0066cc 100%); color: white; text-decoration: none; padding: 15px 30px; border-radius: 25px; font-weight: 600; margin: 0 10px; box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);">
                📧 Reply to ${sanitizedName}
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: rgba(0, 0, 0, 0.3); padding: 20px; text-align: center; border-top: 1px solid rgba(0, 212, 255, 0.2);">
            <p style="margin: 0; font-size: 12px; color: rgba(255, 255, 255, 0.6);">
              📡 Sent from danielmcgrath.dev portfolio contact form
            </p>
            <p style="margin: 5px 0 0 0; font-size: 11px; color: rgba(255, 255, 255, 0.4);">
              ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
