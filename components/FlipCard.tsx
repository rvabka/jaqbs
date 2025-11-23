'use client';

import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface FlipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  frontBg?: string;
  backBg?: string;
}

export default function FlipCard({
  icon: Icon,
  title,
  description,
  frontBg = 'bg-brand-blue-900',
  backBg = 'bg-brand-red-900'
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card-container h-48"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div
          className={`flip-card-front ${frontBg} text-white rounded-xl p-6 flex flex-col items-center justify-center text-center border border-gray-200`}
        >
          <Icon className="h-10 w-10 mb-3" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        {/* Back */}
        <div
          className={`flip-card-back ${backBg} text-white rounded-xl p-6 flex items-center justify-center text-center border border-gray-200`}
        >
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      <style jsx>{`
        .flip-card-container {
          perspective: 1000px;
        }

        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card.flipped {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
