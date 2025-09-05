import React from 'react';

const Header = ({ theme }) => {
  // Theme-based color classes (same logic as Footer)
  const headingClass = theme === 'dark'
    ? 'text-4xl sm:text-5xl font-bold text-white'
    : 'text-4xl sm:text-5xl font-bold text-gray-900';
  const textClass = theme === 'dark'
    ? 'mt-3 text-lg text-gray-400 max-w-2xl mx-auto'
    : 'mt-3 text-lg text-gray-700 max-w-2xl mx-auto';

  return (
    <div  className="relative text-center mb-8 sm:mb-12">
        <h1 className={headingClass}>Portfolio Project Generator</h1>
        <p className={textClass}>
          {/* You can pass showResults as a prop if needed, or use static text */}
          Fill out the form below to get a personalized project idea tailored to your skills and interests.
        </p>
    </div>
  );
};

export default Header;