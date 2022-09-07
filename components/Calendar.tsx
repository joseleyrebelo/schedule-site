import moment from "moment";
import { Months } from "types/dates";
import MonthBlock from "./MonthBlock";

const Calendar = () => {
  const nextTwelveMonths = [ ...Array(12).keys() ].map( i => moment().add(i, 'M'));
  return <div className="grid grid-cols-2 gap-20">
    {nextTwelveMonths.map(date => {
      return <div className="col-span-2 md:col-span-1">
          {date.format("MMM")}
          <MonthBlock
            year={date.year()}
            month={date.format("MMMM") as Months}
          />
        </div>
      })}
  </div>
}

export default Calendar