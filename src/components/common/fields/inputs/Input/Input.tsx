'use client';

import { forwardRef, useId, useRef } from 'react';

import { useOnClickKey } from '~utils/hooks';

import s from './Input.module.css';

interface InputProps
  extends Omit<React.ComponentProps<'input'>, 'placeholder' | 'className' | 'id'> {
  label: string;
  leftIndicator?: React.ReactNode;
  pushButton?: string;
  pushButtonKey?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, leftIndicator, pushButton, pushButtonKey, ...props }, ref) => {
    const id = useId();
    const labelRef = useRef<HTMLLabelElement>(null);

    useOnClickKey(
      (event) => event.code === pushButtonKey && setTimeout(() => labelRef.current?.focus(), 0)
    );

    return (
      <label
        ref={labelRef}
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
