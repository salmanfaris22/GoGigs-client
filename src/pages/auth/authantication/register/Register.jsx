import React from "react";
import { useNavigate } from "react-router-dom";
import useRegisterHook from "../../../../hooks/AuthHook/authregisterHook";
import SectionHeader from "../common/SectionHeader";
import InputField from "../../../../common/Components/input/Input";
import CheckboxField from "../../../../common/Components/input/Checkbox";
import Button from "../../../../common/Components/button/Button";
import AnimatedComponent from "../../../../common/UI/Animation/MotionAnimation";


// import useAuthLogin from "../../../../hooks/AuthHook/LoginHook";

const Register = () => {
    const navigate = useNavigate();
    const {
        fields,
        handleInputChange,
        isChecked,
        handleCheckboxChange,
        handleSubmit,
        isLoading,
    } = useRegisterHook();

    const navigateToLogin = () => {
        navigate("/auth/login"); // Navigate to Login page
    };

    return (
        <div className="flex w-full h-screen justify-center items-center px-4">
<AnimatedComponent animationType="slideUp" className={"w-full flex justify-center items-center" }>
            <div className="w-full md:w-1/2 flex flex-col">
                <SectionHeader
                    title="GoGigs"
                    subtitle="Join us today!"
                    description="Create a new account"
                />
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
                    {/* Dynamic Input Fields */}
                    {fields.slice(0, 2).map((field, index) => (
                        <InputField
                            key={field.name}
                            label={field.label}
                            name={field.name}
                            type={field.type}
                            value={field.value}
                            onChange={(e) => handleInputChange(index, e)}
                            className="mb-4"
                        />
                    ))}
                    {fields.slice(2,3).map((field, index) => (
                        <InputField
                            key={field.name}
                            label={field.label}
                            name={field.name}
                            type={field.type}
                            value={field.value}
                            onChange={(e) => handleInputChange(index + 2, e)}
                            className="mb-4 col-span-2"
                        />
                    ))}
                    {/* Remaining Input Fields */}
                    {fields.slice(3).map((field, index) => (
                        <InputField
                            key={field.name}
                            label={field.label}
                            name={field.name}
                            type={field.type}
                            value={field.value}
                            onChange={(e) => handleInputChange(index + 3, e)}
                            className="mb-4 col-span-2"
                        />
                    ))}

                    {/* Terms & Conditions Checkbox */}
                    <div className="flex items-center mb-4 text-sm">
                        <CheckboxField
                            label="I agree to the terms and conditions"
                            name="terms"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        label={isLoading ? "Registering..." : "Sign Up"}
                        variant="primary"
                        className="mt-4 w-full"
                        disabled={isLoading}
                        type="submit"
                    />
                </form>

                {/* Navigate to Login */}
                <p
                    className="text-[var(--color--primary-text)] mt-4 text-center"
                    onClick={navigateToLogin}
                >
                    Already have an account?{" "}
                    <span className="text-[var(--color-primary)] font-semibold hover:underline">
                        Log in
                    </span>
                </p>
            </div>
            </AnimatedComponent>
        </div>
    );
};

export default Register;
