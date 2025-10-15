'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import {
  AnimatedSection,
  StaggeredContainer,
  StaggeredItem
} from '@/components/ui/AnimatedSection';
import {
  Building2,
  Users,
  Truck,
  HeadphonesIcon,
  MapPin,
  FileText,
  Shield,
  Clock,
  Award,
  Target,
  Heart,
  Zap
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import { PageHero } from '@/components/PageHero';

export default function AboutPage() {
  const stats = [
    { label: 'Lat doświadczenia', value: '15+', icon: Award },
    { label: 'Zadowolonych klientów', value: '1000+', icon: Users },
    { label: 'Pojazdów w flocie', value: '50+', icon: Truck },
    { label: 'Biur w Polsce', value: '4', icon: MapPin }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Partnerstwo',
      description:
        'Budujemy długoterminowe relacje oparte na zaufaniu i wzajemnym wsparciu.'
    },
    {
      icon: Clock,
      title: 'Terminowość',
      description:
        'Dotrzymujemy obietnic - terminowe płatności i dostawy to nasz priorytet.'
    },
    {
      icon: Zap,
      title: 'Szybkość',
      description: 'Błyskawiczne reakcje i natychmiastowe podejmowanie decyzji.'
    },
    {
      icon: Target,
      title: 'Profesjonalizm',
      description:
        'Ekspercka wiedza i długoletnie doświadczenie w spedycji międzynarodowej.'
    }
  ];

  const offices = [
    {
      city: 'Lublin',
      type: 'Centrala',
      address: 'ul. Przykładowa 1',
      color: 'from-brand-red-700 to-brand-red-800'
    },
    {
      city: 'Warszawa',
      type: 'Oddział',
      address: 'ul. Przykładowa 2',
      color: 'from-brand-blue-700 to-brand-blue-800'
    },
    {
      city: 'Słupsk',
      type: 'Oddział',
      address: 'ul. Przykładowa 3',
      color: 'from-brand-red-600 to-brand-red-700'
    },
    {
      city: 'Zielona Góra',
      type: 'Oddział',
      address: 'ul. Przykładowa 4',
      color: 'from-brand-blue-600 to-brand-blue-700'
    }
  ];

  const documents = [
    { name: 'Licencja', icon: FileText },
    { name: 'Licencja spedycyjna', icon: FileText },
    { name: 'Ubezpieczenie transportowe', icon: Shield },
    { name: 'Zezwolenie', icon: FileText },
    { name: 'Certyfikat', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="O nas"
        description="Stanowimy doskonale zgrany zespół młodych i dynamicznych ludzi, nastawionych na długoterminową współpracę"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <StaggeredContainer
            staggerDelay={0.1}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="bg-gradient-to-br from-gray-50 to-white border-2 hover-lift">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-10 w-10 mx-auto mb-3 text-brand-blue-700" />
                    <div className="text-4xl font-bold mb-2 text-black">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-blue-700/5 to-brand-red-700/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
                <div className="w-2 h-2 bg-brand-red-700 rounded-full"></div>
                <span>Nasza historia</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Partnerstwo biznesowe od 2010 roku
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Firma powstała w 2010 roku, ale to jedynie ułamek naszego
                  bogatego doświadczenia w branży spedycyjnej. Od początku
                  kierujemy się zasadą <strong>PARTNERSTWA BIZNESOWEGO</strong>.
                </p>
                <p>
                  Dobre partnerstwo to dwustronna relacja oparta na zaufaniu,
                  bezpieczeństwie i wzajemnym wsparciu. Jesteśmy nastawieni na
                  długoterminową współpracę i zrobimy wszystko, aby nie zawieść
                  naszego Partnera.
                </p>
                <p>
                  Stanowimy doskonale zgrany zespół młodych i dynamicznych
                  ludzi. Nasi spedytorzy wychowali się w rzeczywistości
                  cyfrowej. Dlatego szybko i skutecznie potrafią poruszać się w
                  świecie wirtualnym.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-red-700 to-brand-blue-700 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/27256005/pexels-photo-27256005.jpeg"
                  alt="Zespół Jaqbs"
                  className="relative rounded-3xl shadow-2xl w-full hover-lift"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-blue-800 mb-6">
              <div className="w-2 h-2 bg-brand-blue-700 rounded-full"></div>
              <span>Nasze wartości</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Co nas wyróżnia
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                Wszyscy posiadamy ekspercką wiedzę i długoletnie doświadczenie w
                spedycji międzynarodowej
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <StaggeredContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="group hover-lift h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <value.icon className="h-8 w-8 text-brand-red-800" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-red-700 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue-700 to-brand-red-700 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/27256005/pexels-photo-27256005.jpeg"
                  alt="Flota Jaqbs"
                  className="relative rounded-3xl shadow-2xl w-full hover-lift"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="order-1 md:order-2">
              <div className="inline-flex items-center space-x-2 bg-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-blue-800 mb-6">
                <Truck className="h-4 w-4" />
                <span>Nasz tabor</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Nowoczesna flota pojazdów
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Trzon naszej floty stanowią pojazdy o DMC do 3.5 T. Są to busy
                  plandekowe o pojemności 8 – 10 EPAL, nie starsze niż 3 lata.
                </p>
                <p>
                  Spełniające najwyższe standardy ekologiczne. Wszystkie auta są
                  regularnie serwisowane. Wiele z nich jest dodatkowo
                  wyposażonych w windę załadowczą.
                </p>
              </div>

              <StaggeredContainer
                staggerDelay={0.1}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                <StaggeredItem direction="up">
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-brand-red-800 mb-2">
                        8-10
                      </div>
                      <div className="text-sm text-gray-600">
                        EPAL pojemność
                      </div>
                    </CardContent>
                  </Card>
                </StaggeredItem>
                <StaggeredItem direction="up">
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-brand-blue-700 mb-2">
                        3.5T
                      </div>
                      <div className="text-sm text-gray-600">DMC pojazdu</div>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              </StaggeredContainer>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-brand-red-700 via-brand-red-800 to-brand-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-network.png')] opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-red-900/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-8">
              <HeadphonesIcon className="h-5 w-5" />
              <span>Wsparcie</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Wspieramy Was
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed">
                Elementem, który wyróżnia nas spośród innych firm z branży
                spedycyjnej jest wsparcie, które dajemy naszym klientom
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <StaggeredContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <StaggeredItem direction="up">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
                <CardContent className="p-8 h-72">
                  <Users className="h-12 w-12 mb-6 text-white" />
                  <h3 className="text-2xl font-bold mb-4">
                    Indywidualne podejście
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    Każdy klient otrzymuje dedykowanego opiekuna do kontaktu,
                    który zapewnia wsparcie na każdym etapie realizacji
                    projektu.
                  </p>
                </CardContent>
              </Card>
            </StaggeredItem>

            <StaggeredItem direction="up">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
                <CardContent className="p-8 h-72">
                  <MapPin className="h-12 w-12 mb-6 text-white" />
                  <h3 className="text-2xl font-bold mb-4">Monitoring GPS</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Dzięki ciągłemu monitoringowi aut w systemie GPS, nasi
                    spedytorzy dbają, abyś i Ty dotrzymał swojej obietnicy.
                  </p>
                </CardContent>
              </Card>
            </StaggeredItem>

            <StaggeredItem direction="up">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
                <CardContent className="p-8 h-72">
                  <Clock className="h-12 w-12 mb-6 text-white" />
                  <h3 className="text-2xl font-bold mb-4">Terminowość</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Bardzo ważnym elementem budowania zaufania są szybkie i
                    terminowe płatności. Jesteśmy stabilnym finansowo partnerem.
                  </p>
                </CardContent>
              </Card>
            </StaggeredItem>
          </StaggeredContainer>

          <AnimatedSection
            direction="up"
            delay={0.6}
            className="text-center space-y-6"
          >
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Zawsze interesuje nas Twoja opinia. Jeśli chciałbyś podzielić się
              z nami swoimi spostrzeżeniami dotyczącymi współpracy, kogoś
              skrytykować lub pochwalić, prosimy – nie wahaj się skontaktować z
              nami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-white text-brand-red-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-6 text-lg">
                biuro@jaqbs.eu
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-red-700 transition-all duration-300 rounded-full px-8 py-6 text-lg bg-transparent">
                +48 570 112 512
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-blue-700/5 to-brand-red-700/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
              <MapPin className="h-4 w-4" />
              <span>Nasze lokalizacje</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Poznajmy się
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance leading-relaxed">
                Firma Jaqbs jest międzynarodowym dostawcą usług, posiadającym
                biura oraz oddziały w 4 miastach Polski, świadczącym każdego
                dnia usługi dla tysięcy klientów
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <StaggeredContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {offices.map((office, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="group hover-lift overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${office.color}`}></div>
                  <CardContent className="p-6">
                    <div className="text-sm font-medium text-gray-500 mb-2">
                      {office.type}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-red-700 transition-colors">
                      {office.city}
                    </h3>
                    <p className="text-gray-600">{office.address}</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>

          <AnimatedSection direction="up" delay={0.6}>
            <Card className="bg-gradient-to-br from-gray-50 to-white border-2">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">
                      Globalny zasięg, lokalna obsługa
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Jaqbs posiada globalny zasięg, ale w codziennej pracy
                      koncentruje się na tym, aby lokalnie być zawsze blisko
                      potrzeb i oczekiwań swoich klientów. Wyróżniamy się na tle
                      konkurencji wyznaczając trendy rynkowe w zakresie jakości
                      obsługi Klienta oraz serwisu.
                    </p>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/27256005/pexels-photo-27256005.jpeg"
                      alt="Mapa biur"
                      className="rounded-2xl shadow-lg hover-lift"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-blue-700/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-blue-800 mb-6">
              <FileText className="h-4 w-4" />
              <span>Dokumenty</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Dokumenty do pobrania
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                Wszystkie niezbędne dokumenty i certyfikaty dostępne do pobrania
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <StaggeredContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {documents.map((doc, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="group hover-lift cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <doc.icon className="h-8 w-8 text-brand-red-800" />
                    </div>
                    <h3 className="font-semibold group-hover:text-brand-red-700 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">Pobierz PDF</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
