import Navigation from '@/components/Navigation';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
