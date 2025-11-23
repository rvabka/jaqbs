'use client';

import { useState, useEffect } from 'react';
import { Truck, X, Instagram, Facebook, Linkedin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const navItems = [
    { href: '/', label: 'Strona główna' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/dla-przewoznika', label: 'Dla przewoźnika' },
    { href: '/wycena', label: 'Wycena' },
    { href: '/kariera', label: 'Kariera' },
    { href: '/kontakt', label: 'Kontakt' },
    { href: '/blog', label: 'Blog' }
  ];

  const socialMedia = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/jaqbs.eu/',
      icon: Instagram,
      color: 'hover:text-pink-600'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/jaqbs.lublin',
      icon: Facebook,
      color: 'hover:text-blue-600'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/jaqbs-sp-z-o-o-sp-k/',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'TikTok',
      href: 'hhttps://www.tiktok.com/@jaqbstransportispedycja',
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      color: 'hover:text-black'
    }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/90 backdrop-blur-md shadow-lg`}
        role="navigation"
        aria-label="Główna nawigacja"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 lg:py-4 z-50">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-brand-red-800 focus-visible:ring-offset-2 rounded-lg transition-shadow"
              aria-label="Strona główna Jaqbs"
            >
              <img
                src="/logo_small.png"
                className="h-7 lg:h-8 w-auto"
                alt="Logo Jaqbs"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-2 xl:space-x-6">
              <ul
                className="flex items-center space-x-2 xl:space-x-6 glass rounded-full px-3 xl:px-6 py-2 xl:py-3 z-50"
                role="menubar"
              >
                {navItems.map(item => (
                  <li key={item.href} role="none">
                    <Link
                      href={item.href}
                      role="menuitem"
                      className={`relative font-medium text-sm xl:text-base transition-all duration-300 hover:text-brand-red-800 outline-none focus-visible:ring-2 focus-visible:ring-brand-red-800 focus-visible:ring-offset-2 rounded px-1.5 xl:px-2 py-1 whitespace-nowrap ${
                        pathname === item.href
                          ? 'text-brand-red-800'
                          : 'text-gray-600'
                      }`}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.label}
                      {pathname === item.href && (
                        <div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red-700 to-brand-blue-700 rounded-full"
                          aria-hidden="true"
                        ></div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center space-x-2 xl:space-x-3">
                {socialMedia.map(social => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-600 transition-all duration-300 ${social.color} outline-none focus-visible:ring-2 focus-visible:ring-brand-red-800 focus-visible:ring-offset-2 rounded-lg p-1.5 hover:scale-110`}
                      aria-label={`Odwiedź nas na ${social.name}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 outline-none focus-visible:ring-2 focus-visible:ring-brand-red-800 focus-visible:ring-offset-2"
              aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? 'top-2.5 rotate-45 transform' : 'top-1.5 rotate-0'
                  }`}
                  aria-hidden="true"
                ></span>
                <span
                  className={`absolute left-0 top-2.5 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                  aria-hidden="true"
                ></span>
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? 'top-2.5 -rotate-45 transform' : 'top-3.5 rotate-0'
                  }`}
                  aria-hidden="true"
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ willChange: isOpen ? 'opacity' : 'auto' }}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ willChange: isOpen ? 'opacity, backdrop-filter' : 'auto' }}
          onClick={() => setIsOpen(false)}
          role="button"
          tabIndex={-1}
          aria-label="Zamknij menu"
        ></div>

        <div
          id="mobile-menu"
          className={`absolute top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ willChange: isOpen ? 'transform' : 'auto' }}
          role="dialog"
          aria-label="Menu mobilne"
        >
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Truck
                  className="h-6 w-6 text-brand-red-800"
                  aria-hidden="true"
                />
                <span className="text-lg font-bold gradient-text">Jaqbs</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-red-800 focus-visible:ring-offset-2"
                aria-label="Zamknij menu"
              >
                <X className="h-6 w-6 text-gray-600" aria-hidden="true" />
              </button>
            </div>
          </div>

          <nav
            className="flex-1 p-6 space-y-4 overflow-y-auto"
            aria-label="Menu mobilne"
          >
            <ul role="menu">
              {navItems.map((item, index) => (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    role="menuitem"
                    className={`block py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-red-50 hover:to-brand-blue-50 hover:text-brand-red-800 outline-none focus-visible:ring-2 focus-visible:ring-brand-red-800 focus-visible:ring-offset-2 ${
                      pathname === item.href
                        ? 'bg-gradient-to-r from-brand-red-50 to-brand-blue-50 text-brand-red-800'
                        : 'text-gray-700'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isOpen
                        ? 'slideInRight 0.5s ease-out forwards'
                        : 'none'
                    }}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t border-gray-100">
            <p className="text-base font-bold text-center text-gray-500 mb-4">
              Obserwuj nas
            </p>
            <div className="flex items-center justify-center space-x-6">
              {socialMedia.map(social => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 transition-all duration-300 ${social.color} hover:scale-110 outline-none focus-visible:ring-2 focus-visible:ring-brand-red-800 focus-visible:ring-offset-2 rounded-lg p-2`}
                    aria-label={`Odwiedź nas na ${social.name}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
