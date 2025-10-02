import { Button } from './ui/Button';
import { Truck } from 'lucide-react';

export default function DriverOpportunity() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Opportunity is ready for you as a driver
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
            <div className="flex space-x-4">
              <Button
                size="lg"
                className="bg-brand-blue-700 hover:bg-brand-blue-800"
              >
                Apply Now
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-brand-blue-700 to-brand-blue-800 rounded-2xl flex items-center justify-center">
              <Truck className="h-32 w-32 text-white opacity-80" />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-red-700 rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
