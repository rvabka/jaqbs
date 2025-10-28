'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import {
  AnimatedSection,
  StaggeredContainer,
  StaggeredItem
} from '@/components/ui/AnimatedSection';
import {
  Users,
  HeadphonesIcon,
  MapPin,
  FileText,
  Shield,
  Clock,
  Award,
  Target,
  Heart,
  Zap,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import { PageHero } from '@/components/PageHero';

export default function AboutPage() {
  const stats = [
    { label: 'Lat doświadczenia', value: '15+', icon: Award },
    { label: 'Zadowolonych klientów', value: '1000+', icon: Users },
    { label: 'Wykonanych zleceń', value: '200k+', icon: TrendingUp },
    { label: 'Oddziałów w Polsce', value: '6', icon: MapPin },
    { label: 'Pracowników', value: '150+', icon: Users }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Partnerstwo',
      description:
        'Relacja oparta na zaufaniu, bezpieczeństwie i wzajemnym wsparciu. Jesteśmy nastawieni na długoterminową współpracę.'
    },
    {
      icon: Clock,
      title: 'Terminowość',
      description:
        'Szybkie i terminowe płatności. Monitoring GPS wszystkich pojazdów zapewnia dotarcie przesyłki zgodnie z planem.'
    },
    {
      icon: Zap,
      title: 'Szybkość reakcji',
      description:
        'Błyskawiczne znajdowanie rozwiązań, trafna ocena sytuacji i natychmiastowe podejmowanie decyzji.'
    },
    {
      icon: Target,
      title: 'Profesjonalizm',
      description:
        'Ekspercka wiedza i wieloletnie doświadczenie naszych spedytorów w spedycji międzynarodowej.'
    }
  ];

  const offices = [
    {
      city: 'Lublin',
      type: 'Centrala',
      address: 'ul. Przykładowa 1',
      color: 'from-brand-red-900 to-brand-red-800'
    },
    {
      city: 'Warszawa',
      type: 'Oddział',
      address: 'ul. Przykładowa 2',
      color: 'from-brand-blue-900 to-brand-blue-800'
    },
    {
      city: 'Słupsk',
      type: 'Oddział',
      address: 'ul. Przykładowa 3',
      color: 'from-brand-red-800 to-brand-red-700'
    },
    {
      city: 'Zielona Góra',
      type: 'Oddział',
      address: 'ul. Przykładowa 4',
      color: 'from-brand-blue-800 to-brand-blue-700'
    },
    {
      city: 'Gdańsk',
      type: 'Oddział',
      address: 'ul. Przykładowa 5',
      color: 'from-brand-red-800 to-brand-red-700'
    },
    {
      city: 'Poznań',
      type: 'Oddział',
      address: 'ul. Przykładowa 6',
      color: 'from-brand-blue-800 to-brand-blue-700'
    }
  ];

  const documents = [
    { name: 'Licencja transportowa', icon: FileText },
    { name: 'Licencja spedycyjna', icon: FileText },
    { name: 'Ubezpieczenie OCP', icon: Shield },
    { name: 'Certyfikat ISO', icon: Award },
    { name: 'Zezwolenie międzynarodowe', icon: FileText }
  ];

  const supportFeatures = [
    {
      icon: Users,
      title: 'Indywidualne podejście',
      description:
        'Każdy Klient otrzymuje dedykowanego opiekuna, który czuwa nad realizacją zlecenia na każdym etapie. Komunikacja jest szybka, przejrzysta i skuteczna.'
    },
    {
      icon: MapPin,
      title: 'Monitoring GPS',
      description:
        'Monitorujemy wszystkie pojazdy w systemie GPS i na bieżąco dbamy o to, aby Twoja przesyłka dotarła zgodnie z planem.'
    },
    {
      icon: Clock,
      title: 'Szybkie płatności',
      description:
        'Zaufanie budujemy poprzez szybkie i terminowe płatności – jesteśmy stabilnym, odpowiedzialnym i wiarygodnym partnerem finansowym.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="O firmie Jaqbs"
        description="Profesjonalna firma transportowo-spedycyjna z 15-letnim doświadczeniem. Partnerstwo, terminowość i indywidualne podejście do każdego klienta."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              <span className="gradient-text">Jaqbs</span> w liczbach
            </h2>
            <p className="text-lg text-gray-600">
              Zaufało nam ponad 1000 klientów w całej Polsce i Europie
            </p>
          </div>
          <StaggeredContainer
            staggerDelay={0.1}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {stats.map((stat, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                      <stat.icon className="h-8 w-8 text-brand-red-900" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-3 text-black whitespace-nowrap">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 leading-tight min-h-[2.5rem] flex items-center justify-center">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-blue-900/5 to-brand-red-900/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
                <div className="w-2 h-2 bg-brand-red-900 rounded-full"></div>
                <span>O firmie Jaqbs</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Firma transportowo-spedycyjna od 2010 roku
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Jesteśmy firmą transportowo-spedycyjną, która powstała w 2010
                  roku – jednak nasze doświadczenie w branży sięga znacznie
                  dalej. Od początku naszej działalności kierujemy się zasadą{' '}
                  <strong>partnerstwa biznesowego</strong>.
                </p>
                <p>
                  Wierzymy, że dobre partnerstwo to relacja oparta na zaufaniu,
                  bezpieczeństwie i wzajemnym wsparciu. Stawiamy na
                  długoterminową współpracę i robimy wszystko, aby nie zawieść
                  naszych Partnerów.
                </p>
                <div className="bg-gradient-to-r from-brand-red-50 to-brand-blue-50 p-6 rounded-2xl border-l-4 border-brand-red-900">
                  <p className="font-semibold text-brand-red-900">
                    Dla nas spedycja to nie tylko transport – to partnerstwo,
                    zaufanie i odpowiedzialność.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-red-900 to-brand-blue-900 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/27256005/pexels-photo-27256005.jpeg"
                  alt="Zespół Jaqbs - firma transportowo-spedycyjna"
                  className="relative rounded-3xl shadow-2xl w-full hover-lift"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-blue-900/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-blue-800 mb-6">
              <FileText className="h-4 w-4" />
              <span>Dokumenty</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Licencje i certyfikaty
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                Wszystkie niezbędne dokumenty, licencje i certyfikaty dostępne
                do pobrania
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <StaggeredContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {documents.map((doc, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="group hover-lift cursor-pointer h-52">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <doc.icon className="h-8 w-8 text-brand-red-900" />
                    </div>
                    <h3 className="font-semibold group-hover:text-brand-red-900 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Kliknij, aby pobrać <span className="font-bold">PDF</span>
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue-900 to-brand-red-900 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/27256005/pexels-photo-27256005.jpeg"
                  alt="Zespół spedytorów Jaqbs"
                  className="relative rounded-3xl shadow-2xl w-full hover-lift"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="order-1 md:order-2">
              <div className="inline-flex items-center space-x-2 bg-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-blue-800 mb-6">
                <Users className="h-4 w-4" />
                <span>Nasz zespół</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Profesjonaliści z pasją do spedycji
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Tworzymy zgrany zespół{' '}
                  <strong>
                    młodych, dynamicznych i ambitnych specjalistów
                  </strong>
                  , którzy wychowali się w cyfrowym świecie. Dzięki temu
                  doskonale odnajdujemy się w realiach nowoczesnej spedycji,
                  wykorzystując technologie do maksymalnego usprawnienia
                  procesów.
                </p>
                <p>
                  Nasi spedytorzy posiadają{' '}
                  <strong>
                    ekspercką wiedzę i wieloletnie doświadczenie w spedycji
                    międzynarodowej
                  </strong>
                  . Potrafią błyskawicznie znaleźć najkorzystniejsze
                  rozwiązania, trafnie ocenić sytuację i natychmiast podjąć
                  decyzję.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <CheckCircle className="h-8 w-8 text-brand-blue-900 mb-3" />
                      <h3 className="font-bold mb-2">Cyfrowi natywni</h3>
                      <p className="text-sm text-gray-600">
                        Wykorzystujemy nowoczesne technologie
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <CheckCircle className="h-8 w-8 text-brand-red-900 mb-3" />
                      <h3 className="font-bold mb-2">Doświadczeni</h3>
                      <p className="text-sm text-gray-600">
                        Wieloletnia praktyka w branży TSL
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-900/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-blue-800 mb-6">
              <div className="w-2 h-2 bg-brand-blue-900 rounded-full"></div>
              <span>Nasze wartości</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Co wyróżnia firmę <span className="gradient-text">Jaqbs</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                Wyznaczamy nowe standardy jakości obsługi i serwisu w branży
                transportowo-spedycyjnej
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <StaggeredContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <value.icon className="h-8 w-8 text-brand-red-900" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-red-900 transition-colors">
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

      <section className="py-24 bg-gradient-to-br from-brand-red-900 via-brand-red-800 to-brand-blue-900 text-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-8">
              <HeadphonesIcon className="h-5 w-5" />
              <span>Pełne wsparcie</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Wspieramy Was na każdym etapie
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed">
                To, co nas wyróżnia, to{' '}
                <strong>indywidualne podejście i pełne wsparcie</strong> dla
                każdego Klienta
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <StaggeredContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {supportFeatures.map((feature, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift h-full">
                  <CardContent className="p-8">
                    <feature.icon className="h-12 w-12 mb-6 text-white" />
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-200 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>

          <AnimatedSection
            direction="up"
            delay={0.6}
            className="text-center space-y-6"
          >
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Zawsze interesuje nas Twoja opinia. Jeśli chciałbyś podzielić się
              swoimi spostrzeżeniami dotyczącymi współpracy, nie wahaj się
              skontaktować z nami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:office@jaqbs.eu">
                <Button className="bg-white text-brand-red-900 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-6 text-lg">
                  office@jaqbs.eu
                </Button>
              </a>

              <a href="tel:+48570112512">
                <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-red-900 transition-all duration-300 rounded-full px-8 py-6 text-lg bg-transparent">
                  +48 570 112 512
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-blue-900/5 to-brand-red-900/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
              <MapPin className="h-4 w-4" />
              <span>Jesteśmy blisko</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                6 oddziałów w całej Polsce
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance leading-relaxed">
                Nieustannie rozwijamy się, aby być jeszcze bliżej naszych
                Klientów – zarówno w Polsce, jak i za granicą
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <StaggeredContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {offices.map((office, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="group hover-lift overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${office.color}`}></div>
                  <CardContent className="p-6">
                    <div className="text-sm font-medium text-gray-500 mb-2">
                      {office.type}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-red-900 transition-colors">
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
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Jaqbs posiada <strong>globalny zasięg</strong>, ale w
                      codziennej pracy koncentrujemy się na tym, by lokalnie
                      rozumieć potrzeby naszych Klientów, jednocześnie oferując
                      międzynarodowy standard obsługi.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Wyróżniamy się na tle konkurencji, wyznaczając nowe
                      standardy jakości obsługi i serwisu w branży
                      transportowo-spedycyjnej.
                    </p>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/27256005/pexels-photo-27256005.jpeg"
                      alt="Mapa oddziałów Jaqbs w Polsce"
                      className="rounded-2xl shadow-lg hover-lift"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
