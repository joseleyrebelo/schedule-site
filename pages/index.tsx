import type { NextPage } from "next";
import Container from "../components/Container";
import MonthGrid, { Weekdays } from "../components/MonthGrid";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-20">
        <div className="col-span-2 md:col-span-1">
          <MonthGrid startingWeekDay={Weekdays.Monday} monthDays={30} />
        </div>
        <div className="col-span-2 md:col-span-1">
          <MonthGrid startingWeekDay={Weekdays.Tuesday} monthDays={30} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
