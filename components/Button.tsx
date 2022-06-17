type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
};

const Button = ({ children, onClick, isActive }: ButtonProps) => {
  return (
    <button
      className={
        `text-orange-500 bg-orange-100 border border-orange-300  ` +
        `p-2 px-4 rounded-lg ` +
        `hover:scale-105 transition-transform ` +
        `active:scale-95 ` +
        `${!isActive ? "opacity-50" : ""}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
