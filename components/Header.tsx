import Link from "./navigation/Link";

import logo from "@/img/logo.png";
import Image from "next/image";
import Effect from "./misc/Effect";
import Container from "./Container";
// src - https://icons8.com/icon/3E85AYQwxoDO/schedule

const Header = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-5">
        <div className="w-14">
          <Link href={"/"} className="block ">
            <Effect type="linkClick">
              <Image src={logo} alt="logo" />
            </Effect>
          </Link>
        </div>
        <div className="flex gap-6">
          <Link href={"/schedule"}>schedule</Link>
          <Link href={"/add"}>add</Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
