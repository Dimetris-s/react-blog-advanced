import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const {t} = useTranslation('main-page')
  return (
    <div>
      {t('Main page')}
    </div>
  );
};

export default MainPage;
