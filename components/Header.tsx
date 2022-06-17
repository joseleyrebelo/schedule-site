import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between py-4">
      <Link href={"/"}>logo</Link>
      <Link href={"/schedule"}>schedule</Link>
    </div>
  );
};

export default Header;
