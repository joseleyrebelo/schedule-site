import DevIcon from "components/_dev/DevIcon";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export let isMegaMenuActive: boolean;
export let setIsMegaMenuActive: Dispatch<SetStateAction<boolean>>;

const MegaMenu = ({}) => {
  [isMegaMenuActive, setIsMegaMenuActive] = useState(false);
  const menuItems = [
    { label: "Work", href: "work" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
  ];
  return (
    <div className="overflow-hidden ">
      <div
        className={`z-10 fixed top-0 left-0 w-screen h-screen bg-black transition-all duration-1000 ${
          !isMegaMenuActive
            ? `-translate-y-full scale-125 opacity-0 pointer-events-none`
            : ``
        }`}
      >
        <div className="contact-form back-black">
          <div className="absolute top-10 right-10 z-20">
            <DevIcon onClick={() => setIsMegaMenuActive(false)} isAbsolute={false}/>
          </div>
          <div className="menu-buttons">
            {menuItems.map(({ href, label }) => (
              <Link href={`/${href}`} key={href}>
                <a
                  className={
                    `bebas h1 center bold white ` /* non tailwind */ +
                    `block hover:opacity-60 transition-opacity`
                  }
                >
                  {label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
