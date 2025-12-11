import type { Metadata } from 'next';
import WspolpracaPageClient from './WspolpracaPageClient';

export const metadata: Metadata = {
  title: 'Wycena transportu - Zapytaj o cenę | Jaqbs',
  description:
    'Otrzymaj darmową wycenę transportu. Wypełnij formularz i otrzymaj spersonalizowaną ofertę dostosowaną do Twoich potrzeb. Szybka i bezpłatna wycena.',
  keywords:
    'wycena transportu, koszt transportu, cennik transport, oferta transportowa, kalkulator transportowy, wycena spedycji',
  openGraph: {
    title: 'Wycena transportu - Zapytaj o cenę | Jaqbs',
    description:
      'Otrzymaj darmową wycenę transportu. Szybka i bezpłatna oferta.',
    url: 'https://jaqbs.eu/wycena',
    type: 'website'
  }
};

export default function WspolpracaPage() {
  return <WspolpracaPageClient />;
}
