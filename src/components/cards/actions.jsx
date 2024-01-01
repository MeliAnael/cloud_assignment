import React from "react";
import Link from "next/link";
import {
  AiOutlinePhone,
  AiOutlineVideoCamera,
  AiOutlineMessage,
} from "react-icons/ai";

export default function CardActions({id=5}) {
  return (
    <div className="grid grid-cols-3 w-full mt-8 p-3 justify-around items-center gap-3">
      <button
        className="bg-base-200 bg-opacity-30 disabled flex justify-around items-center p-2"
      >
        <AiOutlinePhone size={22} />
        <h4 className="font-bold text-xs">Audio Call</h4>
      </button>
      <button
        className="bg-base-200 bg-opacity-30 disabled flex justify-around items-center p-2 "
      >
        <AiOutlineVideoCamera size={22} />
        <h4 className="font-bold text-xs">Video Call</h4>
      </button>
      <button className="bg-base-300  flex justify-around items-center p-2 rounded-xl">
        <AiOutlineMessage size={22} />
        <h4 className="font-bold text-xs"><Link href={"/chat/"+id}>Message</Link></h4>
      </button>
    </div>
  );
}
