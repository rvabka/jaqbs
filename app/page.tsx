import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import CheapestTransport from '@/components/CheapestTransport';
import Features from '@/components/Features';
import DriverOpportunity from '@/components/DriverOpportunity';
import GlobalService from '@/components/GlobalService';
import InstantRequest from '@/components/InstantRequest';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Partners />
      <Services />
      <Solutions />
      <CheapestTransport />
      <Features />
      <DriverOpportunity />
      <GlobalService />
      <InstantRequest />
      <Footer />
    </main>
  );
}
