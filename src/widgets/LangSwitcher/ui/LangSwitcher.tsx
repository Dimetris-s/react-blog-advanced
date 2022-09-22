import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariants } from 'shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { i18n, t } = useTranslation();
    const toggleLanguage = () => {
        if (i18n.language === 'ru') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('ru');
        }
    };
    return (
        <Button
            onClick={toggleLanguage}
            variant={ButtonVariants.CLEAR}
            className={classNames('', {}, [className])}
        >
            {t('Language')}
        </Button>
    );
};
