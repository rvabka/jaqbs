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
  User,
  CheckCircle2,
  Loader2,
  Clock,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import GoogleMap from '@/components/GoogleMap';
import CTASection from '@/components/CTASection';
import FormSection from '@/components/FormSection';
import { PageHero } from '@/components/PageHero';
import { useRecaptcha } from '@/hooks/useRecaptcha';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Wystąpił błąd');
      }

      setSubmitStatus({ type: 'success', message: data.message });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus({ type: 'idle' });
      }, 5000);
    } catch (error: any) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Wystąpił błąd podczas wysyłania wiadomości'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const departments = [
    {
      name: 'SIEDZIBA',
      icon: Building2,
      color: 'blue',
      contacts: [
        { type: 'address', value: 'ul. Zemborzycka 53B, 20-445 Lublin' },
        { type: 'phone', value: '+48 570 112 512' },
        { type: 'email', value: 'office@jaqbs.eu' }
      ]
    },
    {
      name: 'DZIAŁ WINDYKACJI',
      icon: DollarSign,
      color: 'red',
      contacts: [
        { type: 'phone', value: '+48 510 850 604' },
        { type: 'email', value: 'payments@jaqbs.eu' }
      ]
    },
    {
      name: 'DZIAŁ SPEDYCJI I TRANSPORTU',
      icon: Truck,
      color: 'blue',
      contacts: [
        { type: 'phone', value: '+48 570 112 512' },
        { type: 'email', value: 'spedycja@jaqbs.eu' }
      ]
    },
    {
      name: 'DZIAŁ REKLAMACJI',
      icon: AlertCircle,
      color: 'red',
      contacts: [
        { type: 'phone', value: '+48 573 400 639' },
        { type: 'email', value: 'reklamacje@jaqbs.eu' }
      ]
    },
    {
      name: 'DZIAŁ DOKUMENTACJI',
      icon: FileText,
      color: 'blue',
      contacts: [
        { type: 'phone', value: '+48 510 850 630' },
        { type: 'email', value: 'cmr@jaqbs.eu' }
      ]
    },
    {
      name: 'DZIAŁ PŁATNOŚCI',
      icon: CreditCard,
      color: 'red',
      contacts: [
        { type: 'phone', value: '+48 510 850 739' },
        { type: 'email', value: 'platnosci@jaqbs.eu' }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      content: 'ul. Zemborzycka 53B, 20-445 Lublin, Poland',
      link: 'https://maps.google.com/?q=Zemborzycka+53B+Lublin'
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+48 570 112 512',
      link: 'tel:+48570112512'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'office@jaqbs.eu',
      link: 'mailto:office@jaqbs.eu'
    },
    {
      icon: Clock,
      title: 'Godziny otwarcia',
      content: 'Biuro: pon-pt 07:30-15:30'
    }
  ];

  const companyInfo = [
    { label: 'NIP', value: 'PL9462667921' },
    { label: 'REGON', value: '366670731' },
    { label: 'KRS', value: '0001082037' }
  ];

  const socialMedia = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/jaqbs.lublin'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/jaqbs.eu/'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/jaqbs-sp-z-o-o-sp-k/'
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      url: 'https://www.tiktok.com/@jaqbstransportispedycja'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="Kontakt"
        description="Masz pytania? Napisz lub zadzwoń – z przyjemnością doradzimy i znajdziemy najlepsze rozwiązanie dla Twoich potrzeb transportowych."
      />

      <section className="py-12 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-blue-900/5 to-brand-red-900/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
              <div className="w-2 h-2 bg-brand-red-900 rounded-full animate-pulse"></div>
              <span>Nasze działy</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Z kim chcesz porozmawiać?
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                Wybierz dział, z którym chcesz się skontaktować, aby sprawnie
                uzyskać potrzebne informacje i wsparcie
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <StaggeredContainer
                staggerDelay={0.1}
                className="grid grid-cols-1 gap-6"
              >
                {departments.map(dept => {
                  const Icon = dept.icon;
                  return (
                    <StaggeredItem key={dept.name} direction="up">
                      <Card
                        hover={false}
                        className={`border-2 transition-all duration-300 ${
                          dept.color === 'blue'
                            ? 'border-brand-blue-100 hover:border-brand-blue-900'
                            : 'border-brand-red-100 hover:border-brand-red-900'
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div
                              className={`p-3 rounded-xl ${
                                dept.color === 'blue'
                                  ? 'bg-brand-blue-100'
                                  : 'bg-brand-red-100'
                              }`}
                            >
                              <Icon
                                className={`w-6 h-6 ${
                                  dept.color === 'blue'
                                    ? 'text-brand-blue-900'
                                    : 'text-brand-red-900'
                                }`}
                              />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 flex-1 pt-2">
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
                                    <Phone
                                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                        dept.color === 'blue'
                                          ? 'text-brand-blue-900'
                                          : 'text-brand-red-900'
                                      }`}
                                    />
                                    <a
                                      href={`tel:${contact.value}`}
                                      className={`transition-colors ${
                                        dept.color === 'blue'
                                          ? 'text-gray-700 hover:text-brand-blue-900'
                                          : 'text-gray-700 hover:text-brand-red-900'
                                      }`}
                                    >
                                      {contact.value}
                                    </a>
                                  </>
                                )}
                                {contact.type === 'email' && (
                                  <>
                                    <Mail
                                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                        dept.color === 'blue'
                                          ? 'text-brand-blue-900'
                                          : 'text-brand-red-900'
                                      }`}
                                    />
                                    <a
                                      href={`mailto:${contact.value}`}
                                      className={`transition-colors break-all ${
                                        dept.color === 'blue'
                                          ? 'text-gray-700 hover:text-brand-blue-900'
                                          : 'text-gray-700 hover:text-brand-red-900'
                                      }`}
                                    >
                                      {contact.value}
                                    </a>
                                  </>
                                )}
                                {contact.type === 'address' && (
                                  <>
                                    <MapPin
                                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                        dept.color === 'blue'
                                          ? 'text-brand-blue-900'
                                          : 'text-brand-red-900'
                                      }`}
                                    />
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

            <AnimatedSection direction="right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Dane kontaktowe
              </h2>

              <StaggeredContainer staggerDelay={0.1} className="space-y-6">
                {contactInfo.map((info, index) => (
                  <StaggeredItem key={index} direction="right">
                    <Card hover={false} className="transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-brand-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-6 w-6 text-brand-blue-900" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1">
                              {info.title}
                            </h3>
                            {info.link ? (
                              <a
                                href={info.link}
                                target={
                                  info.link.startsWith('http')
                                    ? '_blank'
                                    : undefined
                                }
                                rel={
                                  info.link.startsWith('http')
                                    ? 'noopener noreferrer'
                                    : undefined
                                }
                                className="text-brand-blue-900 hover:text-brand-blue-700 transition-colors"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-gray-600">{info.content}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggeredItem>
                ))}
              </StaggeredContainer>

              <div className="mt-8 p-6 bg-gradient-to-br from-brand-blue-50 to-brand-red-50 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-4">
                  Dane rejestrowe
                </h3>
                <div className="space-y-2">
                  {companyInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-600 font-medium">
                        {info.label}:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {info.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-gray-900 mb-4">Obserwuj nas</h3>
                <div className="flex gap-4">
                  {socialMedia.map((social, index) => {
                    const Icon = social.icon as React.ComponentType<any>;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white border-2 border-gray-200 hover:border-brand-blue-900 rounded-xl flex items-center justify-center transition-all group"
                      >
                        <Icon className="h-5 w-5 text-gray-700 group-hover:text-brand-blue-900 transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
              <p className="text-red-800 font-medium">{submitStatus.message}</p>
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
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-700"
                >
                  Imię i nazwisko <span className="text-brand-red-900">*</span>
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
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-brand-red-900" />
              Treść wiadomości
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
                placeholder="Twoja wiadomość..."
                value={formData.message}
                onChange={e =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="min-h-[150px] resize-none"
                rows={6}
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
                  Wyślij wiadomość
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

      <CTASection />
    </div>
  );
}
