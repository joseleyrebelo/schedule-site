type MonthCell = {
  value?: number;
};
const MonthCell = ({ value }: MonthCell) => {
  return (
    <div
      className={`rounded aspect-square flex items-center justify-center ${
        value ? "bg-white" : " bg-slate-100"
      }`}
    >
      {value}
    </div>
  );
};

export default MonthCell;
