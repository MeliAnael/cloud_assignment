"use client";
import profile from "@/@/profile.jpg";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useRouter } from "next/navigation";
import Link from "next/link";

function formatRelativeDate(dateString) {
  const date = parseISO(dateString);
  const router = useRouter();

  return formatDistanceToNow(date, { addSuffix: true });
}

export default function MessageCard({
  sender = {},
  receiver = {},
  content = "",
  delivered = false,
  date = "",
  url = "",
}) {
  return (
    <div className="card w-full flex-row flex justify-between p-2 items-center cursor-pointer bg-base-200 bg-opacity-0 ">
      <div className="protector max-w-fit">
        <div className="image w-12 h-12 p-1 bg-base-200 rounded-full">
          <img
            src={profile.src}
            className="rounded-full w-full h-full object-cover "
            alt="the image profile"
          />
        </div>
      </div>
      <div className="message w-full truncate px-2 flex flex-col">
        <h4 className="text-xs max-w-fit font-semibold text-center ">
          {sender.username}
        </h4>
        <p className="w-full  text-[0.75rem] truncate">
          <Link href={url}>{content}</Link>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-xs max-w-fit font-semibold text-center text-green-600 truncate">
          {formatRelativeDate(date)}
        </h4>
        <div className="rounded-full text-xs h-4 w-4 flex justify-center items-center text-[0.55rem] bg-green-600 text-white">
          9+
        </div>
      </div>
    </div>
  );
}

// {
//   sender: { id: 1, username: 'admin' },
//   receiver: { id: 11, username: 'Adonis' },
//   content: 'hello doctor i am not fine',
//   date: '2023-11-26T13:01:32.068824Z',
//   delivered: false,
//   id: 103
// },
