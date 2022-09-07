import { Context, createContext, ReactNode, useState } from "react";

// @naming Bland vs Shell as in ContextValue (not aapplicable to this line anymore)
interface ContextValue<DataType> {
  data: DataType | {};
  assertData: (data: {}) => void;
}

interface ContextProps {
  children: ReactNode;
}

const newDataContext = <DataType,>() => {
  type ContextValueExotic = ContextValue<DataType>;
  const initialData: ContextValueExotic = {
    data: {},
    assertData: () => {},
  };

  const context = createContext<ContextValueExotic>(initialData);
  const contextProvider = createContextProvider<DataType>(context);
  return {
    context,
    contextProvider,
  };
};

const createContextProvider = <DataProperty,>(
  context: Context<ContextValue<DataProperty>>
) => {
  const [data, setData] = useState<DataProperty | {}>({});
  const assertData = (data: {}) => setData(data);

  return ({ children }: ContextProps) => (
    <context.Provider value={{ assertData, data }}>{children}</context.Provider>
  );
};

export default newDataContext;
