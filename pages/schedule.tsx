import Calendar from "components/Calendar";
import { DBHelper } from "helpers/db";
import moment from "moment";
import type { NextPage } from "next";
import { useContext } from "react";
import { Task } from "types/tasks";
import Container from "../components/Container";
import Header from "../components/layout/Header";
import ScheduleContext from "../contexts/ScheduleContext";
import { Schedule } from "../types/schedule";

type ScheduleProps = {
  schedule: Schedule;
};

const Schedule = ({ schedule }: ScheduleProps) => {
  useContext(ScheduleContext).assertSchedule(schedule);
  console.log(schedule);
  return (
    <>
      <Header />
      <Container>
        <Calendar />
      </Container>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const db = new DBHelper();
    const schedule: Schedule = {}
    const tasks: Task[] = (await db.getTasks()).data;

    tasks.forEach((task) => {
      const date = moment(task.date);
      const year = date.year();
      const month = date.month() + 1;
      const day = date.date();

      if (!(year in schedule))                schedule[year] = {}
      if (!(month in schedule[year]))         schedule[year][month] = {}
      if (!(day in schedule[year][month]))    schedule[year][month][day] = []
      
      schedule[year][month][day].push(task);

    })
    
    return {
      props: { schedule },
    };
  } catch (error) {
    // @todo : Handle error
  }
}

export default Schedule;
