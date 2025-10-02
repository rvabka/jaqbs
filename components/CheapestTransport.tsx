import { Package } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function CheapestTransport() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-brand-blue-700 to-brand-blue-800 rounded-2xl flex items-center justify-center">
              <Package className="h-32 w-32 text-white opacity-80" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-red-700 rounded-2xl opacity-20"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Explore the cheapest logistic transport
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover cost-effective transport solutions that don't compromise
              on quality or reliability. Our optimized logistics network ensures
              competitive pricing while maintaining the highest service
              standards.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-red-800 rounded-full"></div>
                <span className="text-gray-700">
                  Competitive pricing across all services
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-red-800 rounded-full"></div>
                <span className="text-gray-700">
                  No hidden fees or surprise charges
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-red-800 rounded-full"></div>
                <span className="text-gray-700">
                  Flexible payment options available
                </span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-brand-blue-700 hover:bg-brand-blue-800"
            >
              Get Quote Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
