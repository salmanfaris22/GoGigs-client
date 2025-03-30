import React from "react";
import useResetPassword from "../../../../hooks/AuthHook/newpassHook";


const NewPassword = () => {
  const { fields, handleInputChange, isLoading, handleSubmit } = useResetPassword();

  return (
    <div className="flex w-full h-screen justify-center items-center px-4">
      <div className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-3xl mb-4">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          {/* Dynamic Input Fields for New Password and Confirm Password */}
          {fields.map((field, index) => (
            <div key={field.name} className="mb-4">
              <label htmlFor={field.name} className="block text-sm mb-1">
                {field.label}
              </label>
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                value={field.value}
                onChange={(e) => handleInputChange(index, e)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          ))}
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full bg-blue-500 text-white p-2 rounded"
          >
            {isLoading ? "Loading..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};



export default NewPassword
