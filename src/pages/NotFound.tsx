import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={`p-6 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center">
          <FaExclamationTriangle className="mr-4" />
          {t('notFoundTitle')}
        </h1>
        <p className="text-lg md:text-xl mb-6">{t('notFoundDescription')}</p>
        <Link to="/" className="text-blue-500 hover:underline text-lg md:text-xl">{t('goBackHome')}</Link>
      </div>
    </div>
  );
};

export default NotFound;
