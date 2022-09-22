import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useToggle } from 'shared/lib/useToggle/useToggle';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, toggleCollapsed] = useToggle();
    return (
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button onClick={toggleCollapsed}>Toggle</Button>
            <div className={styles.actions}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};
