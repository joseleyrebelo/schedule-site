import React from "react";

type ComponentProps = {
  children: React.ReactNode;
  className?: string;
};
const Component = ({ children, className }: ComponentProps) => {
  return <div className={className}>{children}</div>;
};

export default Component;
