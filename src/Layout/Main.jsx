import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import About from './About';

const Main = () => {
    // --- STATE MANAGEMENT ---
    const [theme, setTheme] = useState('light');

    // --- THEME EFFECT ---
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={theme === 'dark' ? 'bg-gray-900 text-white min-h-screen flex flex-col' : 'bg-gray-50 text-gray-900 min-h-screen flex flex-col'}>
            {/* theme start */}
            <div className=" w-[90%] md:w-[80%] mx-auto flex flex-col px-4">
                <div className="w-full flex items-center pt-8 pb-4">
                    <div className=" flex items-center justify-center w-full">
                        <img src="/logo.png" alt="Logo" className="h-20 w-20 object-center" />
                    </div>
                    <div className="flex-1 flex justify-end">
                        <button
                            onClick={toggleTheme}
                            className={
                                `p-2 rounded-full transition-colors text-gray-800 dark:text-gray-200 ` +
                                (theme === 'light' ? 'bg-[#e6e7ea] hover:bg-[#dcdcdc]' : 'bg-gray-700 hover:bg-gray-600')
                            }
                        >
                            {theme === 'light'
                                ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" fill="black" />
                                    </svg>
                                )
                                : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="4" fill="white" />
                                        <path d="M12 2v2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M12 20v2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path d="m4.93 4.93 1.41 1.41" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path d="m17.66 17.66 1.41 1.41" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M2 12h2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M20 12h2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path d="m6.34 17.66-1.41 1.41" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path d="m19.07 4.93-1.41 1.41" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
            {/* theme end */}

            <Header theme={theme} />

            <About theme={theme} />

            <Footer theme={theme} />
        </div>
    );
};

export default Main;