import { FaApple, FaGoogle, FaXTwitter } from "react-icons/fa6";

export default function AuthButtons() {
  return (
    <>
    <h1 className="text-3xl font-bold text-blue-600 text-center">GoGigs.</h1>
    <div className="flex justify-center mt-4">
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md mr-2">Login</button>
      <button className="px-4 py-2 border border-gray-400 rounded-md">Sign Up</button>
    </div>
    <p className="mt-4 text-center font-semibold">Journey Begins</p>
   
    <div className="flex justify-center gap-3 mt-4">
              <button className="p-2 border border-gray-400 rounded-md"><FaApple /></button>
      <button className="p-2 border border-gray-400 rounded-md"><FaGoogle /></button>
      <button className="p-2 border border-gray-400 rounded-md"><FaXTwitter /></button>
    </div>
    </>
  );
}