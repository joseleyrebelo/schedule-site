import DevIcon from "components/_dev/DevIcon";
import React, { useEffect, useState } from "react";
import Input from "./Input";

type ShuffleInputProps = {
  shuffler: () => string[];
  onShuffle: (value: string, label: string) => void;
  className?: string;
  placeholder?: string;
};
const ShuffleInput = ({
  shuffler,
  onShuffle,
  className,
  placeholder,
}: ShuffleInputProps) => {
  const [value, setValue] = useState("");
  const [label, setLabel] = useState("");
  const shuffleHandler = () => {
    const [shuffledValue, shuffledLabel] = shuffler();
    setValue(shuffledValue);
    setLabel(shuffledLabel || shuffledValue);
    onShuffle(value, label);
  };
  useEffect(() => shuffleHandler(), []);
  return (
    <div className="relative z-10">
      <Input
        className={`border-b-2 shadow-sm pointer-events-none bg-gray-300 ${className}`}
        value={label}
        onChange={() => {}}
        placeholder={placeholder || ""}
        isEditable={false}
      />
      <DevIcon onClick={() => shuffleHandler()} />
    </div>
  );
};

export default ShuffleInput;
