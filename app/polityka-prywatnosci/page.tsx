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
              <p className="text-sm text-gray-600 mb-8">
                Zgodnie z art. 13 oraz art. 14 rozporządzenia Parlamentu
                Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
                sprawie ochrony osób fizycznych w związku z przetwarzaniem
                danych osobowych i w sprawie swobodnego przepływu takich danych
                oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o
                ochronie danych) („RODO”), informujemy, że:
              </p>

              <h2 className="mb-5">Administrator danych</h2>
              <p>
                1. Administratorem Pani/Pana danych osobowych jest JAQBS BIS Sp
                z o.o. z siedzibą w Lublinie, adres: ul. Zemborzycka 53 B,
                20-445 Lublin („Administrator”).
              </p>

              <h2 className="mb-5">Podmioty danych</h2>
              <p>
                Administrator przetwarza dane osobowe podmiotów odwiedzających
                stronę internetową Administratora https://jaqbs.eu/, podmiotów
                korzystających z formularza kontaktowego zamieszczonego na
                Stronie internetowej oraz podmiotów kontaktujących się z
                Administratorem.
              </p>
              <p>Przetwarzane przez Administratora dane osobowe obejmują:</p>
              <ul>
                <li>
                  dane osobowe osób kontaktujących się z Administratorem poprzez
                  formularz kontaktowy lub drogą mailową: imię i nazwisko, adres
                  e-mail, IP komputera, numer telefonu, firma oraz inne dane
                  osobowe zawarte w treści zapytania;
                </li>
                <li>
                  dane osobowe odwiedzających strony internetowe: numer IP
                  komputera;
                </li>
                <li>
                  poprzez formularze kontaktowe zbieramy następujące dane: imię
                  i nazwisko, adres e-mail, numer telefonu, nazwa firmy
                  (opcjonalnie), NIP (w formularzu wyceny), treść wiadomości.
                </li>
              </ul>

              <h2 className="mb-5">
                Cele i podstawy prawne przetwarzania danych osobowych
              </h2>
              <p>Dane osobowe będą przetwarzane w celach:</p>
              <ul>
                <li>
                  składania osobom zainteresowanym indywidualnych ofert - art. 6
                  ust. 1 lit. f) RODO, tj. prawnie uzasadniony interes
                  Administratora,
                </li>
                <li>
                  marketingowych - art. 6 ust. 1 lit. f) RODO, tj. prawnie
                  uzasadniony interes Administratora,
                </li>
                <li>
                  kontaktu z osobami kierującymi zapytania lub wiadomości do
                  Administratora za pomocą formularza kontaktowego lub drogą
                  mailową - art. 6 ust. 1 lit. f) RODO, tj. prawnie uzasadniony
                  interes Administratora,
                </li>
                <li>
                  kontaktu za pośrednictwem formularza kontaktowego
                  przetwarzanie danych odbywa się na podstawie Twojej zgody w
                  zakresie udzielonym na podstawie art. 6 ust. 1 lit. a RODO.
                </li>
              </ul>

              <h2 className="mb-5">Odbiorcy danych osobowych</h2>
              <p>
                Pani / Pana dane osobowe mogą być udostępnione podmiotom
                upoważnionym na podstawie przepisów powszechnie obowiązującego
                prawa, w szczególności instytucjom uprawnionym do kontroli
                działalności Administratora lub instytucjom uprawnionym do
                uzyskania danych osobowych na podstawie przepisów prawa, a także
                podmiotom świadczącym na rzecz Administratora usługi z zakresu
                outsourcingu procesów księgowych, audytorom, doradcom prawnym
                lub podatkowym oraz dostawcom usług IT. Okres przechowywania
                danych. Pani / Pana dane osobowe będziemy przechowywać do upływu
                okresu przedawnienia roszczeń.
              </p>

              <h2 className="mb-5">Źródło pochodzenia danych osobowych</h2>
              <p>
                Podanie danych osobowych jest dobrowolne, ale niezbędne do
                skontaktowania się z Administratorem. Konsekwencją niepodania
                danych osobowych będzie brak możliwości kontaktu z
                Administratorem. Pani / Pana dane osobowe zostały udostępnione
                Administratorowi w związku z odwiedzeniem Strony internetowej
                lub przesłaniem formularza kontaktowego.
              </p>

              <h2 className="mb-5">
                Prawa związane z przetwarzaniem danych osobowych
              </h2>
              <p>
                W związku z przetwarzaniem danych osobowych przysługują Pani /
                Panu następujące prawa do: dostępu do danych, sprostowania
                danych, usunięcia danych, ograniczenia przetwarzania danych oraz
                prawo do sprzeciwu wobec przetwarzania danych. Prawa te
                przysługują Pani/Panu w przypadkach i w zakresie przewidzianym
                przez obowiązujące przepisy prawa. W związku z przetwarzaniem
                danych przysługuje również prawo do wniesienia skargi do organu
                nadzorczego – Prezes Urzędu Ochrony Danych Osobowych (ul. Stawki
                2, 00-193 Warszawa).
              </p>

              <h2>Zabezpieczenia</h2>
              <p>
                Administrator podejmuje odpowiednie działania techniczne i
                organizacyjne w celu ochrony Państwa danych osobowych. Państwa
                dane osobowe są dostępne tylko dla osób, które potrzebują ich do
                celów i zadań opisanych w niniejszej polityce prywatności (np.
                pracownicy działu kadr, administratorzy systemów
                informatycznych). Wszystkie te osoby są zobowiązane do
                traktowania danych osobowych w sposób poufny i wyłącznie zgodnie
                z obowiązującymi przepisami i regulacjami w zakresie ochrony
                danych osobowych. Dane są nam przekazywane w formie
                niezaszyfrowanej, za pomocą otwartej, transgranicznej sieci
                dostępnej dla każdego. Jednakże Administrator wdrożył środki
                bezpieczeństwa w celu ochrony danych przed nieuprawnionym
                dostępem oraz zapewnienia autentyczności strony internetowej,
                integralności danych oraz poufności danych przekazywanych za
                pośrednictwem sieci wewnętrznej firmy.
              </p>

              <h2 className="mb-5">
                Przekazywanie danych osobowych do państw trzecich i organizacji
                międzynarodowych
              </h2>
              <p>
                Administrator przechowuje Pani/ Pana dane w infrastrukturze
                informatycznej dostarczanej przez podmioty zewnętrzne, w tym w
                skrzynkach mailowych, których serwery mogą być zlokalizowane
                poza Europejskim Obszarem Gospodarczym, a tym samym przekazuje
                dane osobowe do odbiorców mających siedzibę poza Europejskim
                Obszarem Gospodarczym. Administrator przekazuje dane osobowe
                wykorzystując mechanizmy zgodne z obowiązującym prawem, w
                szczególności zgodnie z wymogami RODO, zawartymi m.in. w art. 46
                RODO, w szczególności na podstawie standardowych klauzul
                umownych. Więcej informacji o istniejących zabezpieczeniach
                wdrożonych przez Administratora w celu zapewnienia przetwarzania
                danych osobowych zgodnie z obowiązującymi przepisami oraz o
                możliwościach uzyskania kopii danych lub o miejscu i sposobie
                udostępnienia danych można uzyskać kontaktując się z
                Administratorem w sposób wskazany w niniejszej klauzuli.
              </p>

              <h2 className="mb-5">
                Zautomatyzowane podejmowanie decyzji, w tym profilowanie
              </h2>
              <p>
                Administrator nie podejmuje decyzji opartych na zautomatyzowanym
                przetwarzaniu, w tym profilowaniu w oparciu o Pani/Pana dane
                osobowe.
              </p>

              <h2 className='mb-5'>Dane Kontaktowe</h2>
              <p>
                W sprawach dotyczących przetwarzania danych osobowych może Pani/
                Pan może skontaktować się z Administratorem:
              </p>
              <ul>
                <li>
                  kierując korespondencję tradycyjną na adres siedziby
                  Administratora lub
                </li>
                <li>
                  za pośrednictwem dedykowanego adresu e-mail:{' '}
                  <a href="mailto:office@jaqbs.eu">office@jaqbs.eu</a>
                </li>
              </ul>
              <p>
                Osoba, która złożyła wniosek lub żądanie dotyczące przetwarzania
                jej danych osobowych, w ramach korzystania z przysługujących jej
                praw, może zostać poproszona o odpowiedź na pytania, które
                umożliwią weryfikację jej tożsamości.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
