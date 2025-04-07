import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import GradiantBtn from '../../../../common/Components/button/GradiantBtn';
import InputField from '../../../../common/Components/input/Input';

const Education = () => {
    const [education, setEducation] = useState([
        {
            institution: '',
            degree: '',
            field: '',
            start_date: '',
            end_date: ''
        }
    ]);

    const handleEducationChange = (index, field, value) => {
        const updatedEducation = [...education];
        updatedEducation[index][field] = value;
        setEducation(updatedEducation);
    };

    const handleAddEducation = () => {
        setEducation([
            ...education,
            {
                institution: '',
                degree: '',
                field: '',
                start_date: '',
                end_date: ''
            }
        ]);
    };

    const handleRemoveEducation = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        setEducation(updatedEducation);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Education:', education);
        alert('Education details updated!');
    };

    return (
        <div className="grid grid-cols-2 h-full">
            <div className="h-full">
                <img
                    src="https://i.pinimg.com/736x/2c/66/a7/2c66a7c617b834535487fbc24a7c3d82.jpg"
                    className="h-full object-cover rounded-lg shadow-sm"
                />
            </div>
            <div className="p-6 sm:p-10 md:p-12 w-full">
                <div className="text-center mb-8">
                    <h1 className="font-bold text-[var(--color-primary)] text-3xl md:text-4xl">
                        Update Your{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                            Education
                        </span>
                    </h1>
                    <p className="text-gray-600 mt-2">Add your educational background here.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="max-h-[500px] overflow-y-auto p-2 rounded-lg">
                        {education.map((edu, index) => (
                            <div key={index} className="flex flex-col space-y-4 border-b pb-4 mb-4">
                                <div className="flex flex-col lg:flex-row gap-4">
                                    {/* Institution Name */}
                                    <div className="w-full">
                                        <InputField
                                            label="Institution"
                                            value={edu.institution}
                                            onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                                            placeholder="e.g., Example University"
                                            error=""
                                        />
                                    </div>

                                    {/* Degree */}
                                    <div className="w-full">
                                        <InputField
                                            label="Degree"
                                            value={edu.degree}
                                            onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                                            placeholder="e.g., Bachelor of Science"
                                            error=""
                                        />
                                    </div>

                                    {/* Field */}
                                    <div className="w-full">
                                        <InputField
                                            label="Field"
                                            value={edu.field}
                                            onChange={(e) => handleEducationChange(index, 'field', e.target.value)}
                                            placeholder="e.g., Computer Science"
                                            error=""
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row gap-4">
                                    {/* Start Date */}
                                    <div className="w-full">
                                        <InputField
                                            label="Start Date"
                                            value={edu.start_date}
                                            onChange={(e) => handleEducationChange(index, 'start_date', e.target.value)}
                                            placeholder="e.g., 2020-08-01"
                                            error=""
                                        />
                                    </div>

                                    {/* End Date */}
                                    <div className="w-full">
                                        <InputField
                                            label="End Date"
                                            value={edu.end_date}
                                            onChange={(e) => handleEducationChange(index, 'end_date', e.target.value)}
                                            placeholder="e.g., 2024-05-01"
                                            error=""
                                        />
                                    </div>
                                </div>

                                {/* Remove Education Button */}
                                {education.length > 1 && (
                                    <div className="flex justify-between mt-4">
                                        <button
                                            type="button"
                                            className="flex items-center gap-2 text-red-500 hover:text-red-700"
                                            onClick={() => handleRemoveEducation(index)}
                                        >
                                            <FaTrash /> Remove Education
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
                            onClick={handleAddEducation}
                        >
                            <FaPlus /> Add More Education
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

export default Education;
