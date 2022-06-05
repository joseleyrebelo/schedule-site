import Link from "next/link";
import { Months } from "../types/dates";

type MonthCell = {
  value?: number;
  link?: [number, Months, number];
};
const MonthCell = ({ value, link }: MonthCell) => {
  return (
    <div
      className={`rounded aspect-square flex items-center justify-center ${
        value ? (link ? "bg-red-300" : "bg-white") : " bg-slate-100"
      }`}
    >
      {link ? <Link href={`/day?date=${link.join("-")}`}>{value}</Link> : value}
    </div>
  );
};

export default MonthCell;
