import profile from "@/@/profile.jpg";
import Image from "next/image";

export default function ChatBox() {
  return (
    <div className="flex flex-col w-full p-2 gap-6 min-h-[110dvh] overflow-auto scrollbar-hide pt-24">
      {[1, 2, 3, 4].map((item) => {
        return <Message key={item} incoming={item % 2 == 0} />;
      })}
    </div>
  );
}

export const Message = ({
  incoming = true,
  content = "Emerold walker",
  sender = "John ",
  time = "52:45  14h",
}) => {
  return (
    <div className={incoming ? "chat chat-start" : "chat chat-end "}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Image src={profile} className="" />
        </div>
      </div>
      <div className="chat-header">
        Obi-Wan Kenobi
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div
        className={incoming ? "chat-bubble" : "chat-bubble chat-bubble-accent"}
      >
        You were the Chosen One!
      </div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
};
