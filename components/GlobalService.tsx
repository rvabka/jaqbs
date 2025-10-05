'use client';

import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import {
  AnimatedSection,
  StaggeredContainer,
  StaggeredItem
} from './ui/AnimatedSection';
import Link from 'next/link';

export default function GlobalService() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const countries = [
    { name: 'Australia', flag: '🇦🇺', region: 'Oceania' },
    { name: 'Germany', flag: '🇩🇪', region: 'Europe' },
    { name: 'USA', flag: '🇺🇸', region: 'North America' },
    { name: 'England', flag: '🇬🇧', region: 'Europe' },
    { name: 'Mexico', flag: '🇲🇽', region: 'North America' },
    { name: 'Brazil', flag: '🇧🇷', region: 'South America' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <AnimatedSection direction="fade" className="mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-blue-50 rounded-full px-4 py-2 text-sm font-medium text-red-800 mb-6">
            <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></div>
            <span>Szeroki zasięg</span>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Jaqbs to firma{' '}
              <span className="gradient-text">międzynarodowa</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide reliable transportation services across multiple
              countries, ensuring your cargo reaches its destination safely and
              on time, wherever in the world it needs to go.
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <StaggeredContainer
          staggerDelay={0.1}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {countries.map((country, index) => (
            <StaggeredItem key={index} direction="up" duration={0.6}>
              <div className="group relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
                  <div className="relative z-10 flex flex-col items-center space-y-4">
                    <div className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter group-hover:drop-shadow-lg">
                      {country.flag}
                    </div>
                    <div className="text-center">
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        {country.name}
                      </span>
                      <div className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {country.region}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <AnimatedSection direction="up" delay={1.2} className="mt-20">
          <Link
            href={'/o-nas'}
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <Globe className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-lg font-semibold">
              Explore Global Network
            </span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
          </Link>
        </AnimatedSection>

        <AnimatedSection direction="fade" delay={1.4} className="mt-12">
          <p className="text-sm text-gray-400 italic">"Motto"</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
