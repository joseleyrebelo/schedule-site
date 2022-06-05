import axios from "axios";
import type { NextPage } from "next";
import { useContext } from "react";
import Container from "../components/Container";
import MonthGrid from "../components/MonthGrid";
import {
  ScheduleContext,
  ScheduleContextProvider,
} from "../contexts/ScheduleContext";
import { Schedule } from "../types/schedule";

type HomeProps = {
  schedule: Schedule;
};

const Home = ({ schedule }: HomeProps) => {
  useContext(ScheduleContext).assertSchedule(schedule);
  return (
    <ScheduleContextProvider>
      <Container>
        <div className="grid grid-cols-2 gap-20">
          <div className="col-span-2 md:col-span-1">
            <MonthGrid
              year={2022}
              month="June"
              startingWeekDay="Monday"
              monthDays={30}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <MonthGrid
              year={2022}
              month="June"
              startingWeekDay="Tuesday"
              monthDays={30}
            />
          </div>
        </div>
      </Container>
    </ScheduleContextProvider>
  );
};

export default Home;

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
