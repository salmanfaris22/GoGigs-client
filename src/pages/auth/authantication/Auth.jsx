import React from "react";
import { Outlet } from "react-router-dom";

import SectionTop from "./common/SectionTop";
import SectionImage from "./common/SectionImage";
import AnimatedComponent from "../../../common/UI/Animation/MotionAnimation";
const AuthLayout = () => {
  return (
    <div>
      <AnimatedComponent animationType="slideUp" className={"w-full flex justify-center items-center"}>
        <div className="absolute right-0 top-0">
          <SectionTop />
        </div>
        <div className="flex justify-center items-center h-screen  w-full ">
          <div className="w-full  bg-[var(--color-white)]  rounded-xl  grid grid-cols-2  items-center   ">
            {/* Image Section (Hidden on Mobile) */}
            <SectionImage />
            {/* Login Form Section */}
            <div class="relative h-full w-full bg-white">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div class=" left-0 right-0 top-[-10%] w-full h-fit rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,var(--color-bg),var(--color-bg2))]">
            <Outlet />
</div></div>
          </div>
        </div>
      </AnimatedComponent>


    
    </div>
  );
};

export default AuthLayout;
