import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-gradient-to-r from-brand-blue-700 to-brand-blue-800 hover:from-brand-blue-800 hover:to-brand-blue-900 text-white shadow-lg hover:shadow-xl',
    secondary:
      'bg-gradient-to-r from-brand-red-700 to-brand-red-800 hover:from-brand-red-800 hover:to-brand-red-900 text-white shadow-lg hover:shadow-xl',
    outline:
      'border-2 border-gray-300 hover:border-brand-red-700 text-gray-700 hover:text-brand-red-700 bg-white hover:bg-gray-50',
    ghost: 'text-gray-600 hover:text-brand-red-700 hover:bg-gray-50'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-full',
    md: 'px-6 py-3 text-base rounded-full',
    lg: 'px-8 py-4 text-lg rounded-full'
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
