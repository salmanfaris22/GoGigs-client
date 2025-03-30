import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { getTempData } from "../../utils/temp";
import { newPassowrd } from "../../services/auth";
import { useNavigate } from "react-router-dom";


const useResetPassword = () => {
    const navigate = useNavigate();
  const [fields, setFields] = useState([
    { name: "newPassword", label: "New Password", type: "password", value: "" },
    { name: "confirmPassword", label: "Confirm Password", type: "password", value: "" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Mutation for resetting the password
  const { mutate } = useMutation({
    mutationFn: newPassowrd,
    onSuccess: () => {
      toast.success("Password reset successfully!");

      setIsLoading(false);
      navigate("/auth/login")
    },
    onError: (error) => {
      toast.warning(error?.response?.data?.message || "An error occurred");
      setIsLoading(false);
    },
  });

  // Handle input field changes
  const handleInputChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    setIsLoading(true);

    const formData = fields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});

    if (!formData.newPassword || !formData.confirmPassword) {
      toast.warning("Both fields are required!");
      setIsLoading(false);
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.warning("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    // Call mutation to reset the password
    const token = getTempData("tempToken")
    console.log(token,"k")
    mutate({ password: formData.newPassword,token });
  };

  return {
    fields,
    handleInputChange,
    isLoading,
    handleSubmit,
  };
};

export default useResetPassword;
