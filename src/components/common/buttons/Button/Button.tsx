'use client';

import { useRef } from 'react';

import { cn } from '~utils/helpers';
import { useOnClickKey } from '~utils/hooks';

import s from './Button.module.css';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant: 'contained' | 'outlined' | 'transparented';
  children: React.ReactNode;
  pushButtonKey?: string;
}

export const Button = ({ variant, pushButtonKey, children, ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOnClickKey(
    (event) => event.code === pushButtonKey && setTimeout(() => buttonRef.current?.click(), 0)
  );

  return (
    <button
      ref={buttonRef}
      className={cn(s.button, s[variant])}
      type='button'
      {...props}
    >
      {children}
    </button>
  );
};

interface ButtonTextProps {
  children: string | number;
}

Button.Text = ({ children }: ButtonTextProps) => <span className={s.text}>{children}</span>;
