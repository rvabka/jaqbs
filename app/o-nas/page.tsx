import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'O nas - Jaqbs Transport i Spedycja',
  description:
    'Poznaj historię Jaqbs - lidera w branży transportowej od 2010 roku. Profesjonalny transport krajowy i międzynarodowy w całej Europie. Partnerstwo oparte na zaufaniu.',
  keywords:
    'o firmie jaqbs, historia jaqbs, transport międzynarodowy, spedycja polska, firma transportowa lublin, przewozy krajowe',
  openGraph: {
    title: 'O nas - Jaqbs Transport i Spedycja',
    description:
      'Profesjonalny transport krajowy i międzynarodowy od 2010 roku.',
    url: 'https://jaqbs.eu/o-nas',
    type: 'website'
  }
};

export default function AboutPage() {
  return <AboutPageClient />;
}
