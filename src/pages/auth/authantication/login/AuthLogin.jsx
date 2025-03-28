import React  from "react";
// import axios from "axios";
import InputField from "../../../../common/Components/input/Input";
import Button from "../../../../common/Components/button/Button";
import CheckboxField from "../../../../common/Components/input/Checkbox";
import useAuthLogin from "../../../../hooks/AuthHook/LoginHook";


const AuthLogin = () => {
  const { 
    fields, 
    handleInputChange, 
    isChecked, 
    handleCheckboxChange, 
    handleSubmit, 
    isLoading, 
    // error 
  } = useAuthLogin();

  return (
    <div className="flex w-full h-screen justify-center items-center px-4">
      <div className="w-full md:w-1/2 flex flex-col ">
      <h1 className="text-5xl font-extrabold text-[var(--color-primary)] text-center drop-shadow-md">
  
  GoGigs
</h1>
    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-2 rounded-full"></div>
<p className="text-lg font-medium text-[var(--color--primary-text)] text-center mt-3">
  We missed you!
</p>
<p className="text-base text-[var(--color--primary-text)] text-center mb-6 opacity-80">
  Login to your account
</p>

        {/* {error && <p className="text-red-500 text-sm text-center">{error}</p>} */}

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
            <a href="#" className="text-[var(--color-primary)] hover:underline">Forgot password?</a>
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
          Don’t have an account? <a href="#" className="text-[var(--color-primary)] font-semibold hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default AuthLogin;
