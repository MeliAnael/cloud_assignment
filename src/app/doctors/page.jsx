import React from "react";
import { DetailsCards } from "@/components/cards/doctors-details";
import CardActions from "@/components/cards/actions";
import AboutDoctor from "@/components/doctors/about";
import DoctorStats from "@/components/cards/stats";

export default function Index() {
  return (
    <div className="flex my-8 items-center justify-center flex-col">
      <DetailsCards />
      <CardActions />
      <AboutDoctor />
      <DoctorStats />
    </div>
  );
}
