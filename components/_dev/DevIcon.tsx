import React from "react";

type DevIconProps = {
  onClick: () => void;
};
const DevIcon = ({ onClick }: DevIconProps) => {
  return (
    <div
      className={
        `absolute top-1/2 -translate-y-1/2 right-4 w-3 h-3 border-2 rounded-full border-orange-500 bg-gray-200 ` +
        `hover:scale-150 active:scale-75 bg-opacity-50 transition-transform cursor-pointer`
      }
      onClick={onClick}
    />
  );
};

export default DevIcon;
