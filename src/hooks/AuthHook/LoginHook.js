import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { setTempData } from "../../utils/temp";

const useAuthLogin = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState([
    { name: "email", label: "Email", type: "email", value: "" },
    { name: "password", label: "Password", type: "password", value: "" },
    
  ]);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { mutate, error } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      sessionStorage.setItem("local_token", JSON.stringify(data?.data?.local_token));
      setTempData("local_token",data?.data?.local_token)
      toast.success("Login successful!");
      setIsLoading(false)
      navigate("/")
      // navigate("/"); // Uncomment if you want to navigate after successful login
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
    e.preventDefault();
    if(isLoading){
      return
    }
    setIsLoading(true)

    const formData = fields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});

    if (!formData.email) {
      toast.warning("Email is required!");
      setIsLoading(false)
      return;
    }

    if (!formData.password) {
      toast.warning("Password is required!");
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
  // setIsLoading(false)
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

