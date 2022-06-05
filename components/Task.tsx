import React from "react";
import { TaskTypes } from "../types/tasks";

type TaskProps = {
  type: string;
  description: string;
};
const Task = ({ type, description }: TaskProps) => {
  return (
    <div className="flex border border-slate-400 rounded-md p-4 items-center">
      <div className="font-bold p-2 bg-slate-300 mr-5 rounded-xl">{type}</div>
      <div className="">{description}</div>
    </div>
  );
};

export default Task;
