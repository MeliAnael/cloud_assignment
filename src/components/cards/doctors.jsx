import profile from "@/@/profile.jpg";
import Image from "next/image";

export default function DoctorsCard() {
  return (
    <div className="doctors flex flex-col gap-4 p-3 items-center justify-center aspect-auto rounded-xl">
      <Image src={profile} className="aspect-square object-cover rounded-xl " />
      <div className="texts flex flex-col gap-2 items-center justify-center">
        <h2 className="font-bold text-[0.65rem] text-center">
          Doctor somebody
        </h2>
        <h3 className="text-xs text-center truncate">Work somewhere 2 years</h3>
      </div>
    </div>
  );
}
