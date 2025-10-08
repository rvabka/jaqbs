'use client';

import { Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  shareUrl: string;
  title: string;
}

export default function ShareButtons({ shareUrl, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Nie udało się skopiować linku');
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors duration-300"
      >
        <Facebook className="h-5 w-5" />
        <span>Facebook</span>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1A94DA] transition-colors duration-300"
      >
        <Twitter className="h-5 w-5" />
        <span>Twitter</span>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#095196] transition-colors duration-300"
      >
        <Linkedin className="h-5 w-5" />
        <span>LinkedIn</span>
      </a>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300"
      >
        <Copy className="h-5 w-5" />
        <span>{copied ? 'Skopiowano!' : 'Kopiuj link'}</span>
      </button>
    </div>
  );
}
