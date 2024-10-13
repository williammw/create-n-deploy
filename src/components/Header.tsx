import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <nav className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">{t('appName')}</Link>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}>
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 mr-4">{t('home')}</Link>
          <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 mr-4">{t('about')}</Link>
          <button onClick={toggleTheme} className="mt-4 lg:mt-0 px-2 py-1 rounded bg-blue-500 text-white mr-4">
            {t('toggleTheme')}
          </button>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="mt-4 lg:mt-0 px-2 py-1 rounded bg-gray-200 text-gray-800"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
