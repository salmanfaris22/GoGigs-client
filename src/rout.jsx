import React from "react";
import { Route, Routes } from "react-router-dom";

import AuthLayout from "./pages/auth/authantication/Auth";
import AuthLogin from "./pages/auth/authantication/login/AuthLogin";
import Authregister from "./pages/auth/authantication/register/AuthRegister";
import VerifyOTP from "./pages/auth/authantication/verifyOTP/verifyOTP";
import AuthForgotPassword from "./pages/auth/authantication/forgot/ForgotPassword";
import NewPassword from "./pages/auth/authantication/newPassword/NewPassword";

// import Hero from "./pages/NonAuth/Landing/Hero/Hero.Jsx";


const UserRout = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}
{/* <Route path="/" element={<Hero/> }/> */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<Authregister />} />
          <Route path="verify-otp/:meth/:email" element={<VerifyOTP />} />
          <Route path="forgot/:meth" element={<AuthForgotPassword />} />
          <Route path="new-password" element={<NewPassword />} />
          
        </Route>
      </Routes>
    </>
  );
};

export default UserRout;
