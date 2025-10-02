import { Button } from './ui/Button';

export default function InstantRequest() {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue-700 to-brand-blue-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Instant request for a transport with our convenient online form
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get started with your transport request in minutes. Our streamlined
          process makes it easy to book reliable transportation services.
        </p>
        <Button
          size="lg"
          className="bg-white text-white hover:bg-gray-100 px-8"
        >
          Request Quote
        </Button>
      </div>
    </section>
  );
}
