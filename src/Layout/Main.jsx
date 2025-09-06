import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import About from './About';
import InputSection from './InputSection';
import GenerateIdea from './GenerateIdea';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

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

    // --- Form and API State ---
    const [showResults, setShowResults] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [generatedIdea, setGeneratedIdea] = useState('');

    // Example form state (expand as needed)
    const [experience, setExperience] = useState('Beginner');
    const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript']);
    const [focus, setFocus] = useState('Frontend');
    const [interests, setInterests] = useState(['Productivity', 'Personal Development']);
    const [goal, setGoal] = useState('Learn a new skill');
    const [time, setTime] = useState('1-2 weeks');
    const [features, setFeatures] = useState('Clean UI, Local Storage');
    const [avoid, setAvoid] = useState('Complex backend, APIs');

    // Handle form submit and API call
    const handleGenerateIdea = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setGeneratedIdea('');
        setShowResults(true);

        // Build prompt from user inputs
        const prompt = `Act as an expert project idea generator for a developer's portfolio. Based on the following details, generate a single, creative, and well-defined project idea.\n\n**Developer Profile:**\n- **Experience Level:** ${experience}\n- **Technical Skills:** ${skills.join(', ')}\n- **Desired Project Focus:** ${focus}\n- **Personal Interests/Domains:** ${interests.join(', ')}\n- **Primary Goal:** ${goal}\n- **Time Commitment:** ${time}\n- **Key Features Wanted:** ${features}\n- **Technologies/Concepts to Avoid:** ${avoid}`;

        try {
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "openai/gpt-oss-20b:free",
                    messages: [
                        {
                            role: "user",
                            content: prompt
                        }
                    ]
                })
            });
            const result = await response.json();
            // Extract idea from OpenRouter response
            const idea = result.choices && result.choices[0] && result.choices[0].message && result.choices[0].message.content
                ? result.choices[0].message.content
                : '';
            setGeneratedIdea(idea);
        } catch (err) {
            setError('Sorry, something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoBack = () => {
        setShowResults(false);
    };

    // Form options for selects and multiselects
    const formOptions = {
        experienceLevels: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
        projectFocuses: ['Frontend', 'Backend', 'Full-Stack', 'Mobile (React Native)', 'Data Science', 'Game Development'],
        projectGoals: ['Learn a new skill', 'Build a complex app', 'Showcase design skills', 'Create a commercial product', 'Contribute to open-source'],
        timeCommitments: ['Weekend project', '1-2 weeks', '1 month+', 'Long-term (3+ months)'],
        techSkillsOptions: [
            'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular', 'Svelte', 'Tailwind CSS', 'Bootstrap',
            'Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'Ruby on Rails', 'Java', 'Spring Boot', 'PHP', 'Laravel',
            'React Native', 'Flutter', 'Swift', 'Kotlin', 'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase',
            'Git', 'Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Azure', 'GraphQL', 'REST API', 'WebSockets'
        ],
        interestOptions: [
            'Productivity', 'Personal Development', 'E-commerce', 'Social Media', 'Healthcare',
            'Finance & FinTech', 'Education & EdTech', 'Gaming', 'Music & Audio', 'Video & Streaming',
            'Travel & Hospitality', 'Food & Recipe', 'Fitness & Wellness', 'News & Blogging',
            'Data Visualization', 'Artificial Intelligence', 'Machine Learning', 'Internet of Things (IoT)',
            'Sustainability & Green Tech'
        ]
    };

    return (
        <div className={theme === 'dark' ? 'bg-gray-900 text-white min-h-screen flex flex-col' : 'bg-gray-50 text-gray-900 min-h-screen flex flex-col'}>
            <Logo theme={theme} />
            <Header theme={theme} />
            <div className="flex flex-col items-center justify-center w-full" style={{ width: '100%' }}>
                <div className="w-full flex flex-col items-center justify-center" style={{ maxWidth: '1200px', width: '80%' }}>
                    <ThemeToggle theme={theme} setTheme={setTheme} />
                    {!showResults ? (
                        <InputSection
                            theme={theme}
                            experience={experience}
                            setExperience={setExperience}
                            skills={skills}
                            setSkills={setSkills}
                            focus={focus}
                            setFocus={setFocus}
                            interests={interests}
                            setInterests={setInterests}
                            goal={goal}
                            setGoal={setGoal}
                            time={time}
                            setTime={setTime}
                            features={features}
                            setFeatures={setFeatures}
                            avoid={avoid}
                            setAvoid={setAvoid}
                            isLoading={isLoading}
                            handleGenerateIdea={handleGenerateIdea}
                            formOptions={formOptions}
                        />
                    ) : (
                        <GenerateIdea
                            theme={theme}
                            isLoading={isLoading}
                            error={error}
                            generatedIdea={generatedIdea}
                            handleGoBack={handleGoBack}
                        />
                    )}
                </div>
            </div>
            <About theme={theme} />
            <Footer theme={theme} />
        </div>
    );
};

export default Main;