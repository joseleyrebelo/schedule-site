import Link from "../navigation/Link";

import logo from "@/img/logo.svg";
import Image from "next/image";
import Effect from "../misc/Effect";
import Container from "../Container";
import MegaMenu, { setIsMegaMenuActive } from "./MegaMenu";
import DevIcon from "components/_dev/DevIcon";
// import logo from "@/img/temp-logo.png";
// src - https://icons8.com/icon/3E85AYQwxoDO/schedule

type HeaderProps = {
  className?: string;
  isHovering?: boolean;
};

const Header = (props: HeaderProps) => {
  const { isHovering } = props;
  return (
    <div className={`${isHovering ? `absolute top-0 left-0 w-full` : ``}`}>
      <MegaMenu />
      <Container className="w-full">
        <div className="flex justify-between items-center py-5">
          <div className="flex w-14">
            <Link href={"/"} className="flex ">
              <Effect type="linkClick">
                <Image src={logo} alt="logo" />
              </Effect>
            </Link>
          </div>
          <div className="flex gap-6">
            <Link href={"/schedule"}>schedule</Link>
            <Link href={"/add"}>add</Link>
            <DevIcon
              onClick={() => setIsMegaMenuActive(true)}
              isAbsolute={false}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
