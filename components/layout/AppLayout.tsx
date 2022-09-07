import Container from "components/Container";
import SelectInput from "components/interaction/SelectInput";
import EmptyBounds from "components/ponds/EmptyBounds";
import { BondsContext } from "contexts/BondsContext";
import { useContext } from "react";
import { Bound } from "types/bounds";
import Header from "./Header";

type AppLayoutProps = {};

const AppLayout = ({}: AppLayoutProps) => {
  const bondsContext = useContext(BondsContext);
  const { bonds, bounds } = bondsContext.data;
  const isHeaderHovering = !bonds.length;

  return (
    <div className="flex flex-col min-h-screen">
      <Header isHovering={isHeaderHovering} />
      <Container className={"flex flex-col flex-1 w-full"}>
        {!bonds.length ? (
          <EmptyBounds />
        ) : (
          <div className="py-10">
            <SelectInput options={bounds.map((bound: Bound) => bound.slug)} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default AppLayout;
