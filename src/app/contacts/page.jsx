import { Doctorsmessages } from "@/components/doctors/messages";
export default function Contacts() {
  return (
    <div className="home flex flex-col items-center justify-center my-4">
      <h3>
        More than <span className="font-bold">3+ people </span>wants to connect
        with you
      </h3>
      <Doctorsmessages />
    </div>
  );
}
