import type { NextPage } from "next";
import Link from "next/link";
import Box from "../components/box";
import Container from "../components/Container";
import GoalBoard from "../components/GoalBoard";
import Header from "../components/Header";
import MonthGrid, { Weekdays } from "../components/MonthGrid";
import TaskBoard from "../components/TaskBoard";
import Title from "../components/Title";


const Home: NextPage = () => {
  return (
    <Container>
      <Header/>
      <Title>Resume</Title>
      <Container>
        <TaskBoard>Task number 1</TaskBoard>
        <TaskBoard>Task number 1</TaskBoard>
        <TaskBoard>Task number 1</TaskBoard>
      </Container>
      <Title>Goals</Title>
      <Link href={"/schedule"}>
        <div className="rounded p-4 bg-slate-600 text-white w-40 text-center mx-auto">Full Schedule</div>
      </Link>
      <Container>
        <div className="flex justify-betwee rounded flex-row">      
          <GoalBoard>Water</GoalBoard>
          <GoalBoard>Goals</GoalBoard>
          <GoalBoard>Groceries</GoalBoard>
        </div>
      </Container>
    </Container>
  );
};

export default Home;
