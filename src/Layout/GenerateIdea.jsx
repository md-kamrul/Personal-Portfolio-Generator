import React from 'react';

const GenerateIdea = (props) => {
    const { theme, isLoading, error, generatedIdea, handleGoBack } = props;
    const cardClass = theme === 'dark'
        ? 'bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col'
        : 'bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col';
    const headingClass = theme === 'dark'
        ? 'text-2xl font-semibold mb-6 text-white'
        : 'text-2xl font-semibold mb-6 text-gray-800';
    const ideaClass = theme === 'dark'
        ? 'flex-grow rounded-lg bg-gray-900/50 border border-gray-700 p-6 min-h-[300px]'
        : 'flex-grow rounded-lg bg-gray-50 border border-gray-200 p-6 min-h-[300px]';
    const buttonClass = theme === 'dark'
        ? 'w-full flex items-center justify-center gap-2 bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-800 transition-all duration-300'
        : 'w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300';
    return (
        <div className='md:w-[90%] mx-auto'>
            <div className={cardClass}>
                <h2 className={headingClass}>Your Generated Idea</h2>
                <div className={ideaClass}>
                    {isLoading && <div className={theme === 'dark' ? 'flex flex-col items-center justify-center h-full text-gray-400' : 'flex flex-col items-center justify-center h-full text-gray-500'}><span className="animate-spin mb-4">⏳</span><p className="text-lg">Crafting your perfect project...</p></div>}
                    {error && <div className={theme === 'dark' ? 'flex items-center justify-center h-full text-red-400 bg-red-900/20 p-4 rounded-lg' : 'flex items-center justify-center h-full text-red-600 bg-red-50 p-4 rounded-lg'}><p>{error}</p></div>}
                    {generatedIdea && <div className={theme === 'dark' ? 'prose prose-indigo dark:prose-invert max-w-none' : 'prose prose-indigo max-w-none'} dangerouslySetInnerHTML={{ __html: generatedIdea }} />}
                </div>
            </div>
            <button onClick={handleGoBack} className={buttonClass}>
                &larr; Generate Another Idea
            </button>
        </div>
    );
};

export default GenerateIdea;