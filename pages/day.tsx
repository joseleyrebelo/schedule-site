import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Container from "../components/Container";
import Task from "../components/Task";
import Header from "../components/layout/Header";
import MonthBlock from "../components/MonthBlock";
import { ArrayDate, Months } from "../types/dates";
import { Schedule } from "../types/schedule";

type DayProps = {
  date: string;
  schedule: Schedule;
};

const Day = ({ date, schedule }: DayProps) => {
  const arrayDate = date.split("-");
  let year: number = parseInt(arrayDate[0]);
  let month: Months = arrayDate[1] as Months; // TODO - using as ...
  let day: number = parseInt(arrayDate[2]);

  const dayTasks = schedule[year]?.[month]?.[day];

  return (
    <Container>
      <Header />
      {dayTasks?.map(({ type, description }) => (
        <Task type={type} description={description} />
      ))}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const redirectHome = { redirect: { destination: "/", permanent: false } };
  const { date } = query;
  let schedule;
  try {
    schedule = (await axios.get("http://localhost:3000/api/schedule")).data;
  } catch (error) {
    // @todo : Handle error
    return redirectHome;
  }
  if (date) {
    return {
      props: {
        date,
        schedule,
      },
    };
  } else {
    return redirectHome;
  }
};

export default Day;
