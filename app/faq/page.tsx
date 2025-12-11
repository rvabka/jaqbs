import type { Metadata } from 'next';
import FaqPageClient from './FaqPageClient';

export const metadata: Metadata = {
  title: 'FAQ - Najczęściej zadawane pytania | Jaqbs',
  description:
    'Odpowiedzi na najczęściej zadawane pytania dotyczące transportu, spedycji, współpracy i usług firmy Jaqbs. Dowiedz się więcej o naszej ofercie.',
  keywords:
    'faq jaqbs, pytania transport, pytania spedycja, jak działa transport, informacje transportowe, pytania o przewozy',
  openGraph: {
    title: 'FAQ - Najczęściej zadawane pytania | Jaqbs',
    description: 'Znajdź odpowiedzi na pytania o transport i spedycję.',
    url: 'https://jaqbs.eu/faq',
    type: 'website'
  }
};

export default function Faq() {
  return <FaqPageClient />;
}
