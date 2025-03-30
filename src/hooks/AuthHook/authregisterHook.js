import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../services/auth";
import { setTempData } from "../../utils/temp";

const useRegisterHook = () => {
const navigate = useNavigate();
  // State for form fields
  const [fields, setFields] = useState([
    { name: "first_name", label: "First Name", type: "text", value: "" },
    { name: "last_name", label: "Last Name", type: "text", value: "" },
    { name: "user_name", label: "userName", type: "text", value: "" },
    { name: "email", label: "Email", type: "email", value: "" },
    { name: "password", label: "Password", type: "password", value: "" },
    // { name: "confirmPassword", label: "Confirm Password", type: "password", value: "" },
  ]);
  // Checkbox state
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // React Query mutation for registration
//   console.log(isLoading,"dfsdfs")
  const { mutate, error } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
    toast.success(data?.data?.message);
    toast.success(data?.data?.message2);
    setTempData("tempToken",data?.data?.token)
      navigate("/auth/verify-otp");
      setIsLoading(false)
    },
    onError: (error) => {
      toast.warning(error?.response?.data?.error);
      setIsLoading(false)
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
    if(isLoading){
        return
      }
      setIsLoading(true)
    e.preventDefault();
    const formData = fields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});

    if (!formData.first_name || !formData.last_name) {
      toast.warning("First Name and Last Name are required!");
      setIsLoading(false)
      return;
    }
    if (!formData.user_name) {
        toast.warning("User Name is required!");
        setIsLoading(false)
        return;
      }
    if (!formData.email) {
      toast.warning("Email is required!");
      setIsLoading(false)
      return;
    }
    if (formData.password.length < 6) {
      toast.warning("Password must be at least 6 characters!");
      setIsLoading(false)
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

export default useRegisterHook;
