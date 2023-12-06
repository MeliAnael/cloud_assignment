import React, { Suspense } from "react";
import DoctorsCard from "./cards/doctors";
import { getDoctors } from "./doctors/getdoctors";

export default function Doctors() {
  return (
    <div className="w-full overflow-auto mb-4 flex flex-col carousel scrollbar-hide">
      <div className="flex gap-4">
        <DoctorsDatas />
      </div>
    </div>
  );
}

export async function DoctorsDatas() {
  const doctors = await getDoctors();

  return (
    <div className="flex gap-4">
      {doctors &&
        doctors.map((doctor, index) => {
          return <DoctorsCard key={index + ""} {...doctor} />;
        })}
    </div>
  );
}
