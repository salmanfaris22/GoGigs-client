import React, { useState } from "react";
import Button from "../../../../common/Components/button/Button";
import InputField from "../../../../common/Components/input/Input";

import SectionHeader from "../common/SectionHeader";
import useAuthForgotPassword from "../../../../hooks/AuthHook/forgottHook";

const AuthForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { handleSendOtp, isLoading } = useAuthForgotPassword();

  // Handle input change
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center px-4">
      <div className="w-full md:w-1/2 flex flex-col">
        <SectionHeader title={"GoGigs"} subtitle={"Forgot your password?"} description={"Enter your email to receive OTP"} />
        <form onSubmit={(e) => handleSendOtp(e, email)}>
          {/* Email Input Field */}
          <InputField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={handleInputChange}
            className="mb-4"
          />
          {/* Submit Button */}
          <Button
            label={isLoading ? "Sending OTP..." : "Send OTP"}
            variant="primary"
            className="mt-4 w-full"
            disabled={isLoading}
            type="submit"
          />
        </form>
        <p className="text-[var(--color--primary-text)] mt-4 text-center">
          Remembered your password? <a href="/login" className="text-[var(--color-primary)] font-semibold hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default AuthForgotPassword;
