type ContainerProps = {
  children: React.ReactNode;
  className?: String;
  isFluid?: Boolean;
};
const Container = ({
  children,
  className = "",
  isFluid = false,
}: ContainerProps) => {
  return (
    <div
      className={`px-10 md:px-15 mx-auto ${
        isFluid ? "" : "max-w-5xl"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
