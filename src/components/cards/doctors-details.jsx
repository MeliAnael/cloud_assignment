import React from "react";
import Image from "next/image";
import profile from "@/@/profile.jpg";
import { AiTwotoneStar } from "react-icons/ai";
import Link from "next/link";

export default function DoctorDetailsCard() {
  return (
    <div className="doctor-card flex flex-col my-8">
      <h2 className="text-lg font-bold">Available Doctors</h2>
      <div className="w-full overflow-auto mb-4 flex flex-col carousel scrollbar-hide">
        <div className="flex gap-4">
          {[1, 2, 3, 4].map((item, index) => {
            return <Cards key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export const Cards = () => {
  return (
    <div className="flex justify-between items-center px-4 py-3 bg-[#2D97B6] gap-4 min-w-fit min-h-fit rounded-xl">
      <div className="bg-base-100 rounded-xl items-start flex flex-col px-5 py-3">
        <RenderStars times={5} />
        <h4 className="text-xs font-bold text-start">Doctor somebody</h4>
        <h6 className="text-sm font-normal text-start">California, LA</h6>
        <button className="px-8 bg-[#2D97B6] rounded-2xl py-2 text-sm font-bold text-white my-4">
          <Link href="/doctors/">Contact</Link>
        </button>
      </div>
      <Image src={profile} className="w-32 h-32 object-cover rounded-xl " />
    </div>
  );
};

export const DetailsCards = () => {
  return (
    <div className="flex justify-between items-center px-4 py-3 bg-[#2D97B6] gap-4 min-w-fit w-full min-h-fit rounded-xl">
      <div className="bg-base-100 rounded-xl items-start flex flex-col px-5 py-3">
        <RenderStars times={5} />
        <h4 className="text-xs font-bold text-start">Doctor somebody</h4>
        <h6 className="text-sm font-normal text-start">California, LA</h6>
      </div>
      <Image src={profile} className="w-24 h-24 object-cover rounded-xl " />
    </div>
  );
};

const RenderStars = ({ times = 5 }) => {
  const counter = Array.from({ length: times }, (_, i) => i);

  return (
    <div className="flex w-full justify-start items-center p-2 gap-1">
      {counter.map((item, index) => {
        return <AiTwotoneStar size={10} color="#FFC817" />;
      })}
    </div>
  );
};
