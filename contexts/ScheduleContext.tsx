import { createContext, ReactNode, useEffect, useState } from "react";
import { Schedule } from "../types/schedule";

interface ScheduleContext {
  schedule: Schedule;
  assertSchedule: (schedule: Schedule) => void;
}

type ContextProps = {
  children: ReactNode;
};

const InitialContextData = {
  schedule: {},
  assertSchedule: () => {},
};

const ScheduleContext = createContext<ScheduleContext>(InitialContextData);

export const ScheduleContextProvider = ({ children }: ContextProps) => {
  const [schedule, setSchedule] = useState({});

  const assertSchedule = (schedule: Schedule) => {
    setSchedule(schedule);
  };

  return (
    <ScheduleContext.Provider
      value={{
        assertSchedule,
        schedule,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleContext;
