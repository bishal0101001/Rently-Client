import React from "react";

interface InputProps {
  placeholder?: string;
  type?: string;
  htmlFor: string;
  label: string;
  Icon?: any;
}

const BoxInput: React.FC<InputProps> = ({
  placeholder,
  label,
  type = "text",
  htmlFor,
  Icon,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <span className="flex items-center justify-between w-full p-2.5 bg-dark text-light text-sm rounded-lg">
        <input
          type={type}
          id={htmlFor}
          className="bg-dark text-light text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 outline-none"
          placeholder={placeholder}
          required
        />
        {Icon && <Icon size={25} />}
      </span>
    </div>
  );
};

export default BoxInput;
