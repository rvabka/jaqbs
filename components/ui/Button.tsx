import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  asChild,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 relative overflow-hidden group';

  const variants = {
    primary: [
      'bg-gradient-to-r from-brand-blue-900 via-brand-blue-600 to-brand-blue-900 text-white',
      'hover:from-brand-blue-800 hover:via-brand-blue-900 hover:to-brand-blue-800',
      'hover:shadow-xl hover:shadow-brand-blue-500/25 hover:-translate-y-0.5',
      'focus:ring-brand-blue-500',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700'
    ].join(' '),

    secondary: [
      'bg-gradient-to-r from-brand-red-700 via-brand-red-600 to-brand-red-700 text-white',
      'hover:from-brand-red-800 hover:via-brand-red-700 hover:to-brand-red-800',
      'hover:shadow-xl hover:shadow-brand-red-500/25 hover:-translate-y-0.5',
      'focus:ring-brand-red-500',

      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700'
    ].join(' '),

    outline: [
      'bg-white border-2 border-gray-300 text-gray-700',
      'hover:border-brand-red-600 hover:text-black hover:bg-gradient-to-r hover:from-brand-red-600 hover:to-brand-red-700',
      'hover:shadow-lg hover:shadow-brand-red-500/20 hover:-translate-y-0.5',
      'focus:ring-brand-red-500 focus:border-brand-red-600',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700'
    ].join(' '),

    ghost: [
      'bg-transparent text-gray-600',
      'hover:text-brand-red-700 hover:bg-gradient-to-r hover:from-brand-red-50 hover:to-brand-red-100',
      'hover:shadow-md hover:-translate-y-0.5',
      'focus:ring-brand-red-500',
      'after:absolute after:inset-0 after:bg-gradient-to-r after:from-brand-red-50 after:to-brand-red-100 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:-z-10'
    ].join(' ')
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-xl min-h-[2.5rem]',
    md: 'px-6 py-3 text-base rounded-xl min-h-[3rem]',
    lg: 'px-8 py-4 text-lg rounded-xl min-h-[3.5rem]'
  };

  const Component = asChild ? 'span' : 'button';

  const buttonElement = (
    <Component
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...(asChild ? {} : props)}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      <span className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-200">
        <span className="absolute inset-0 bg-white/20 rounded-xl animate-ping"></span>
      </span>
    </Component>
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      className: cn(baseStyles, variants[variant], sizes[size], className),
      ...props
    });
  }

  return buttonElement;
}

export const PrimaryButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="primary" {...props} />
);

export const SecondaryButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="secondary" {...props} />
);

export const OutlineButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="outline" {...props} />
);

export const GhostButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="ghost" {...props} />
);
