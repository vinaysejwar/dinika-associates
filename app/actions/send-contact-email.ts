'use server'

import { Resend } from 'resend';

// TEMPORARY - swap to Dinikaassociates@gmail.com once domain is verified
const CONTACT_EMAIL_TO = 'vinaysejwar9782@gmail.com';

export async function sendContactEmail(formData: FormData) {
  // --- Extract & sanitize fields ---
  const name = formData.get('name')?.toString().trim() ?? '';
  const email = formData.get('email')?.toString().trim() ?? '';
  const phone = formData.get('phone')?.toString().trim() ?? '';
  const message = formData.get('message')?.toString().trim() ?? '';

  // --- Server-side validation ---
  if (!name || !email || !phone || !message) {
    return { success: false, error: 'All fields are required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Invalid email address.' };
  }

  const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
  if (!phoneRegex.test(phone)) {
    return { success: false, error: 'Invalid phone number.' };
  }

  // --- Ensure API key exists before attempting to send ---
  if (!process.env.RESEND_API_KEY) {
    console.error(
      'RESEND_API_KEY is missing. Did you add it to .env.local and restart the dev server?'
    );
    return {
      success: false,
      error: 'Email service is not configured. Please contact us by phone.',
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Dinika Associates Website <onboarding@resend.dev>',
      to: CONTACT_EMAIL_TO,
      replyTo: email,
      subject: 'New Contact Form Submission - Dinika Associates Website',
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #B5502E; margin-top: 0; padding-bottom: 15px; border-bottom: 2px solid #f1f5f9; font-size: 24px;">New Inquiry Received</h2>
          <p style="color: #475569; font-size: 16px; line-height: 1.5;">You have received a new message from the Dinika Associates website contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 25px;">
            <tr>
              <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; width: 130px; color: #64748b; font-weight: 600; font-size: 15px;">Name</td>
              <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600; font-size: 15px;">Email</td>
              <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500; font-size: 15px;">
                <a href="mailto:${email}" style="color: #B5502E; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600; font-size: 15px;">Phone</td>
              <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500; font-size: 15px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600; font-size: 15px;">Date & Time</td>
              <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500; font-size: 15px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
            </tr>
            <tr>
              <td style="padding: 14px 0; color: #64748b; font-weight: 600; font-size: 15px; vertical-align: top;">Message</td>
              <td style="padding: 14px 0; color: #0f172a; font-weight: 500; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #94a3b8; text-align: center;">
            This inquiry was submitted through the Dinika Associates website contact form.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, error: 'Failed to send message. Please try again later.' };
    }

    console.log('Email sent successfully. Resend email ID:', data?.id);
    return { success: true };
  } catch (err) {
    console.error('Server Error (sendContactEmail):', err);
    return { success: false, error: 'An unexpected error occurred. Please try again later.' };
  }
}
