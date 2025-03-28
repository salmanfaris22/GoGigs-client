import React from "react";

const CheckboxField = ({ label, name, checked = false, onChange = () => {} }) => {
  return (
    <div className="flex items-center gap-2 p-2">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor={name} className="text-gray-700">{label}</label>
    </div>
  );
};

export default CheckboxField;
