type MonthWeekDay = {
  name?: string;
};
const MonthWeekDay = ({ name }: MonthWeekDay) => {
  return <div className={`flex justify-center font-bold`}>{name}</div>;
};

export default MonthWeekDay;
