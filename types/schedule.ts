import { Months } from "./dates";
import { TaskTypes } from "./tasks";

export type Schedule = {
  [year: number]: {
    [month in Months]?: {
      [day: number]: {
        type: string;
        description: string;
      }[];
    };
  };
};
