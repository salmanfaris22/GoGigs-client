import { useMutation } from "@tanstack/react-query";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../services/auth";

const useAuthLogin = () => {
  const navigate = useNavigate();

  // State for form fields
  const [fields, setFields] = useState([
    { name: "email", label: "Email", type: "email", value: "" },
    { name: "password", label: "Password", type: "password", value: "" }
  ]);
  // Checkbox state
  const [isChecked, setIsChecked] = useState(false);
  // React Query mutation for login
  const { mutate, isLoading, error } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
        sessionStorage.setItem("local_token", JSON.stringify(data?.data?.local_token));
        toast.success("Login successful!");
        navigate("/");
    },
    onError: (error) => {
     toast.warning(error?.response?.data?.error);
    },
  });
  // Handle input field changes
  const handleInputChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };
  // Handle checkbox toggle
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = fields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});
    if (!formData.email) {
        toast.warning("Email is required!");
        return;
      }
      if (!formData.password) {
        toast.warning("Password is required!");
        return;
      }
      if (formData.password.length < 6) {
        toast.warning("Password must be at least 6 characters!");
        return;
      }
    mutate(formData);
  };

  return {
    fields,
    handleInputChange,
    isChecked,
    handleCheckboxChange,
    handleSubmit,
    isLoading,
    error,
  };
};

export default useAuthLogin;
