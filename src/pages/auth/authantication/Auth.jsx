import React from "react";
import { Outlet } from "react-router-dom";
import img from "../../../assets/auth/auth2.jpg";
const AuthLayout = () => {
  return (
    <div>
      <div className="absolute right-0 top-0">
        <div className="p-5 text-center text-2xl bg-[var(--color-secondry)]">
          {["G", "o", "G", "i", "g", "s"].map((letter, index) => (
            <div key={index} className="font-bold text-[var(--color-white)]">{letter}</div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center h-screen  w-full ">
        <div className="w-full  bg-[var(--color-white)]  rounded-xl  grid grid-cols-2  items-center   ">

          {/* Image Section (Hidden on Mobile) */}
          <div className="w-[100%]  h-screen  overflow-hidden ">
            <img src={img} alt="Auth Illustration" className=" h-screen object-cover " />
          </div>

          {/* Login Form Section */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
