import React from "react";
import logo from "@/img/logo.svg";
import Effect from "components/misc/Effect";
import Image from "next/image";


const EmptyBounds = () => {
  return <div className="flex flex-col flex-1 items-center justify-center h-full">
    <Effect type="click">
      <Image src={logo} alt="logo"/>
    </Effect>
  </div>;
};

export default EmptyBounds;
