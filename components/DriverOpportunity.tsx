import { Button } from './ui/Button';
import { Truck } from 'lucide-react';
import { AnimatedSection, StaggeredItem } from './ui/AnimatedSection';

export default function DriverOpportunity() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Poznaj nasze <span className="gradient-text">zasięgi</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join our network of professional drivers and enjoy competitive
              rates, flexible schedules, and comprehensive support. We provide
              the tools and opportunities you need to succeed in the
              transportation industry.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-red-800 rounded-full"></div>
                <span className="text-gray-700">
                  Competitive compensation packages
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-red-800 rounded-full"></div>
                <span className="text-gray-700">
                  Flexible scheduling options
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-red-800 rounded-full"></div>
                <span className="text-gray-700">
                  Comprehensive benefits package
                </span>
              </div>
            </div>
            <AnimatedSection
              direction="up"
              delay={0.3}
              className="flex space-x-4"
            >
              <Button
                size="lg"
                className="bg-brand-blue-700 hover:bg-brand-blue-800"
              >
                Apply Now
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </AnimatedSection>
          </div>

          <AnimatedSection className="relative">
            <StaggeredItem
              direction="up"
              className="aspect-square rounded-2xl flex items-center justify-center"
            >
              <img
                src="ciezarowka3.webp"
                alt="Zespół Jaqbs - firma transportowo-spedycyjna"
                className="relative rounded-3xl shadow-2xl w-full hover-lift aspect-square object-cover"
              />
            </StaggeredItem>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
