import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Kontakt - Jaqbs Transport i Spedycja',
  description:
    'Skontaktuj się z nami. Transport i spedycja w całej Europie. Telefon: +48 570 112 512, Email: office@jaqbs.eu. Siedziba w Lublinie.',
  keywords:
    'kontakt jaqbs, transport kontakt, spedycja lublin kontakt, firma transportowa kontakt, przewozy międzynarodowe kontakt',
  openGraph: {
    title: 'Kontakt - Jaqbs Transport i Spedycja',
    description:
      'Skontaktuj się z nami. Profesjonalny transport krajowy i międzynarodowy.',
    url: 'https://jaqbs.eu/kontakt',
    type: 'website'
  }
};

export default function ContactPage() {
  return <ContactPageClient />;
}
