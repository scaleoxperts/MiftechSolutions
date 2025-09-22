import { NextRequest, NextResponse } from 'next/server'
import * as Brevo from '@getbrevo/brevo'

function getBrevoClient() {
    const apiKey: string = process.env.BREVO_API_KEY || ""
    if (!apiKey) {
        throw new Error('BREVO_API_KEY is required')
    }
    const client = new Brevo.TransactionalEmailsApi()
    client.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey)
    return client
}

export async function POST(request: NextRequest) {
    try {
        const { recipientName, recipientEmail } = await request.json()

        if (!recipientName || !recipientEmail) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const client = getBrevoClient()
        const subject = `Thank You ${recipientName} for connecting with us`

        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Thank You</title>
        </head>
        <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f4f9ff;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td align="center" style="padding: 30px 15px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td align="center" style="background: #087dc0; padding: 25px;">
                      <h1 style="margin:0; font-size: 24px; color: #ffffff; font-weight: bold;">Miftech Solutions</h1>
                    </td>
                  </tr>
                  
                  <!-- Body -->
                  <tr>
                    <td style="padding: 30px; color: #333333; line-height: 1.6;">
                      <h2 style="margin-top:0; color: #087dc0;">Thank You, ${recipientName}!</h2>
                      <p style="font-size: 16px; margin: 15px 0;">
                        We’ve received your inquiry and our team will reach out to you soon.
                      </p>
                      <p style="font-size: 16px; margin: 15px 0;">
                        In the meantime, feel free to explore our solutions and services.
                      </p>
                      <p style="font-size: 15px; margin: 25px 0 0 0; color: #555;">
                        Best regards,<br>
                        <strong>Miftech Solutions Team</strong>
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Button -->
                  <tr>
                    <td align="center" style="padding: 20px;">
                      <a href="https://miftechsolution.com/" target="_blank" style="display:inline-block; padding: 12px 24px; background: #087dc0; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: bold;">
                        Visit Our Website
                      </a>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td align="center" style="background: #f1f1f1; padding: 15px; font-size: 12px; color: #777;">
                      © ${new Date().getFullYear()} Miftech Solutions. All rights reserved.
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
        `
        

        const textContent = `Thank You ${recipientName}! We have received your inquiry and will get back to you soon. Best regards, Miftech Solutions Team`

        const payload: Brevo.SendSmtpEmail = {
            subject,
            sender: { email: "miftech.info@gmail.com", name: "Miftech Solutions" },
            to: [{ email: recipientEmail, name: recipientName }],
            htmlContent,
            textContent
        }

        await client.sendTransacEmail(payload)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Send email error:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to send email' },
            { status: 500 }
        )
    }
}   