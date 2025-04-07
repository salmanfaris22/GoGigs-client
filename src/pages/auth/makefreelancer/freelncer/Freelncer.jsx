import React, { useState } from 'react';
import InputField from '../../../../common/Components/input/Input';
import GradiantBtn from '../../../../common/Components/button/GradiantBtn';

const FreelancerProfileForm = () => {
    const [bio, setBio] = useState("");
    // const [profileUrl, setProfileUrl] = useState("");
    const [profileImage, setProfileImage] = useState(null);

    // Error states
    const [errors, setErrors] = useState({
        bio: "",
        profileUrl: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};

        if (!bio) formErrors.bio = "Please provide a brief bio.";
        // if (!profileUrl) formErrors.profileUrl = "Please enter your profile URL.";

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            console.log({ bio, profileImage });
            // Here you would typically send this data to your backend
            alert("Profile data submitted successfully!"); // For demonstration
        }
    };

    // Handle file input for profile image
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    return (
       <div className='grid-cols-2 grid h-full'>
                  <div>
<img src='https://contentmender.com/wp-content/uploads/2019/01/11-Ways-A-Freelancer-Can-Benefit-Your-Company-1.png'  className='h-full 
 object-cover rounded-lg
 shadow-sm'/>
    </div>
         <div className="p-6 sm:p-10 md:p-12 w-full ">
 
            <div className="text-center mb-8">
                <h1 className="font-bold text-[var(--color-primary)] text-3xl md:text-4xl">
                    Create Your <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">Freelancer Profile</span>
                </h1>
                <p className="text-gray-600 mt-2">Provide some details to showcase your professional identity.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 ">
                {/* Profile Image Input */}
                <div className="flex flex-col items-center">
                    <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">
                        Upload Profile Image
                    </label>
                    <input
                        id="profileImage"
                        type="file"
                        className="mt-2 p-2 w-full sm:w-auto border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleImageChange}
                        accept="image/*" // Specify accepted file types
                    />
                    {/* Profile Image Preview */}
                    {profileImage && (
                        <div className="mt-4">
                            <img
                                src={profileImage}
                                alt="Profile Preview"
                                className="w-32 h-32 object-cover rounded-full mx-auto shadow-md"
                            />
                        </div>
                    )}
                    <p className="mt-1 text-xs text-gray-500">Supported formats: JPG, PNG. Max size: 2MB.</p>
                </div>

                {/* Bio Input */}
                <div>
                    <InputField
                        label="Brief Bio"
                        className="w-full"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Write a short introduction about your skills and experience."
                        error={errors.bio}
                        multiline={true} // Use a textarea for longer text
                        rows={7}
                    />
                </div>

                {/* Profile URL Input */}
         

                {/* Action Buttons */}
                <div className="mt-8 flex justify-end gap-4   absolute bottom-10  right-10">
                    <GradiantBtn lebal={"Update Profile"} type="submit" />
                    <GradiantBtn lebal={"Next Section"} onClick={() => console.log("Navigate to next section")} />
                </div>
            </form>
        </div>
       </div>
    );
};

export default FreelancerProfileForm;