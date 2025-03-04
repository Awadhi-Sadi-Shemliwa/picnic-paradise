import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hoverable = false,
  premium = false
}) => {
  return (
    <div 
      className={`
        bg-white dark:bg-secondary rounded-lg overflow-hidden
        ${hoverable ? 'transition-all duration-300 hover:-translate-y-1' : ''}
        ${premium ? 'shadow-premium hover:shadow-premium-hover' : 'shadow-md'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ className = '', children }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ className = '', children }) => {
  return (
    <div className={`p-4 pt-0 ${className}`}>
      {children}
    </div>
  );
};

const CardFooter = ({ className = '', children }) => {
  return (
    <div className={`p-4 pt-0 ${className}`}>
      {children}
    </div>
  );
};

export { CardHeader, CardContent, CardFooter };
export default Card;