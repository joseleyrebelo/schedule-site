import ScheduleContext from "contexts/ScheduleContext";
import { Moment } from "moment";
import Link from "next/link";
import React, { useContext } from "react";

interface MonthCellProps {
  children?: React.ReactNode;
  date?: Moment
  onClick?: () => void;
}

const MonthCellInner = ({ children, onClick }: MonthCellProps) => (
  <div
    {...{ onClick }}
    className="h-full w-full flex items-center justify-center"
  >
    {children}
  </div>
);

const MonthCell = (props: MonthCellProps) => {
  const { date, onClick } = props
  const { schedule } = useContext(ScheduleContext);

  const isActive = !!date;
  const hasTask = date 
    ? (schedule[date.year()] && schedule[date.year()][date.month()] && schedule[date.year()][date.month()][date.date()]) 
    : false;
  
  const hasAction = !!hasTask || !!onClick;

  const link = date && hasTask 
    ?  `/day?date=${[date.year(),date.month(),date.date()].join("-")}`
    : null;
  
  console.log()



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
        <Link href={link}>
          <MonthCellInner {...onClick}>{date?.date()}</MonthCellInner>
        </Link>
      ) : (
        <MonthCellInner {...onClick}>{date?.date()}</MonthCellInner>
      )}
    </div>
  );
};

export default MonthCell;
