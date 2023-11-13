import React from "react";
import { DetailsCards } from "@/components/cards/doctors-details";
import CardActions from "@/components/cards/actions";
import AboutDoctor from "@/components/doctors/about";
import DoctorStats from "@/components/cards/stats";
import { getDoctorsDetails } from "@/components/doctors/getdoctors";

export default async function Index({ params }) {
  const { id } = params;
  const doctor = await getDoctorsDetails(id);
  return (
    <div className="flex my-8 items-center justify-center flex-col mx-4">
      <DetailsCards {...doctor} />
      <CardActions />
      <AboutDoctor description={doctor.description} />
      <DoctorStats />
    </div>
  );
}
