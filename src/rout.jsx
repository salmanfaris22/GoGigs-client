import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// const Hero = lazy(() => import("./pages/NonAuth/Hero/HeroPage.jsx"));

import { NavbarDemo } from "./common/Layout/Navbar/Navbar";
import Hero from "./pages/NonAuth/Home/MainHero";



// Lazy-loaded components
const AuthLayout = lazy(() => import("./pages/auth/authantication/Auth"));
const AuthLogin = lazy(() => import("./pages/auth/authantication/login/AuthLogin"));
const Register = lazy(() => import("./pages/auth/authantication/register/Register"));
const VerifyOTP = lazy(() => import("./pages/auth/authantication/verifyOTP/verifyOTP"));
const AuthForgotPassword = lazy(() => import("./pages/auth/authantication/forgot/ForgotPassword"));
const NewPassword = lazy(() => import("./pages/auth/authantication/newPassword/NewPassword"));
// const Hero = lazy(() => import("./pages/NonAuth/Landing/Hero/Hero.Jsx"));

const Loading = () => (
  <div className="flex items-center justify-center h-screen text-xl">
    Loading...
  </div>
);

const UserRout = () => {
  return (
    <Suspense fallback={<Loading />}>
    {/* <Header/> */}
       <NavbarDemo/>
      <Routes>

        {/* <Route path="/" element={<Hero />} /> */}
        <Route path="/" element={<Hero />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<Register />} />
          <Route path="verify-otp/:meth/:email" element={<VerifyOTP />} />
          <Route path="forgot/:meth" element={<AuthForgotPassword />} />
          <Route path="new-password" element={<NewPassword />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRout;
