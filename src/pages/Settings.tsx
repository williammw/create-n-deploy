import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { FaCog } from 'react-icons/fa';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [notifications, setNotifications] = useState(true);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`p-6 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
          <FaCog className="mr-4" />
          {t('settings.title')}
        </h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">{t('settings.appearance')}</h2>
            <button onClick={toggleTheme} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              {theme === 'dark' ? t('settings.lightMode') : t('settings.darkMode')}
            </button>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">{t('settings.language')}</h2>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              className="p-2 border rounded text-gray-900"
            >
              <option value="en">{t('settings.languages.english')}</option>
              <option value="es">{t('settings.languages.spanish')}</option>
              <option value="zh-CN">{t('settings.languages.simplifiedChinese')}</option>
              <option value="zh-TW">{t('settings.languages.traditionalChinese')}</option>
            </select>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">{t('settings.notifications')}</h2>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="mr-2"
              />
              {t('settings.enableNotifications')}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
