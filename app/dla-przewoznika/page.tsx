import type { Metadata } from 'next';
import CarriersPageClient from './CarriersPageClient';

export const metadata: Metadata = {
  title: 'Dla przewoźnika - Współpraca | Jaqbs',
  description:
    'Zostań partnerem Jaqbs. Oferujemy stałe zlecenia transportowe, terminowe płatności i profesjonalną obsługę. Dołącz do naszej sieci przewoźników w całej Europie.',
  keywords:
    'współpraca przewoźnik, zlecenia transportowe, giełda transportowa, przewoźnik partner, praca dla przewoźników, współpraca spedycja',
  openGraph: {
    title: 'Dla przewoźnika - Współpraca | Jaqbs',
    description:
      'Zostań partnerem Jaqbs. Stałe zlecenia transportowe i terminowe płatności.',
    url: 'https://jaqbs.eu/dla-przewoznika',
    type: 'website'
  }
};

export default function CarriersPage() {
  return <CarriersPageClient />;
}
