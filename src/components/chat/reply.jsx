import React from "react";
import { RiImageAddLine } from "react-icons/ri";
import { BsSend } from "react-icons/bs";

export default function Reply() {
  return (
    <div className="repbox fixed bottom-0 right-0 w-full flex items-center justify-center z-20">
      <div className="flex items-center justify-between p-4 rounded-t-2xl px-3 bg-base-300 w-full shadow-lg">
        <div className="inputss flex gap-2 items-center justify-start">
          <RiImageAddLine size={22} />
          <input
            type="text"
            className="outline-none focus:outline-none border-0 py-2 bg-transparent"
            placeholder="Type your question here"
          />
        </div>
        <BsSend size={24} />
      </div>
    </div>
  );
}
