import React from 'react';
import { Wand2 } from 'lucide-react';

// Simple input field component for form usage
const FormInput = ({ label, placeholder, value, onChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium mb-1">{label}</label>
        <input
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    </div>
);

// Simple FormSelect component
const FormSelect = ({ label, value, onChange, options }) => (
    <div>
        <label className="block text-sm font-medium mb-1">{label}</label>
        <select value={value} onChange={e => onChange(e.target.value)} className="w-full px-4 py-2 border rounded-lg">
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
    </div>
);

// Simple MultiSelect component
const MultiSelect = ({ label, options, selectedOptions, onChange }) => {
    const handleSelect = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue && !selectedOptions.includes(selectedValue)) {
            onChange([...selectedOptions, selectedValue]);
        }
    };
    const handleRemove = (optionToRemove) => {
        onChange(selectedOptions.filter(option => option !== optionToRemove));
    };
    const availableOptions = options.filter(opt => !selectedOptions.includes(opt));
    return (
        <div>
            <label className="block text-sm font-medium mb-1">{label}</label>
            <div className="w-full p-2 border rounded-lg">
                <div className="flex flex-wrap gap-2 mb-2 min-h-[30px]">
                    {selectedOptions.map(option => (
                        <span key={option} className="flex items-center gap-1 bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-1 rounded-full">
                            {option}
                            <button type="button" onClick={() => handleRemove(option)} className="text-indigo-500 hover:text-indigo-700">
                                ×
                            </button>
                        </span>
                    ))}
                </div>
                <select onChange={handleSelect} value="" className="w-full border-t pt-2">
                    <option value="" disabled>Add...</option>
                    {availableOptions.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
            </div>
        </div>
    );
};

const InputSection = (props) => {
    const { theme, handleGenerateIdea, isLoading, experience, setExperience, skills, setSkills, focus, setFocus, interests, setInterests, goal, setGoal, time, setTime, features, setFeatures, avoid, setAvoid, formOptions } = props;
    const cardClass = theme === 'dark'
        ? 'bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700'
        : 'bg-white p-6 rounded-xl shadow-lg border border-gray-200';
    const headingClass = theme === 'dark'
        ? 'text-2xl font-semibold mb-6 text-white'
        : 'text-2xl font-semibold mb-6 text-gray-800';
    return (
        <div>
            <div className={cardClass}>
                <h2 className={headingClass}>Tell Us About Yourself</h2>
                <form onSubmit={handleGenerateIdea} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormSelect label="Experience Level" value={experience} onChange={setExperience} options={formOptions.experienceLevels} />
                        <FormSelect label="Project Focus" value={focus} onChange={setFocus} options={formOptions.projectFocuses} />
                    </div>
                    <MultiSelect label="Your Technical Skills" options={formOptions.techSkillsOptions} selectedOptions={skills} onChange={setSkills} />
                    <MultiSelect label="Interests or Domains" options={formOptions.interestOptions} selectedOptions={interests} onChange={setInterests} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormSelect label="Project Goal" value={goal} onChange={setGoal} options={formOptions.projectGoals} />
                        <FormSelect label="Time Commitment" value={time} onChange={setTime} options={formOptions.timeCommitments} />
                    </div>
                    <FormInput label="Key Features Wanted" placeholder="e.g., User auth, Real-time data" value={features} onChange={setFeatures} />
                    <FormInput label="What to Avoid" placeholder="e.g., E-commerce, Social media clones" value={avoid} onChange={setAvoid} />
                    <button type="submit" disabled={isLoading} className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-all duration-300 disabled:bg-indigo-400 dark:disabled:bg-indigo-700 disabled:cursor-not-allowed">
                        {isLoading ? <><Loader className="animate-spin" size={20} /> Generating...</> : <><Wand2 size={20} /> Generate My Project Idea</>}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InputSection;