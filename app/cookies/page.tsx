import type { Metadata } from 'next';
import CookiesPageClient from './CookiesPageClient';

export const metadata: Metadata = {
  title: 'Polityka Cookies - Jaqbs',
  description:
    'Informacje o wykorzystywaniu plików cookies na stronie jaqbs.eu. Dowiedz się jak zarządzać cookies i chronić swoją prywatność.',
  keywords:
    'polityka cookies, pliki cookies, zarządzanie cookies, prywatność online',
  openGraph: {
    title: 'Polityka Cookies - Jaqbs',
    description: 'Informacje o wykorzystywaniu plików cookies.',
    url: 'https://jaqbs.eu/cookies',
    type: 'website'
  },
  robots: {
    index: false,
    follow: false
  }
};

export default function CookiesPage() {
  return <CookiesPageClient />;
}
