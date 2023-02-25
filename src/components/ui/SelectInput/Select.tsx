import React from "react";

export interface SelectOption<T> {
  label: string;
  value: T;
}

interface SelectProps<T extends string | number> {
  options: SelectOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

export function Select<T extends string | number>({
  options,
  value,
  onChange,
}: SelectProps<T>): JSX.Element {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value as T)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
