'use client';

import { useState, useEffect } from 'react';
import {
  MapPin,
  TrendingUp,
  Shield,
  Zap,
  Truck,
  BarChart3,
  Users,
  Settings
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card';
import {
  AnimatedSection,
  StaggeredContainer,
  StaggeredItem
} from './ui/AnimatedSection';

export default function Features() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const features = [
    {
      icon: MapPin,
      title: 'Real-time tracking',
      description:
        'Track your shipments in real-time with our advanced GPS technology.',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Intelligence',
      description:
        'Gain insights into your logistics performance with detailed analytics.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Capacity Sourcing',
      description:
        'Access our extensive network of verified carriers and capacity.',
      gradient: 'from-red-600 to-red-700'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description:
        'Streamline your operations with automated workflow processes.',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: Truck,
      title: 'Advanced Driver Visibility',
      description: 'Complete visibility into driver performance and location.',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: BarChart3,
      title: 'Live Tracking System',
      description: 'Monitor all shipments with our live tracking dashboard.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Cross Appointment Scheduling',
      description: 'Efficient scheduling system for cross-dock appointments.',
      gradient: 'from-red-600 to-red-700'
    },
    {
      icon: Settings,
      title: 'Vendor Automation',
      description: 'Automate vendor communications and documentation.',
      gradient: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {isClient && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-red-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-red-100/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '3s' }}
          ></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection direction="fade" className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-blue-50 rounded-full px-4 py-2 text-sm font-medium text-red-800 mb-6">
            <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></div>
            <span>Powerful Features</span>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Nasze <span className="gradient-text">osiągnięcia</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive platform includes all the tools you need to
              manage your logistics operations efficiently and scale your
              business.
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <StaggeredContainer
          staggerDelay={0.1}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <StaggeredItem key={index} direction="up" className="h-full">
              <Card className="group hover:shadow-2xl border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden relative h-full transition-all duration-500 hover:-translate-y-2">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <AnimatedSection
          direction="up"
          delay={0.8}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-red-700 to-blue-700 text-white rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <span className="text-lg font-semibold">Explore All Features</span>
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
