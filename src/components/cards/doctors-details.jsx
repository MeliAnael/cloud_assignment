import React from "react";
import Image from "next/image";
import prof from "@/@/profile.jpg";
import { AiTwotoneStar } from "react-icons/ai";
import Link from "next/link";
import { getDoctors } from "../doctors/getdoctors";

export default function DoctorDetailsCard() {
  return (
    <div className="doctor-card flex flex-col my-8">
      <h2 className="text-lg font-bold">Available Doctors</h2>
      <div className="w-full overflow-auto mb-4 flex flex-col carousel scrollbar-hide">
        <div className="flex gap-4">
          <DoctorsDatas />
        </div>
      </div>
    </div>
  );
}

export const Cards = ({
  username = "Doctor Samira",
  profile = prof,
  consultation_fee = 155,
  ratings = 5,
  id = 5,
}) => {
  return (
    <div className="flex justify-between items-center px-4 py-3 bg-[#2D97B6] gap-4 min-w-fit min-h-fit rounded-xl">
      <div className="bg-base-100 rounded-xl items-start  flex flex-col px-6 py-3">
        <RenderStars times={ratings} />
        <h4 className="text-xs font-bold text-start">{username}</h4>
        <h6 className="text-sm font-bold text-center">{consultation_fee}$</h6>
        <button className="px-8 bg-[#2D97B6] rounded-2xl py-2 text-sm font-bold text-white my-4">
          <Link href={"/doctors/" + id}>Contact</Link>
        </button>
      </div>
      <img
        width="400"
        height="400"
        className="w-24 h-24 object-cover rounded-xl "
        src={profile}
      />
    </div>
  );
};

export const DetailsCards = ({
  username = "Doctor somebody",
  consultation_fee = 455,
  ratings = 5,
  profile = prof,
}) => {
  return (
    <div className="flex justify-between items-center px-4 py-3 bg-[#2D97B6] gap-4 min-w-fit w-full min-h-fit rounded-xl">
      <div className="bg-base-100 rounded-xl items-start flex flex-col px-5 py-3">
        <RenderStars times={ratings} />
        <h4 className="text-xs font-bold text-start">{username}</h4>
        <h6 className="text-sm  text-center w-full py-2 font-semibold">
          {consultation_fee}$
        </h6>
      </div>
      <img
        src={profile}
        width="300"
        height="300"
        className="w-24 h-24 object-cover rounded-xl "
      />
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

export async function DoctorsDatas() {
  const doctors = await getDoctors();

  return (
    <div className="flex gap-4">
      {doctors &&
        doctors.map((doctor, index) => {
          return <Cards key={index + ""} {...doctor} />;
        })}
    </div>
  );
}
