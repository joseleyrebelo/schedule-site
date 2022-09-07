// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Schedule } from "../../types/schedule";
import { TaskTypes } from "../../types/tasks";

// @deprecated 

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Schedule>
) {
  const schedule = {
    2022: {
      June: {
        1: [
          { type: "bills", description: "Pay rent" },
          { type: "bills", description: "Pay rent 2" },
        ],
      },
      July: {
        15: [{ type: "out", description: "Pay rent" }],
        18: [{ type: "out", description: "Pay rent" }],
      },
    },
  };
  res.status(200).json(schedule);
}
