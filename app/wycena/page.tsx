'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Label } from '@/components/ui/Label';
import {
  AnimatedSection,
  StaggeredContainer,
  StaggeredItem
} from '@/components/ui/AnimatedSection';
import {
  User,
  CheckCircle2,
  Clock,
  Shield,
  TrendingUp,
  Send,
  MessageSquare,
  Handshake,
  AlertCircle,
  Loader2
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import FormSection from '@/components/FormSection';
import { PageHero } from '@/components/PageHero';
import { useRecaptcha } from '@/hooks/useRecaptcha';
import FlipCard from '@/components/FlipCard';

export default function WspolpracaPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    nip: '',
    phone: '',
    email: '',
    additionalInfo: ''
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

      const response = await fetch('/api/quote', {
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
        firstName: '',
        lastName: '',
        company: '',
        nip: '',
        phone: '',
        email: '',
        additionalInfo: ''
      });

      setTimeout(() => {
        setSubmitStatus({ type: 'idle' });
      }, 5000);
    } catch (error: any) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Wystąpił błąd podczas wysyłania zapytania'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Clock,
      title: 'Szybka odpowiedź',
      description: 'Skontaktujemy się w najkrótszym możliwym czasie'
    },
    {
      icon: Shield,
      title: 'Profesjonalizm',
      description: 'Doświadczony zespół specjalistów'
    },
    {
      icon: TrendingUp,
      title: 'Rozwój biznesu',
      description: 'Wspólny rozwój i długoterminowa współpraca'
    },
    {
      icon: Handshake,
      title: 'Partnerskie podejście',
      description: 'Budujemy relacje oparte na zaufaniu'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="Wycena"
        description="Współpracuj z nami i rozwijaj swój biznes w branży TSL. <br /> Profesjonalne partnerstwo oparte na zaufaniu i wzajemnym szacunku."
      />

      <section className="py-12 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-blue-900/5 to-brand-red-900/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <StaggeredContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {benefits.map((benefit, index) => (
              <StaggeredItem key={index} direction="up">
                <FlipCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      <section id="form">
        <FormSection
          title="Formularz wyceny"
          description="Wypełnij formularz, a nasi specjaliści skontaktują się z Tobą."
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
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Imię <span className="text-brand-red-900">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Jan"
                    value={formData.firstName}
                    onChange={e =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                    className="h-12"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Nazwisko <span className="text-brand-red-900">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Kowalski"
                    value={formData.lastName}
                    onChange={e =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                    className="h-12"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="company"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Firma <span className="text-brand-red-900">*</span>
                  </Label>
                  <Input
                    id="company"
                    placeholder="Nazwa firmy"
                    value={formData.company}
                    onChange={e =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    required
                    className="h-12"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="nip"
                    className="text-sm font-semibold text-gray-700"
                  >
                    NIP <span className="text-brand-red-900">*</span>
                  </Label>
                  <Input
                    id="nip"
                    placeholder="1234567890"
                    value={formData.nip}
                    onChange={e =>
                      setFormData({ ...formData, nip: e.target.value })
                    }
                    required
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
                    Numer telefonu <span className="text-brand-red-900">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+48 123 456 789"
                    value={formData.phone}
                    onChange={e =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
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
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={e =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-brand-red-900" />
                Szczegóły zapytania
              </h3>
              <div className="space-y-2">
                <Label
                  htmlFor="additionalInfo"
                  className="text-sm font-semibold text-gray-700"
                >
                  Opisz trasę transportu i szczegóły przesyłki
                </Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Podaj informacje o trasie (skąd-dokąd), rodzaju przesyłki, wymiarach, wadze, terminie realizacji, itp."
                  rows={6}
                  value={formData.additionalInfo}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      additionalInfo: e.target.value
                    })
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
                className="w-full h-14 text-lg bg-brand-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Wyślij zapytanie o wycenę
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Ta strona jest chroniona przez reCAPTCHA Google. <br />
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
      </section>

      <CTASection
        title="Wolisz kontakt bezpośredni?"
        description="Zadzwoń do nas – chętnie odpowiemy na wszystkie pytania."
        primaryButtonText="Skontaktuj się z nami"
        primaryButtonHref="/kontakt"
        showSecondaryButton={false}
      />
    </div>
  );
}
