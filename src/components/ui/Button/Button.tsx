import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  href: string;
  label: string;
  style?: string;
  rootStyle?: string;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({
  href = "#",
  style,
  label,
  onClick,
  rootStyle,
}) => {
  const className = twMerge(
    `w-24 h-10 bg-primary text-secondary rounded mr-10 font-semibold md:w-28 md:h-10 ${style}`
  );

  return (
    <Link href={href} className={rootStyle}>
      <button onClick={onClick} type="submit" className={className}>
        {label}
      </button>
    </Link>
  );
};

export default Button;
