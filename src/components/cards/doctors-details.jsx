import React from "react";
import Image from "next/image";
import profile from "@/@/profile.jpg";

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
    <div className="carddoct flex justify-between px-4 py-3 bg-teal-300 w-auto">
      <div className="stats flex flex-col bg-red-900">
        <div className="stars"></div>
        <h4>Doctor somebody</h4>
        <h6>work somewhere everyday</h6>
      </div>
      <Image src={profile} className="" />
    </div>
  );
};
