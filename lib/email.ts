import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface CarrierFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  fleet?: string;
  message: string;
}

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  company: string;
  nip: string;
  phone: string;
  email: string;
  additionalInfo: string;
}

export interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  region: string;
  message: string;
  cvFileName: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_CONTACT!, // ← Zmiana
      subject: `Nowa wiadomość z formularza kontaktowego - ${data.subject || 'Brak tematu'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #F92929 0%, #084C89 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #000; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #F92929; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">📧 Nowa wiadomość z formularza kontaktowego</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Imię i nazwisko:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              ${
                data.subject
                  ? `
              <div class="field">
                <div class="label">Temat:</div>
                <div class="value">${data.subject}</div>
              </div>
              `
                  : ''
              }
              <div class="field">
                <div class="label">Wiadomość:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Wiadomość wysłana z formularza na stronie jaqbs.eu</p>
              <p>Data: ${new Date().toLocaleString('pl-PL')}</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw new Error('Failed to send contact email');
  }
}

export async function sendCarrierEmail(data: CarrierFormData) {
  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_SHIPPING!, // ← Zmiana (spedycja/przewoźnicy)
      subject: `Zgłoszenie przewoźnika - ${data.company}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #F92929 0%, #084C89 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #000; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #F92929; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">🚚 Nowe zgłoszenie przewoźnika</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Imię i nazwisko:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Firma:</div>
                <div class="value">${data.company}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              <div class="field">
                <div class="label">Telefon:</div>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              ${
                data.fleet
                  ? `
              <div class="field">
                <div class="label">Flota:</div>
                <div class="value">${data.fleet}</div>
              </div>
              `
                  : ''
              }
              <div class="field">
                <div class="label">Dodatkowe informacje:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Zgłoszenie z formularza "Dla przewoźnika" - jaqbs.eu</p>
              <p>Data: ${new Date().toLocaleString('pl-PL')}</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending carrier email:', error);
    throw new Error('Failed to send carrier email');
  }
}

export async function sendQuoteEmail(data: QuoteFormData) {
  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_OFFER!, // ← Zmiana (oferty/wyceny)
      subject: `Zapytanie o wycenę - ${data.company}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #F92929 0%, #084C89 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #000; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #F92929; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">💼 Nowe zapytanie o wycenę</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Imię i nazwisko:</div>
                <div class="value">${data.firstName} ${data.lastName}</div>
              </div>
              <div class="field">
                <div class="label">Firma:</div>
                <div class="value">${data.company}</div>
              </div>
              <div class="field">
                <div class="label">NIP:</div>
                <div class="value">${data.nip}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              <div class="field">
                <div class="label">Telefon:</div>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              <div class="field">
                <div class="label">Szczegóły zapytania:</div>
                <div class="value">${data.additionalInfo.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Zapytanie z formularza "Wycena" - jaqbs.eu</p>
              <p>Data: ${new Date().toLocaleString('pl-PL')}</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending quote email:', error);
    throw new Error('Failed to send quote email');
  }
}

export async function sendCareerEmail(data: CareerFormData, cvBuffer?: Buffer) {
  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_RECRUITMENT!, // ← Zmiana (rekrutacja)
      subject: `Aplikacja na stanowisko: ${data.position}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #F92929 0%, #084C89 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #000; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #F92929; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">👔 Nowa aplikacja</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Imię i nazwisko:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Stanowisko:</div>
                <div class="value"><strong>${data.position}</strong></div>
              </div>
              <div class="field">
                <div class="label">Województwo:</div>
                <div class="value">${data.region}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              <div class="field">
                <div class="label">Telefon:</div>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              ${
                data.message
                  ? `
              <div class="field">
                <div class="label">List motywacyjny:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
              `
                  : ''
              }
              ${
                data.cvFileName
                  ? `
              <div class="field">
                <div class="label">CV:</div>
                <div class="value">📎 ${data.cvFileName}</div>
              </div>
              `
                  : ''
              }
            </div>
            <div class="footer">
              <p>Aplikacja z formularza "Kariera" - jaqbs.eu</p>
              <p>Data: ${new Date().toLocaleString('pl-PL')}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: cvBuffer
        ? [
            {
              filename: data.cvFileName || 'CV.pdf',
              content: cvBuffer
            }
          ]
        : []
    });

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending career email:', error);
    throw new Error('Failed to send career email');
  }
}

export async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
      }
    );

    const data = await response.json();
    return data.success && data.score > 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return false;
  }
}
