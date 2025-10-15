'use client';

import { useState, useEffect } from 'react';
import {
  PhoneCall,
  FileText,
  TrendingUp,
  MapPin,
  Clock,
  Shield,
  Truck,
  Award,
  Zap,
  Building2,
  CircleCheck as CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  const deliverySteps = [
    {
      icon: Shield,
      label: 'Bezpieczeństwo',
      description: 'Ubezpieczenie każdej przesyłki'
    },
    { icon: Zap, label: 'Szybkość', description: 'Ekspresowa dostawa 24/7' },
    {
      icon: Award,
      label: 'Jakość',
      description: '99.9% zadowolonych klientów'
    },
    { icon: MapPin, label: 'Zasięg', description: '50+ krajów na świecie' }
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
          className="w-full h-full object-cover"
          style={{ filter: 'blur(4px)' }}
        >
          <source src="/background.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red-700/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl animate-float-glow"
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
            className={`w-full max-w-5xl transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="relative glass backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Twoje Korzyści
                    </h3>
                    <p className="text-white/80 text-sm">
                      Dlaczego warto nam zaufać
                    </p>
                  </div>

                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                      <Truck className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        Nowoczesna Flota
                      </h4>
                      <p className="text-red-400 text-sm font-semibold">
                        Ponad 100 pojazdów
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="text-3xl font-bold text-white mb-1">
                        10K+
                      </div>
                      <div className="text-xs text-white/70">
                        Dostaw rocznie
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-red-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-4 border border-red-400/30">
                      <div className="text-3xl font-bold text-white mb-1">
                        24/7
                      </div>
                      <div className="text-xs text-white">Wsparcie klienta</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {deliverySteps.map((step, index) => {
                    const status =
                      index === currentStep
                        ? 'active'
                        : index < currentStep
                          ? 'completed'
                          : 'pending';
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                            status === 'active'
                              ? 'bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg shadow-red-500/50 scale-110'
                              : 'bg-white/10 backdrop-blur-sm border-2 border-blue-400/20'
                          }`}
                        >
                          <step.icon className="w-6 h-6 transition-colors duration-500 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="mb-1">
                            <span
                              className={`font-semibold transition-all duration-500 ${
                                status === 'active'
                                  ? 'text-red-400 text-lg font-bold'
                                  : 'text-white'
                              }`}
                            >
                              {step.label}
                            </span>
                          </div>
                          <p
                            className={`text-sm transition-colors duration-500 ${
                              status === 'active'
                                ? 'text-cyan-100'
                                : 'text-white'
                            }`}
                          >
                            {step.description}
                          </p>
                          {status === 'active' && (
                            <div className="h-1 bg-white/20 rounded-full overflow-hidden mt-2">
                              <div
                                className="h-full bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 shadow-[0_0_10px_rgba(248,113,113,0.8)]"
                                style={{ width: `${progress}%` }}
                              ></div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
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
