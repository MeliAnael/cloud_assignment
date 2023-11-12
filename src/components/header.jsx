import { RxHamburgerMenu } from "react-icons/rx";
import profile from "@/@/profile.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-4">
      <RxHamburgerMenu size={23} />
      <h1 className="text-sm  font-extrabold ">Ehealth</h1>
      <Image src={profile} className="rounded-full w-10 h-10 object-cover" />
    </div>
  );
}
