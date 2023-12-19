import oprofile from "@/@/profile.jpg";
import Image from "next/image";

export default function DoctorsCard({
  profile = oprofile,
  username = "Doctor somebody",
}) {
  return (
    <div className="doctors flex flex-col gap-4 p-3 items-center justify-center aspect-auto rounded-xl">
      <img
        src={profile !== null ? profile : oprofile}
        className="aspect-square object-cover rounded-xl "
        width="400"
        height="400"
      />
      <div className="texts flex flex-col gap-2 items-center justify-center">
        <h2 className="font-bold text-[0.65rem] text-center">{username}</h2>
        <h3 className="text-xs text-center truncate">Profession, Doctor</h3>
      </div>
    </div>
  );
}
