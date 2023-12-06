"use client";
import React from "react";
import { RiImageAddLine } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
import { useForm } from "react-hook-form";

export default function Reply(username, doctorname) {
  const user = username;
  const doctor = doctorname;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const websocket = new WebSocket(
    `ws://127.0.0.1:8000/ws/chats/${user.user}/${user.doctor}/0/`
  );

  const onsubmit = (data) => {
    websocket.send(JSON.stringify(data));
    reset();
  };

  return (
    <div className="repbox fixed bottom-0 right-0 w-full flex items-center justify-center z-20">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex items-center justify-between p-4 rounded-t-2xl px-3 bg-base-300 w-full shadow-lg"
      >
        <div
          className="inputss flex gap-2 items-center justify-start w-full"
          id="form"
        >
          <RiImageAddLine size={22} />
          <textarea
            type="text"
            className="outline-none focus:outline-none border-0 py-2 bg-transparent w-full"
            placeholder="Type your question here"
            {...register("message", { required: true })}
          />
        </div>
        <button type="submit">
          <BsSend size={24} />
        </button>
      </form>
    </div>
  );
}
