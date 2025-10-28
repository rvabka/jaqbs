import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Home, Search, Mail, Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-red-900/10 to-brand-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-blue-900/10 to-brand-red-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-full mb-8 shadow-lg">
            <span className="text-6xl font-bold text-brand-red-900">404</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            Strona nie znaleziona
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance leading-relaxed">
            Przepraszamy, ale strona której szukasz nie istnieje lub została
            przeniesiona.
          </p>
        </div>

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
                    Pomożemy Ci znaleźć to czego szukasz
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
                    Chętnie odpowiemy na wszystkie pytania
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

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center text-brand-blue-900 hover:text-brand-blue-800 font-semibold transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Wróć do strony głównej
          </Link>
        </div>
      </div>
    </div>
  );
}
