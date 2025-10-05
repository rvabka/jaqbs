'use client';

import { useState, useEffect } from 'react';
import { Shield, Truck, Clock, Headphones } from 'lucide-react';
import {
  AnimatedSection,
  StaggeredContainer,
  StaggeredItem
} from './ui/AnimatedSection';

export default function Services() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  const backgroundElements = [
    { left: '10%', top: '20%', delay: '0s', duration: '4s' },
    { left: '80%', top: '15%', delay: '1s', duration: '5s' },
    { left: '30%', top: '70%', delay: '2s', duration: '3s' },
    { left: '70%', top: '80%', delay: '3s', duration: '6s' },
    { left: '50%', top: '30%', delay: '4s', duration: '4s' },
    { left: '20%', top: '90%', delay: '0.5s', duration: '5s' },
    { left: '90%', top: '60%', delay: '2.5s', duration: '3s' },
    { left: '60%', top: '10%', delay: '1.5s', duration: '4s' }
  ];

  const floatingParticles = [
    { left: '20%', top: '20%', delay: '0s' },
    { left: '50%', top: '40%', delay: '0.3s' },
    { left: '80%', top: '60%', delay: '0.6s' }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services = [
    {
      icon: Shield,
      title: 'Safest Supply',
      description: 'Advanced safety protocols with 99.9% cargo integrity rate.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Truck,
      title: '100% Trusted',
      description:
        'Decade of excellence with industry-leading reliability scores.',
      color: 'from-brand-blue-700 to-brand-blue-800',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Clock,
      title: 'Fastest Delivery',
      description:
        'AI-optimized routes delivering 40% faster than industry average.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      icon: Headphones,
      title: 'Fastest Transport',
      description: '24/7 support with advanced logistics network coverage.',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
      {isClient && (
        <div className="absolute inset-0">
          {backgroundElements.map((element, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-brand-red-700/10 rounded-full animate-pulse"
              style={{
                left: element.left,
                top: element.top,
                animationDelay: element.delay,
                animationDuration: element.duration
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection direction="fade" className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-blue-50 rounded-full px-4 py-2 text-sm font-medium text-red-800 mb-6">
            <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></div>
            <span>Powerful Features</span>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Nasze największe <span className="gradient-text">osiągnięcia</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Industry-leading safety standards with 99.8% customer satisfaction
              rate across 50+ countries.
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <StaggeredContainer
          staggerDelay={0.15}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <StaggeredItem key={index} direction="up" className="h-full">
              <div
                className="service-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-brand-red-100 hover:-translate-y-4 cursor-pointer relative overflow-hidden h-full"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-red-800 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${service.color} rounded-full transition-all duration-1000 ${
                        hoveredItem === index ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                </div>

                {isClient && hoveredItem === index && (
                  <>
                    {floatingParticles.map((particle, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-brand-red-700/30 rounded-full animate-pulse"
                        style={{
                          left: particle.left,
                          top: particle.top,
                          animationDelay: particle.delay
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
