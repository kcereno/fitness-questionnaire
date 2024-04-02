import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  type?: 'submit' | 'button';
  disabled?: boolean;
  variant?: 'default' | 'danger';
};

function Button({
  children,
  className = '',
  onClick = () => {},
  type,
  disabled = false,
  variant = 'default',
}: ButtonProps) {
  const buttonStyles = {
    default: `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`,
    danger: `text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900`,
  };

  const disabledClass =
    'text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center';

  const activeClass = disabled ? disabledClass : buttonStyles[variant];

  return (
    <button
      className={twMerge(activeClass, className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
