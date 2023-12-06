import ChatBox from "@/components/chat/chatbox";
import Reply from "@/components/chat/reply";
import { getUser } from "@/components/chat/fucntions";
import { getDoctor } from "@/components/doctors/getdoctors";

export default async function Index({ params }) {
  const { id } = params;

  const user = await getUser();
  const doctor = await getDoctor(id);

  return (
    <div className="flex my-8 items-center justify-center flex-col">
      <ChatBox doctorId={id} user={user.username} doctor={doctor.username} />
      <Reply user={user.username} doctor={doctor.username} />
    </div>
  );
}
