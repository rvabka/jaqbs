'use client';

import { useState, useEffect } from 'react';
import {
  PhoneCall,
  FileText,
  MapPin,
  Shield,
  Zap,
  Coffee,
  Truck
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

  const titleText = 'Twój Partner w Transporcie';

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

      <div className="max-w-7xl mx-auto px-6 pb-0 lg:pb-8 relative z-10 w-full">
        <div className="flex flex-col items-center space-y-8 h-short:space-y-6 md:space-y-12">
          <div
            className={`text-center space-y-3 h-short:space-y-2.5 md:space-y-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-5 md:px-6 py-2 md:py-2.5 border border-white/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: 'easeOut'
                }}
              >
                <Truck className="w-8 h-8 text-white" />
              </motion.div>
              <span className="text-base md:text-lg font-medium text-white">
                Od 2010 roku w branży
              </span>
            </motion.div>

            <div className="relative px-4">
              <h1 className="text-4xl h-short:text-2xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-wide relative">
                <motion.span
                  className="block mb-2 h-short:mb-1.5 md:mb-3 text-white drop-shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {titleText}
                </motion.span>
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent origin-center"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-lg h-short:text-xs md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
            >
              Profesjonalny transport krajowy i międzynarodowy z gwarancją
              bezpieczeństwa i terminowości
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 h-short:pt-1.5"
            >
              <Link
                href={'/kontakt'}
                className="w-full sm:w-auto group relative px-6 md:px-8 py-3 md:py-4 bg-white text-brand-blue-900 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-white/30 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <PhoneCall className="w-5 h-5 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                <span>Skontaktuj się z nami</span>
              </Link>
              <Link
                href={'/wycena'}
                className="w-full sm:w-auto group relative px-6 md:px-8 py-3 md:py-4 bg-white/10 text-white border-2 border-white/30 rounded-full font-semibold text-base md:text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FileText className="w-5 h-5 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                <span>Poproś o wycenę</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="w-full max-w-5xl"
          >
            <div className="relative rounded-2xl md:rounded-3xl p-2 md:p-3 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {deliverySteps.map((step, index) => {
                  const isActive = index === currentStep;
                  const isPrevious = index === (currentStep - 1 + 4) % 4;

                  return (
                    <div
                      key={index}
                      className={`relative flex flex-col items-center text-center p-2 md:p-5 rounded-xl md:rounded-2xl h-[100px] h-short:h-[90px] lg:h-[220px] transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-brand-blue-900/50 to-brand-blue-800/50 border-2 border-brand-blue-500/50 shadow-lg'
                          : isPrevious
                            ? 'bg-white/5 border-2 border-white/10 opacity-90'
                            : 'bg-white/5 border-2 border-white/10 opacity-70'
                      } ${isTransitioning ? 'opacity-80' : ''}`}
                    >
                      <div
                        className={`relative w-10 h-10 h-short:w-9 h-short:h-9 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-1.5 h-short:mb-1 md:mb-3 transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 shadow-lg shadow-brand-blue-900/50'
                            : 'bg-white/10'
                        }`}
                      >
                        {isActive && !isTransitioning && (
                          <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-white/20 animate-pulse pointer-events-none"></div>
                        )}
                        <step.icon
                          className={`relative z-10 w-5 h-5 h-short:w-4.5 h-short:h-4.5 md:w-8 md:h-8 text-white transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}
                        />
                      </div>

                      <p
                        className={`font-bold mb-0.5 h-short:mb-0 md:mb-1.5 text-sm h-short:text-[11px] md:text-base lg:text-lg text-white transition-transform duration-300 ${isActive ? 'scale-105' : 'scale-100'}`}
                      >
                        {step.label}
                      </p>

                      <p
                        className={`text-xs md:text-sm transition-opacity duration-300 hidden lg:block ${
                          isActive
                            ? 'text-gray-200 opacity-100'
                            : 'text-white/70 opacity-70'
                        }`}
                      >
                        {step.description}
                      </p>

                      {isActive && (
                        <div className="w-full mt-auto pt-1 pb-2 h-short:pb-1.5 md:pb-3">
                          <div className="w-full h-0.5 h-short:h-[3px] md:h-1.5 bg-white/20 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-brand-blue-600 via-brand-blue-500 to-brand-blue-600 rounded-full"
                              style={{
                                width: `${progress}%`,
                                transition: 'width 25ms linear'
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hidden lg:block lg:absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="md:w-7 md:h-12 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 md:h-4 bg-white/60 rounded-full mt-2 md:mt-2.5 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
