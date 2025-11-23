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
    const progressInterval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev >= 3 ? 0 : prev + 1));
    }, 3000);
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
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-8 relative z-10 w-full">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          <div
            className={`text-center space-y-3 md:space-y-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-5 py-1.5 md:py-2 border border-white/20">
              <Building2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              <span className="text-xs md:text-sm font-medium text-white">
                Od 2010 roku w branży spedycyjnej
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-wide px-4">
              <span className="block mb-2 text-white drop-shadow-2xl">
                Twój Partner w Logistyce
              </span>
            </h1>

            <p className="text-sm md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto px-4">
              Profesjonalny transport krajowy i międzynarodowy z gwarancją
              bezpieczeństwa i terminowości
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 md:gap-3 pt-2 px-4">
              <Link
                href={'/kontakt'}
                className="w-full sm:w-auto group relative px-5 md:px-7 py-2.5 md:py-3 bg-white text-brand-blue-900 rounded-full font-semibold text-sm md:text-base shadow-lg hover:shadow-white/30 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <PhoneCall className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                <span>Skontaktuj się z nami</span>
              </Link>
              <Link
                href={'/wycena'}
                className="w-full sm:w-auto group relative px-5 md:px-7 py-2.5 md:py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-sm md:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                <span>Poproś o wycenę</span>
              </Link>
            </div>
          </div>

          <div
            className={`w-full max-w-2xl px-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="relative glass backdrop-blur-xl rounded-2xl md:rounded-3xl p-3 md:p-5 border border-white/30 shadow-2xl">
              <div className="grid grid-cols-2 gap-2.5 md:gap-3">
                {deliverySteps.map((step, index) => {
                  const isActive = index === currentStep;
                  return (
                    <div
                      key={index}
                      className={`flex flex-col items-center text-center p-2.5 md:p-3 rounded-xl md:rounded-2xl transition-all duration-500 ${
                        isActive
                          ? 'bg-gradient-to-br from-brand-red-900/30 to-brand-red-800/30 border-2 border-brand-red-900/50 scale-105'
                          : 'bg-white/5 border-2 border-white/10'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-1.5 md:mb-2 transition-all duration-500 ${
                          isActive
                            ? 'bg-gradient-to-br from-brand-red-900 to-brand-red-800 shadow-lg shadow-brand-red-900/50'
                            : 'bg-white/10'
                        }`}
                      >
                        <step.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                      <h3
                        className={`font-bold mb-0.5 transition-all duration-500 text-sm md:text-base ${
                          isActive
                            ? 'text-brand-red-900 md:text-base'
                            : 'text-white'
                        }`}
                      >
                        {step.label}
                      </h3>
                      <p
                        className={`text-xs md:text-sm transition-colors duration-500 ${
                          isActive ? 'text-gray-200' : 'text-white/70'
                        }`}
                      >
                        {step.description}
                      </p>
                      {isActive && (
                        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mt-1.5 md:mt-2">
                          <div
                            className="h-full bg-gradient-to-r from-brand-red-900 to-brand-red-800 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          ></div>
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

      <div className="absolute bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-white/60 rounded-full mt-1.5 md:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
