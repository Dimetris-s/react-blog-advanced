import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about-page');
    return (
        <div>
            {t('zaza')}
            {t('About')}
        </div>
    );
};

export default AboutPage;
