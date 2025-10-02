'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Truck, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

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

  const navItems = [
    { href: '/', label: 'Strona główna' },
    { href: '/o-nas', label: 'O nas' },
    { href: '#services', label: 'Współpraca' },
    { href: '#solutions', label: 'Wycena' },
    { href: '/kariera', label: 'Kariera' },
    { href: '/kontakt', label: 'Kontakt' },
    { href: '/blog', label: 'Blog' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/90 backdrop-blur-md shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 z-50">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img src="/logo_small.png" className="h-8 w-auto" alt="Logo" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-8 glass rounded-full px-6 py-3 z-50">
                {navItems.map(item => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative font-medium transition-all duration-300 hover:text-brand-red-800 ${
                      pathname === item.href
                        ? 'text-brand-red-800'
                        : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red-700 to-brand-blue-700 rounded-full"></div>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? 'rotate-45 top-2.5' : ''
                  }`}
                ></span>
                <span
                  className={`absolute top-2.5 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`absolute top-4 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? '-rotate-45 top-2.5' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl transform transition-all duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Truck className="h-6 w-6 text-brand-red-800" />
                <span className="text-lg font-bold gradient-text">
                  Moving Mountain
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-6 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`block py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-red-50 hover:to-brand-blue-50 hover:text-brand-red-800 ${
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
              >
                {item.label}
              </a>
            ))}
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
