import axios from "axios";
import Label from "components/typography/Label";
import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import Button from "../components/interaction/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import Input from "components/interaction/Input";
import SelectInput from "components/interaction/SelectInput";
import ShuffleInput from "components/interaction/ShuffleInput";
import { __scout } from "helpers/_dev";

type AddPageProps = {
  tasks: [] | [[date: string, type: string, description: string]];
};

const AddPage = ({ tasks }: AddPageProps) => {
  const [isReadyForSubmit, setIsReadyForSubmit] = useState(false);
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(tasks || []);

  //TODO - move to correct folder
  function randomDate(start: Date, end: Date) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  const submit = () => {
    if (!isReadyForSubmit) return;

    axios
      .post("http://localhost:8000/api/add", {
        date,
        type,
        description,
      })
      .then(function (response: { data: [] }) {
        setResult(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (date.length > 0 && type.length > 0 && description.length > 0) {
      setIsReadyForSubmit(true);
    }
  }, [date, type, description]);

  return (
    <>
      <Header />
      <Container className="pb-20">
        <div className="text-center text-lg opacity-25 pb-4">
          - add a task -
        </div>
        <div className="grid grid-cols-12 gap-5 p-4 border rounded-xl max-w-3xl mx-auto relative z-10">
          <div className="col-span-2">
            <SelectInput
              options={["bill", "birthday", "bank holidays", "holidays"]}
              onSelected={(value) => setType(value)}
              placeholder="Type"
            />
          </div>
          <div className="col-span-6">
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
          <div className="col-span-2">
            <ShuffleInput
              shuffler={() =>
                __scout(randomDate(new Date(2012, 0, 1), new Date())).toString()
              }
              onShuffle={(value) => setDate(value)}
              placeholder="Date"
            />
          </div>
          <div className="col-span-2 h-full flex items-end ">
            <Button isActive={isReadyForSubmit} onClick={submit}>
              Add task
            </Button>
          </div>
        </div>
        <div className="my-4 p10 rounded-lg grid grid-cols-12 gap-4">
          {result.map(([date, name, description], index) => (
            <div className="col-span-3 " key={index}>
              <div className="h-full rounded-lg border p-6 pt-14">
                <div className="relative">
                  <Label className="absolute -top-7 left-0">{date}</Label>
                  <b>{name}</b>
                  <br />
                  {description}
                  <br />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const tasks = await axios.post("http://localhost:8000/api/get", {});
//     return {
//       props: {
//         tasks,
//       },
//     };
//   } catch (error) {
//     return { notFound: true };
//   }
// };

export default AddPage;
