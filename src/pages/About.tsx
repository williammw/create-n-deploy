import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <div className={`p-4 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">About Us</h1>
        <p className="text-base md:text-lg">This is the about page of our application. It's now mobile-friendly!</p>
      </div>
    </div>
  );
};

export default About;
