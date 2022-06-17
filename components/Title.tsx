import React from "react";

type ComponentProps = {
  children: React.ReactNode;
};
const Title = ({ children }: ComponentProps) => {
  return <div className=" my-8 font-bold text-xl">{children}</div>;
};

export default Title;
