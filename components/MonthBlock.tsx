import { useContext } from "react";
import ScheduleContext from "../contexts/ScheduleContext";
import { Months, Weekdays } from "../types/dates";
import MonthCell from "./month/MonthCell";
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

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const monthTasks = schedule[year]?.[month];
  const startingWeekDaySet = [...Array(startingWeekDay)];
  const monthDaysSet = [...Array(monthDays)];

  return (
    <div className="grid grid-cols-7">
      {weekdays.map((item) => (
        <MonthWeekDay name={item} key={"weekDay" + item} />
      ))}
      {startingWeekDaySet.map((empty, index) => (
        <MonthCell key={"empty" + index} />
      ))}
      {monthDaysSet.map((empty, dayFrom0) => {
        const link = monthTasks
          ? monthTasks[dayFrom0 + 1]
            ? [year, month, dayFrom0 + 1]
            : null
          : null;
        return (
          <MonthCell key={"day" + dayFrom0} link={link}>
            {dayFrom0 + 1}
          </MonthCell>
        );
      })}
    </div>
  );
};

export default MonthBlock;
