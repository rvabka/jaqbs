import { NextRequest, NextResponse } from 'next/server';
import { sendCarrierEmail, verifyRecaptcha } from '@/lib/email';
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
    const { name, email, phone, company, fleet, message, recaptchaToken } =
      body;

    if (!name || !email || !phone || !company || !message) {
      return NextResponse.json(
        { error: 'Wszystkie wymagane pola muszą być wypełnione' },
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

    await sendCarrierEmail({ name, email, phone, company, fleet, message });

    return NextResponse.json(
      { message: 'Zgłoszenie zostało wysłane pomyślnie!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending carrier email:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania zgłoszenia' },
      { status: 500 }
    );
  }
}
