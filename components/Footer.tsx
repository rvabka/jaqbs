'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <a href="/" className="flex items-center">
                <img src="/logo_small.png" className="h-8 w-auto" alt="Logo" />
              </a>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 mt-10">
              Profesjonalny transport krajowy i międzynarodowy z gwarancją
              bezpieczeństwa i terminowości
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-400 mb-2">
                  Dane kontaktowe
                </p>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href="tel:+48570112512" className="text-sm">
                    +48 570 112 512
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:office@jaqbs.eu" className="text-sm">
                    office@jaqbs.eu
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">Lublin, Polska</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-400">
                <p className="text-sm font-semibold text-gray-400 mb-2">
                  Dane firmy
                </p>
                <p className="text-sm">NIP: PL9462667921</p>
                <p className="text-sm">REGON: 366670731</p>
                <p className="text-sm">KRS: 0001082037</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Usługi</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Strona główna
                </Link>
              </li>
              <li>
                <Link
                  href="/o-nas"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  O nas
                </Link>
              </li>
              <li>
                <Link
                  href="/wycena"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Wycena
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Współpraca</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/dla-przewoznika"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Dla Przewoźnika
                </Link>
              </li>
              <li>
                <Link
                  href="/kariera"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Kariera
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Informacje</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/polityka-prywatnosci"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link
                  href="/regulamin"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Regulamin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Jaqbs. Wszelkie prawa zastrzeżone.
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
                Projekt i wykonanie:
                <a
                  href="https://www.linkedin.com/in/wiktor-stefaniak-4b9287279/"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={16} />
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-gray-800">
            <Link
              href="/polityka-prywatnosci"
              className="text-xs text-gray-500 hover:text-gray-400 transition-colors duration-300"
            >
              Polityka prywatności
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-gray-500 hover:text-gray-400 transition-colors duration-300"
            >
              Polityka cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
