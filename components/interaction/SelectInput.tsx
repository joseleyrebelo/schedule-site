import DevIcon from "components/_dev/DevIcon";
import React, { useState } from "react";
import Input from "./Input";

type SelectInputProps = {
  options: string[];
  onSelected: (selected: string) => void;
  className?: string;
  placeholder?: string;
};
const SelectInput = ({
  options,
  onSelected,
  className,
  placeholder,
}: SelectInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const selectHandler = (option: string) => {
    setSelected(option);
    onSelected(option);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <Input
        className="border-b-2 shadow-sm pointer-events-none"
        value={selected}
        onChange={() => {}}
        placeholder={placeholder || ""}
        isEditable={false}
      />
      <DevIcon onClick={() => setIsOpen(!isOpen)} />
      <div
        className={
          `top-full left-0 bg-white absolute w-full border ` +
          `rounded-lg overflow-hidden ${
            !isOpen ? "h-0 opacity-0 pointer-events-none -translate-x-4" : 0
          } `
        }
      >
        {options.slice(1).map((option, index) => (
          <div
            className="h-[46px] p-2 px-4 flex items-center text-[13px] border-b cursor-pointer hover:bg-gray-100"
            onClick={() => selectHandler(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectInput;
