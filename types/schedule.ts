import { Task } from "./tasks"

// export type Schedule = {
//   [year: number]: {
//     [month in Months]?: {
//       [day: number]: {
//         type: string;
//         description: string;
//       }[];
//     };
//   };
// };

export interface Schedule{
  [year: number]: {
    [month: number]: {
      [day: number]: Task[]
    }
  }
}
