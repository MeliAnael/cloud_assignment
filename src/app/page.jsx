import React from "react";
import Header from "@/components/header";
import Options from "@/components/options";
import Research from "@/components/research";
import Doctors from "@/components/doctors";
import DoctorDetailsCard from "@/components/cards/doctors-details";

export default function page() {
  return (
    <div className="flex flex-col">
      <Header />
      <Research />
      <Options />
      <h2 className="text-lg font-semibold">Top Doctors</h2>
      <Doctors />
      <DoctorDetailsCard />
    </div>
  );
}
