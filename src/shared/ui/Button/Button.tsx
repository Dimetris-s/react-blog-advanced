import React, { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonVariants {
  DEFAULT = 'default',
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({ className, variant = ButtonVariants.DEFAULT, onClick, children, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.Button, {}, [className, styles[variant]])}
    >
      {children}
    </button>
  );
};
