'use client';

import { useState, useEffect } from 'react';
import {
  PhoneCall,
  FileText,
  MapPin,
  Shield,
  Zap,
  Building2,
  Coffee
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const deliverySteps = [
    {
      icon: Shield,
      label: 'Bezpieczeństwo',
      description: 'Ubezpieczenie każdej przesyłki'
    },
    { icon: Zap, label: 'Szybkość', description: 'Ekspresowa dostawa 24/7' },
    {
      icon: MapPin,
      label: 'Zasięg',
      description: 'Wszystkie kraje w Unii Europejskiej'
    },
    {
      icon: Coffee,
      label: 'Zawsze na czas',
      description: 'Nawet przed poranną kawą'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 0.5;
      });
    }, 25);
    return () => clearInterval(progressInterval);
  }, [currentStep]);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(prev => (prev >= 3 ? 0 : prev + 1));
      }, 400);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }, 5000);
    return () => clearInterval(stepInterval);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.webp"
          alt="Jaqbs Transport - Profesjonalny transport i spedycja"
          fill
          priority
          quality={100}
          className="object-cover object-center brightness-95"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-8 relative z-10 w-full">
        <div className="flex flex-col items-center space-y-8 md:space-y-12">
          <div
            className={`text-center space-y-4 md:space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-5 md:px-6 py-2 md:py-2.5 border border-white/20">
              <Building2 className="w-4 h-4 text-white" />
              <span className="text-xs md:text-sm font-medium text-white">
                Od 2010 roku w branży spedycyjnej
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-wide px-4">
              <span className="block mb-2 md:mb-3 text-white drop-shadow-2xl">
                Twój Partner w Transporcie
              </span>
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto px-4">
              Profesjonalny transport krajowy i międzynarodowy z gwarancją
              bezpieczeństwa i terminowości
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 md:pt-4 px-4">
              <Link
                href={'/kontakt'}
                className="w-full sm:w-auto group relative px-6 md:px-8 py-3 md:py-4 bg-white text-brand-blue-900 rounded-full font-semibold text-sm md:text-lg shadow-lg hover:shadow-white/30 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <PhoneCall className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                <span>Skontaktuj się z nami</span>
              </Link>
              <Link
                href={'/wycena'}
                className="w-full sm:w-auto group relative px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-sm md:text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                <span>Poproś o wycenę</span>
              </Link>
            </div>
          </div>

          <div
            className={`w-full max-w-5xl px-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="relative glass backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/30 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {deliverySteps.map((step, index) => {
                  const isActive = index === currentStep;
                  const isPrevious = index === (currentStep - 1 + 4) % 4;

                  return (
                    <div
                      key={index}
                      className={`relative flex flex-col items-center text-center p-4 md:p-5 rounded-xl md:rounded-2xl transition-all duration-700 ease-out ${
                        isActive
                          ? 'bg-gradient-to-br from-brand-red-900/30 to-brand-red-800/30 border-2 border-brand-red-900/50 shadow-lg shadow-brand-red-900/20'
                          : isPrevious
                            ? 'bg-white/5 border-2 border-white/10 opacity-90'
                            : 'bg-white/5 border-2 border-white/10 opacity-70'
                      } ${isTransitioning ? 'opacity-80' : ''}`}
                      style={{
                        transform: isActive ? 'scale(1.03)' : 'scale(1)'
                      }}
                    >
                      {isActive && !isTransitioning && (
                        <div className="absolute inset-0 rounded-xl md:rounded-2xl pointer-events-none">
                          <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-brand-red-900/20 to-transparent animate-ping-slow"></div>
                        </div>
                      )}

                      <div
                        className={`relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-3 transition-all duration-700 ease-out ${
                          isActive
                            ? 'bg-gradient-to-br from-brand-red-900 to-brand-red-800 shadow-lg shadow-brand-red-900/50'
                            : 'bg-white/10'
                        }`}
                      >
                        {isActive && !isTransitioning && (
                          <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-white/20 animate-pulse-slow pointer-events-none"></div>
                        )}
                        <step.icon
                          className="relative z-10 w-6 h-6 md:w-8 md:h-8 text-white transition-transform duration-700"
                          style={{
                            transform: isActive ? 'scale(1.1)' : 'scale(1)'
                          }}
                        />
                      </div>

                      <h3
                        className="font-bold mb-1 md:mb-1.5 transition-all duration-700 ease-out text-sm md:text-base lg:text-lg text-white"
                        style={{
                          transform: isActive ? 'scale(1.02)' : 'scale(1)'
                        }}
                      >
                        {step.label}
                      </h3>

                      <p
                        className={`text-xs md:text-sm transition-all duration-700 ease-out ${
                          isActive
                            ? 'text-gray-200 opacity-100'
                            : 'text-white/70 opacity-70'
                        }`}
                      >
                        {step.description}
                      </p>

                      {isActive && (
                        <div className="w-full mt-2 md:mt-3">
                          <div className="w-full h-1 md:h-1.5 bg-white/20 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-brand-red-900 via-brand-red-800 to-brand-red-900 rounded-full transition-all duration-100 ease-linear relative"
                              style={{
                                width: `${progress}%`,
                                boxShadow: '0 0 10px rgba(220, 38, 38, 0.5)'
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 md:w-7 md:h-12 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 md:h-4 bg-white/60 rounded-full mt-2 md:mt-2.5 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
