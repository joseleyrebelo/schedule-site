import type { NextPage } from "next";
import Container from "../components/Container";
import Header from "../components/Header";
import MonthGrid, { Weekdays } from "../components/MonthGrid";

const Schedule: NextPage = () => {
  return (
    <Container>
      <Header/>
      <div className="grid grid-cols-2 gap-20">
        <div className="col-span-2 md:col-span-1">
          June
          <MonthGrid startingWeekDay={Weekdays.Wednesday} monthDays={30} />
        </div>
        <div className="col-span-2 md:col-span-1">
          July
          <MonthGrid startingWeekDay={Weekdays.Friday} monthDays={31} />
        </div>
        <div className="col-span-2 md:col-span-1">
          August
          <MonthGrid startingWeekDay={Weekdays.Monday} monthDays={31} />
        </div>
        <div className="col-span-2 md:col-span-1">
          September
          <MonthGrid startingWeekDay={Weekdays.Thursday} monthDays={30} />
        </div>
        <div className="col-span-2 md:col-span-1">
          October
          <MonthGrid startingWeekDay={Weekdays.Saturday} monthDays={31} />
        </div>
        <div className="col-span-2 md:col-span-1">
          November
          <MonthGrid startingWeekDay={Weekdays.Tuesday} monthDays={30} />
        </div>
        <div className="col-span-2 md:col-span-1">
          December
          <MonthGrid startingWeekDay={Weekdays.Thursday} monthDays={31} />
        </div>
        2023        
        <div className="col-span-2 md:col-span-1">
          January
          <MonthGrid startingWeekDay={Weekdays.Sunday} monthDays={31} />
        </div>
        <div className="col-span-2 md:col-span-1">
          March
          <MonthGrid startingWeekDay={Weekdays.Tuesday} monthDays={31} />
        </div>
        <div className="col-span-2 md:col-span-1">
          April
          <MonthGrid startingWeekDay={Weekdays.Saturday} monthDays={30} />
        </div>
        <div className="col-span-2 md:col-span-1">
          May
          <MonthGrid startingWeekDay={Weekdays.Monday} monthDays={31} />
        </div>
        <div className="col-span-2 md:col-span-1">
          June
          <MonthGrid startingWeekDay={Weekdays.Thursday} monthDays={30} />
        </div>
      </div>
    </Container>
  );
};

export default Schedule;
