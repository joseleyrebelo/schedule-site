import Link from "next/link";
import { ArrayDate, Months } from "../types/dates";

type MonthCell = {
  value?: number;
  link?: ArrayDate;
};
const MonthCell = ({ value, link }: MonthCell) => {
  const hasHover = !!value;
  const hasContent = !!link;
  if (link) console.log(link);
  return (
    <div
      className={
        `rounded aspect-square flex items-center justify-center border border-slate-400 ` +
        `border-slate-300 ${
          hasHover
            ? hasContent
              ? "bg-amber-100"
              : "bg-white"
            : " bg-slate-100"
        } ` +
        `${hasHover ? "hover:border-red-400" : ""} ` +
        `${hasContent ? "cursor-pointer" : ""} `
      }
    >
      {link ? (
        <Link href={`/day?date=${link.join("-")}`}>
          <span>{value}</span>
        </Link>
      ) : (
        value
      )}
    </div>
  );
};

export default MonthCell;
