import React from "react";

const SectionHeader = ({ title, subtitle, description }) => {
    return (
      <div className="">
        <h1 className="text-5xl font-extrabold text-[var(--color-primary)] drop-shadow-md">
          {title}
        </h1>
        {/* <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-2 rounded-full"></div> */}
      <div className="flex w-full justify-between items-center  h-14">
      {subtitle && (
          <p className="text-lg font-medium text-[var(--color--primary-text)] ">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-base text-[var(--color--primary-text)]  opacity-80">
            {description}
          </p>
        )}
      </div>
      </div>
    );
  };
  
  export default SectionHeader;