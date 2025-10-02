'use client';

import { useState } from 'react';

export default function Wycena() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    features: [] as string[],
    timeline: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    companyName: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData(prev => ({ ...prev, features: [...prev.features, value] }));
    } else {
      setFormData(prev => ({
        ...prev,
        features: prev.features.filter(item => item !== value)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // W prawdziwej implementacji tutaj byłoby wysłanie danych do API
      await new Promise(resolve => setTimeout(resolve, 1500)); // Symulacja opóźnienia sieci

      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Darmowa wycena projektu
      </h1>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {!submitSuccess ? (
          <>
            {/* Progress bar */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Krok {step} z 3</span>
                <span className="text-sm font-medium">
                  {Math.round((step / 3) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">
                    Informacje o projekcie
                  </h2>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Rodzaj projektu *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="" disabled>
                        Wybierz rodzaj projektu
                      </option>
                      <option value="website">Strona internetowa</option>
                      <option value="e-commerce">Sklep internetowy</option>
                      <option value="web-app">Aplikacja webowa</option>
                      <option value="mobile-app">Aplikacja mobilna</option>
                      <option value="other">Inne</option>
                    </select>
                  </div>

                  <div>
                    <p className="block text-sm font-medium text-gray-700 mb-2">
                      Funkcjonalności (zaznacz wszystkie, które Cię interesują)
                      *
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { id: 'responsive', label: 'Responsywny design' },
                        {
                          id: 'cms',
                          label: 'System zarządzania treścią (CMS)'
                        },
                        { id: 'blog', label: 'Blog' },
                        { id: 'seo', label: 'Optymalizacja SEO' },
                        { id: 'analytics', label: 'Analityka i statystyki' },
                        {
                          id: 'social',
                          label: 'Integracja z mediami społecznościowymi'
                        },
                        { id: 'payments', label: 'System płatności online' },
                        {
                          id: 'users',
                          label: 'System rejestracji użytkowników'
                        }
                      ].map(feature => (
                        <div key={feature.id} className="flex items-start">
                          <input
                            id={feature.id}
                            name="features"
                            type="checkbox"
                            value={feature.id}
                            checked={formData.features.includes(feature.id)}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 mt-1 text-primary focus:ring-primary border-gray-300 rounded"
                          />
                          <label
                            htmlFor={feature.id}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {feature.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferowany termin realizacji *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="" disabled>
                        Wybierz termin
                      </option>
                      <option value="asap">Jak najszybciej</option>
                      <option value="1month">W ciągu miesiąca</option>
                      <option value="3months">W ciągu 3 miesięcy</option>
                      <option value="6months">W ciągu pół roku</option>
                      <option value="flexible">Elastyczny</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Szacowany budżet *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="" disabled>
                        Wybierz budżet
                      </option>
                      <option value="under5k">Poniżej 5 000 zł</option>
                      <option value="5k-10k">5 000 - 10 000 zł</option>
                      <option value="10k-20k">10 000 - 20 000 zł</option>
                      <option value="20k-50k">20 000 - 50 000 zł</option>
                      <option value="over50k">Powyżej 50 000 zł</option>
                      <option value="notSure">Nie jestem pewien</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={
                        !formData.projectType ||
                        formData.features.length === 0 ||
                        !formData.timeline ||
                        !formData.budget
                      }
                      className="w-full py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      Następny krok
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Dane kontaktowe</h2>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nazwa firmy (opcjonalnie)
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="w-1/2 py-3 px-4 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Wstecz
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.name || !formData.email}
                      className="w-1/2 py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      Następny krok
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">
                    Dodatkowe informacje
                  </h2>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Opis projektu (opcjonalnie)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Opisz dokładniej swój projekt, cele, oczekiwania itp."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="w-1/2 py-3 px-4 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Wstecz
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-1/2 py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <div className="bg-green-100 text-green-800 p-6 rounded-lg mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 mx-auto text-green-600 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="text-2xl font-bold mb-4">
                Dziękujemy za przesłanie zapytania!
              </h2>
              <p className="mb-2">
                Twoja wycena została przyjęta do realizacji.
              </p>
              <p>Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
            </div>

            <button
              onClick={() => {
                setSubmitSuccess(false);
                setStep(1);
                setFormData({
                  projectType: '',
                  features: [],
                  timeline: '',
                  budget: '',
                  name: '',
                  email: '',
                  phone: '',
                  companyName: '',
                  message: ''
                });
              }}
              className="py-3 px-8 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Wyceń nowy projekt
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
