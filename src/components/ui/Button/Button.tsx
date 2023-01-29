import React, { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";
import { Icon } from "@components/ui";

interface ButtonProps {
  href: string;
  label: string;
  style?: string;
  rootStyle?: string;
  onClick?: any;
  icon?: IconType | null;
  iconSize?: number;
}

const Button: React.FC<ButtonProps> = ({
  href = "#",
  style,
  label,
  onClick,
  rootStyle,
  icon = null,
  iconSize,
}) => {
  const className = twMerge(
    `w-24 h-10 bg-primary text-secondary rounded font-semibold md:w-28 ${style}`
  );

  return (
    <Link href={href} className={rootStyle}>
      <button onClick={onClick} type="submit" className={className}>
        {icon ? (
          <span className="flex justify-center items-center gap-1">
            {label}
            <Icon Icon={icon} size={iconSize} />
          </span>
        ) : (
          label
        )}
      </button>
    </Link>
  );
};

export default Button;
