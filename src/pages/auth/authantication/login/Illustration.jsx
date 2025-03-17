import { assets } from "../../../../assets/assets";
export default function Illustration() {
    return (
      <div className="w-1/2">
        <img 
          src={assets.illustration} 
          alt="Login Illustration" 
          className="rounded-2xl shadow-lg  object-cover"
          width={360}
        />
      </div>
    );
  }