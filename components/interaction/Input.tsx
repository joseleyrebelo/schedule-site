import React from "react";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  isEditable?: boolean;
};
const Input = ({
  value,
  onChange,
  placeholder,
  className,
  isEditable,
}: InputProps) => {
  return (
    <input
      className={`border h-[46px] text-[13px] p-2 px-4 rounded-lg w-full ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={isEditable}
    />
  );
};

export default Input;
