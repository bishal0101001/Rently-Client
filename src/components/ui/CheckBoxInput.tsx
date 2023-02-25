import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  id: string;
  label: string;
  inputStyle?: string;
  labelStyle?: string;
  rootStyle?: string;
  isChecked: boolean;
  handleChange: () => void;
}

const CheckBoxInput: React.FC<Props> = ({
  id,
  label,
  inputStyle,
  labelStyle,
  rootStyle,
  isChecked,
  handleChange,
}) => {
  const rootClassName = twMerge(`w-full bg-dark rounded mt-0.5 ${rootStyle}`);
  const inputClassName = twMerge(
    `w-5 h-5 text-blue-600 bg-dark focus:ring-blue-500 cursor-pointer  ${inputStyle}`
  );
  const labelClassName = twMerge(
    `w-full py-3 ml-2 text-sm font-medium text-light ${labelStyle}`
  );
  return (
    <div className={rootClassName}>
      <div className="flex items-center pl-3 py-px">
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          className={inputClassName}
          onChange={handleChange}
        />
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default CheckBoxInput;
