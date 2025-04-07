import React, { useEffect, useState } from "react";
import Button from "../../../../common/Components/button/Button";
import { toast } from "react-toastify";
import useVerifyOTP from "../../../../hooks/AuthHook/verifyotpHook";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const { verifyOtp, resendOtp, isLoading } = useVerifyOTP();

  useEffect(() => {
    // Get the stored time when OTP was sent
    const otpSentTime = localStorage.getItem("otpSentTime");

    // If OTP was already sent, calculate time left
    if (otpSentTime) {
      const timePassed = Math.floor((Date.now() - otpSentTime) / 1000);
      const remainingTime = 120 - timePassed; // 2 minutes (120 seconds)
      if (remainingTime > 0) {
        setTimeLeft(remainingTime);
      }
    }

    // Set interval to count down the time left for OTP resend
    const intervalId = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(prevTime => prevTime - 1);
      }
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Handle OTP input change
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Handle OTP verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast.warning("OTP must be 6 digits!");
      return;
    }
    verifyOtp(otp);
  };

  // Handle resend OTP functionality
  const handleResendOtp = async () => {
    if (timeLeft > 0) return; // Don't resend OTP if there's still time left

    // Store current time in localStorage when OTP is resent
    localStorage.setItem("otpSentTime", Date.now());

    // Call resend OTP function
    resendOtp();

    // Reset the timer
    setTimeLeft(120); // Reset the timer to 2 minutes (120 seconds)
  };

  return (
    <div className="flex w-full h-screen justify-center items-center px-4">
      <div className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-xl font-semibold text-center mb-4">Verify OTP</h2>
        <form onSubmit={handleVerifyOtp} className="flex flex-col items-center">
          <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            maxLength="6"
            placeholder="Enter OTP"
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <Button
            label={isLoading ? "Verifying..." : "Verify OTP"}
            variant="primary"
            className="mt-4 w-full"
            disabled={isLoading}
            type="submit"
          />
          <p className="mt-4 text-center">
            <button   type="button"
              onClick={handleResendOtp}
              className="text-blue-500 hover:underline"
              disabled={isLoading || timeLeft > 0}
            >
              {timeLeft > 0 ? `Resend OTP in ${timeLeft}s` : "Resend OTP"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
