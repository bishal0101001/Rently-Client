import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  label: string;
  selected: string;
  options: {
    value: string;
    optionLabel: string;
  }[];
  selectStyle?: string;
  labelStyle?: string;
  rootStyle?: string;
}

const SelectInput: React.FC<InputProps> = ({
  label,
  selected,
  options,
  selectStyle,
  labelStyle,
  rootStyle,
}) => {
  const selectClassName = twMerge(
    `bg-dark text-light text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 outline-none ${selectStyle}`
  );
  const labelClassName = twMerge(
    `block mb-2 text-sm font-medium text-gray-900 dark:text-white ${labelStyle}`
  );
  const rootClassName = twMerge(`basis-1/2 mb-6 ${rootStyle}`);
  return (
    <div className={rootClassName}>
      <label htmlFor="countries" className={labelClassName}>
        {label}
      </label>
      <span className="flex w-full p-2.5 bg-dark text-light text-sm rounded-lg">
        <select id="countries" className={selectClassName}>
          <option selected value={selected}>
            {selected}
          </option>
          {options.map((i) => (
            <option value={i.value} key={i.optionLabel}>
              {i.optionLabel}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
};

export default SelectInput;
