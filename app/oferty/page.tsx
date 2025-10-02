import Link from 'next/link';

export default function Oferty() {
  const services = [
    {
      title: 'Strony internetowe',
      description:
        'Projektujemy i tworzymy responsywne strony internetowe, które wyglądają świetnie na każdym urządzeniu i przyciągają uwagę odbiorców.',
      features: [
        'Responsywny design',
        'Optymalizacja pod kątem SEO',
        'Szybkie ładowanie',
        'Intuicyjna nawigacja',
        'Formularze kontaktowe',
        'Integracja z mediami społecznościowymi'
      ]
    },
    {
      title: 'Sklepy internetowe',
      description:
        'Budujemy funkcjonalne i atrakcyjne sklepy internetowe, które zwiększą Twoją sprzedaż i zapewnią klientom doskonałe doświadczenia zakupowe.',
      features: [
        'Intuicyjny panel administracyjny',
        'Różne metody płatności',
        'Systemy rabatowe i promocje',
        'Integracja z systemami kurierskimi',
        'Zarządzanie stanami magazynowymi',
        'Optymalizacja procesu zakupowego'
      ]
    },
    {
      title: 'Aplikacje webowe',
      description:
        'Tworzymy zaawansowane aplikacje webowe, które automatyzują procesy biznesowe i zwiększają efektywność Twojej firmy.',
      features: [
        'Dedykowane rozwiązania dla biznesu',
        'Integracja z zewnętrznymi systemami',
        'Automatyzacja procesów',
        'Analiza danych',
        'Panele administracyjne',
        'Bezpieczeństwo danych'
      ]
    },
    {
      title: 'Pozycjonowanie (SEO)',
      description:
        'Oferujemy kompleksowe usługi pozycjonowania, które pomogą Twojej stronie osiągnąć wysokie pozycje w wynikach wyszukiwania.',
      features: [
        'Audyt SEO',
        'Optymalizacja treści',
        'Budowa linków',
        'Analiza konkurencji',
        'Monitoring wyników',
        'Raporty i statystyki'
      ]
    },
    {
      title: 'Marketing internetowy',
      description:
        'Pomagamy Ci skutecznie promować produkty i usługi w internecie, aby dotrzeć do większej liczby potencjalnych klientów.',
      features: [
        'Kampanie reklamowe Google Ads',
        'Marketing w mediach społecznościowych',
        'Content marketing',
        'E-mail marketing',
        'Analityka internetowa',
        'Strategie marketingowe'
      ]
    },
    {
      title: 'Hosting i utrzymanie',
      description:
        'Zapewniamy niezawodny hosting oraz kompleksowe usługi utrzymania i rozwoju Twojej strony internetowej.',
      features: [
        'Szybkie i bezpieczne serwery',
        'Regularne kopie zapasowe',
        'Monitoring dostępności',
        'Aktualizacje systemu',
        'Wsparcie techniczne',
        'Szybka reakcja na problemy'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Nasze Usługi
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <h4 className="font-medium text-lg mb-3">Co oferujemy:</h4>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/wycena"
                className="block text-center py-2 px-4 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
              >
                Wycena projektu
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Nie znalazłeś tego, czego szukasz?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Skontaktuj się z nami, aby omówić swoje indywidualne potrzeby.
          Dostosujemy nasze usługi do Twoich wymagań.
        </p>
        <Link
          href="/kontakt"
          className="py-3 px-8 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
}
