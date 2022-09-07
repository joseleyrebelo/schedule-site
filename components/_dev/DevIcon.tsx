import React from "react";

type DevIconProps = {
  onClick: (any:any) => void;
  className?: string,
  isAbsolute?: boolean
};
const DevIcon = ({ onClick, className = "", isAbsolute = true }: DevIconProps) => {
  return (
    <div
      className={
        `${isAbsolute ? "absolute top-1/2 -translate-y-1/2 right-4" : ""} ` +
        `w-3 h-3 border-2 rounded-full border-orange-500 bg-gray-200 ` +
        `hover:scale-150 active:scale-75 bg-opacity-50 transition-transform cursor-pointer` + 
        `${className ? " "+className: ""}`
      }
      onClick={onClick}
    />
  );
};

export default DevIcon;
