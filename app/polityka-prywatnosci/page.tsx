'use client';

import { PageHero } from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/Card';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="Polityka Prywatności"
        description="Dowiedz się jak przetwarzamy i chronimy Twoje dane osobowe"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Card>
            <CardContent className="p-8 prose prose-lg max-w-none">
              <h2>1. Informacje ogólne</h2>
              <p>
                Administratorem danych osobowych zbieranych przez stronę
                jaqbs.eu jest firma Jaqbs Sp. z o.o., ul. Zemborzycka 53B,
                20-445 Lublin.
              </p>

              <h2>2. Pliki cookies i technologie śledzące</h2>
              <p>
                Nasza strona wykorzystuje pliki cookies oraz inne technologie
                śledzące w następujących celach:
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
                  >
                    Polityce prywatności Google
                  </a>{' '}
                  oraz{' '}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Warunkom usługi Google
                  </a>
                  .
                </li>
              </ul>

              <h2>3. Zakres przetwarzanych danych</h2>
              <p>Poprzez formularze kontaktowe zbieramy następujące dane:</p>
              <ul>
                <li>Imię i nazwisko</li>
                <li>Adres e-mail</li>
                <li>Numer telefonu</li>
                <li>Nazwa firmy (opcjonalnie)</li>
                <li>NIP (w formularzu wyceny)</li>
                <li>Treść wiadomości</li>
              </ul>

              <h2>4. Cel przetwarzania danych</h2>
              <p>Twoje dane przetwarzamy w celu:</p>
              <ul>
                <li>Odpowiedzi na zapytania przesłane przez formularze</li>
                <li>Przygotowania oferty handlowej</li>
                <li>Nawiązania współpracy biznesowej</li>
                <li>Ochrony przed spamem (reCAPTCHA)</li>
              </ul>

              <h2>5. Podstawa prawna</h2>
              <p>
                Przetwarzanie danych odbywa się na podstawie Twojej zgody (art.
                6 ust. 1 lit. a RODO) oraz prawnie uzasadnionego interesu
                administratora (art. 6 ust. 1 lit. f RODO).
              </p>

              <h2>6. Twoje prawa</h2>
              <p>Masz prawo do:</p>
              <ul>
                <li>Dostępu do swoich danych</li>
                <li>Sprostowania danych</li>
                <li>Usunięcia danych</li>
                <li>Ograniczenia przetwarzania</li>
                <li>Przenoszenia danych</li>
                <li>Wniesienia sprzeciwu</li>
                <li>Cofnięcia zgody w dowolnym momencie</li>
              </ul>

              <h2>7. Kontakt</h2>
              <p>
                W sprawach związanych z ochroną danych osobowych prosimy o
                kontakt: <a href="mailto:office@jaqbs.eu">office@jaqbs.eu</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
