import React from "react";
import clsx from "clsx";

type InputProps = {
  name?: string;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  placeholder = "Enter text...",
  value,
  onChange,
  disabled = false,
  className,
}) => {
  return (
    <input
      name={name} // ✅ name prop added
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={clsx(
        "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition",
        disabled ? "bg-gray-200 cursor-not-allowed" : "bg-white",
        className
      )}
    />
  );
};

export default Input;
