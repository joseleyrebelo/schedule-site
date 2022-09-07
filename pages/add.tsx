import Label from "components/typography/Label";
import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import Button from "../components/interaction/Button";
import Container from "../components/Container";
import Header from "../components/layout/Header";
import Input from "components/interaction/Input";
import SelectInput from "components/interaction/SelectInput";
import ShuffleInput from "components/interaction/ShuffleInput";
import { ___scout___ } from "helpers/_dev";
import DevIcon from "components/_dev/DevIcon";
import { getDBHelper } from "helpers/db";
import { DBApiResponse } from "types/db";
import { randomDate } from "helpers/misc";
import DateAsText from "components/DateAsText";
import { Task } from "types/tasks";

type AddPageProps = {
  tasks: Task[];
};

const AddPage = ({ tasks }: AddPageProps) => {
  const db = getDBHelper();
  const [isReadyForSubmit, setIsReadyForSubmit] = useState(false);
  const [date, setDate] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [result, setResult] = useState<Task[]>(tasks || []);

  const addTask = () => {
    if (!isReadyForSubmit) return;
    console.log(date)
    db.addTask(date, type, description)
      .then((response: DBApiResponse) => setResult(___scout___(response.data)))
      .catch(error => console.log(error));
  };
  const deleteEntry = (targetId: number) => {
    console.log(targetId);
    db.deleteTask(targetId)
      .then(() => setResult(result.filter(({id}) => id !== targetId)))
      .catch(error => console.log(error));
  }
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
              shuffler={() => {
                  let shuffledDate = randomDate(new Date(2022, 7, 1), new Date(2022, 10, 1));
                  return [shuffledDate.toISOString(), shuffledDate.toString()]
                }
              }
              onShuffle={(value) => setDate(value)}
              placeholder="Date"
            />
          </div>
          <div className="col-span-2 h-full flex items-end ">
            <Button isActive={isReadyForSubmit} onClick={addTask}>
              Add task
            </Button>
          </div>
        </div>
        <div className="my-4 p10 rounded-lg grid grid-cols-12 gap-4">
          {result.map(({id, date, name, description}, index) => (
            <div className="col-span-3 " key={index}>
              <div className="h-full rounded-lg border p-6 pt-14 relative">
                <DevIcon onClick={() => deleteEntry(id)} className="top-7 right-6" />
                <div className="relative">
                  <Label className="absolute -top-7 left-0">
                    <DateAsText date={date}/>
                  </Label>
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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const db = getDBHelper();
    const tasks = (await (db.getTasks())).data
    return {
      props: {
        tasks,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default AddPage;
