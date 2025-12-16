import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  color?: 'primary' | 'orange' | 'magenta' | 'lime' | 'purple' | 'accent' | 'white';
}

export function Card({ children, className = '', hover = false, color = 'white' }: CardProps) {
  const colorClasses = {
    primary: 'bg-primary-500',
    orange: 'bg-orange-500',
    magenta: 'bg-magenta-500',
    lime: 'bg-lime-500',
    purple: 'bg-purple-500',
    accent: 'bg-accent-500',
    white: 'bg-white',
  };

  return (
    <div
      className={`
        ${colorClasses[color]} rounded-lg p-6 border-4 border-black comic-shadow
        ${hover ? 'transition-all duration-300 hover:comic-shadow-lg hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

