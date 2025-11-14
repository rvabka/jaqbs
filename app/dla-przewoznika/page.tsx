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
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import FormSection from '@/components/FormSection';
import { PageHero } from '@/components/PageHero';
import Image from 'next/image';
import { useRecaptcha } from '@/hooks/useRecaptcha';

export default function CarriersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    fleet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const { getToken } = useRecaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: 'idle' });

    try {
      const recaptchaToken = await getToken();

      const response = await fetch('/api/carrier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Wystąpił błąd');
      }

      setSubmitStatus({ type: 'success', message: data.message });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        fleet: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus({ type: 'idle' });
      }, 5000);
    } catch (error: any) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Wystąpił błąd podczas wysyłania zgłoszenia'
      });
    } finally {
      setIsSubmitting(false);
    }
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

      <section className="py-12 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-blue-900/5 to-brand-red-900/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-red-900 to-brand-blue-900 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/kierowca.webp"
                    alt="Flota pojazdów Jaqbs - profesjonalny transport"
                    width={800}
                    height={600}
                    className="relative rounded-3xl shadow-2xl w-full hover-lift aspect-square object-cover"
                    priority
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
                <div className="w-2 h-2 bg-brand-red-900 rounded-full"></div>
                <span>Współpraca z Jaqbs</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Stabilny partner dla przewoźników
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Jako firma transportowo-spedycyjna z{' '}
                  <strong>15-letnim doświadczeniem</strong>, wiemy jak ważne
                  jest partnerstwo oparte na zaufaniu i wzajemnym wsparciu.
                </p>
                <p>
                  Oferujemy przewoźnikom <strong>stałe zlecenia</strong>,{' '}
                  <strong>terminowe płatności</strong> i pełne wsparcie
                  operacyjne. Dołącz do naszej sieci i rozwijaj swój biznes z
                  pewnym partnerem.
                </p>
                <div className="bg-gradient-to-r from-brand-red-50 to-brand-blue-50 p-6 rounded-2xl border-l-4 border-brand-red-900">
                  <p className="font-semibold text-brand-red-900">
                    Dla nas transport to nie tylko logistyka - to partnerstwo,
                    zaufanie i wspólny sukces.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-12 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-red-900/5 to-brand-blue-900/5 rounded-full blur-3xl"></div>

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
                      <benefit.icon className="h-8 w-8 text-brand-blue-700" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue-700 transition-colors">
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

      <section className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-900/5 rounded-full blur-3xl"></div>

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
                {submitStatus.type === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 font-medium">
                      {submitStatus.message}
                    </p>
                  </div>
                )}

                {submitStatus.type === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-800 font-medium">
                      {submitStatus.message}
                    </p>
                  </div>
                )}

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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      Wiadomość <span className="text-brand-red-900">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Opisz swoją firmę, doświadczenie w transporcie, główne trasy, specjalizację..."
                      rows={6}
                      value={formData.message}
                      onChange={e =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="resize-none"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg bg-brand-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Wyślij zgłoszenie
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Ta strona jest chroniona przez reCAPTCHA Google.{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-red-900 hover:underline"
                    >
                      Polityka prywatności
                    </a>{' '}
                    i{' '}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-red-900 hover:underline"
                    >
                      Warunki usługi
                    </a>
                    .
                  </p>
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
