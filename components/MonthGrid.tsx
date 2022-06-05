import { useContext } from "react";
import { ScheduleContext } from "../contexts/ScheduleContext";
import { Months, Weekdays } from "../types/dates";
import MonthCell from "./MonthCell";
import MonthWeekDay from "./MonthWeekDay";

type MonthGrid = {
  year: number;
  month: Months;
  monthDays: number;
  startingWeekDay: Weekdays;
};

const MonthGrid = ({ year, month, startingWeekDay, monthDays }: MonthGrid) => {
  const { schedule } = useContext(ScheduleContext);
  const monthTasks = schedule[year]?.[month];
  return (
    <div className="grid grid-cols-7">
      <MonthWeekDay name="Mon" />
      <MonthWeekDay name="Tue" />
      <MonthWeekDay name="Wed" />
      <MonthWeekDay name="Thu" />
      <MonthWeekDay name="Fri" />
      <MonthWeekDay name="Sat" />
      <MonthWeekDay name="Sun" />
      {[...Array(startingWeekDay)].map(() => (
        <MonthCell />
      ))}
      {[...Array(monthDays)].map((value, dayFrom0) => (
        <MonthCell
          value={dayFrom0 + 1}
          link={
            monthTasks
              ? monthTasks[dayFrom0 + 1]
                ? [year, month, dayFrom0 + 1]
                : undefined
              : undefined
          }
        />
      ))}
    </div>
  );
};

export default MonthGrid;
