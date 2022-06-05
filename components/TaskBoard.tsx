import React from "react";

type ComponentProps = {
  children: React.ReactNode
}
const TaskBoard = ({ children }: ComponentProps) => {
  return (
    <div className="rounded bg-amber-200 text-white p-1 my-2">{children}</div>
  );
};  

export default TaskBoard;


     

