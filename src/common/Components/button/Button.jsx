import React from "react";

const Button = ({
    type = "button",
    label,
    onClick,
    className = "",
    variant = "primary",
    fullWidth = false,
    icon: Icon,
  }) => {
    const baseStyles = "px-4 py-2 rounded-lg font-medium text-[var(--color-white)] focus:outline-none transition-all flex items-center justify-center";
    const variantStyles = {
      primary: "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]",
      secondary: "bg-gray-500 hover:bg-gray-600",
      success: "bg-green-500 hover:bg-green-600",
      danger: "bg-red-500 hover:bg-red-600",
      warning: "bg-yellow-500 hover:bg-yellow-600",
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      >
        {Icon && <Icon className="mr-2" />} {label}
      </button>
    );
  };
  
  export default Button;
  