import React from "react";
import DoctorsCard from "./cards/doctors";

export default function Doctors() {
  return (
    <div className="w-full overflow-auto mb-4 flex flex-col carousel scrollbar-hide">
      <div className="flex gap-4">
        {[1, 2, 3, 4].map((item, index) => {
          return <DoctorsCard />;
        })}
      </div>
    </div>
  );
}
