import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps<T extends string | number> {
  label: string;
  value: T;
  onChange: (value: T) => void;
  // options: {
  //   value: string;
  //   optionLabel: string;
  // }[];
  options: SelectOption<T>[];
  selectStyle?: string;
  labelStyle?: string;
  rootStyle?: string;
}

export interface SelectOption<T> {
  label: string;
  value: T;
}

function SelectInput<T extends string | number>({
  label,
  options,
  selectStyle,
  labelStyle,
  rootStyle,
  onChange,
  value,
}: InputProps<T>): JSX.Element {
  const selectClassName = twMerge(
    `bg-dark text-light text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 outline-none ${selectStyle}`
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
      <span className="flex w-full p-2.5 bg-dark text-light text-sm rounded">
        <select
          className={selectClassName}
          onChange={(e) => onChange(e.target.value as T)}
          value={value}
        >
          {/* <option value={selected}>{selected}</option> */}
          {/* {options.map((i) => (
            <option value={i.value} key={i.optionLabel}>
              {i.optionLabel}
            </option>
          ))} */}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
}

export default SelectInput;
