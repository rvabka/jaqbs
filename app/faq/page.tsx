'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { PageHero } from '@/components/PageHero';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Czym zajmuje się firma JAQBS?',
      answer:
        'Firma JAQBS świadczy usługi w zakresie transportu drogowego i spedycji - zarówno krajowej, jak i międzynarodowej. Obsługuje przewozy drobnicowe oraz całopojazdowe na terenie całej Unii Europejskiej. Dodatkowo oferuje wsparcie logistyczne, ubezpieczenia dla branży transportowej oraz współpracę partnerską z przewoźnikami.'
    },
    {
      question: 'Co wyróżnia JAQBS w branży TSL?',
      answer:
        'JAQBS stawia na partnerskie relacje, oparte na zaufaniu i długofalowej współpracy. Nasz zespół to młodzi, dynamiczni spedytorzy łączący doświadczenie z nowoczesnymi narzędziami. Wyróżnia nas profesjonalizm, dbałość o bezpieczeństwo, terminowość oraz wysoka jakość obsługi. Oferujemy też szeroki zakres usług - transport, spedycję i ubezpieczenia - wszystko w jednym miejscu.'
    },
    {
      question: 'Czy możliwa jest praca hybrydowa?',
      answer:
        'Tak, w JAQBS istnieje możliwość pracy hybrydowej na wybranych stanowiskach. Model ten zależy od specyfiki danej roli oraz bieżących potrzeb zespołu.'
    },
    {
      question: 'Czy w JAQBS można pracować zdalnie?',
      answer:
        'Tak, oferujemy również możliwość pracy zdalnej na wybranych stanowiskach, m.in. na stanowisku spedytora. Dzięki nowoczesnym narzędziom komunikacyjnym i systemowym praca na odległość jest w pełni efektywna i komfortowa.'
    },
    {
      question: 'Jakie rodzaje ładunków obsługuje Wasza firma?',
      answer:
        'Realizujemy transport różnego typu ładunków, zarówno częściowych, jak i całopojazdowych. Obsługujemy m.in. towary przemysłowe, materiały budowlane, artykuły spożywcze, komponenty produkcyjne oraz przesyłki ekspresowe. Dysponujemy autami LTL i FTL.'
    },
    {
      question:
        'Na jakim obszarze realizujecie transporty? Czy działacie w całej UE?',
      answer:
        'Tak, działamy na terenie całej Unii Europejskiej. Regularnie obsługujemy trasy międzynarodowe obejmujące wszystkie główne kierunki UE.'
    },
    {
      question:
        'Jakie dokumenty są potrzebne do rozpoczęcia współpracy z firmą spedycyjną?',
      answer:
        'Zazwyczaj wymagamy podstawowych dokumentów firmy transportowej: wpis do CEIDG/KRS, licencję transportową (jeśli dotyczy), polisę OCP oraz dane pojazdów. W razie potrzeby pomagamy skompletować dokumenty.'
    },
    {
      question: 'Czy zapewniacie stałe zlecenia dla przewoźników?',
      answer:
        'Tak, oferujemy regularne i stabilne zlecenia na trasach europejskich. Wielu przewoźników współpracuje z nami długoterminowo.'
    },
    {
      question: 'Jak wygląda proces przydzielenia dedykowanego spedytora?',
      answer:
        'Po rozpoczęciu współpracy każdy przewoźnik otrzymuje własnego spedytora, który prowadzi pojazd, koordynuje zlecenia i jest dostępny w razie potrzeby.'
    },
    {
      question: 'Jakie pojazdy mogą z Wami współpracować?',
      answer:
        'Zapraszamy do współpracy właścicieli aut do 3,5 t DMC, plandek 8–12 EPAL, zestawów 24 t oraz zestawów FTL. Jesteśmy otwarci również na inne konfiguracje pojazdów.'
    },
    {
      question: 'Czy oferujecie gwarancję terminowych płatności?',
      answer:
        'Tak, gwarantujemy terminowe rozliczenia. Posiadamy ubezpieczenie płatności, które chroni przewoźników i zapewnia pełną przejrzystość.'
    },
    {
      question: 'Jakie są zasady rozliczeń i terminy płatności?',
      answer: 'Terminy płatności ustalamy indywidualnie.'
    },
    {
      question: 'Jak szybko można nawiązać współpracę?',
      answer:
        'Proces jest prosty i szybki. Po dostarczeniu dokumentów współpracę można rozpocząć nawet tego samego dnia.'
    },
    {
      question: 'W jaki sposób odbywa się kontakt z Waszym spedytorem?',
      answer:
        'Kontakt jest bezpośredni – telefoniczny, mailowy lub poprzez komunikatory. Spedytor jest dostępny i reaguje na bieżąco na potrzeby przewoźnika.'
    },
    {
      question: 'Czy oferujecie wsparcie w sytuacjach awaryjnych na trasie?',
      answer:
        'Oczywiście. W razie problemów pomagamy w znalezieniu serwisu, organizacji przeładunku czy kontakcie z klientem.'
    },
    {
      question:
        'Jak długo trwa przydzielenie pierwszego zlecenia transportowego?',
      answer:
        'Pierwsze zlecenie można otrzymać już po podpisaniu umowy i zaakceptowaniu warunków współpracy.'
    },
    {
      question: 'Czy współpraca wymaga podpisania umowy?',
      answer:
        'Tak, podpisanie umowy jest konieczne. Zapewnia to przejrzyste zasady i bezpieczeństwo obu stron.'
    },
    {
      question: 'Czy obsługujecie transporty ekspresowe lub pilne?',
      answer:
        'Tak, specjalizujemy się również w szybkich i pilnych zleceniach, szczególnie na terenie UE.'
    },
    {
      question:
        'Jak wygląda procedura reklamacyjna w przypadku szkody lub opóźnienia?',
      answer:
        'W przypadku szkody prosimy o niezwłoczne zgłoszenie sytuacji wraz z dokumentacją. Pomagamy w przeprowadzeniu całego procesu i kontakcie z ubezpieczycielem.'
    },
    {
      question: 'Czy mogę liczyć na zlecenia powrotne?',
      answer:
        'Tak, staramy się planować trasy tak, aby zapewnić przewoźnikom zlecenia w obu kierunkach.'
    },
    {
      question:
        'Jakie są najczęstsze wymagania dotyczące wyposażenia pojazdów?',
      answer:
        'Do standardowego wyposażenia należą m.in. pasy, belki, maty antypoślizgowe, nawigacja oraz telefon. Szczegóły zależą od rodzaju zlecenia.'
    }
  ];

  return (
    <>
      <PageHero
        title="FAQ"
        description="Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług transportowych."
      />
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
              Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące
              naszych usług transportowych
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
                  Nasz zespół jest dostępny 24 godziny na dobę, 7 dni w
                  tygodniu, aby odpowiedzieć na wszystkie Twoje pytania
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
    </>
  );
}
