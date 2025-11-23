'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Jakie są koszty transportu?',
      answer:
        'Koszty transportu zależą od wielu czynników, takich jak odległość, waga przesyłki, rodzaj towaru i termin dostawy. Skontaktuj się z nami, aby otrzymać bezpłatną wycenę dostosowaną do Twoich potrzeb.'
    },
    {
      question: 'Jak długo trwa dostawa?',
      answer:
        'Czas dostawy zależy od trasy i rodzaju usługi. Standardowe dostawy krajowe realizujemy w ciągu 24-48 godzin, natomiast dostawy międzynarodowe mogą trwać od 2 do 7 dni roboczych. Oferujemy również usługi ekspresowe.'
    },
    {
      question: 'Czy mogę śledzić moją przesyłkę?',
      answer:
        'Tak! Wszystkie nasze przesyłki są wyposażone w system GPS, który umożliwia śledzenie w czasie rzeczywistym. Po nadaniu przesyłki otrzymasz link do śledzenia, gdzie możesz sprawdzić aktualną lokalizację i status dostawy.'
    },
    {
      question: 'Jakie dokumenty są potrzebne do wysyłki międzynarodowej?',
      answer:
        'Do wysyłki międzynarodowej potrzebne są: faktura handlowa, list przewozowy CMR, ewentualnie certyfikaty pochodzenia i dokumenty celne. Nasz zespół pomoże Ci przygotować wszystkie niezbędne dokumenty.'
    },
    {
      question: 'Czy oferujecie ubezpieczenie przesyłek?',
      answer:
        'Tak, wszystkie nasze przesyłki są objęte podstawowym ubezpieczeniem. Oferujemy również dodatkowe ubezpieczenie cargo dla przesyłek o wysokiej wartości. Szczegóły dostępne są w naszym biurze.'
    },
    {
      question: 'Jakie są wymiary i waga maksymalna przesyłki?',
      answer:
        'Nasza flota składa się głównie z pojazdów o DMC do 3.5T z pojemnością 8-10 palet EPAL. Dla większych przesyłek możemy zorganizować transport dedykowany. Skontaktuj się z nami, aby omówić szczegóły.'
    },
    {
      question: 'Czy realizujecie dostawy w weekendy?',
      answer:
        'Tak, oferujemy usługi transportowe 24/7, w tym dostawy w weekendy i święta. Dostępność zależy od trasy i rodzaju usługi. Skontaktuj się z nami, aby ustalić szczegóły.'
    },
    {
      question: 'Jak mogę złożyć reklamację?',
      answer:
        'W przypadku problemów z przesyłką, skontaktuj się z naszym działem reklamacji pod numerem telefonu lub e-mailem. Każda reklamacja jest rozpatrywana indywidualnie w ciągu 14 dni roboczych.'
    }
  ];

  return (
    <section className="py-12 g-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-blue-700/5 to-brand-red-700/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-red-700/5 to-brand-blue-700/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-blue-50 rounded-full px-4 py-2 text-sm font-medium text-red-800 mb-6">
            <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></div>
            <span>Często zadawane pytania</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Masz <span className="gradient-text">pytania?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych
            usług transportowych
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`group hover-lift border-2 transition-all duration-300 animate-fade-in-up ${
                openIndex === index
                  ? 'border-brand-red-700 shadow-lg shadow-brand-red-700/10'
                  : 'border-gray-100 hover:border-brand-blue-700/30'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-0">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left p-6 flex items-center justify-between"
                >
                  <span
                    className={`font-bold text-lg transition-colors ${
                      openIndex === index
                        ? 'text-brand-red-700'
                        : 'text-gray-900 group-hover:text-brand-blue-700'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 transition-all duration-300 flex-shrink-0 ml-4 ${
                      openIndex === index
                        ? 'rotate-180 text-brand-red-700'
                        : 'text-gray-400 group-hover:text-brand-blue-700'
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className="mt-16 text-center animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <Card
            hover={false}
            className="bg-brand-blue-700 border-0 text-white"
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3">
                Nie znalazłeś odpowiedzi?
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Nasz zespół jest dostępny 24 godziny na dobę, 7 dni w tygodniu,
                aby odpowiedzieć na wszystkie Twoje pytania
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+48570112512"
                  className="px-8 py-3 bg-white text-brand-red-700 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-block"
                >
                  Zadzwoń: +48 570 112 512
                </a>
                <a
                  href="mailto:biuro@jaqbs.eu"
                  className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-brand-red-700 transition-all duration-300 hover:scale-105 inline-block"
                >
                  Napisz: biuro@jaqbs.eu
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
