import { Package } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection, StaggeredItem } from './ui/AnimatedSection';

export default function CheapestTransport() {
  return (
    <section className="py-12 bg-gray-50">
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
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Poznaj nasze <span className="gradient-text">zasięgi</span>
              </h2>
            </AnimatedSection>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nasze zasięgi obejmują całą Europę – jesteśmy obecni m.in. w
              <span className='font-bold'>
                {' '}
                Austrii, Belgii, Czechach, Danii, Francji, Hiszpanii, Holandii,
                Irlandii, Luksemburgu, Niemczech, Polsce, Portugalii, Słowacji,
                Słowenii, Szwajcarii, Szwecji, na Węgrzech, we Włoszech oraz w
                Wielkiej Brytanii.
              </span>
            </p>
            <AnimatedSection direction="up" delay={0.3}>
              <Button size="lg" variant="primary">
                <a href="/o-nas">Dowiedz się więcej</a>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
