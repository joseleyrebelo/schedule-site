import moment from "moment";
import { useContext } from "react";
import ScheduleContext from "../contexts/ScheduleContext";
import { Months, Weekdays } from "../types/dates";
import MonthCell from "./month/MonthCell";
import MonthWeekDay from "./MonthWeekDay";

type MonthBlock = {
  year: number;
  month: Months;
};

const MonthBlock = ({
  year,
  month,
}: MonthBlock) => {
  const dateOfMonthsFirst = moment(`1 ${month} ${year}`);
  const startingWeekDay = dateOfMonthsFirst.weekday() - 1;
  const monthDays = dateOfMonthsFirst.daysInMonth();

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const nonMonDaysSet = startingWeekDay > 0 ? [...Array(startingWeekDay)] : [];
  const monthDaysSet = [...Array(monthDays)];

  return (
    <div className="grid grid-cols-7">
      {weekdays.map((item) => (
        <MonthWeekDay name={item} key={"weekDay" + item} />
      ))}
      {nonMonDaysSet.map((empty, index) => (
        <MonthCell key={"empty" + index} />
      ))}
      {monthDaysSet.map((empty, dayFromZeroOn) => {
        const dayFromOneOn = dayFromZeroOn + 1;
        const dayDate = moment(`${dayFromOneOn} ${month} ${year}`);
        return (
          <MonthCell key={"day" + dayFromZeroOn} date={dayDate}/>
        );
      })}
    </div>
  );
};

export default MonthBlock;
