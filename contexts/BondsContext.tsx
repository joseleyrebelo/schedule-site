import { Bound } from "types/bounds";
import newDataContext from "../helpers/react/createContext";

type BondsData = {
  bonds: Bound[];
};

const context = newDataContext<BondsData>();

export const BondsContext = context.context;

export const BondsContextProvider = context.contextProvider;
