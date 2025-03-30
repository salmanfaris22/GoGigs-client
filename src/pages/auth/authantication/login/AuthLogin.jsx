import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import InputField from "../../../../common/Components/input/Input";
import Button from "../../../../common/Components/button/Button";
import CheckboxField from "../../../../common/Components/input/Checkbox";
import useAuthLogin from "../../../../hooks/AuthHook/LoginHook";
import SectionHeader from "../common/SectionHeader";

const AuthLogin = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const {
    fields,
    handleInputChange,
    isChecked,
    handleCheckboxChange,
    handleSubmit,
    isLoading,
    // error 
  } = useAuthLogin();

  // Handle navigation to sign up page
  const navigateToSignUp = () => {
    navigate("/auth/register/"); // Navigate to SignUp page
  };

  // Handle navigation to forgot password page
  const navigateToForgotPassword = () => {
    navigate("/auth/forgot/reset_password/"); // Navigate to Forgot Password page
  };

  return (
    <div className="flex w-full h-screen justify-center items-center px-4">
      <div className="w-full md:w-1/2 flex flex-col ">
        <SectionHeader title={"GoGigs"} subtitle={" We missed you!"} description={"Login to your account"} />
        <form onSubmit={handleSubmit}>
          {/* Dynamic Input Fields */}
          {fields.map((field, index) => (
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
          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-4 text-sm">
            <CheckboxField label="Remember me" name="terms" checked={isChecked} onChange={handleCheckboxChange} />
            <button 
              type="button"
              onClick={navigateToForgotPassword}
              className="text-[var(--color-primary)] hover:underline">
              Forgot password?
            </button>
          </div>
          {/* Submit Button */}
          <Button
            label={isLoading ? "Loading..." : "Submit"}
            variant="primary"
            className="mt-4 w-full"
            disabled={isLoading}
            type="submit"
          />
        </form>
        <p className="text-[var(--color--primary-text)] mt-4 text-center">
          Don’t have an account? 
          <button 
            onClick={navigateToSignUp} 
            className="text-[var(--color-primary)] font-semibold hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthLogin;
