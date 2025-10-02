export default function Wspolpraca() {
  const partnerTypes = [
    {
      title: 'Agencje interaktywne i marketingowe',
      description:
        'Współpracujemy z agencjami interaktywnymi i marketingowymi, oferując wsparcie w realizacji projektów cyfrowych. Dzięki naszej wiedzy technicznej i doświadczeniu, możemy pomóc Twojej agencji w dostarczaniu klientom kompleksowych rozwiązań internetowych.',
      benefits: [
        'Poszerzenie oferty usług dla klientów',
        'Wsparcie techniczne przy złożonych projektach',
        'Elastyczne modele współpracy dostosowane do potrzeb',
        'Transparentna komunikacja i terminowa realizacja'
      ]
    },
    {
      title: 'Freelancerzy i specjaliści IT',
      description:
        'Zapraszamy do współpracy freelancerów i specjalistów IT, którzy chcą rozwijać swoje umiejętności przy ciekawych projektach. Oferujemy atrakcyjne warunki współpracy i możliwość pracy przy różnorodnych projektach dla klientów z różnych branż.',
      benefits: [
        'Regularne zlecenia i stabilna współpraca',
        'Uczciwe wynagrodzenie adekwatne do umiejętności',
        'Możliwość pracy zdalnej i elastyczne godziny',
        'Rozwój zawodowy i dostęp do nowych technologii'
      ]
    },
    {
      title: 'Programy partnerskie i afiliacyjne',
      description:
        'Uruchomiliśmy program partnerski dla firm i osób, które chcą polecać nasze usługi swoim klientom lub w swojej sieci kontaktów. Za każde skuteczne polecenie otrzymasz atrakcyjną prowizję od wartości zrealizowanego projektu.',
      benefits: [
        'Atrakcyjne prowizje za skuteczne polecenia',
        'Pełne wsparcie marketingowe i materiały promocyjne',
        'Przejrzysty system śledzenia poleceń',
        'Regularne i terminowe wypłaty prowizji'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Współpraca
      </h1>

      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Możliwości współpracy</h2>

          <p className="text-gray-700 mb-6">
            W JAQBS wierzymy w siłę partnerstwa i współpracy. Niezależnie od
            tego, czy jesteś agencją szukającą wsparcia technicznego,
            freelancerem poszukującym projektów, czy firmą zainteresowaną
            programem partnerskim - mamy dla Ciebie odpowiednią propozycję
            współpracy.
          </p>

          <p className="text-gray-700">
            Stawiamy na długoterminowe relacje oparte na zaufaniu, uczciwości i
            obopólnych korzyściach. Sprawdź poniższe możliwości współpracy i
            wybierz tę, która najlepiej odpowiada Twoim potrzebom i
            oczekiwaniom.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {partnerTypes.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-4">{partner.title}</h3>
              <p className="text-gray-700 mb-6">{partner.description}</p>

              <h4 className="font-medium text-lg mb-3">Korzyści:</h4>
              <ul className="space-y-2 mb-6">
                {partner.benefits.map((benefit, i) => (
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
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-gray-50">
              <button className="w-full py-2 px-4 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                Dowiedz się więcej
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Skontaktuj się z nami</h2>

            <p className="text-gray-700 mb-6">
              Jeśli jesteś zainteresowany współpracą z JAQBS, wypełnij formularz
              poniżej lub skontaktuj się z nami bezpośrednio. Nasz zespół
              odpowie na wszystkie Twoje pytania i przedstawi szczegółowe
              warunki współpracy dopasowane do Twoich potrzeb.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nazwa firmy (opcjonalnie)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="partnerType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Rodzaj współpracy *
                </label>
                <select
                  id="partnerType"
                  name="partnerType"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="" disabled selected>
                    Wybierz rodzaj współpracy
                  </option>
                  <option value="agency">
                    Agencja interaktywna / marketingowa
                  </option>
                  <option value="freelancer">
                    Freelancer / Specjalista IT
                  </option>
                  <option value="affiliate">
                    Program partnerski / afiliacyjny
                  </option>
                  <option value="other">Inny</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Opisz jakiego rodzaju współpracą jesteś zainteresowany, jakie masz doświadczenie, pytania itp."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Wyślij zapytanie
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
