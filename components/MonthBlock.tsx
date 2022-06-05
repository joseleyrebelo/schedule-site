import { useContext } from "react";
import ScheduleContext from "../contexts/ScheduleContext";
import { Months, Weekdays } from "../types/dates";
import MonthCell from "./MonthCell";
import MonthWeekDay from "./MonthWeekDay";

type MonthBlock = {
  year: number;
  month: Months;
  monthDays: number;
  startingWeekDay: Weekdays;
};

const MonthBlock = ({
  year,
  month,
  startingWeekDay,
  monthDays,
}: MonthBlock) => {
  const { schedule } = useContext(ScheduleContext);
  const monthTasks = schedule[year]?.[month];
  console.log(schedule);
  return (
    <div className="grid grid-cols-7">
      {/* TODO - make this a for loop  */}
      <MonthWeekDay name="Mon" key="weekDayMon" />
      <MonthWeekDay name="Tue" key="weekDayTue" />
      <MonthWeekDay name="Wed" key="weekDayWed" />
      <MonthWeekDay name="Thu" key="weekDayThu" />
      <MonthWeekDay name="Fri" key="weekDayFri" />
      <MonthWeekDay name="Sat" key="weekDaySat" />
      <MonthWeekDay name="Sun" key="weekDaySun" />
      {[...Array(startingWeekDay)].map((noValue, index) => (
        <MonthCell key={"empty" + index} />
      ))}
      {[...Array(monthDays)].map((noValue, dayFrom0) => (
        <MonthCell
          key={"day" + dayFrom0}
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

export default MonthBlock;
