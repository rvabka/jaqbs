'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  AlertTriangle,
  Home,
  RefreshCw,
  Mail,
  Phone,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-red-900/10 to-brand-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-blue-900/10 to-brand-red-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <AnimatedSection direction="fade" className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-full mb-8 shadow-lg">
            <AlertTriangle className="h-12 w-12 text-brand-red-900" />
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
              Coś poszło nie tak
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance leading-relaxed">
              Przepraszamy, wystąpił nieoczekiwany błąd. Nasz zespół został
              powiadomiony i pracuje nad rozwiązaniem problemu.
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.6}>
          <Card className="bg-gradient-to-br from-gray-50 to-white border-2 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="bg-white rounded-lg p-6 border-l-4 border-brand-red-900 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-brand-red-900" />
                  Szczegóły błędu
                </h3>
                <p className="text-sm text-gray-600 font-mono break-all">
                  {error.message || 'Nieznany błąd'}
                </p>
                {error.digest && (
                  <p className="text-xs text-gray-500 mt-2">
                    ID: {error.digest}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Button
                  onClick={reset}
                  className="w-full h-14 text-lg bg-gradient-to-r from-brand-red-900 to-brand-red-800 hover:from-brand-red-800 hover:to-brand-red-900 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Spróbuj ponownie
                </Button>
                <Link href="/" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full h-14 text-lg border-2 border-brand-blue-900 text-brand-blue-900 hover:bg-brand-blue-50 transition-all duration-300"
                  >
                    <Home className="w-5 h-5 mr-2" />
                    Wróć do strony głównej
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.8}>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover-lift border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue-50 to-brand-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-brand-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Zadzwoń do nas
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Dostępni 24/7 dla naszych klientów
                    </p>
                    <a
                      href="tel:+48570112512"
                      className="text-brand-blue-900 hover:text-brand-blue-800 font-semibold transition-colors"
                    >
                      +48 570 112 512
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-brand-red-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Napisz do nas
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Odpowiadamy w ciągu kilku godzin
                    </p>
                    <a
                      href="mailto:office@jaqbs.eu"
                      className="text-brand-red-900 hover:text-brand-red-800 font-semibold transition-colors"
                    >
                      office@jaqbs.eu
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          delay={1.0}
          className="text-center mt-12"
        >
          <Link
            href="/kontakt"
            className="inline-flex items-center text-brand-blue-900 hover:text-brand-blue-800 font-semibold transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Przejdź do strony kontakt
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
