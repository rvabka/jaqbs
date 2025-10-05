import { Package } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection, StaggeredItem } from './ui/AnimatedSection';

export default function CheapestTransport() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="relative">
            <StaggeredItem
              direction="up"
              className="aspect-square bg-gradient-to-br from-brand-blue-700 to-brand-blue-800 rounded-2xl flex items-center justify-center shadow-md"
            >
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </StaggeredItem>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-red-700 rounded-2xl opacity-20"></div>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Poznaj nasze <span className="gradient-text">zasięgi</span>
              </h2>
            </AnimatedSection>
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
            <AnimatedSection direction="up" delay={0.3}>
              <Button
                size="lg"
                variant='primary'
              >
                Get Quote Now
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
