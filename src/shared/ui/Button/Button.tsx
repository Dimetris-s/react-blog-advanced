import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonVariants {
  DEFAULT = 'default',
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
    className, variant = ButtonVariants.DEFAULT, onClick, children, ...rest
}) => (
    <button
        type="button"
        onClick={onClick}
        className={classNames(styles.Button, {}, [className, styles[variant]])}
        {...rest}
    >
        {children}
    </button>
);
