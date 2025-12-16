import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-black uppercase tracking-wide rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-4 border-black';
    
    const variants = {
      primary: 'bg-accent-500 text-black comic-shadow hover:comic-shadow-lg hover:-translate-y-1 focus:ring-accent-500',
      secondary: 'bg-magenta-500 text-white comic-shadow hover:comic-shadow-lg hover:-translate-y-1 focus:ring-magenta-500',
      outline: 'bg-white text-black comic-shadow hover:bg-accent-500 hover:comic-shadow-lg hover:-translate-y-1 focus:ring-primary-500',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

