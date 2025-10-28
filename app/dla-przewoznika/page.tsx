'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Label } from '@/components/ui/Label';
import {
  AnimatedSection,
  StaggeredContainer,
  StaggeredItem
} from '@/components/ui/AnimatedSection';
import {
  Truck,
  Users,
  Clock,
  Shield,
  CheckCircle,
  TrendingUp,
  Send,
  User,
  MessageSquare
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import FormSection from '@/components/FormSection';
import { PageHero } from '@/components/PageHero';

export default function CarriersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    fleet: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Stałe zlecenia',
      description:
        'Gwarantujemy regularne zlecenia transportowe na stałych trasach'
    },
    {
      icon: Clock,
      title: 'Terminowe płatności',
      description: 'Szybkie i terminowe rozliczenia - to nasz priorytet'
    },
    {
      icon: Shield,
      title: 'Bezpieczeństwo współpracy',
      description: 'Pełne ubezpieczenie i wsparcie prawne w każdej sytuacji'
    },
    {
      icon: Users,
      title: 'Dedykowany opiekun',
      description: 'Osobisty kontakt z doświadczonym spedytorem'
    }
  ];

  const requirements = [
    'Pojazdy o DMC do 3.5T',
    'Wiek pojazdów nie starszy niż 5 lat',
    'Pełne ubezpieczenie OC i cargo',
    'Doświadczenie w transporcie międzynarodowym',
    'Dostępność 24/7',
    'System GPS w pojazdach'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="Dla przewoźnika"
        description="Rozwijaj swój biznes z pewnym partnerem! Dołącz do nas i jedź razem z nami po sukces."
      />

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
              <div className="w-2 h-2 bg-brand-red-900 rounded-full animate-pulse"></div>
              <span>Korzyści ze współpracy</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Dlaczego warto współpracować z{' '}
                <span className="gradient-text">Jaqbs?</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                Oferujemy najlepsze warunki współpracy dla przewoźników w branży
                TSL
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
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <benefit.icon className="h-8 w-8 text-brand-red-900" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-red-900 transition-colors">
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

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center space-x-2 bg-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-blue-800 mb-6">
                <CheckCircle className="h-4 w-4" />
                <span>Wymagania</span>
              </div>

              <AnimatedSection direction="up" delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
                  Podstawowe wymagania dla przewoźników
                </h2>
              </AnimatedSection>

              <StaggeredContainer staggerDelay={0.1} className="space-y-4">
                {requirements.map((requirement, index) => (
                  <StaggeredItem key={index} direction="left">
                    <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-6 h-6 bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {requirement}
                      </span>
                    </div>
                  </StaggeredItem>
                ))}
              </StaggeredContainer>

              <AnimatedSection direction="up" delay={0.6} className="mt-8">
                <Card className="bg-gradient-to-br from-brand-red-50 to-brand-blue-50 border-0">
                  <CardContent className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-brand-red-900">
                        Spełniasz wymagania?
                      </strong>{' '}
                      Wypełnij formularz obok, a nasz zespół skontaktuje się z
                      Tobą, aby omówić szczegóły współpracy.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </AnimatedSection>

            <FormSection
              title="Dołącz do naszej sieci przewoźników"
              description="Wypełnij formularz, a my skontaktujemy się z Tobą w sprawie współpracy"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-brand-red-900" />
                    Dane kontaktowe
                  </h3>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Imię i nazwisko{' '}
                        <span className="text-brand-red-900">*</span>
                      </Label>
                      <Input
                        id="name"
                        required
                        placeholder="Jan Kowalski"
                        value={formData.name}
                        onChange={e =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Email <span className="text-brand-red-900">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="jan.kowalski@example.com"
                        value={formData.email}
                        onChange={e =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Telefon <span className="text-brand-red-900">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+48 123 456 789"
                        value={formData.phone}
                        onChange={e =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="company"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Nazwa firmy{' '}
                        <span className="text-brand-red-900">*</span>
                      </Label>
                      <Input
                        id="company"
                        required
                        placeholder="Transport ABC Sp. z o.o."
                        value={formData.company}
                        onChange={e =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Truck className="h-5 w-5 mr-2 text-brand-red-900" />
                    Informacje o flocie
                  </h3>
                  <div className="space-y-2">
                    <Label
                      htmlFor="fleet"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Liczba pojazdów
                    </Label>
                    <Input
                      id="fleet"
                      placeholder="np. 5 pojazdów dostawczych"
                      value={formData.fleet}
                      onChange={e =>
                        setFormData({ ...formData, fleet: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-brand-red-900" />
                    Dodatkowe informacje
                  </h3>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Wiadomość
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Opisz swoją firmę, doświadczenie w transporcie, główne trasy, specjalizację..."
                      rows={6}
                      value={formData.message}
                      onChange={e =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="resize-none"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg bg-gradient-to-r from-brand-red-900 to-brand-red-800 hover:from-brand-red-800 hover:to-brand-red-900"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Wyślij zgłoszenie
                  </Button>
                </div>
              </form>
            </FormSection>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
