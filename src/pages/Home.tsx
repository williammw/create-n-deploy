import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={`p-4 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{t('welcomeMessage')}</h1>
        <p className="text-base md:text-lg">{t('homeDescription')}</p>
      </div>
    </div>
  );
};

export default Home;
