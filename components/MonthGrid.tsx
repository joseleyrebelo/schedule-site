import MonthCell from "./MonthCell";
import MonthWeekDay from "./MonthWeekDay";

export enum Weekdays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

type MonthGrid = {
  startingWeekDay: Weekdays;
  monthDays: number;
};

const MonthGrid = ({ startingWeekDay, monthDays }: MonthGrid) => {
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
      {[...Array(monthDays)].map((value, index) => (
        <MonthCell value={index + 1} />
      ))}
    </div>
  );
};

export default MonthGrid;
