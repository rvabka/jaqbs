import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, verifyRecaptcha } from '@/lib/email';
import { rateLimit } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  try {
    if (!rateLimit(req)) {
      return NextResponse.json(
        { error: 'Zbyt wiele żądań. Spróbuj ponownie później.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message, recaptchaToken } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Wszystkie pola są wymagane' },
        { status: 400 }
      );
    }

    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: 'Weryfikacja reCAPTCHA nie powiodła się' },
        { status: 400 }
      );
    }
    
    await sendContactEmail({ name, email, subject, message });

    return NextResponse.json(
      { message: 'Wiadomość została wysłana pomyślnie!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania wiadomości' },
      { status: 500 }
    );
  }
}
