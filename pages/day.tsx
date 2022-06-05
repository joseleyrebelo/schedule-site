import type { NextPage } from "next";
import { useRouter } from "next/router";
import Container from "../components/Container";
import MonthGrid from "../components/MonthGrid";

const Day: NextPage = () => {
  const router = useRouter();
  console.log(router.query);
  if (!router.query) {
    router.push("/");
  }

  return (
    <Container>
      <span></span>
    </Container>
  );
};

export default Day;
