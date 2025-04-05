import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
  inputClass = "",
}) => {
  return (
    <div className={`relative w-full max-w-md ${className}`}>
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
        <FiSearch />
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${inputClass}`}
      />
    </div>
  );
};

export default SearchInput;
