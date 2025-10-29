import { NextRequest, NextResponse } from 'next/server';
import { sendQuoteEmail, verifyRecaptcha } from '@/lib/email';
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
    const {
      firstName,
      lastName,
      company,
      nip,
      phone,
      email,
      additionalInfo,
      recaptchaToken
    } = body;

    if (!firstName || !lastName || !company || !nip || !phone || !email) {
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

    await sendQuoteEmail({
      firstName,
      lastName,
      company,
      nip,
      phone,
      email,
      additionalInfo
    });

    return NextResponse.json(
      { message: 'Zapytanie zostało wysłane pomyślnie!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending quote email:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania zapytania' },
      { status: 500 }
    );
  }
}
