import React from 'react';

const About = ({ theme }) => {
    // Theme-based color classes (same logic as Footer)
    const headingClass = theme === 'dark'
        ? 'text-3xl font-bold mb-6 text-white'
        : 'text-3xl font-bold mb-6 text-gray-900';
    const subHeadingClass = theme === 'dark'
        ? 'text-2xl font-semibold mt-8 mb-4 text-white'
        : 'text-2xl font-semibold mt-8 mb-4 text-gray-800';
    const textClass = theme === 'dark'
        ? 'prose prose-lg dark:prose-invert max-w-none text-gray-300'
        : 'prose prose-lg max-w-none text-gray-700';
    const cardClass = theme === 'dark'
        ? 'bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-700'
        : 'bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200';

    return (
        <div>
            <section className="mt-16 md:w-[80%] mx-auto">
                <div className={cardClass}>
                    <h2 className={headingClass}>About the AI Portfolio Project Generator</h2>
                    <div className={textClass}>
                        <p>In the competitive tech industry, a standout developer portfolio is more than a collection of projects—it's your professional story. However, many developers face the "blank page dilemma": what coding projects should you build to effectively showcase your skills and impress recruiters? This AI Portfolio Project Idea Generator was built to solve that exact problem.</p>
                        <h3 className={subHeadingClass}>Why a Strong Portfolio is Crucial for Your Tech Career</h3>
                        <p>Recruiters and hiring managers look for practical experience. A well-crafted tech portfolio demonstrates your ability to apply theoretical knowledge to real-world problems. Unique, personalized projects help you:</p>
                        <ul>
                            <li><strong>Stand Out:</strong> Move beyond generic to-do apps and build something that reflects your unique skills and passions.</li>
                            <li><strong>Showcase Your Skills:</strong> Provide tangible proof of your expertise in specific languages and frameworks like React, Python, or full-stack development.</li>
                            <li><strong>Prepare for Interviews:</strong> Having complex projects to discuss gives you compelling talking points for technical interviews and enhances your developer resume.</li>
                        </ul>
                        <h3 className={subHeadingClass}>Your Personalized AI Project Idea Generator</h3>
                        <p>Our tool moves beyond generic lists of "web developer projects." Using advanced AI, it acts as your personal brainstorming partner, generating a single, detailed project brief tailored to your profile. Whether you need beginner coding projects to start your journey or complex full-stack project ideas to challenge your skills, our generator customizes its output based on:</p>
                        <ul>
                            <li><strong>Your Experience Level:</strong> Get ideas that are challenging but achievable.</li>
                            <li><strong>Your Technical Skills:</strong> Find React project ideas, Python project ideas, and more, based on the technologies you want to master.</li>
                            <li><strong>Your Personal Interests:</strong> Build something you're passionate about, from fintech to gaming, making the coding process more enjoyable.</li>
                        </ul>
                        <h3 className={subHeadingClass}>Who Can Benefit from This Developer Tool?</h3>
                        <p>This project idea generator is designed for a wide range of users in the tech community:</p>
                        <ul>
                            <li><strong>Computer Science Students:</strong> Find practical coding projects to supplement your academic learning and build a strong portfolio before graduation.</li>
                            <li><strong>Coding Bootcamp Graduates:</strong> Differentiate yourself in the job market with unique projects that go beyond the standard bootcamp curriculum.</li>
                            <li><strong>Self-Taught Developers:</strong> Get structured, real-world project ideas that provide a clear roadmap for learning and application.</li>
                            <li><strong>Experienced Professionals:</strong> Discover creative side-projects to upskill, learn a new technology, or explore a new domain.</li>
                        </ul>
                        <h3 className={subHeadingClass}>Behind the Code: The Technology Stack</h3>
                        <p>This application is a modern single-page application (SPA) built with <strong>React</strong> for a dynamic user interface and <strong>Tailwind CSS</strong> for responsive styling. The intelligent project idea generation is powered by <strong>Google's Gemini AI</strong>, enabling the creation of unique and contextually relevant project briefs.</p>
                        <p>Ready to build something amazing? Fill out the form above to get your next project idea and take the next step in your tech career.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;