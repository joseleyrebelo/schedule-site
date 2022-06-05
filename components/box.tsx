import React from "react";

type ComponentProps = {
  children: React.ReactNode
}
const Box = ({ children }: ComponentProps) => {
  return (
    <div className="flex justify-between bg-amber-100 rounded flex-row">
    </div>
  );
};  

export default Box;