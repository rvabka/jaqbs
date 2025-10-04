'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card';
import {
  Truck,
  MapPin,
  Package,
  Phone,
  User,
  CheckCircle2,
  Clock,
  Shield,
  TrendingUp
} from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="relative bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-red-800 text-white py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('/abstract-logistics-pattern.png')] opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red-700/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-8">
              <Truck className="h-5 w-5" />
              <span>Bezpłatna wycena transportu</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
              Wycena transportu
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed">
              Sprawdź koszty transportu Twojej przesyłki. To nic nie kosztuje i
              do niczego nie zobowiązuje!
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-lg">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <a
                  href="tel:570112512"
                  className="hover:text-red-200 transition-colors"
                >
                  570 112 512
                </a>
              </div>
              <span className="text-gray-400">lub</span>
              <span className="text-red-200 font-semibold">
                wypełnij formularz poniżej
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-50 via-red-100 to-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <benefit.icon className="h-8 w-8 text-red-800" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 animate-fade-in-up">
              <CardHeader className="bg-gradient-to-r from-red-50 to-blue-50 border-b border-gray-200">
                <CardTitle className="text-3xl text-center">
                  Formularz wyceny
                </CardTitle>
                <CardDescription className="text-center text-base mt-2">
                  Wypełnij poniższe pola, a nasi specjaliści skontaktują się z
                  Tobą w ciągu 24 godzin
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12 animate-scale-in">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-12 w-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Dziękujemy za przesłanie formularza!
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Nasz zespół skontaktuje się z Tobą wkrótce.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <User className="h-5 w-5 mr-2 text-red-700" />
                        Dane kontaktowe
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          label="Imię"
                          placeholder="Jan"
                          value={formData.firstName}
                          onChange={e =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value
                            })
                          }
                          required
                        />
                        <Input
                          label="Nazwisko"
                          placeholder="Kowalski"
                          value={formData.lastName}
                          onChange={e =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value
                            })
                          }
                          required
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <Input
                          label="Firma"
                          placeholder="Nazwa firmy (opcjonalnie)"
                          value={formData.company}
                          onChange={e =>
                            setFormData({
                              ...formData,
                              company: e.target.value
                            })
                          }
                        />
                        <Input
                          label="Numer telefonu"
                          type="tel"
                          placeholder="+48 123 456 789"
                          value={formData.phone}
                          onChange={e =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="mt-4">
                        <Input
                          label="Email"
                          type="email"
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={e =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-red-700" />
                        Trasa transportu
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          label="Kod pocztowy miejsca załadunku"
                          placeholder="00-001"
                          value={formData.loadingPostalCode}
                          onChange={e =>
                            setFormData({
                              ...formData,
                              loadingPostalCode: e.target.value
                            })
                          }
                          required
                        />
                        <Input
                          label="Data załadunku"
                          type="date"
                          value={formData.loadingDate}
                          onChange={e =>
                            setFormData({
                              ...formData,
                              loadingDate: e.target.value
                            })
                          }
                          required
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <Input
                          label="Kod pocztowy miejsca rozładunku"
                          placeholder="00-001"
                          value={formData.unloadingPostalCode}
                          onChange={e =>
                            setFormData({
                              ...formData,
                              unloadingPostalCode: e.target.value
                            })
                          }
                          required
                        />
                        <Input
                          label="Data rozładunku"
                          type="date"
                          value={formData.unloadingDate}
                          onChange={e =>
                            setFormData({
                              ...formData,
                              unloadingDate: e.target.value
                            })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Package className="h-5 w-5 mr-2 text-red-700" />
                        Szczegóły przesyłki
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          label="Waga całkowita (kg)"
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
                        />
                        <Input
                          label="Ilość opakowań"
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
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <Input
                          label="Rodzaj opakowań"
                          placeholder="np. palety, kartony, skrzynie"
                          value={formData.packageType}
                          onChange={e =>
                            setFormData({
                              ...formData,
                              packageType: e.target.value
                            })
                          }
                          required
                        />
                        <Input
                          label="Wymiary opakowań"
                          placeholder="np. 120x80x100 cm"
                          value={formData.packageDimensions}
                          onChange={e =>
                            setFormData({
                              ...formData,
                              packageDimensions: e.target.value
                            })
                          }
                          required
                        />
                      </div>
                      <div className="mt-4">
                        <Textarea
                          label="Dodatkowe informacje"
                          placeholder="Specjalne wymagania, fix, direct, kilka miejsc rozładunku, ADR, winda, formaliści celne, itp."
                          rows={5}
                          value={formData.additionalInfo}
                          onChange={e =>
                            setFormData({
                              ...formData,
                              additionalInfo: e.target.value
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full shadow-xl hover:shadow-2xl text-xl py-6"
                      >
                        Wyślij zapytanie o wycenę
                      </Button>
                      <p className="text-center text-gray-600 text-sm mt-4">
                        Skontaktujemy się z Tobą w ciągu 24 godzin roboczych
                      </p>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-brand-red-700 via-brand-red-800 to-brand-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Wolisz porozmawiać z naszym ekspertem?
          </h2>
          <p className="text-xl mb-10 text-red-100 max-w-3xl mx-auto leading-relaxed">
            Zadzwoń teraz i uzyskaj natychmiastową wycenę transportu
          </p>
          <a
            href="tel:570112512"
            className="inline-flex items-center space-x-3 bg-white text-brand-red-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-10 py-5 text-2xl font-bold"
          >
            <Phone className="h-7 w-7" />
            <span>570 112 512</span>
          </a>
          <p className="mt-6 text-red-200">
            Dostępni od poniedziałku do piątku, 8:00 - 18:00
          </p>
        </div>
      </section>
    </div>
  );
}
