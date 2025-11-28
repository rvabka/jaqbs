'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Job } from '@/lib/sanity/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Label } from '@/components/ui/Label';
import {
  AnimatedSection,
  StaggeredContainer,
  StaggeredItem
} from '@/components/ui/AnimatedSection';
import {
  MapPin,
  Clock,
  CheckCircle,
  FileText,
  UserCheck,
  GraduationCap,
  Briefcase,
  MessageCircle,
  Clock3,
  Leaf,
  Wrench,
  BookOpen,
  Send,
  User,
  Upload,
  ArrowDown,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Star
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import FormSection from '@/components/FormSection';
import { useRecaptcha } from '@/hooks/useRecaptcha';
import CompanyName from './CompanyName';

const onboardingSteps = [
  {
    id: 1,
    title: 'Aplikacja',
    description: 'Wyślij swoją aplikację z wymaganymi dokumentami',
    icon: FileText,
    color: 'bg-brand-red-900'
  },
  {
    id: 2,
    title: 'Rozmowa',
    description: 'Rozmowa telefoniczna lub wideo z naszym zespołem HR',
    icon: UserCheck,
    color: 'bg-brand-red-800'
  },
  {
    id: 3,
    title: 'Szkolenie',
    description: 'Ukończ nasz kompleksowy program szkoleniowy',
    icon: GraduationCap,
    color: 'bg-brand-blue-900'
  },
  {
    id: 4,
    title: 'Rozpocznij pracę',
    description: 'Rozpocznij swoją karierę w Jaqbs',
    icon: Briefcase,
    color: 'bg-brand-blue-800'
  }
];

const workCulture = [
  {
    icon: MessageCircle,
    title: 'Brak sztucznych barier',
    description:
      'W JAQBS stawiamy na naturalną komunikację — mówimy sobie po imieniu, a w biurze nie obowiązuje sztywny dress code. Atmosfera jest partnerska i otwarta dla każdego.'
  },
  {
    icon: Clock3,
    title: 'Elastyczne godziny pracy',
    description:
      'Każdy może dopasować swój start do rytmu dnia — pracę można zacząć w godzinach 7:00–9:00. Elastyczność pomaga nam być bardziej produktywnymi i kreatywnymi.'
  },
  {
    icon: Leaf,
    title: 'Dbałość o środowisko',
    description:
      'Ekologia i zrównoważony rozwój to dla nas ważne kwestie — zarówno w codziennym funkcjonowaniu biura, jak i w projektach, które realizujemy dla naszych klientów.'
  },
  {
    icon: Wrench,
    title: 'Własne narzędzia i innowacje',
    description:
      'Pracujemy na autorskich rozwiązaniach i narzędziach cyfrowych, które ułatwiają codzienną pracę i pozwalają stale podnosić efektywność.'
  },
  {
    icon: BookOpen,
    title: 'Rozwój i nauka',
    description:
      'Oferujemy szkolenia wewnętrzne, mentoring i programy rozwojowe, które pozwalają zdobyć wiedzę i doświadczenie w branży TSL.'
  }
];

const typeLabels: Record<string, string> = {
  'full-time': 'Pełny etat',
  'part-time': 'Część etatu',
  contract: 'Umowa zlecenie',
  internship: 'Staż'
};

interface CareerContentProps {
  jobs: Job[];
}

export default function CareerContent({ jobs }: CareerContentProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    cvFile: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const { getToken } = useRecaptcha();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % onboardingSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: 'idle' });

    try {
      const recaptchaToken = await getToken();

      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('recaptchaToken', recaptchaToken);

      if (formData.cvFile) {
        formDataToSend.append('cv', formData.cvFile);
      }

      const response = await fetch('/api/career', {
        method: 'POST',
        body: formDataToSend
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
        position: '',
        message: '',
        cvFile: null
      });

      const fileInput = document.getElementById('cv') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

      setTimeout(() => {
        setSubmitStatus({ type: 'idle' });
      }, 5000);
    } catch (error: any) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Wystąpił błąd podczas wysyłania aplikacji'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('application-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (file.size > 5 * 1024 * 1024) {
        alert('Plik jest zbyt duży. Maksymalny rozmiar to 5MB.');
        e.target.value = '';
        return;
      }

      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];

      if (!allowedTypes.includes(file.type)) {
        alert('Dozwolone formaty: PDF, DOC, DOCX');
        e.target.value = '';
        return;
      }

      setFormData({ ...formData, cvFile: file });
    }
  };

  return (
    <>
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-blue-800 mb-6">
              <div className="w-2 h-2 bg-brand-blue-900 rounded-full"></div>
              <span>Prosty proces</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Twoja droga do sukcesu
            </h2>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="absolute top-24 left-0 right-0 h-2 bg-gray-100 rounded-full transform z-0 hidden md:block mt-4"></div>
            <div
              className="absolute top-24 left-0 h-2 bg-gradient-to-r from-brand-red-900 to-brand-blue-900 rounded-full transform z-10 transition-all duration-1000 shadow-lg hidden md:block mt-4"
              style={{
                width: `${((activeStep + 1) / onboardingSteps.length) * 100}%`
              }}
            ></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20">
              {onboardingSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`text-center transform transition-all duration-700 ${index <= activeStep ? 'scale-105 md:scale-110 -translate-y-2' : 'scale-100'}`}
                >
                  <div
                    className={`w-24 h-24 mx-auto ${index <= activeStep ? step.color : 'bg-gray-200'} rounded-full flex items-center justify-center mb-4 lg:mb-14 transition-all duration-700 shadow-xl hover:shadow-2xl ${index <= activeStep ? 'animate-pulse-glow' : ''}`}
                  >
                    <step.icon
                      className={`h-12 w-12 ${index <= activeStep ? 'text-white' : 'text-gray-400'} transition-all duration-300`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 ${index <= activeStep ? 'text-gray-900' : 'text-gray-500'} transition-colors duration-300`}
                  >
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
              <div className="w-2 h-2 bg-brand-red-900 rounded-full animate-pulse"></div>
              <span>Kultura pracy</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Jak się pracuje w{' '}
                <span className="gradient-text">
                  <CompanyName /> ?
                </span>
              </h2>
            </AnimatedSection>
          </AnimatedSection>

          <StaggeredContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {workCulture.slice(0, 3).map((item, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg h-full bg-brand-blue-900 text-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand-red-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <item.icon className="h-8 w-8 " />
                    </div>
                    <h3 className="text-xl font-bold mb-3 transition-colors">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
          <StaggeredContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8"
          >
            {workCulture.slice(3).map((item, index) => (
              <StaggeredItem key={index + 3} direction="up">
                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg h-full bg-brand-blue-900 text-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand-red-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <item.icon className="h-8 w-8 " />
                    </div>
                    <h3 className="text-xl font-bold mb-3 transition-colors">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      <section className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
              <div className="w-2 h-2 bg-brand-red-900 rounded-full animate-pulse"></div>
              <span>Oferty pracy</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Otwarte pozycje
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                Odkryj możliwości w różnych działach z konkurencyjnymi
                wynagrodzeniami i potencjałem rozwoju.
              </p>
            </AnimatedSection>
          </AnimatedSection>

          {jobs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                Obecnie nie mamy otwartych pozycji. Sprawdź ponownie wkrótce!
              </p>
            </div>
          ) : (
            <StaggeredContainer
              staggerDelay={0.2}
              className="grid lg:grid-cols-2 gap-8 lg:gap-10"
            >
              {jobs.map(job => (
                <StaggeredItem key={job._id} direction="up">
                  <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-1 h-full flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-3 hover:text-brand-red-900 transition-colors flex items-center gap-2 flex-wrap">
                            {job.title}
                            {job.featured && (
                              <Star className="h-5 w-5 text-amber-500 fill-amber-500 flex-shrink-0" />
                            )}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4 flex-shrink-0" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4 flex-shrink-0" />
                              <span>{typeLabels[job.type] || job.type}</span>
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-brand-blue-100 to-brand-blue-50 text-brand-blue-900 px-3 py-1 rounded-full whitespace-nowrap"
                        >
                          {job.salary}
                        </Badge>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {job.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4 flex-1 flex flex-col">
                      <div className="mb-6 flex-1">
                        <h4 className="font-bold mb-3 text-gray-900">
                          Wymagania:
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <li
                              key={reqIndex}
                              className="flex items-start space-x-3 text-sm text-gray-600"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>

                        {job.benefits && job.benefits.length > 0 && (
                          <div className="mt-6">
                            <h4 className="font-bold mb-3 text-gray-900">
                              Oferujemy:
                            </h4>
                            <ul className="space-y-2">
                              {job.benefits.map((benefit, benefitIndex) => (
                                <li
                                  key={benefitIndex}
                                  className="flex items-start space-x-3 text-sm text-gray-600"
                                >
                                  <CheckCircle className="h-4 w-4 text-brand-blue-600 flex-shrink-0 mt-0.5" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <Button
                        onClick={() => {
                          setFormData({ ...formData, position: job.title });
                          scrollToForm();
                        }}
                        className="w-full bg-brand-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 h-12 mt-auto"
                      >
                        Aplikuj teraz
                        <ArrowDown className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          )}
        </div>
      </section>

      <section id="application-form">
        <FormSection
          title="Formularz aplikacyjny"
          description="Wypełnij formularz i dołącz swoje CV, a my skontaktujemy się z Tobą."
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
                    Numer telefonu <span className="text-brand-red-900">*</span>
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
                    htmlFor="position"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Stanowisko <span className="text-brand-red-900">*</span>
                  </Label>
                  <Input
                    id="position"
                    required
                    placeholder="np. Kierowca międzynarodowy"
                    value={formData.position}
                    onChange={e =>
                      setFormData({ ...formData, position: e.target.value })
                    }
                    className="h-12"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Upload className="h-5 w-5 mr-2 text-brand-red-900" />
                Załącz CV
              </h3>
              <div className="space-y-2">
                <Label
                  htmlFor="cv"
                  className="text-sm font-semibold text-gray-700"
                >
                  Plik CV (PDF, DOC, DOCX - max 5MB){' '}
                  <span className="text-brand-red-900">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="cv"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="h-[60px] cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-red-50 file:text-brand-red-900 hover:file:bg-brand-red-100"
                    disabled={isSubmitting}
                  />
                </div>
                {formData.cvFile && (
                  <p className="text-sm text-green-600 flex items-center mt-2">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Wybrano: {formData.cvFile.name}
                  </p>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-brand-red-900" />
                List motywacyjny
              </h3>
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-700"
                >
                  Dlaczego chcesz pracować w Jaqbs?
                </Label>
                <Textarea
                  id="message"
                  placeholder="Opisz swoje doświadczenie, motywację i dlaczego jesteś idealnym kandydatem..."
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
                    Wyślij aplikację
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
      </section>

      <CTASection
        title="Masz pytania dotyczące rekrutacji?"
        description="Skontaktuj się z naszym działem HR, który chętnie odpowie na wszystkie pytania dotyczące procesu rekrutacji i dostępnych stanowisk."
        primaryButtonText="Skontaktuj się z HR"
        primaryButtonHref="mailto:lowiskofajslawice@gmail.com"
        secondaryButtonText="Zadzwoń teraz"
        secondaryButtonHref="tel:+48570112512"
        showSecondaryButton={true}
      />
    </>
  );
}
