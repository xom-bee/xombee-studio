import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
  }

  const resend = new Resend(apiKey)
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Xom Bee Studio <onboarding@resend.dev>',
    to: 'sangayyoesel@gmail.com',
    replyTo: email,
    subject: `New message from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
        <h2 style="margin-bottom: 4px;">New Contact from Portfolio</h2>
        <p style="color: #666; margin-top: 0; margin-bottom: 24px; font-size: 13px;">Sent via xombee.studio contact form</p>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888; width: 80px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #888;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">
              <a href="mailto:${email}" style="color: #c8860a; text-decoration: none;">${email}</a>
            </td>
          </tr>
        </table>

        <div style="background: #f9f9f9; border-radius: 8px; padding: 16px 20px; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</div>

        <p style="margin-top: 24px; font-size: 12px; color: #aaa;">
          Reply directly to this email to respond to ${name}.
        </p>
      </div>
    `,
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
