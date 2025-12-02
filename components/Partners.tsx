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
import Image from 'next/image';

export default function Partners() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const partners = [
    { id: 1, name: 'Raben', image: '/sponsor1.webp' },
    { id: 2, name: 'Kuehne + Nagel', image: '/sponsor2.webp' },
    { id: 3, name: 'Ziegler', image: '/sponsor3.webp' },
    { id: 4, name: 'Neufra Spedition', image: '/sponsor4.webp' },
    { id: 5, name: 'Flash Transport', image: '/sponsor5.webp' },
    { id: 6, name: 'DHL', image: '/sponsor6.webp' },
    { id: 7, name: 'John Deere', image: '/sponsor7.webp' },
    { id: 8, name: 'Thyssenkrupp', image: '/sponsor8.webp' },
    { id: 9, name: 'Plastic Omnium', image: '/sponsor9.webp' },
    { id: 10, name: 'Bugatti', image: '/sponsor10.webp' },
    { id: 11, name: 'Faurecia', image: '/sponsor11.png' },
    { id: 12, name: 'Michelin', image: '/sponsor12.webp' },
    { id: 13, name: 'Schenker', image: '/sponsor13.webp' }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
      {isClient && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-red-100/20 to-brand-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-blue-100/20 to-brand-red-100/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '3s' }}
          ></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection direction="fade" className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-red-50 to-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
            <div className="w-2 h-2 bg-brand-red-900 rounded-full animate-pulse"></div>
            <span>Partnerzy</span>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Zaufali <span className="gradient-text">nam</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Współpracujemy z największymi firmami logistycznymi,
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
              {partners.map(partner => (
                <SwiperSlide key={partner.id}>
                  <Card className="group h-52 hover:shadow-xl border-0 bg-white backdrop-blur-sm overflow-hidden relative transition-all duration-500 hover:-translate-y-1 cursor-grab active:cursor-grabbing">
                    <CardContent className="p-6 flex items-center justify-center h-full relative z-10">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          width={200}
                          height={120}
                          className="object-contain max-w-full max-h-full group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                          priority={partner.id <= 4}
                        />
                      </div>
                    </CardContent>

                    <div className="absolute inset-0 bg-gradient-to-br from-brand-red-900/0 to-brand-blue-900/0 group-hover:from-brand-red-900/5 group-hover:to-brand-blue-900/5 transition-all duration-500"></div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.8} className="mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-brand-blue-900 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-brand-red-900 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Certyfikowane partnerstwa
                  </h3>
                </div>
                <p className="text-white leading-relaxed">
                  Wszystkie nasze partnerstwa posiadają wymagane certyfikaty i
                  podlegają regularnym audytom, które gwarantują najwyższe
                  standardy jakości oraz niezawodność świadczonych usług.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-blue-900 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-brand-red-900 rounded-xl flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Gwarancja jakości
                  </h3>
                </div>
                <p className="text-white leading-relaxed">
                  Dzięki ścisłej współpracy ze sprawdzonymi partnerami
                  zapewniamy niezawodność, bezpieczeństwo i najwyższy standard
                  obsługi.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          delay={1.0}
          className="mt-10 text-center"
        >
          <Link href={'/dla-przewoznika'}>
            <div className="inline-flex items-center space-x-4 bg-brand-blue-900 text-white rounded-full px-8 py-4 shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <span className="text-lg font-semibold">
                Zostań naszym partnerem
              </span>
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
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
