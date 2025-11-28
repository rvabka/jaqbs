'use client';

import { Card } from '@/components/ui/Card';

export default function GoogleMap() {
  return (
    <Card className="overflow-hidden shadow-2xl border-0 hover-lift">
      <div className="relative w-full h-[500px] md:h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2398.6514410949903!2d22.567172976292337!3d51.20904413245581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spl!2spl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="JAQBS Services - Poland Coverage"
          className="w-full h-full"
        ></iframe>
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs text-center">
          <img src="/logo_small.png" className="h-8 w-auto" alt="Logo" />
          <p className="text-sm text-gray-600">Usługi transportowe</p>
          <p className="text-sm text-gray-600">w całej Polsce</p>
        </div>
      </div>
    </Card>
  );
}
