import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-black uppercase tracking-wide rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-4 border-black';
    
    const variants = {
      primary: 'bg-accent-500 text-black comic-shadow hover:comic-shadow-lg hover:-translate-y-1 hover:scale-105 focus:ring-accent-500 active:translate-y-0 active:shadow-none',
      secondary: 'bg-magenta-500 text-white comic-shadow hover:comic-shadow-lg hover:-translate-y-1 hover:scale-105 focus:ring-magenta-500 active:translate-y-0 active:shadow-none',
      outline: 'bg-white text-black comic-shadow hover:bg-accent-500 hover:comic-shadow-lg hover:-translate-y-1 hover:scale-105 focus:ring-primary-500 active:translate-y-0 active:shadow-none',
    };
    
    const sizes = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-7 py-3.5 text-base',
      lg: 'px-9 py-4.5 text-lg',
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

