'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { X, Cookie } from 'lucide-react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-2xl animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <Cookie className="h-6 w-6 text-brand-red-900 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-gray-900 mb-1">
              Ta strona używa plików cookies
            </h3>
            <p className="text-sm text-gray-600">
              Używamy plików cookies i Google reCAPTCHA do ochrony formularzy
              przed spamem. Kontynuując, zgadzasz się na ich użycie.{' '}
              <Link
                href="/polityka-prywatnosci"
                className="text-brand-red-900 hover:underline"
              >
                Dowiedz się więcej
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={acceptCookies}
            className="bg-gradient-to-r from-brand-red-900 to-brand-red-800 hover:from-brand-red-800 hover:to-brand-red-900"
          >
            Akceptuję
          </Button>
        </div>
      </div>
    </div>
  );
}
