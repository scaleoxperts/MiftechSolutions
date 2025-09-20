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
            <body>
                <h1>Thank You ${recipientName}!</h1>
                <p>We have received your inquiry and will get back to you soon.</p>
                <p>Best regards,<br>Miftech Solutions Team</p>
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