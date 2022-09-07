import DevIcon from "components/_dev/DevIcon";
import { pruneValueToMax } from "helpers/misc";
import React, { useState } from "react";
import { SelectOptions, SelectOptionsBland } from "types/ui";
import Input from "./Input";

type SelectInputProps = {
  options: SelectOptions;
  //  @todo make it access value and keys
  onSelected?: (selected: string) => void;
  initialSelected?: number;
  placeholder?: string;
};

const SelectInput = ({
  options,
  onSelected = () => {},
  initialSelected = 0,
  placeholder,
}: SelectInputProps) => {
  const sortedOptions: SelectOptionsBland = options.map((option) => ({
    // @verify-syntax to avoid using typeof
    key: typeof option === "string" ? option : option.key,
    value: typeof option === "string" ? option : option.value,
  }));
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(
    // @todo document act of pruning vairables for safety? should it throw error ??
    pruneValueToMax(initialSelected, options.length - 1)
  );
  const selected = sortedOptions[selectedIndex];
  const selectHandler = (optionIndex: number) => {
    setSelectedIndex(optionIndex);
    onSelected(sortedOptions[optionIndex].value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Input
        className="border-b-2 shadow-sm pointer-events-none"
        value={selected.value}
        onChange={() => {}}
        placeholder={placeholder || ""}
        isEditable={false}
      />
      <DevIcon onClick={() => setIsOpen(!isOpen)} />
      <div
        className={
          `top-full left-0 bg-white absolute w-full border ` +
          `rounded-lg overflow-hidden ${
            !isOpen ? "h-0 opacity-0 pointer-events-none -translate-x-4" : ""
          } `
        }
      >
        {sortedOptions.map((option, index) => {
          return (
            <div
              className={
                `h-[46px] p-2 px-4 border-b cursor-pointer hover:bg-gray-100 ` +
                `flex items-center text-[13px] ` +
                `${selectedIndex === index ? "bg-gray-200" : ""}`
              }
              onClick={() => selectHandler(index)}
            >
              {option.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectInput;
