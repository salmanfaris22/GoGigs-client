
import React from "react";

function Button({text}) {
  return (
    <button
      className="hover:bg-blue-500 w-full border rounded hover:text-white hover:border-blue-500 p-2"
    //   onClick={}
    > {text}</button>
  );
}

export default Button;

// import React from "react";
// import img from "../../../../assets/auth/image.png";

// // Reusable Button Component
// const Button = ({ text, onClick }) => {
//   return (
//     <button
//       className="hover:bg-blue-500 w-[150px] border rounded hover:text-white hover:border-blue-500 p-2"
//       onClick={onClick}
//     >
//       {text}
//     </button>
//   );
// };
