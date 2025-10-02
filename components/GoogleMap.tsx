'use client';

import { Card } from '@/components/ui/Card';

export default function GoogleMap() {
  return (
    <Card className="overflow-hidden shadow-2xl border-0 hover-lift">
      <div className="relative w-full h-[500px] md:h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8234567890123!2d22.5647!3d51.2465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDE0JzQ3LjQiTiAyMsKwMzMnNTIuOSJF!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl&q=Zemborzycka+53B,+Lublin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="JAQBS Location - Zemborzycka 53B, Lublin"
          className="w-full h-full"
        />
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
          <h3 className="font-bold text-gray-900 mb-2">JAQBS Sp. z o.o.</h3>
          <p className="text-sm text-gray-600">ul. Zemborzycka 53B</p>
          <p className="text-sm text-gray-600">20-445 Lublin</p>
        </div>
      </div>
    </Card>
  );
}
