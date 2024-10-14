import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { FaUser } from 'react-icons/fa';

const UserProfile = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  // TODO: Fetch user data from API or context
  const user = {
    username: 'JohnDoe',
    email: 'john@example.com',
    joinDate: '2023-01-01',
  };

  return (
    <div className={`p-6 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
          <FaUser className="mr-4" />
          {t('userProfile.title')}
        </h1>
        <div className="bg-white text-gray-900 rounded-lg shadow-md p-6">
          <div className="mb-4">
            <strong>{t('userProfile.username')}:</strong> {user.username}
          </div>
          <div className="mb-4">
            <strong>{t('userProfile.email')}:</strong> {user.email}
          </div>
          <div className="mb-4">
            <strong>{t('userProfile.joinDate')}:</strong> {user.joinDate}
          </div>
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            {t('userProfile.editProfile')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
