import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { sendOtp } from "../../services/auth";
import { useNavigate, useParams } from "react-router-dom";
import { setTempData } from "../../utils/temp";
import { useState } from "react";


const useAuthForgotPassword = () => {
    const navigate = useNavigate();
    const [getMail,setMail]=useState("")
    const { meth } = useParams(); 
     const [isLoading, setIsLoading] = useState(false);
  const { mutate, error } = useMutation({
    mutationFn: sendOtp,
    onSuccess: (data) => {
      toast.success("OTP sent successfully!");
        setTempData("tempToken",data?.data?.token)
            navigate(`/auth/verify-otp/${meth}/${getMail}`);
            setIsLoading(false)
    //   console.log(data)
    },
    onError: (error) => {
      toast.warning( error?.response?.data?.error);
    //   console.log(error?.response?.data?.error)
      setIsLoading(false)
    },
  });

  // Handle OTP sending
  const handleSendOtp = (e, email) => {
    e.preventDefault();
    if(isLoading){
        return
      }
      setIsLoading(true)
    if (!email) {
      toast.warning("Please enter a valid email address.");
      setIsLoading(false)
      return;
    }
    setMail(email)
    mutate({ email,meth });  // Send the email to the backend for OTP
  };

  return { handleSendOtp, isLoading, error };
};

export default useAuthForgotPassword;
