import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import CheapestTransport from '@/components/CheapestTransport';
import Features from '@/components/Features';
import DriverOpportunity from '@/components/DriverOpportunity';
import GlobalService from '@/components/GlobalService';
import Faq from '@/components/Faq';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Partners />
      <Services />
      {/* <Solutions /> */}
      <CheapestTransport />
      <Features />
      <DriverOpportunity />
      <Faq />
      <GlobalService />
    </main>
  );
}
