import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  placeholder?: string;
  type?: string;
  label: string;
  Icon?: any;
  iconColor?: string;
  rootStyle?: string;
  labelStyle?: string;
  inputStyle?: string;
  inputWrapperStyle?: string;
  val?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const BoxInput: React.FC<InputProps> = ({
  placeholder,
  label,
  type = "text",
  Icon,
  iconColor,
  rootStyle,
  labelStyle,
  inputStyle,
  inputWrapperStyle,
  val,
  disabled = false,
  onChange,
}) => {
  const rootClassName = twMerge(`mb-6 ${rootStyle}`);
  const labelClassName = twMerge(
    `block mb-2 text-sm font-medium text-secondary ${labelStyle}`
  );
  const inputClassName = twMerge(
    `bg-dark text-light text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 outline-none ${inputStyle}`
  );
  const inputWrapperClassName = twMerge(
    `flex items-center justify-between w-full p-2.5 bg-dark text-light text-sm rounded ${inputWrapperStyle}`
  );

  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={rootClassName}>
      <label htmlFor={label} className={labelClassName}>
        {label}
      </label>
      <span className={inputWrapperClassName}>
        <input
          type={type}
          id={label}
          className={inputClassName}
          placeholder={placeholder}
          value={disabled ? val : value}
          onChange={handleChange}
          disabled={disabled}
          required
        />
        {Icon && <Icon size={25} color={iconColor} />}
      </span>
    </div>
  );
};

export default BoxInput;
