import React from "react";
import InputField from "../../../../common/Components/input/Input";
import Button from "../../../../common/Components/button/Button";
import CheckboxField from "../../../../common/Components/input/Checkbox";

import SectionHeader from "../common/SectionHeader";
import useAuthRegister from "../../../../hooks/AuthHook/registerHook";
import { useNavigate } from "react-router-dom";

const AuthRegister = () => {
  const navigate = useNavigate();
  const {
    fields,
    handleInputChange,
    isChecked,
    handleCheckboxChange,
    handleSubmit,
    isLoading,
  } = useAuthRegister();

  const navigateToLogin = () => {
    navigate("/auth/login"); // Navigate to Login page
  };

  return (
    <div className="flex w-full h-screen justify-center items-center px-4">
      <div className="w-full md:w-1/2 flex flex-col">
        <SectionHeader
          title="GoGigs"
          subtitle="Join us today!"
          description="Create a new account"
        />
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
    </div>
  );
};

export default AuthRegister;
