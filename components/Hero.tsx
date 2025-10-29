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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            filter: 'blur(8px)',
            transform: 'scale(1.05)',
            transformOrigin: 'center center'
          }}
          onLoadedData={e => {
            const video = e.currentTarget;
            video.play().catch(() => {});
          }}
        >
          <source src="/background-original.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red-900/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue-900/20 rounded-full blur-3xl animate-float-glow"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-bounce-glow"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="flex flex-col items-center space-y-8">
          <div
            className={`text-center space-y-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mt-5">
              <Building2 className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                Od 2010 roku w branży spedycyjnej
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-wide">
              <span className="block mb-3 text-white">
                Twój Partner w Logistyce
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Profesjonalny transport krajowy i międzynarodowy z gwarancją
              bezpieczeństwa i terminowości
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href={'/kontakt'}
                className="group relative px-8 py-4 bg-white text-brand-blue-900 rounded-full font-semibold text-lg shadow-lg hover:shadow-white/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Skontaktuj się z nami</span>
              </Link>
              <Link
                href={'/wycena'}
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Poproś o wycenę</span>
              </Link>
            </div>
          </div>

          <div
            className={`w-full max-w-2xl transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="relative glass backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {deliverySteps.map((step, index) => {
                  const isActive = index === currentStep;
                  return (
                    <div
                      key={index}
                      className={`flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-500 ${
                        isActive
                          ? 'bg-gradient-to-br from-brand-red-900/30 to-brand-red-800/30 border-2 border-brand-red-900/50 scale-105'
                          : 'bg-white/5 border-2 border-white/10'
                      }`}
                    >
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3 transition-all duration-500 ${
                          isActive
                            ? 'bg-gradient-to-br from-brand-red-900 to-brand-red-800 shadow-lg shadow-brand-red-900/50'
                            : 'bg-white/10'
                        }`}
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3
                        className={`font-bold mb-1 transition-all duration-500 ${
                          isActive
                            ? 'text-brand-red-900 text-lg'
                            : 'text-white text-base'
                        }`}
                      >
                        {step.label}
                      </h3>
                      <p
                        className={`text-sm transition-colors duration-500 ${
                          isActive ? 'text-gray-200' : 'text-white/70'
                        }`}
                      >
                        {step.description}
                      </p>
                      {isActive && (
                        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mt-3">
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

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
