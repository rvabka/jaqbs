'use client';

import { useState, useEffect } from 'react';
import { FileText, Shield, Award, Download } from 'lucide-react';
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

  const documents = [
    {
      name: 'Certyfikat',
      icon: FileText,
      file: '/docs/Certyfikat.pdf'
    },
    {
      name: 'Licencja spedycyjna',
      icon: FileText,
      file: '/docs/Licencja spedycyjna.pdf'
    },
    { name: 'Licencja unijna', icon: Award, file: '/docs/Licencja unijna.pdf' },
    {
      name: 'Zezwolenie',
      icon: FileText,
      file: '/docs/Zezwolenie.pdf'
    },
    {
      name: 'Ubezpieczeinie',
      icon: FileText,
      file: '/docs/Ubezpieczenie.pdf'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <AnimatedSection direction="fade" className="mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-blue-50 rounded-full px-4 py-2 text-sm font-medium text-red-800 mb-6">
            <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></div>
            <span>Dokumenty firmowe</span>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Licencje i <span className="gradient-text">certyfikaty</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Wszystkie niezbędne dokumenty, licencje i certyfikaty dostępne do
              pobrania. Działamy w pełni legalnie i transparentnie.
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <StaggeredContainer
          staggerDelay={0.1}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 m-auto"
        >
          {documents.map((doc, index) => (
            <StaggeredItem key={index} direction="up" duration={0.6}>
              <a
                href={doc.file}
                download
                className="group relative block h-full"
              >
                <div className="bg-brand-blue-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden h-[200px] flex flex-col">
                  <div className="absolute inset-0 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col items-center h-full">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <doc.icon className="w-8 h-8 text-brand-red-900" />
                    </div>
                    <span className="text-sm font-semibold text-white block mt-4">
                      {doc.name}
                    </span>
                    <div className="flex items-center justify-center gap-1 mt-auto text-xs text-white group-hover:text-brand-red-700 transition-all duration-300">
                      <Download className="w-3 h-3" />
                      <span className="font-bold">Pobierz PDF</span>
                    </div>
                  </div>
                </div>
              </a>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <AnimatedSection direction="up" delay={1.2} className="mt-16">
          <Link
            href={'/o-nas'}
            className="inline-flex items-center space-x-4 bg-brand-blue-900 text-white rounded-full px-8 py-4 shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <Award className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-lg font-semibold">
              Dowiedz się więcej o firmie
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
          <p className="text-sm text-gray-400 italic">
            "Działamy transparentnie – wszystkie dokumenty do wglądu"
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
