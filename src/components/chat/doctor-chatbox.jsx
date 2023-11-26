"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { getConversations } from "../doctors/test";
import profile from "@/@/profile.jpg";
import { formatDistanceToNow, parseISO } from "date-fns";

export default function DoctorChatBox({ user, doctor }) {
  const [conversations, setConversations] = useState([]);
  const scrollToRef = useRef(null);
  const websocketRef = useRef(null);

  const updateConversations = async () => {
    try {
      const conversationsDatas = await getConversations(user, doctor);
      if (Array.isArray(conversationsDatas)) {
        const formattedConversations = conversationsDatas.map((msg) => ({
          ...msg,
          date: formatRelativeDate(msg.date), // Format the date
        }));
        setConversations(formattedConversations);
      } else {
        console.error(
          "Expected conversations to be an array, got:",
          conversationsDatas
        );
      }
    } catch (error) {
      console.error("Error fetching conversations:", error);
      setConversations([]); // Set as empty array in case of error
    }
  };

  useEffect(() => {
    updateConversations();
  }, [user, doctor]);

  function formatRelativeDate(dateString) {
    const date = parseISO(dateString);

    return formatDistanceToNow(date, { addSuffix: true });
  }

  useEffect(() => {
    websocketRef.current = new WebSocket(
      `ws://127.0.0.1:8000/ws/chats/${user}/${doctor}/1/`
    );

    websocketRef.current.onopen = () => {
      console.log("WebSocket connected");
    };

    websocketRef.current.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      const transformedData = {
        sender: {
          // Assuming you can get sender's details (like id) from somewhere or leave it minimal
          username: receivedData.sender,
        },
        receiver: {
          // Assuming you can get receiver's details (like id) from somewhere or leave it minimal
          username: receivedData.receiver,
        },
        content: receivedData.message,
        date: formatRelativeDate(receivedData.date),
        delivered: receivedData.delivered,
        // You need a function to generate a unique ID for each message
      };
      setConversations((prevConversations) => [
        ...prevConversations,
        transformedData,
      ]);
    };

    return () => {
      websocketRef.current.close();
    };
  }, [user, doctor]);

  useEffect(() => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversations]);

  return (
    <div className="flex flex-col w-full p-2 gap-6 min-h-[110dvh] overflow-auto scrollbar-hide py-24">
      {(Array.isArray(conversations) ? conversations : []).map((message) => {
        console.log(user);
        console.log(message);
        return (
          <Message
            key={message.id}
            {...message}
            incoming={user == message.sender.username ? true : false}
          />
        );
      })}
      <div ref={scrollToRef}></div>
    </div>
  );
}

export const Message = ({
  incoming = true,
  content = "Emerald Walker",
  sender = { username: "John" },
  date = "52:45 14h",
  receiver = { username: "John" },
}) => {
  return (
    <div className={incoming ? "chat chat-start" : "chat chat-end"}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Image src={profile} className="" alt="Profile" />
        </div>
      </div>
      <div className="chat-header">
        {sender.username}
        <time className="text-xs opacity-50 px-2">{date}</time>
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
