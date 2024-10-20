"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  outline,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded
        hover:opacity-80
        py-2
        transition
        w-full
        ${
          outline ? "bg-white" : "bg-blue-800"
        }   // Dark blue background for filled button
        ${
          outline ? "border-black" : "border-blue-800"
        }  // Dark blue border for filled button
        ${outline ? "text-black" : "text-white"}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
