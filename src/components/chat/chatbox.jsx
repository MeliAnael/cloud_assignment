"use client";
import profile from "@/@/profile.jpg";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { getConversations } from "../doctors/test";

export default async function ChatBox({ user, doctor }) {
  const [conversations, setConversations] = useState([]);

  // const user = await getUser();
  // const doctor = await getDoctor(doctorId);
  const updateConversations = async () => {
    const conversationsDatas = getConversations(user, doctor);
    return conversationsDatas.then((conversation) => {
      console.log(conversation);
      setConversations(conversation);
    });
  };

  useEffect(() => {
    updateConversations();
  }, []);

  const websocket = new WebSocket(
    `ws://127.0.0.1:8000/ws/chats/${user}/${doctor}/`
  );
  const scrollToRef = useRef(null);

  const scrollToElement = () => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  websocket.onopen = (data) => {
    console.log("connected from the chatbox");
  };

  websocket.onmessage = (data) => {
    const newData = JSON.parse(data.data);

    newData.sender = {
      id: newData.sender.id,
      username: user,
    };
    newData.receiver = {
      id: newData.receiver.id,
      username: doctor,
    };
    newData.content = newData.message;
    newData.date = newData.date;
    newData.delivered = newData.delivered;
    newData.id = newData.id;

    setConversations((prevConversations) => [...prevConversations, newData]);
    scrollToElement();
  };

  return (
    <div className="flex flex-col w-full p-2 gap-6 min-h-[110dvh] overflow-auto scrollbar-hide py-24">
      {conversations.map((item) => {
        return (
          <Message
            {...item}
            incoming={user.username === item.receiver.username}
          />
        );
      })}
      <div ref={scrollToRef}></div>
    </div>
  );
}

export const Message = ({
  incoming = true,
  content = "Emerold walker",
  sender = { username: "John" },
  time = "52:45  14h",
  receiver = { username: "John" },
}) => {
  return (
    <div className={incoming ? "chat chat-start" : "chat chat-end "}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Image src={profile} className="" />
        </div>
      </div>
      <div className="chat-header ">
        {incoming ? receiver.username : sender.username}
        <time className="text-xs opacity-50 px-2">12:45</time>
      </div>
      <div
        className={incoming ? "chat-bubble" : "chat-bubble chat-bubble-accent"}
      >
        {content}
      </div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
};
