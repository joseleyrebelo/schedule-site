import React from "react";

type ComponentProps = {
  children: React.ReactNode
}
const GoalBoard = ({ children }: ComponentProps) => {
  return (
    <div className="rounded bg-amber-200 text-white p-10 m-10 w-2/6 text-xl"></div>
  );
};  

export default GoalBoard;