import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import GradiantBtn from '../../../../common/Components/button/GradiantBtn';
import InputField from '../../../../common/Components/input/Input';

const Skills = () => {
    const [skills, setSkills] = useState([
        { type: 'Skill', name: '', level: '', years_exp: '' }
    ]);

    const handleSkillChange = (index, field, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index][field] = value;
        setSkills(updatedSkills);
    };

    const handleAddSkill = () => {
        setSkills([
            ...skills,
            { type: 'Skill', name: '', level: '', years_exp: '' }
        ]);
    };

    const handleRemoveSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Skills:", skills);
        alert('Skills updated!');
    };

    return (
       <div className=' grid grid-cols-2 h-full'>
       <div className='h-full'>
       <img src='https://saigontechnology.com/wp-content/uploads/top-6-programming-languages-for-custom-software-development_1.png'  className='h-full 
 object-cover rounded-lg
 shadow-sm'/>
       </div>
         <div className="p-6 sm:p-10 md:p-12 w-full">
            <div className="text-center mb-8">
                <h1 className="font-bold text-[var(--color-primary)] text-3xl md:text-4xl">
                    Update Your <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">Skills</span>
                </h1>
                <p className="text-gray-600 mt-2">Add your professional skills here.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="max-h-[500px] overflow-y-auto p-2 rounded-lg">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col space-y-4 border-b pb-4 mb-4">
                            <div className="flex flex-col lg:flex-row gap-4">
                                {/* Skill Name */}
                                <div className="w-full">
                                    <InputField
                                        label="Skill Name"
                                        value={skill.name}
                                        onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                                        placeholder="e.g., JavaScript"
                                        error=""
                                    />
                                </div>

                                {/* Skill Level - Dropdown */}
                                <div className="w-full">
                                    <label className="block mb-1 text-sm font-medium text-gray-700">Skill Level</label>
                                    <select
                                        value={skill.level}
                                        onChange={(e) => handleSkillChange(index, 'level', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="">Select Level</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                        <option value="Expert">Expert</option>
                                        <option value="Master">Master</option>
                                        <option value="Novice">Novice</option>
                                  
                                     
                                        <option value="Explorer">Explorer</option>
                                      
                                    </select>
                                </div>

                                {/* Years of Experience */}
                                <div className="w-full">
                                    <InputField
                                        label="Years of Experience"
                                        value={skill.years_exp}
                                        onChange={(e) => handleSkillChange(index, 'years_exp', e.target.value)}
                                        placeholder="e.g., 3"
                                        error=""
                                    />
                                </div>
                            </div>

                            {/* Remove Skill Button */}
                            {skills.length > 1 && (
                                <div className="flex justify-between mt-4">
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 text-red-500 hover:text-red-700"
                                        onClick={() => handleRemoveSkill(index)}
                                    >
                                        <FaTrash /> Remove Skill
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Add More Button */}
                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                        onClick={handleAddSkill}
                    >
                        <FaPlus /> Add More Skill
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex justify-end gap-4 absolute bottom-10 right-10">
                    <GradiantBtn lebal={"Update Profile"} type="submit" />
                    <GradiantBtn lebal={"Next Section"} onClick={() => console.log("Navigate to next section")} />
                </div>
            </form>
        </div>
       </div>
    );
};

export default Skills;
