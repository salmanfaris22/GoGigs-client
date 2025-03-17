/* LoginForm.js */
import { useState } from "react";
import AuthButtons from "./AuthButtons";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-1/2 pr-6">
     
      <AuthButtons />
      <div className="mt-6 text-center text-gray-500 text-sm">Or</div>
      <div className="mt-4">
        <label className="text-sm font-medium">Username</label>
        <input 
          className="w-full p-2 border rounded-md mt-1"
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Enter username" 
        />
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium">Password</label>
        <input 
          className="w-full p-2 border rounded-md mt-1"
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter password" 
        />
      </div>
      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" /> <span>Remember me</span>
        </div>
        <a href="#" className="text-blue-500">Forgot password?</a>
      </div>
      <button className="w-full mt-4 bg-blue-600 text-white p-2 rounded-md">Login</button>
    </div>
  );
}