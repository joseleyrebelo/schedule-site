import axios from "axios";
import type { NextPage } from "next";
import { useContext } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import MonthGrid from "../components/MonthGrid";
import { ScheduleContext } from "../contexts/ScheduleContext";
import { Schedule } from "../types/schedule";

type ScheduleProps = {
  schedule: Schedule;
};

export async function getServerSideProps() {
  try {
    const { data: schedule } = await axios.get(
      "http://localhost:3000/api/schedule"
    );
    return {
      props: { schedule },
    };
  } catch (error) {
    // Todo : Handle error
  }
}

const Schedule = ({ schedule }: ScheduleProps) => {
  useContext(ScheduleContext).assertSchedule(schedule);
  return (
    <Container>
      <Header />
      <div className="grid grid-cols-2 gap-20">
        <div className="col-span-2 md:col-span-1">
          June
          <MonthGrid
            year={2022}
            month="June"
            startingWeekDay="Wednesday"
            monthDays={30}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          July
          <MonthGrid
            year={2022}
            month="July"
            startingWeekDay="Friday"
            monthDays={31}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          August
          <MonthGrid
            year={2022}
            month="August"
            startingWeekDay="Monday"
            monthDays={31}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          September
          <MonthGrid
            year={2022}
            month="September"
            startingWeekDay="Thursday"
            monthDays={30}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          October
          <MonthGrid
            year={2022}
            month="October"
            startingWeekDay="Saturday"
            monthDays={31}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          November
          <MonthGrid
            year={2022}
            month="November"
            startingWeekDay="Tuesday"
            monthDays={30}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          December
          <MonthGrid
            year={2022}
            month="December"
            startingWeekDay="Thursday"
            monthDays={31}
          />
        </div>
        2023
        <div className="col-span-2 md:col-span-1">
          January
          <MonthGrid
            year={2023}
            month="January"
            startingWeekDay="Sunday"
            monthDays={31}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          March
          <MonthGrid
            year={2023}
            month="March"
            startingWeekDay="Tuesday"
            monthDays={31}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          April
          <MonthGrid
            year={2023}
            month="April"
            startingWeekDay="Saturday"
            monthDays={30}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          May
          <MonthGrid
            year={2023}
            month="May"
            startingWeekDay="Monday"
            monthDays={31}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          June
          <MonthGrid
            year={2023}
            month="June"
            startingWeekDay="Thursday"
            monthDays={30}
          />
        </div>
      </div>
    </Container>
  );
};

export default Schedule;
