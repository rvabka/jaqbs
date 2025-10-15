'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  AnimatedSection,
  StaggeredContainer,
  StaggeredItem
} from '@/components/ui/AnimatedSection';
import {
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  FileText,
  UserCheck,
  GraduationCap,
  Briefcase,
  Heart,
  Shield,
  DollarSign,
  Calendar,
  Building2,
  Users,
  Mail,
  Phone
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import { PageHero } from '@/components/PageHero';

const onboardingSteps = [
  {
    id: 1,
    title: 'Aplikacja',
    description: 'Wyślij swoją aplikację z wymaganymi dokumentami',
    icon: FileText,
    color: 'bg-red-700'
  },
  {
    id: 2,
    title: 'Rozmowa',
    description: 'Rozmowa telefoniczna lub wideo z naszym zespołem HR',
    icon: UserCheck,
    color: 'bg-red-800'
  },
  {
    id: 3,
    title: 'Szkolenie',
    description: 'Ukończ nasz kompleksowy program szkoleniowy',
    icon: GraduationCap,
    color: 'bg-blue-700'
  },
  {
    id: 4,
    title: 'Rozpocznij pracę',
    description: 'Rozpocznij swoją karierę w Jaqbs',
    icon: Briefcase,
    color: 'bg-blue-800'
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Konkurencyjne wynagrodzenie',
    description: 'Stawki powyżej średniej rynkowej z premiami za wyniki'
  },
  {
    icon: Heart,
    title: 'Pakiet socjalny',
    description: 'Kompleksowe ubezpieczenie medyczne i pakiet benefitów'
  },
  {
    icon: Shield,
    title: 'Bezpieczeństwo pracy',
    description: 'Najwyższe standardy bezpieczeństwa i stabilne zatrudnienie'
  },
  {
    icon: Calendar,
    title: 'Elastyczne godziny',
    description: 'Work-life balance z elastycznymi godzinami pracy'
  }
];

const jobPositions = [
  {
    title: 'Kierowca międzynarodowy',
    location: 'Różne lokalizacje',
    type: 'Pełny etat',
    salary: '6 000 - 8 000 zł',
    requirements: [
      'Prawo jazdy kat. B/C+E',
      '2+ lata doświadczenia',
      'Czysta historia jazdy'
    ],
    description:
      'Dołącz do naszego zespołu profesjonalnych kierowców międzynarodowych i poznawaj Europę zarabiając konkurencyjne wynagrodzenie.'
  },
  {
    title: 'Kierowca lokalny',
    location: 'Centra miast',
    type: 'Pełny etat',
    salary: '4 500 - 6 000 zł',
    requirements: [
      'Prawo jazdy kat. B',
      '1+ rok doświadczenia',
      'Znajomość okolicy'
    ],
    description:
      'Codziennie w domu dzięki lokalnym trasom dostaw. Idealna równowaga między pracą a życiem prywatnym.'
  },
  {
    title: 'Spedytor',
    location: 'Centrala',
    type: 'Pełny etat',
    salary: '5 000 - 7 000 zł',
    requirements: [
      'Wykształcenie wyższe',
      'Doświadczenie w logistyce',
      'Znajomość języków obcych'
    ],
    description:
      'Koordynuj przesyłki i zarządzaj naszymi operacjami logistycznymi z nowoczesnego biura.'
  },
  {
    title: 'Kierownik magazynu',
    location: 'Centra dystrybucji',
    type: 'Pełny etat',
    salary: '5 500 - 7 500 zł',
    requirements: [
      'Doświadczenie menedżerskie',
      'Operacje magazynowe',
      'Umiejętności przywódcze'
    ],
    description:
      'Prowadź nasze zespoły magazynowe i zapewnij efektywne operacje w naszych centrach dystrybucji.'
  }
];

export default function CareerPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % onboardingSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="Kariera"
        description="Rozwijaj swoją karierę w dynamicznej firmie transportowej. Oferujemy stabilne zatrudnienie i możliwości rozwoju."
      />

      <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-red-50 rounded-full px-4 py-2 text-sm font-medium text-red-800 mb-6">
              <div className="w-2 h-2 bg-red-700 rounded-full"></div>
              <span>Simple Process</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Your Journey to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From application to your first day - our streamlined 4-step
              process gets you started in just 2 weeks.
            </p>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="absolute top-24 left-0 right-0 h-2 bg-gray-100 rounded-full transform z-0 hidden md:block mt-4"></div>
            <div
              className="absolute top-24 left-0 h-2 bg-gradient-to-r from-red-700 to-blue-700 rounded-full transform z-10 transition-all duration-1000 shadow-lg hidden md:block mt-4"
              style={{
                width: `${((activeStep + 1) / onboardingSteps.length) * 100}%`
              }}
            ></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 relative z-20">
              {onboardingSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`text-center transform transition-all duration-700 ${index <= activeStep ? 'scale-105 md:scale-110 -translate-y-2' : 'scale-100'}`}
                >
                  <div
                    className={`w-24 h-24 mx-auto ${index <= activeStep ? step.color : 'bg-gray-200'} rounded-full flex items-center justify-center mb-14 transition-all duration-700 shadow-xl hover:shadow-2xl ${index <= activeStep ? 'animate-pulse-glow' : ''}`}
                  >
                    <step.icon
                      className={`h-12 w-12 ${index <= activeStep ? 'text-white' : 'text-gray-400'} transition-all duration-300`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3${index <= activeStep ? 'text-gray-900' : 'text-gray-500'} transition-colors duration-300`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed px-2 ${index <= activeStep ? 'text-gray-600' : 'text-gray-400'} transition-colors duration-300`}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-blue-800 mb-6">
              <div className="w-2 h-2 bg-brand-blue-700 rounded-full animate-pulse"></div>
              <span>Benefity pracownicze</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Dlaczego warto wybrać{' '}
                <span className="gradient-text">Jaqbs?</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                Wiodący w branży pakiet benefitów z 95% wskaźnikiem zadowolenia
                pracowników i nagrodzoną kulturą pracy.
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <StaggeredContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <benefit.icon className="h-8 w-8 text-brand-red-800" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-red-700 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-red-700/5 to-brand-blue-700/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
              <div className="w-2 h-2 bg-brand-red-700 rounded-full animate-pulse"></div>
              <span>Oferty pracy</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Otwarte pozycje
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                Odkryj możliwości w różnych działach z konkurencyjnymi
                wynagrodzeniami i potencjałem rozwoju.
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <StaggeredContainer
            staggerDelay={0.2}
            className="grid lg:grid-cols-2 gap-8 lg:gap-10"
          >
            {jobPositions.map((job, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-1 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-3 hover:text-brand-red-700 transition-colors">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4 flex-shrink-0" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-brand-blue-100 to-brand-blue-50 text-brand-blue-800 px-3 py-1 rounded-full whitespace-nowrap"
                      >
                        {job.salary}
                      </Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {job.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="mb-6">
                      <h4 className="font-bold mb-3 text-gray-900">
                        Wymagania:
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li
                            key={reqIndex}
                            className="flex items-start space-x-3 text-sm text-gray-600"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-brand-red-700 to-brand-red-800 hover:from-brand-red-800 hover:to-brand-red-900 shadow-lg hover:shadow-xl transition-all duration-300 h-12">
                      Aplikuj teraz
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>
      <CTASection
        title="Gotowy na rozpoczęcie kariery?"
        description="Dołącz do zespołu 150+ profesjonalistów, którzy budują udane kariery w Jaqbs. Rozpocznij aplikację już dziś i zrób pierwszy krok ku swojej przyszłości."
        primaryButtonText="Aplikuj teraz"
        primaryButtonHref="mailto:kariera@jaqbs.eu"
        secondaryButtonText="Skontaktuj się z HR"
        secondaryButtonHref="tel:570112512"
        showSecondaryButton={true}
      />
    </div>
  );
}
