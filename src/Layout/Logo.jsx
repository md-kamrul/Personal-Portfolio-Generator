import React from 'react';

const Logo = ({ theme }) => {
    // Use the logo from public/logo.png
    return (
        <div className="flex justify-center items-center py-6">
            <img
                src="/logo.png"
                alt="Portfolio Logo"
                className={theme === 'dark' ? 'h-16 w-16 rounded-full border-2 border-white bg-gray-900' : 'h-16 w-16 rounded-full border-2 border-gray-900 bg-white'}
                style={{ boxShadow: theme === 'dark' ? '0 0 10px #fff2' : '0 0 10px #2222' }}
            />
        </div>
    );
};

export default Logo;
