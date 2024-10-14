import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { FaInfoCircle } from 'react-icons/fa';

const About = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={`p-6 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
          <FaInfoCircle className="mr-4" />
          {t('aboutTitle')}
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">{t('aboutDescription')}</p>
      </div>
    </div>
  );
};

export default About;
