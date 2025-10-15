'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
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
  MapPin,
  Package,
  User,
  CheckCircle2,
  Clock,
  Shield,
  TrendingUp,
  Send,
  MessageSquare
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import FormSection from '@/components/FormSection';
import { PageHero } from '@/components/PageHero';

export default function WycenaPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    loadingPostalCode: '',
    loadingDate: '',
    unloadingPostalCode: '',
    unloadingDate: '',
    totalWeight: '',
    packageCount: '',
    packageType: '',
    packageDimensions: '',
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
        phone: '',
        email: '',
        loadingPostalCode: '',
        loadingDate: '',
        unloadingPostalCode: '',
        unloadingDate: '',
        totalWeight: '',
        packageCount: '',
        packageType: '',
        packageDimensions: '',
        additionalInfo: ''
      });
    }, 3000);
  };

  const benefits = [
    {
      icon: Clock,
      title: 'Szybka wycena',
      description: 'Odpowiedź w ciągu 24 godzin'
    },
    {
      icon: Shield,
      title: 'Bezpłatna wycena',
      description: 'Bez żadnych zobowiązań'
    },
    {
      icon: TrendingUp,
      title: 'Najlepsze ceny',
      description: 'Konkurencyjne stawki rynkowe'
    },
    {
      icon: CheckCircle2,
      title: 'Profesjonalna obsługa',
      description: 'Doświadczony zespół specjalistów'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="Wycena transportu"
        description="Sprawdź koszty transportu Twojej przesyłki. To nic nie kosztuje i do niczego nie zobowiązuje!"
      />

      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-blue-700/5 to-brand-red-700/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <StaggeredContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {benefits.map((benefit, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                      <benefit.icon className="h-8 w-8 text-brand-red-800" />
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
          title="Formularz wyceny"
          description="Wypełnij poniższe pola, a nasi specjaliści skontaktują się z Tobą w ciągu 24 godzin"
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
                  <User className="h-5 w-5 mr-2 text-brand-red-700" />
                  Dane kontaktowe
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Imię <span className="text-brand-red-600">*</span>
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
                      Nazwisko <span className="text-brand-red-600">*</span>
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
                      Firma
                    </Label>
                    <Input
                      id="company"
                      placeholder="Nazwa firmy (opcjonalnie)"
                      value={formData.company}
                      onChange={e =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Numer telefonu{' '}
                      <span className="text-brand-red-600">*</span>
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
                </div>
                <div className="mt-4 space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email <span className="text-brand-red-600">*</span>
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

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-brand-red-700" />
                  Trasa transportu
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="loadingPostalCode"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Kod pocztowy miejsca załadunku{' '}
                      <span className="text-brand-red-600">*</span>
                    </Label>
                    <Input
                      id="loadingPostalCode"
                      placeholder="00-001"
                      value={formData.loadingPostalCode}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          loadingPostalCode: e.target.value
                        })
                      }
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="loadingDate"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Data załadunku{' '}
                      <span className="text-brand-red-600">*</span>
                    </Label>
                    <Input
                      id="loadingDate"
                      type="date"
                      value={formData.loadingDate}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          loadingDate: e.target.value
                        })
                      }
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="unloadingPostalCode"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Kod pocztowy miejsca rozładunku{' '}
                      <span className="text-brand-red-600">*</span>
                    </Label>
                    <Input
                      id="unloadingPostalCode"
                      placeholder="00-001"
                      value={formData.unloadingPostalCode}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          unloadingPostalCode: e.target.value
                        })
                      }
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="unloadingDate"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Data rozładunku{' '}
                      <span className="text-brand-red-600">*</span>
                    </Label>
                    <Input
                      id="unloadingDate"
                      type="date"
                      value={formData.unloadingDate}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          unloadingDate: e.target.value
                        })
                      }
                      required
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Package className="h-5 w-5 mr-2 text-brand-red-700" />
                  Szczegóły przesyłki
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="totalWeight"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Waga całkowita (kg){' '}
                      <span className="text-brand-red-600">*</span>
                    </Label>
                    <Input
                      id="totalWeight"
                      type="number"
                      placeholder="1000"
                      value={formData.totalWeight}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          totalWeight: e.target.value
                        })
                      }
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="packageCount"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Ilość opakowań{' '}
                      <span className="text-brand-red-600">*</span>
                    </Label>
                    <Input
                      id="packageCount"
                      type="number"
                      placeholder="10"
                      value={formData.packageCount}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          packageCount: e.target.value
                        })
                      }
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="packageType"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Rodzaj opakowań{' '}
                      <span className="text-brand-red-600">*</span>
                    </Label>
                    <Input
                      id="packageType"
                      placeholder="np. palety, kartony, skrzynie"
                      value={formData.packageType}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          packageType: e.target.value
                        })
                      }
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="packageDimensions"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Wymiary opakowań{' '}
                      <span className="text-brand-red-600">*</span>
                    </Label>
                    <Input
                      id="packageDimensions"
                      placeholder="np. 120x80x100 cm"
                      value={formData.packageDimensions}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          packageDimensions: e.target.value
                        })
                      }
                      required
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-brand-red-700" />
                  Dodatkowe informacje
                </h3>
                <div className="space-y-2">
                  <Label
                    htmlFor="additionalInfo"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Specjalne wymagania
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Specjalne wymagania, fix, direct, kilka miejsc rozładunku, ADR, winda, formaliści celne, itp."
                    rows={5}
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
                <Button type="submit" size="lg" className="w-full h-14 text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Wyślij zapytanie o wycenę
                </Button>
                <p className="text-center text-gray-600 text-sm mt-4">
                  Skontaktujemy się z Tobą w ciągu 24 godzin roboczych
                </p>
              </div>
            </form>
          )}
        </FormSection>
      </section>

      <CTASection
        title="Wolisz porozmawiać z naszym ekspertem?"
        description="Zadzwoń teraz i uzyskaj natychmiastową wycenę transportu"
        primaryButtonText="Skontaktuj się z nami"
        showSecondaryButton={false}
      />
    </div>
  );
}
