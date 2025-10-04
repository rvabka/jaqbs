// components/ui/AnimatedSection.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

export function AnimatedSection({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  className = '',
  once = true
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: "-50px 0px -50px 0px" // Trigger animation when element is 50px in viewport
  });

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    fade: { y: 0, x: 0 }
  };

  const initial = {
    opacity: 0,
    ...directions[direction]
  };

  const animate = {
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : directions[direction].x,
    y: isInView ? 0 : directions[direction].y
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Komponent dla animacji staggered (kaskadowych)
interface StaggeredContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggeredContainer({
  children,
  staggerDelay = 0.1,
  className = ''
}: StaggeredContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Komponent dla pojedynczych elementów w staggered container
interface StaggeredItemProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  distance?: number;
  duration?: number;
  className?: string;
}

export function StaggeredItem({
  children,
  direction = 'up',
  distance = 50,
  duration = 0.6,
  className = ''
}: StaggeredItemProps) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    fade: { y: 0, x: 0 }
  };

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          ...directions[direction]
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            ease: "easeOut"
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}