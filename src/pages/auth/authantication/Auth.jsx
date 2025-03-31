import React from "react";
import { Outlet } from "react-router-dom";

import SectionTop from "./common/SectionTop";
import SectionImage from "./common/SectionImage";
import AnimatedComponent from "../../../common/UI/Animation/MotionAnimation";
const AuthLayout = () => {
  return (
    <div>
       <AnimatedComponent animationType="slideUp" className={"w-full flex justify-center items-center" }>
      <div className="absolute right-0 top-0">
        <SectionTop />
      </div>
      <div className="flex justify-center items-center h-screen  w-full ">
        <div className="w-full  bg-[var(--color-white)]  rounded-xl  grid grid-cols-2  items-center   ">
          {/* Image Section (Hidden on Mobile) */}
          <SectionImage />
          {/* Login Form Section */}
         
          <Outlet />
  
        </div>
      </div>
      </AnimatedComponent>
    </div>
  );
};

export default AuthLayout;
