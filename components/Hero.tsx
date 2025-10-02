'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Play, Truck, ArrowRight, Globe, Shield, BusFront } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const stats = [
    { icon: Globe, number: '50+', label: 'Countries' },
    { icon: Truck, number: '10K+', label: 'Deliveries' },
    { icon: Shield, number: '99.9%', label: 'Success Rate' }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-blue-700/10 to-brand-red-700/10 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-brand-red-700/10 to-brand-blue-700/10 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            animationDelay: '2s'
          }}
        ></div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-red-700/20 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-20 relative z-10">
        {/* Left Content */}
        <div
          className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-red-700/10 to-brand-blue-700/10 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 animate-pulse-glow">
            <div className="w-2 h-2 bg-brand-red-700 rounded-full animate-pulse"></div>
            <span>Trusted by 10,000+ businesses worldwide</span>
          </div>

          <div>
            <h1 className="text-3xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              <span className="inline-block animate-fade-in-up">
                TRANSPORT KRAJOWY I MIĘDZYNARODOWY
              </span>
            </h1>
          </div>

          <p
            className={`text-xl text-gray-600 leading-relaxed max-w-lg transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
          >
            Leverage our cutting-edge logistics solutions to streamline your
            supply chain and expand your global reach with confidence.
          </p>

          {/* Stats */}
          <div className="flex items-center space-x-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700`}
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-xl flex items-center justify-center mx-auto mb-2 hover:rotate-12 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-brand-red-800" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div
            className={`flex items-center space-x-4 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-blue-700 to-brand-blue-800 hover:from-brand-blue-800 hover:to-brand-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-6 text-lg group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center space-x-2 rounded-full px-6 py-6 border-2 hover:bg-gray-50 transition-all duration-300 group"
            >
              <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Watch Video</span>
            </Button>
          </div>
        </div>

        {/* Right Content - Truck Image */}
        <div
          className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-br from-brand-blue-700 to-brand-blue-800 rounded-3xl p-8 transform rotate-2 shadow-2xl hover:rotate-1 transition-all duration-500 animate-float hover-glow">
            <div className="bg-white rounded-2xl p-8 transform -rotate-2 shadow-inner">
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                <Truck className="h-32 w-32 text-brand-red-800 drop-shadow-lg hover:scale-110 transition-transform duration-300" />

                {/* Moving elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full w-3/4 animate-pulse"></div>
                <div
                  className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full w-1/2 animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-brand-red-700/20 to-brand-red-800/20 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-brand-blue-700/20 to-brand-blue-800/20 rounded-full blur-lg animate-float"
            style={{ animationDelay: '1s' }}
          ></div>

          {/* Floating icons */}
          <div className="absolute top-10 -left-10 w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg animate-float hover-lift">
            <Truck className="h-8 w-8 text-brand-blue-700" />
          </div>
          <div
            className="absolute -bottom-4 -left-8 w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg animate-float hover-lift"
            style={{ animationDelay: '2s' }}
          >
            <BusFront className="h-7 w-7 text-brand-red-700" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
