import React, { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  name?: string;
  rootStyle?: string;
  inputStyle?: string;
  labelStyle?: string;
  onChange?: (...args: any[]) => any;
}

const Input: FC<InputProps> = (props) => {
  const { rootStyle, inputStyle, labelStyle, onChange, label, name, ...rest } =
    props;

  const rootClassName = twMerge(`relative z-0 mb-6 w-full group ${rootStyle}`);
  const inputClassName = twMerge(
    `block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${inputStyle}`
  );
  const labelClassName = twMerge(
    `peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${labelStyle}`
  );

  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }

    return null;
  };

  return (
    <div className={rootClassName}>
      <input
        type="text"
        name={name}
        id={name}
        className={inputClassName}
        placeholder=" "
        required
        onChange={handleChange}
        {...rest}
      />
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
    </div>
  );
};

export default Input;
