import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { to: '/', label: 'home' },
    { to: '/about', label: 'about' },
    { to: '/login', label: 'login.title' },
    { to: '/register', label: 'register.title' },
    { to: '/profile', label: 'profile' },
    { to: '/settings', label: 'settings.title' },
  ];

  return (
    <header className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
      <nav className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold font-poppins">{t('appName')}</Link>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block mt-4 lg:inline-block lg:mt-0 mr-6 text-lg hover:text-blue-500 transition-colors duration-200"
            >
              {t(item.label)}
            </Link>
          ))}
          <button onClick={toggleTheme} className="mt-4 lg:mt-0 p-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors duration-200 mr-4">
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="mt-4 lg:mt-0 px-2 py-1 rounded bg-gray-200 text-gray-800 text-lg"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="zh-CN">简体中文</option>
            <option value="zh-TW">繁體中文</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
