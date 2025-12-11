'use client';

import { PageHero } from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/Card';

export default function CookiesPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="Polityka Cookies"
        description="Informacje o plikach cookies i technologiach śledzących"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Card hover={false}>
            <CardContent className="p-8 prose prose-lg max-w-none">
              <h2 className="my-5">1. Czym są pliki cookies?</h2>
              <p>
                Pliki cookies (ciasteczka) to małe pliki tekstowe, które są
                zapisywane na Twoim urządzeniu podczas odwiedzania naszej strony
                internetowej. Służą one do prawidłowego funkcjonowania strony,
                zapewnienia bezpieczeństwa oraz analizy ruchu.
              </p>

              <h2 className="my-5">2. Zarządzanie plikami cookies</h2>
              <p>
                Do zarządzania plikami cookie i podobnymi wykorzystywanymi
                technologiami nasza strona wykorzystuje pliki cookies oraz inne
                technologie śledzące w następujących celach:
              </p>
              <ul>
                <li>
                  <strong>Google reCAPTCHA</strong> - wykorzystujemy usługę
                  Google reCAPTCHA v3 w celu ochrony formularzy przed spamem i
                  nadużyciami. reCAPTCHA zbiera informacje sprzętowe i
                  programowe (takie jak dane urządzenia i aplikacji) oraz wysyła
                  je do Google w celu analizy. Dane te podlegają{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue-900 hover:underline"
                  >
                    Polityce prywatności Google
                  </a>{' '}
                  oraz{' '}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue-900 hover:underline"
                  >
                    Warunkom usługi Google
                  </a>
                  .
                </li>
              </ul>

              <h2 className="my-5">3. Podstawa prawna</h2>
              <p>
                Podstawą prawną przetwarzania danych osobowych w tym kontekście
                jest art. 6 ust. 1 lit. c RODO oraz art. 6 ust. 1 lit. f RODO.
                Naszym uzasadnionym interesem jest zarządzanie plikami cookie i
                podobnymi wykorzystywanymi technologiami oraz związanymi z nimi
                zgodami.
              </p>

              <h2 className="my-5">4. Dobrowolność podania danych</h2>
              <p>
                Podanie danych osobowych nie jest wymagane umownie ani konieczne
                do zawarcia umowy. Nie są Państwo zobowiązani do podania danych
                osobowych. Jeśli nie podadzą Państwo danych osobowych, nie
                będziemy mogli zarządzać Państwa zgodami.
              </p>

              <h2 className="my-5">5. Rodzaje wykorzystywanych cookies</h2>
              <ul>
                <li>
                  <strong>Cookies niezbędne</strong> - wymagane do prawidłowego
                  funkcjonowania strony internetowej, nie można ich wyłączyć.
                </li>
                <li>
                  <strong>Cookies funkcjonalne</strong> - umożliwiają
                  zapamiętanie wybranych przez Ciebie ustawień i personalizację
                  interfejsu.
                </li>
                <li>
                  <strong>Cookies bezpieczeństwa</strong> - wykorzystywane przez
                  Google reCAPTCHA do ochrony formularzy przed spamem i
                  nadużyciami.
                </li>
              </ul>

              <h2 className="my-5">6. Jak zarządzać cookies?</h2>
              <p>
                Możesz samodzielnie zarządzać plikami cookies poprzez ustawienia
                swojej przeglądarki internetowej. Możesz zablokować lub usunąć
                cookies, jednak może to wpłynąć na funkcjonalność strony.
              </p>
              <p>
                Instrukcje zarządzania cookies w popularnych przeglądarkach:
              </p>
              <ul>
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647?hl=pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue-900 hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/pl/kb/ciasteczka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue-900 hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue-900 hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue-900 hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <h2 className="my-5">7. Kontakt</h2>
              <p>
                W sprawach związanych z polityką cookies prosimy o kontakt:{' '}
                <a
                  href="mailto:office@jaqbs.eu"
                  className="text-brand-blue-900 hover:underline"
                >
                  office@jaqbs.eu
                </a>
              </p>

              <h2 className="my-5">8. Zmiany w polityce cookies</h2>
              <p>
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej
                polityce cookies. O wszelkich zmianach będziemy informować
                poprzez aktualizację treści na tej stronie.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
