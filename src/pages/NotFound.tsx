import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const NotFound = () => {
  const { theme } = useTheme();

  return (
    <div className={`p-4 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-base md:text-lg mb-4">The page you are looking for does not exist.</p>
        <Link to="/" className="text-blue-500 hover:underline text-base md:text-lg">Go back to the home page</Link>
      </div>
    </div>
  );
};

export default NotFound;
