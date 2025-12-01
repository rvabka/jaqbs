import { NextRequest, NextResponse } from 'next/server';
import { sendCareerEmail, verifyRecaptcha } from '@/lib/email';
import { rateLimit } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  try {
    if (!rateLimit(req)) {
      return NextResponse.json(
        { error: 'Zbyt wiele żądań. Spróbuj ponownie później.' },
        { status: 429 }
      );
    }

    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const region = formData.get('region') as string;
    const message = formData.get('message') as string;
    const recaptchaToken = formData.get('recaptchaToken') as string;
    const cvFile = formData.get('cv') as File;

    if (!name || !email || !phone || !position || !region || !cvFile) {
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

    const bytes = await cvFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    await sendCareerEmail(
      {
        name,
        email,
        phone,
        position,
        region,
        message,
        cvFileName: cvFile.name
      },
      buffer
    );

    return NextResponse.json(
      { message: 'Aplikacja została wysłana pomyślnie!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending career application:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania aplikacji' },
      { status: 500 }
    );
  }
}
