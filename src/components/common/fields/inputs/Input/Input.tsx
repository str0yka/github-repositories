'use client';

import { forwardRef, useId, useEffect, useRef } from 'react';

import s from './Input.module.css';

interface InputProps
  extends Omit<React.ComponentProps<'input'>, 'placeholder' | 'className' | 'id'> {
  label: string;
  leftIndicator?: React.ReactNode;
  pushButton?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, leftIndicator, pushButton, ...props }, ref) => {
    const id = useId();
    const labelRef = useRef<HTMLLabelElement>(null);

    useEffect(() => {
      const listener = () => {
        labelRef.current?.focus();
      };

      window.addEventListener('keydown', listener);

      return () => {
        window.removeEventListener('keydown', listener);
      };
    }, []);

    return (
      <label
        ref={label}
        className={s.inputContainer}
        htmlFor={id}
      >
        {leftIndicator && <div className={s.indicatorContainer}>{leftIndicator}</div>}
        <input
          type='text'
          {...props}
          ref={ref}
          className={s.input}
          id={id}
          placeholder={label}
        />
        {pushButton && (
          <div className={s.pushButtonContainer}>
            <span className={s.pushButton}>{pushButton}</span>
          </div>
        )}
      </label>
    );
  }
);
