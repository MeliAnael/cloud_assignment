import MessageCard from "./card";
import { getUser } from "../chat/fucntions";

export function SecondMiddleWareMessage({ datas }) {
  return (
    <div className="flex w-full flex-col divide-y-2 gap-4 my-4">
      {datas.map((message) => {
        return <MessageCard key={message.id} {...message} />;
      })}
    </div>
  );
}
