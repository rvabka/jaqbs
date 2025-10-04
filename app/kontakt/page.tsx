'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card, CardContent } from '@/components/ui/Card';
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
  Headphones
} from 'lucide-react';
import GoogleMap from '@/components/GoogleMap';

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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-red-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-logistics-pattern.png')] opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red-700/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-8">
              <MessageSquare className="h-5 w-5" />
              <span>Jesteśmy do Twojej dyspozycji</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
              Skontaktuj się z nami
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed">
              Odpowiemy na wszystkie Twoje pytania i pomożemy w realizacji
              Twoich potrzeb transportowych
            </p>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift"
              >
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-10 w-10 mx-auto mb-3 text-white" />
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-blue-700/5 to-brand-red-700/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
              <div className="w-2 h-2 bg-brand-red-700 rounded-full"></div>
              <span>Nasze działy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Z kim chcesz porozmawiać?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Wybierz odpowiedni dział, aby szybko uzyskać pomoc
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Card
                  key={dept.name}
                  className="hover-lift animate-scale-in border-0 shadow-lg overflow-hidden group h-[200px]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-blue-800 mb-6">
              <MapPin className="h-4 w-4" />
              <span>Nasza lokalizacja</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Odwiedź nas w Lublinie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              ul. Zemborzycka 53B, 20-445 Lublin
            </p>
          </div>
          <div className="animate-scale-in">
            <GoogleMap />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-red-700/5 to-brand-blue-700/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
              <Send className="h-4 w-4" />
              <span>Formularz kontaktowy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Wyślij nam wiadomość
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Wypełnij formularz, a my skontaktujemy się z Tobą jak najszybciej
            </p>
          </div>
          <Card className="shadow-2xl border-0 animate-scale-in hover-lift">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Imię i nazwisko{' '}
                      <span className="text-brand-red-600">*</span>
                    </label>
                    <Input
                      id="name"
                      required
                      placeholder="Jan Kowalski"
                      value={formData.name}
                      onChange={e =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="h-12 border-gray-300 focus:border-brand-red-600 focus:ring-brand-red-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Email <span className="text-brand-red-600">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="jan.kowalski@example.com"
                      value={formData.email}
                      onChange={e =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-12 border-gray-300 focus:border-brand-blue-600 focus:ring-brand-blue-600"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Temat
                  </label>
                  <Input
                    id="subject"
                    placeholder="Temat wiadomości"
                    value={formData.subject}
                    onChange={e =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="h-12 border-gray-300 focus:border-brand-red-600 focus:ring-brand-red-600"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Treść wiadomości
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Twoja wiadomość..."
                    value={formData.message}
                    onChange={e =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="min-h-[200px] border-gray-300 focus:border-brand-blue-600 focus:ring-brand-blue-600 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg bg-gradient-to-r from-brand-red-600 to-brand-blue-600 hover:from-brand-red-700 hover:to-brand-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Wyślij wiadomość
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red-700/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Potrzebujesz pilnej pomocy?
          </h2>
          <p className="text-xl text-gray-200 mb-12 text-balance leading-relaxed">
            Zadzwoń do nas lub napisz e-mail - nasz zespół jest gotowy, aby Ci
            pomóc
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-brand-red-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-10 py-6 text-lg font-bold"
            >
              <a href="tel:+48570112512" className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                +48 570 112 512
              </a>
            </Button>
            <Button
              className="border-2 border-white text-white hover:bg-white hover:text-brand-red-700 transition-all duration-300 rounded-full px-10 py-6 text-lg font-bold bg-transparent"
            >
              <a
                href="mailto:office@jaqbs.eu"
                className="flex items-center gap-3"
              >
                <Mail className="h-5 w-5" />
                office@jaqbs.eu
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
