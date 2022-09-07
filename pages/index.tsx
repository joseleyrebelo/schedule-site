import SelectInput from "components/interaction/SelectInput";
import EmptyBounds from "components/ponds/EmptyBounds";
import { BondsContext } from "contexts/BondsContext";
import { get_all_bounds_fixture } from "fixtures/homepage";
import type { NextPage } from "next";
import { useContext } from "react";

const Home: NextPage = () => {
  const bounds: Bound[] = get_all_bounds_fixture();
  const currentBound: Bound = get_all_bounds_fixture()[0];
  const bonds = ["asda"];

  useContext(BondsContext).assertData({bonds, bounds})

  return (
    // @todo abstract into layout ?
    
  );
};

export default Home;
