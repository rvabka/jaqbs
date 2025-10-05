'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Card, CardContent } from '@/components/ui/Card';
import {
  AnimatedSection,
  StaggeredContainer,
  StaggeredItem
} from './ui/AnimatedSection';
import { Star, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Partners() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const partners = [
    {
      name: 'FedEx',
      description: 'Global express delivery',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Amazon',
      description: 'E-commerce logistics',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      name: 'DPD',
      description: 'European parcel delivery',
      gradient: 'from-red-500 to-red-600'
    },
    {
      name: 'Schenker',
      description: 'Global logistics solutions',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'UPS',
      description: 'Package delivery & supply chain',
      gradient: 'from-amber-600 to-amber-700'
    },
    {
      name: 'DHL',
      description: 'International express',
      gradient: 'from-yellow-500 to-red-600'
    },
    {
      name: 'Maersk',
      description: 'Container shipping',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      name: 'TNT',
      description: 'Express delivery',
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
      {isClient && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-red-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-red-100/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '3s' }}
          ></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection direction="fade" className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-blue-50 rounded-full px-4 py-2 text-sm font-medium text-red-800 mb-6">
            <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></div>
            <span>Trusted Partners</span>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Zaufali <span className="gradient-text">nam</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Współpracujemy z największymi firmami logistycznymi na świecie,
              zapewniając najwyższą jakość usług transportowych.
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.6}>
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-100">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              pagination={false}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 50
                }
              }}
              className="partners-swiper"
            >
              {partners.map((partner, index) => (
                <SwiperSlide key={index}>
                  <Card className="group h-52 hover:shadow-xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative transition-all duration-500 hover:-translate-y-1 cursor-grab active:cursor-grabbing">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <CardContent className="p-6 text-center relative z-10">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${partner.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                      >
                        <span className="text-white font-bold text-sm">
                          {partner.name.slice(0, 3).toUpperCase()}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
                        {partner.name}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {partner.description}
                      </p>
                    </CardContent>

                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.8} className="mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Certyfikowane partnerstwa
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Wszystkie nasze partnerstwa są certyfikowane i regularnie
                  audytowane pod kątem jakości i niezawodności usług.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Gwarancja jakości
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Dzięki sprawdzonym partnerom gwarantujemy terminowość,
                  bezpieczeństwo i najwyższą jakość obsługi.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          delay={1.0}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-red-700 to-blue-700 text-white rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <Link href={'/dla-przewoznika'} className="text-lg font-semibold">
              Zostań naszym partnerem
            </Link>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
