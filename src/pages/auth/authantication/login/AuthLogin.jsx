import React from "react";
import Button from "../../../../utils/Button";
import Input from "../../../../utils/Input";
import img from  '../../../../assets/auth/image.png'
import Label from "../../../../utils/Label";
const AuthLogin = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="w-[55vw] h-[700px] flex justify-center items-center p-4 relative">
         {/* left side */}
          <div className="w-1/2 h-[500px] flex flex-col justify-center 
            shadow-[-10px_0px_15px_-5px_rgba(0,0,0,0.1)] 
            gap-y-5 rounded-l-xl p-5  bg-white">
            <h1 className="text-2xl font-bold">Gogis</h1>
            <div>
              <h1 className="font-medium">We missed you!</h1>
              <h1 className="text-sm text-gray-500">Login with open account</h1>
            </div>
            <form action="" className="flex flex-col justify-center h-full gap-y-3">
              <Input type="text" text="Username" />
              <Input type="password" text="Password" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <input 
                    type="checkbox" 
                    id="remember-me"
                    className="h-4 w-4"
                  />
                  <Label text={"remember me"} htmlFor="remember-me" >
                    
                  </Label>
                </div>
                <h1 className="text-sm text-blue-600 cursor-pointer">Forget password</h1>
              </div>
            </form>
            <div>
              <Button text="Login" />
            </div>
            <div className="flex gap-x-3">
              <Button text="Register" />
              <Button text="Login" />
            </div>
          </div>
               {/* right side */}
          <div className="w-1/2 h-[500px] mt-20 bg-white 
            shadow-[10px_10px_15px_-5px_rgba(0,0,0,0.1)] 
            rounded-xl ">
            <div 
              className="w-full h-full rounded-xl  flex items-center justify-center text-gray-500 object-cover"
            >
            <img className="w-full h-full object-cover" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLogin;