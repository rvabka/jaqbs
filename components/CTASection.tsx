'use client';

import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showSecondaryButton?: boolean;
  backgroundPattern?: string;
  className?: string;
}

export default function CTASection({
  title = 'Gotowy do współpracy?',
  description = 'Skontaktuj się z nami już dziś i przekonaj się, dlaczego warto z nami współpracować',
  primaryButtonText = 'Skontaktuj się z nami',
  primaryButtonHref = '/kontakt',
  secondaryButtonText = 'Zobacz ofertę',
  secondaryButtonHref = '/o-nas',
  showSecondaryButton = true,
  className = ''
}: CTASectionProps) {
  return (
    <section
      className={`py-12 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 text-white relative overflow-hidden px-3 ${className}`}
    >
      <div className="absolute inset-0 opacity-5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red-700/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-900/20 rounded-full blur-3xl"></div>

      <AnimatedSection
        direction="fade"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <AnimatedSection direction="up" delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {title}
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.4}>
          <p className="text-xl text-gray-200 mb-12 text-balance leading-relaxed">
            {description}
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className=" shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-10 py-6 text-md lg:text-lg font-bold"
            >
              <Link href={primaryButtonHref}>{primaryButtonText}</Link>
            </Button>

            {showSecondaryButton && (
              <Button
                asChild
                variant="secondary"
                className="border-2 border-white transition-all duration-300 rounded-full px-10 py-6 text-md lg:text-lg font-bold bg-transparent"
              >
                <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </AnimatedSection>
      </AnimatedSection>
    </section>
  );
}
