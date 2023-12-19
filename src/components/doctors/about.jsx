import React from "react";

export default function AboutDoctor({
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibusdolore ipsam, itaque impedit deleniti delectus explicabo, voluptatedistinctitotam ipsum pariatur ratione, ab unde? Quia enim fugiatnumquam eveniet provident?",
}) {
  return (
    <div className="flex my-8 flex-col gap-4">
      <h2 className="text-lg font-semibold">About Doctors</h2>
      <p className="text-xs">{description}</p>
      <p className="text-xs">{description}</p>
    </div>
  );
}
