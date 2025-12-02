'use client';

import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Send } from 'lucide-react';

interface FormSectionProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

export default function FormSection({
  title,
  description,
  children,
  className = ''
}: FormSectionProps) {
  return (
    <section className={`pb-8 ${className}`}>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-red-700/5 to-brand-blue-900/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto">
        <AnimatedSection direction="fade" className="text-center mb-16 px-6">
          <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
            <Send className="h-4 w-4" />
            <span>Formularz kontaktowy</span>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {title}
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              {description}
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.6}>
          <Card
            hover={false}
            className="shadow-2xl border-0 hover:shadow-3xl transition-all duration-300"
          >
            <CardContent className="p-8 md:p-12">{children}</CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
