import Link from "next/link";
import React from "react";
import { ArrayDate, Months } from "../../types/dates";

interface MonthCell {
  children?: React.ReactNode;
  link?: ArrayDate;
  onClick?: () => void;
}

const MonthCellInner = ({ children, onClick }: Omit<MonthCell, "link">) => (
  <div
    {...{ onClick }}
    className="h-full w-full flex items-center justify-center"
  >
    {children}
  </div>
);

const MonthCell = ({ children, link, onClick }: MonthCell) => {
  const isActive = !!children;
  const hasAction = !!link || !!onClick;

  return (
    <div
      className={
        `rounded aspect-square border border-slate-400 ` +
        `border-slate-300 ${
          isActive ? (hasAction ? "bg-amber-100" : "bg-white") : " bg-slate-100"
        } ` +
        `${isActive ? "hover:border-red-400" : ""} ` +
        `${hasAction ? "cursor-pointer" : ""} `
      }
    >
      {link ? (
        <Link href={`/day?date=${link.join("-")}`}>
          <MonthCellInner {...onClick}>{children}</MonthCellInner>
        </Link>
      ) : (
        <MonthCellInner {...onClick}>{children}</MonthCellInner>
      )}
    </div>
  );
};

export default MonthCell;
