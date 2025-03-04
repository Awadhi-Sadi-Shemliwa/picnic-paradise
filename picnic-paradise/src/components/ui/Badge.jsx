import React from 'react';

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    primary: 'bg-primary/20 text-primary-dark dark:bg-primary/30 dark:text-primary-light',
    secondary: 'bg-secondary/20 text-secondary-dark dark:bg-secondary/30 dark:text-secondary-light',
    success: 'bg-green-100 text-green-800 dark:bg-green-700/30 dark:text-green-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700/30 dark:text-yellow-300',
    danger: 'bg-red-100 text-red-800 dark:bg-red-700/30 dark:text-red-300',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1',
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;