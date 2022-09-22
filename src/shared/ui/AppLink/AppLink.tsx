import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariants;
}

export const AppLink: FC<AppLinkProps> = ({
    variant = AppLinkVariants.PRIMARY, className, to, children, ...rest
}) => (
    <Link
        to={to}
        className={classNames(styles.AppLink, {}, [styles[variant], className])}
        {...rest}
    >
        {children}
    </Link>
);
