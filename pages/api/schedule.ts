// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Schedule } from "../../types/schedule";
import { TaskTypes } from "../../types/tasks";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Schedule>
) {
  const schedule = {
    2020: {
      June: {
        1: [{ type: TaskTypes.bills, description: "Pay rent" }],
      },
    },
  };
  res.status(200).json(schedule);
}
