import MessageCard from "./card";
import { getInbox } from "./getdoctors";
import { getUser } from "../chat/fucntions";
import MiddleMessage from "./m-messages";

export async function Doctorsmessages() {
  const conversations = await getInbox();
  const user = await getUser();

  const groupedConversations = {};

  conversations.forEach((message) => {
    const loggedInUserId = user.id;

    const otherPerson =
      message.sender.id === loggedInUserId ? message.receiver : message.sender;

    const chatUrl = `/chats/${otherPerson.username}/${user.username}`;

    if (
      !groupedConversations[otherPerson.id] ||
      new Date(groupedConversations[otherPerson.id].date) <
        new Date(message.date)
    ) {
      groupedConversations[otherPerson.id] = { ...message, url: chatUrl };
    }
  });

  const uniqueConversations = Object.values(groupedConversations);
  console.log(uniqueConversations);

  return <MiddleMessage datas={uniqueConversations} />;
}
