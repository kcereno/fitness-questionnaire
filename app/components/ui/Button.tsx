import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  type?: 'submit' | 'button';
  disabled?: boolean;
};

function Button({
  children,
  className = '',
  onClick = () => {},
  type,
  disabled = false,
}: ButtonProps) {
  const defaultClass =
    'text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-lg px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800';

  const disabledClass =
    'text-white bg-gray-400  cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center';

  const activeClass = disabled ? disabledClass : defaultClass;
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
