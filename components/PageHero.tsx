'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface PageHeroProps {
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isMounted, setIsMounted] = useState(false);

  const [decorativeElements] = useState(() => {
    return Array.from({ length: 48 }, (_, i) => ({
      id: i,
      gridColumn: Math.floor(Math.random() * 2) + 2,
      height: 40 + Math.random() * 60,
      opacity: 0.1 + Math.random() * 0.2
    }));
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-visible bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 pb-32"
    >
      {isMounted && (
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0 grid grid-cols-12 gap-4 p-8">
            {decorativeElements.map(element => (
              <div
                key={element.id}
                className="border border-white/20 rounded"
                style={{
                  gridColumn: `span ${element.gridColumn}`,
                  height: `${element.height}px`,
                  opacity: element.opacity
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-brand-red-700/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative container mx-auto px-4 pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 border border-white/30 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-brand-red-700 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
                Profesjonalny Transport
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-brand-red-700/10 blur-xl rounded-full" />
              <p
                className="relative text-xl md:text-2xl text-white/90 leading-relaxed max-w-6xl mx-auto mb-2 font-light"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex justify-center items-center gap-3"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-red-700 to-transparent" />
            <div className="w-2 h-2 bg-brand-red-700 rounded-full" />
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-brand-red-700 to-transparent" />
            <div className="w-2 h-2 bg-brand-red-700 rounded-full" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-red-700 to-transparent" />
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-1 left-0 right-0 h-48 pointer-events-none z-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 15%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0.75) 75%, rgba(255,255,255,0.9) 90%, rgb(255,255,255) 100%)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}
        />
      </div>
    </section>
  );
}
