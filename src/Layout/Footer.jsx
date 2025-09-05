
import React from 'react';

const Github = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const Linkedin = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const Footer = ({ theme }) => {
    // Theme-based color classes
    const headingClass = theme === 'dark'
        ? 'text-lg font-semibold mb-3 text-white'
        : 'text-lg font-semibold mb-3 text-gray-900';
    const textClass = theme === 'dark'
        ? 'text-gray-500'
        : 'text-gray-400';
    const linkClass = theme === 'dark'
        ? 'text-indigo-400 hover:text-indigo-200'
        : 'text-indigo-600 hover:text-indigo-800';

    return (
        <div className={theme === 'dark' ? 'mt-12 border-t border-gray-700 py-8 bg-gray-900' : 'mt-12 border-t border-gray-200 py-8 bg-gray-50'}>
            <div className="w-[80%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-8">
                <div>
                    <h3 className={headingClass}>About the Developer</h3>
                    <p className={`mb-3 ${textClass}`}>This tool was created by Md. Kamrul Islam, a Bangladeshi tech enthusiastic.</p>
                    <div className="flex items-center space-x-4">
                        <a href="https://github.com/md-kamrul" target="_blank" rel="noopener noreferrer" className={`hover:text-indigo-500 ${theme === 'dark' ? 'dark:hover:text-indigo-400' : ''} transition-colors`}><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/iamkamrulislam/" target="_blank" rel="noopener noreferrer" className={`hover:text-indigo-500 ${theme === 'dark' ? 'dark:hover:text-indigo-400' : ''} transition-colors`}><Linkedin size={24} /></a>
                    </div>
                </div>
                <div>
                    <h3 className={headingClass}>Send Feedback</h3>
                    <p className={textClass}>Have a suggestion or found a bug? Let me know! Just send me an email at <a href="mailto:testmail20027@gmail.com" className={linkClass + ' hover:underline'}>testmail20027@gmail.com</a>. Thank You.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;