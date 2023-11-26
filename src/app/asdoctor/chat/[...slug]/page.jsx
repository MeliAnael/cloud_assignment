import DoctorChatBox from "@/components/chat/doctor-chatbox";
import DoctorReply from "@/components/chat/doctor-reply";

export default async function Page({ params }) {
  const { slug } = params;

  return (
    <div className="flex my-8 items-center justify-center flex-col">
      <DoctorChatBox user={slug[0]} doctor={slug[1]} />
      <DoctorReply user={slug[0]} doctor={slug[1]} />
    </div>
  );
}
