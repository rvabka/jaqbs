'use client';

import type React from 'react';

import { useState } from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Label } from '@/components/ui/Label';
import {
  Truck,
  Users,
  Clock,
  Shield,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

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
    <div className="min-h-screen bg-white">

      <section className="relative bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-red-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-logistics-pattern.png')] opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red-700/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-8">
              <Truck className="h-5 w-5" />
              <span>Dołącz do naszej sieci</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
              Dla Przewoźnika
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed">
              Szukasz stabilnego partnera biznesowego? Dołącz do naszej sieci
              przewoźników i rozwijaj swoją firmę z Jaqbs
            </p>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
              <CardContent className="p-6 text-center">
                <Truck className="h-10 w-10 mx-auto mb-3 text-white" />
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-sm text-gray-200">
                  Przewoźników w sieci
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-10 w-10 mx-auto mb-3 text-white" />
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-sm text-gray-200">Zleceń rocznie</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
              <CardContent className="p-6 text-center">
                <Clock className="h-10 w-10 mx-auto mb-3 text-white" />
                <div className="text-4xl font-bold mb-2">7 dni</div>
                <div className="text-sm text-gray-200">Termin płatności</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
              <CardContent className="p-6 text-center">
                <Shield className="h-10 w-10 mx-auto mb-3 text-white" />
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-gray-200">Bezpieczeństwo</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-blue-700/5 to-brand-red-700/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
              <div className="w-2 h-2 bg-brand-red-700 rounded-full"></div>
              <span>Korzyści ze współpracy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Dlaczego <span className="gradient-text">Jaqbs?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Oferujemy najlepsze warunki współpracy dla przewoźników w branży
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
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
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center space-x-2 bg-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-blue-800 mb-6">
                <CheckCircle className="h-4 w-4" />
                <span>Wymagania</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Czego <span className="gradient-text">oczekujemy?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Aby dołączyć do naszej sieci przewoźników, Twoja firma powinna
                spełniać następujące wymagania:
              </p>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-brand-blue-700 to-brand-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <Card className="hover-lift shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Formularz kontaktowy
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Imię i nazwisko *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={e =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={e =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Nazwa firmy *</Label>
                      <Input
                        id="company"
                        required
                        value={formData.company}
                        onChange={e =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="fleet">Liczba pojazdów</Label>
                      <Input
                        id="fleet"
                        value={formData.fleet}
                        onChange={e =>
                          setFormData({ ...formData, fleet: e.target.value })
                        }
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Wiadomość</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={e =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="mt-2"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-brand-red-700 to-brand-blue-700 hover:from-brand-red-800 hover:to-brand-blue-800 text-white py-6 text-lg font-semibold"
                    >
                      Wyślij zgłoszenie
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red-700/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Gotowy na współpracę?
          </h2>
          <p className="text-xl text-gray-200 mb-12 text-balance leading-relaxed">
            Skontaktuj się z nami już dziś i dołącz do grona zadowolonych
            przewoźników współpracujących z Jaqbs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-brand-red-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-10 py-6 text-lg font-bold">
              Zadzwoń: +48 570 112 512
            </Button>
            <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-red-700 transition-all duration-300 rounded-full px-10 py-6 text-lg font-bold bg-transparent">
              Napisz: biuro@jaqbs.eu
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
