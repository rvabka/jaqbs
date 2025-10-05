'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card, CardContent } from '@/components/ui/Card';
import { Label } from '@/components/ui/Label';
import {
  AnimatedSection,
  StaggeredContainer,
  StaggeredItem
} from '@/components/ui/AnimatedSection';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Building2,
  CreditCard,
  FileText,
  AlertCircle,
  Truck,
  DollarSign,
  MessageSquare,
  Clock,
  Headphones,
  User
} from 'lucide-react';
import GoogleMap from '@/components/GoogleMap';
import CTASection from '@/components/CTASection';
import FormSection from '@/components/FormSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const departments = [
    {
      name: 'SIEDZIBA',
      icon: Building2,
      color: 'from-brand-red-800 to-brand-red-900',
      contacts: [
        { type: 'address', value: 'ul. Zemborzycka 53B, 20-445 Lublin' },
        { type: 'phone', value: '+48 570 112 512' },
        { type: 'email', value: 'office@jaqbs.eu' }
      ]
    },
    {
      name: 'DZIAŁ WINDYKACJI',
      icon: DollarSign,
      color: 'from-brand-blue-800 to-brand-blue-900',
      contacts: [
        { type: 'phone', value: '+48 510 850 604' },
        { type: 'email', value: 'payments@jaqbs.eu' }
      ]
    },
    {
      name: 'DZIAŁ SPEDYCJI I TRANSPORTU',
      icon: Truck,
      color: 'from-brand-red-800 to-brand-red-900',
      contacts: [
        { type: 'phone', value: '+48 570 112 512' },
        { type: 'email', value: 'spedycja@jaqbs.eu' }
      ]
    },
    {
      name: 'DZIAŁ REKLAMACJI',
      icon: AlertCircle,
      color: 'from-brand-blue-800 to-brand-blue-900',
      contacts: [
        { type: 'phone', value: '+48 573 400 639' },
        { type: 'email', value: 'reklamacje@jaqbs.eu' }
      ]
    },
    {
      name: 'DZIAŁ DOKUMENTACJI',
      icon: FileText,
      color: 'from-brand-red-800 to-brand-red-900',
      contacts: [
        { type: 'phone', value: '+48 510 850 630' },
        { type: 'email', value: 'cmr@jaqbs.eu' }
      ]
    },
    {
      name: 'DZIAŁ PŁATNOŚCI',
      icon: CreditCard,
      color: 'from-brand-blue-800 to-brand-blue-900',
      contacts: [
        { type: 'phone', value: '+48 510 850 739' },
        { type: 'email', value: 'platnosci@jaqbs.eu' }
      ]
    }
  ];

  const stats = [
    { label: 'Czas odpowiedzi', value: '<24h', icon: Clock },
    { label: 'Dostępność', value: '24/7', icon: Headphones },
    { label: 'Biur w Polsce', value: '4', icon: Building2 },
    { label: 'Kanałów kontaktu', value: '6', icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-red-800 text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection direction="fade" className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-8">
              <MessageSquare className="h-5 w-5" />
              <span>Jesteśmy do Twojej dyspozycji</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
                Skontaktuj się z nami
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed">
                Odpowiemy na wszystkie Twoje pytania i pomożemy w realizacji
                Twoich potrzeb transportowych
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <StaggeredContainer
            staggerDelay={0.1}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-10 w-10 mx-auto mb-3 text-white" />
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-200">{stat.label}</div>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-blue-700/5 to-brand-red-700/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
              <div className="w-2 h-2 bg-brand-red-700 rounded-full animate-pulse"></div>
              <span>Nasze działy</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Z kim chcesz porozmawiać?
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                Wybierz odpowiedni dział, aby szybko uzyskać pomoc
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <StaggeredContainer
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <StaggeredItem key={dept.name} direction="up">
                  <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden group h-[200px]">
                    <div className={`h-2 bg-gradient-to-r ${dept.color}`} />
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${dept.color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 flex-1 pt-2 group-hover:text-brand-red-700 transition-colors">
                          {dept.name}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {dept.contacts.map((contact, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-sm"
                          >
                            {contact.type === 'phone' && (
                              <>
                                <Phone className="w-4 h-4 text-brand-red-600 mt-0.5 flex-shrink-0" />
                                <a
                                  href={`tel:${contact.value}`}
                                  className="text-gray-700 hover:text-brand-red-600 transition-colors"
                                >
                                  {contact.value}
                                </a>
                              </>
                            )}
                            {contact.type === 'email' && (
                              <>
                                <Mail className="w-4 h-4 text-brand-blue-600 mt-0.5 flex-shrink-0" />
                                <a
                                  href={`mailto:${contact.value}`}
                                  className="text-gray-700 hover:text-brand-blue-600 transition-colors break-all"
                                >
                                  {contact.value}
                                </a>
                              </>
                            )}
                            {contact.type === 'address' && (
                              <>
                                <MapPin className="w-4 h-4 text-brand-red-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                  {contact.value}
                                </span>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              );
            })}
          </StaggeredContainer>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-blue-800 mb-6">
              <MapPin className="h-4 w-4" />
              <span>Nasza lokalizacja</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Odwiedź nas w Lublinie
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                ul. Zemborzycka 53B, 20-445 Lublin
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.6}>
            <GoogleMap />
          </AnimatedSection>
        </div>
      </section>

      <FormSection
        title="Wyślij nam wiadomość"
        description="Wypełnij formularz, a my skontaktujemy się z Tobą jak najszybciej"
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <User className="h-5 w-5 mr-2 text-brand-red-700" />
              Dane kontaktowe
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-700"
                >
                  Imię i nazwisko <span className="text-brand-red-600">*</span>
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
                  Email <span className="text-brand-red-600">*</span>
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
            <div className="mt-4 space-y-2">
              <Label
                htmlFor="subject"
                className="text-sm font-semibold text-gray-700"
              >
                Temat
              </Label>
              <Input
                id="subject"
                placeholder="Temat wiadomości"
                value={formData.subject}
                onChange={e =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="h-12"
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-brand-red-700" />
              Treść wiadomości
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
                placeholder="Twoja wiadomość..."
                value={formData.message}
                onChange={e =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="min-h-[150px] resize-none"
                rows={6}
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <Button type="submit" size="lg" className="w-full h-14 text-lg">
              <Send className="w-5 h-5 mr-2" />
              Wyślij wiadomość
            </Button>
            <p className="text-center text-gray-600 text-sm mt-4">
              Skontaktujemy się z Tobą w ciągu 24 godzin roboczych
            </p>
          </div>
        </form>
      </FormSection>

      <CTASection />
    </div>
  );
}
