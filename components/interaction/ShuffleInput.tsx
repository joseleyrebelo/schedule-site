import DevIcon from "components/_dev/DevIcon";
import React, { useEffect, useState } from "react";
import Input from "./Input";

type ShuffleInputProps = {
  shuffler: () => string;
  onShuffle: (suffle: string) => void;
  className?: string;
  placeholder?: string;
};
const ShuffleInput = ({
  shuffler,
  onShuffle,
  className,
  placeholder,
}: ShuffleInputProps) => {
  const [current, setCurrent] = useState(shuffler());
  const shuffleHandler = () => {
    const newValue = shuffler();
    setCurrent(newValue);
    onShuffle(newValue);
  };
  useEffect(() => shuffleHandler(), []);
  return (
    <div className="relative z-10">
      <Input
        className="border-b-2 shadow-sm pointer-events-none bg-gray-300"
        value={current}
        onChange={() => {}}
        placeholder={placeholder || ""}
        isEditable={false}
      />
      <DevIcon onClick={() => shuffleHandler()} />
    </div>
  );
};

export default ShuffleInput;
