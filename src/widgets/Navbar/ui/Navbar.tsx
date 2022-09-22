import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariants } from 'shared/ui/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={classNames(styles.Navbar, {}, [className])}>
        <div className={styles.links}>
            <AppLink variant={AppLinkVariants.SECONDARY} to="/">Главная</AppLink>
            <AppLink variant={AppLinkVariants.SECONDARY} to="/about">О сайте</AppLink>
        </div>
    </div>
);
