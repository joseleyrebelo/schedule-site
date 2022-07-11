import React from "react";

type LabelProps = {
  children: React.ReactNode;
  className?: string;
};

const Label = ({ children, className }: LabelProps) => {
  return <div className={`text-[12px] ${className}`}>{children}</div>;
};

export default Label;
