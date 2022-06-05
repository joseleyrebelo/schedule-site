import React from "react";

type ComponentProps = {
  children: React.ReactNode
}
const Component = ({ children }: ComponentProps) => {
  return (
    <div>
      {children}
    </div>
  );
};  

export default Component;
