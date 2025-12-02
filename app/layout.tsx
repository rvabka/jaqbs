import Navigation from '@/components/Navigation';
import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

const inter = localFont({
  src: './fonts/Inter-VariableFont_opsz,wght.ttf',
  variable: '--font-inter',
  weight: '100 900',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Transport i spedycja - Jaqbs',
  description:
    'Profesjonalne usługi transportowe i logistyczne w całej Europie. Niezawodne, efektywne i opłacalne rozwiązania dla Twoich potrzeb biznesowych.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={inter.variable}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navigation />
        <CookieBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
