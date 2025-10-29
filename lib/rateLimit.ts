import { NextRequest } from 'next/server';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export function rateLimit(
  req: NextRequest,
  limit: number = 5,
  windowMs: number = 15 * 60 * 1000
): boolean {
  const ip =
    req.headers.get('x-forwarded-for') ||
    req.headers.get('x-real-ip') ||
    'unknown';
  const now = Date.now();

  if (!store[ip] || now > store[ip].resetTime) {
    store[ip] = {
      count: 1,
      resetTime: now + windowMs
    };
    return true;
  }

  if (store[ip].count >= limit) {
    return false;
  }

  store[ip].count++;
  return true;
}

setInterval(
  () => {
    const now = Date.now();
    Object.keys(store).forEach(ip => {
      if (now > store[ip].resetTime) {
        delete store[ip];
      }
    });
  },
  60 * 60 * 1000
);
