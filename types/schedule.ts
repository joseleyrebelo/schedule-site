import { Months } from "./dates";
import { TaskTypes } from "./tasks";

export type Schedule = {
  [year: number]: {
    [month in Months]?: {
      [day: number]: {
        type: TaskTypes;
        description: string;
      }[];
    };
  };
};
