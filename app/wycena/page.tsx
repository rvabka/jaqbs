'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Label } from '@/components/ui/Label';
import { Card, CardContent } from '@/components/ui/Card';
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
  Building2
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import FormSection from '@/components/FormSection';
import { PageHero } from '@/components/PageHero';
import { Metadata } from 'next';

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
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        nip: '',
        phone: '',
        email: '',
        additionalInfo: ''
      });
    }, 3000);
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
        description="Współpracuj z nami i rozwijaj swój biznes w branży TSL. Profesjonalne partnerstwo oparte na zaufaniu i wzajemnym wsparciu."
      />

      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-blue-900/5 to-brand-red-900/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <StaggeredContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {benefits.map((benefit, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="pt-8 pb-8 h-52">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                      <benefit.icon className="h-8 w-8 text-brand-red-900" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      <section id="form">
        <FormSection
          title="Formularz współpracy"
          description="Wypełnij formularz i wyślij, a nasi specjaliści skontaktują się z Tobą"
        >
          {isSubmitted ? (
            <AnimatedSection direction="fade" className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Dziękujemy za przesłanie formularza!
              </h3>
              <p className="text-gray-600 text-lg">
                Nasz zespół skontaktuje się z Tobą wkrótce.
              </p>
            </AnimatedSection>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
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
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Numer telefonu{' '}
                      <span className="text-brand-red-900">*</span>
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
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-brand-red-900" />
                  Dodatkowe informacje o trasie transportu i szczegółach
                  przesyłki
                </h3>
                <div className="space-y-2">
                  <Label
                    htmlFor="additionalInfo"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Opisz swoją ofertę współpracy
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Opisz, w jaki sposób chciałbyś z nami współpracować. Możesz podać informacje o trasach, których szukasz, dostępnych pojazdach, doświadczeniu w branży TSL, itp."
                    rows={6}
                    value={formData.additionalInfo}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        additionalInfo: e.target.value
                      })
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
                  Wyślij zapytanie a my skontaktujemy się z Tobą
                </Button>
              </div>
            </form>
          )}
        </FormSection>
      </section>

      <CTASection
        title="Wolisz porozmawiać bezpośrednio?"
        description="Zadzwoń do nas lub napisz e-mail – chętnie odpowiemy na wszystkie pytania dotyczące współpracy"
        primaryButtonText="Skontaktuj się z nami"
        primaryButtonHref="/kontakt"
        showSecondaryButton={false}
      />
    </div>
  );
}
