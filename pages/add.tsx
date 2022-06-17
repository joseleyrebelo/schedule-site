import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title";

const AddPage: NextPage = () => {
  const [isReadyForSubmit, setIsReadyForSubmit] = useState(false);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    axios
      .post("http://localhost:8000/api/add", {
        date,
        name,
        description,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (date.length > 0 && name.length > 0 && description.length > 0) {
      setIsReadyForSubmit(true);
    }
  }, [date, name, description]);

  return (
    <Container>
      <Header />
      <Title>Resume</Title>
      <div className="flex flex-col gap-4 max-w-xl">
        <input
          className="border p-2 px-4 rounded-lg w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <input
          className="border p-2 px-4 rounded-lg w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />

        <input
          className="border p-2 px-4 rounded-lg w-full"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
        />

        <Button isActive={isReadyForSubmit} onClick={submit}>
          Add task
        </Button>
      </div>
    </Container>
  );
};

export default AddPage;
