import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { resentOTP, verifyotp } from "../../services/auth"; // Make sure to import resendotp
import { getTempData, setTempData } from "../../utils/temp";
import { useNavigate, useParams } from "react-router-dom";

const useVerifyOTP = () => {
    const navigate = useNavigate();
    const { meth } = useParams(); 
    const { email } = useParams(); 
    // OTP verification mutation
    const { mutate: verifyMutate, isLoading, error } = useMutation({
        mutationFn: verifyotp, // replace with your OTP verification API function
        onSuccess: (data) => {
            toast.success(data?.data?.message);
            if (data.data.token != "") {
                setTempData("tempToken", data?.data?.token);
                navigate("/auth/new-password");
            } else {
                navigate("/auth/login");
            }
        },
        onError: (error) => {
            console.log(error.response.data.error);
            toast.error(error?.response?.data?.error);
        },
    });

    // OTP resending mutation
    const { mutate: resendMutate, isLoading: resendLoading } = useMutation({
        mutationFn: resentOTP, // replace with your OTP resending API function
        onSuccess: () => {
            toast.success("OTP has been resent!");
            // console.log(data)
        },
        onError: (error) => {
            // toast.error("Failed to resend OTP!");
            console.log(error?.response?.data?.error)
            const time = error?.response?.data?.error.split("-")
            if (Number(time[1])==time[1]){
                localStorage.setItem("otpSentTime",Number(time[1]))
            }
            // console.log(Number(time[1]))
        },
    });

    // Function to verify OTP
    const verifyOtp = (otp) => {
        const token = getTempData("tempToken");
        verifyMutate({ otp, token });
    };

    // Function to resend OTP
    const resendOtp = () => {
        // const token = getTempData("tempToken");
        resendMutate({ meth,email });
    };

    return {
        verifyOtp,
        resendOtp,        // Expose resendOtp
        isLoading,
        resendLoading,    // Expose resendLoading for button disabling
        error,
    };
};

export default useVerifyOTP;
