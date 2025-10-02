import { Truck, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        'Freight & Logistics',
        'Supply Chain',
        'Warehousing',
        'Distribution',
        'Cross Docking',
        'Inventory Management'
      ]
    },
    {
      title: 'Network',
      links: [
        'Our Network',
        'Global Reach',
        'Local Presence',
        'Partner Network',
        'Service Areas',
        'Coverage Map'
      ]
    },
    {
      title: 'Industries',
      links: [
        'Transportation & Logistics',
        'Manufacturing',
        'Retail & E-commerce',
        'Healthcare',
        'Automotive',
        'Food & Beverage'
      ]
    },
    {
      title: 'Solutions',
      links: [
        'LTL Shipping',
        'FTL Shipping',
        'Expedited',
        'White Glove',
        'Temperature Controlled',
        'Hazmat'
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Truck className="h-8 w-8 text-brand-red-700" />
              <span className="text-2xl font-bold">Moving Mountain</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for reliable, efficient, and cost-effective
              transportation solutions worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-brand-red-700 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-brand-red-700 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-brand-red-700 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-brand-red-700 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Moving Mountain. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
