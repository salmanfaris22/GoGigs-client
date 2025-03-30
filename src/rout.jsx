import React from "react";
import { Route, Routes } from "react-router-dom";

import AuthLayout from "./pages/auth/authantication/Auth";
import AuthLogin from "./pages/auth/authantication/login/AuthLogin";
import Authregister from "./pages/auth/authantication/register/AuthRegister";
import Hero from "./pages/NonAuth/Landing/Hero/Hero.Jsx";


const UserRout = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}
<Route path="/" element={<Hero/> }/>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<Authregister />} />
          {/* <Route path="register" element={<Authregister />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default UserRout;
