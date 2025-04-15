import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email content for admin notification
    const adminMailOptions = {
      from: `"Brevity Website" <${process.env.SMTP_USER}>`,
      to: "newsletter@brevity.tech", // Replace with your email
      subject: `New Newsletter Subscription`,
      text: `New subscriber: ${email}`,
      html: `<p>New subscriber: <strong>${email}</strong></p>`,
    }

    // Email content for subscriber confirmation
    const subscriberMailOptions = {
      from: `"Brevity Technologies" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Welcome to Brevity Technologies Newsletter`,
      text: `
        Thank you for subscribing to the Brevity Technologies newsletter!
        
        You'll now receive our latest tech insights, company updates, and industry news directly to your inbox.
        
        If you didn't subscribe to our newsletter, please ignore this email.
        
        Best regards,
        The Brevity Technologies Team
      `,
      html: `
        <h2>Thank you for subscribing to the Brevity Technologies newsletter!</h2>
        <p>You'll now receive our latest tech insights, company updates, and industry news directly to your inbox.</p>
        <p>If you didn't subscribe to our newsletter, please ignore this email.</p>
        <p>Best regards,<br>The Brevity Technologies Team</p>
      `,
    }

    // Send emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(subscriberMailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing subscription:", error)
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 })
  }
}
