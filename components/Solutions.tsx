import {
  Truck,
  Package,
  Wrench,
  ChartBar as BarChart3,
  Factory,
  Coins
} from 'lucide-react';
import { Button } from './ui/Button';

export default function Solutions() {
  const solutions = [
    {
      icon: Truck,
      title: 'Transportation & Logistics',
      description: 'End-to-end logistics solutions with real-time visibility.',
      color: 'bg-brand-red-700'
    },
    {
      icon: Package,
      title: 'Medical & Pharmaceutical',
      description: 'Temperature-controlled transport with FDA compliance.',
      color: 'bg-brand-blue-700'
    },
    {
      icon: Wrench,
      title: 'Oil, Gas & Chemical',
      description: 'Certified hazmat transport with safety protocols.',
      color: 'bg-brand-red-800'
    },
    {
      icon: BarChart3,
      title: 'Consumer Goods',
      description: 'Scalable distribution with last-mile optimization.',
      color: 'bg-brand-blue-800'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Just-in-time delivery with supply chain integration.',
      color: 'bg-brand-red-900'
    },
    {
      icon: Coins,
      title: 'Food & Beverage',
      description: 'Cold chain logistics with quality preservation.',
      color: 'bg-brand-blue-900'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-brand-blue-700/5 to-brand-red-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-brand-red-700/5 to-brand-blue-700/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-brand-red-50 rounded-full px-4 py-2 text-sm font-medium text-brand-red-800 mb-6">
            <div className="w-2 h-2 bg-brand-red-700 rounded-full"></div>
            <span>Industry Solutions</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Discover customised solutions for your industry needs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-24 h-24 ${solution.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6`}
              >
                <solution.icon className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-red-800 transition-colors">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center relative z-10">
          <Button
            size="lg"
            className="bg-gradient-to-r from-brand-blue-700 to-brand-blue-800 hover:from-brand-blue-800 hover:to-brand-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-6"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
