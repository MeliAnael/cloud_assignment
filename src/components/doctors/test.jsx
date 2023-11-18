export const getConversations = async (sender, receiver) => {
    const requestBody = {
      sender: sender,
      receiver: receiver,
    };
  
    return fetch(
      "http://127.0.0.1:8000/ehealth/api/chats/conversations/conversation/",
      {
        next: { revalidate: 1000 },
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    )
      .then((answer) => answer.json())
      .catch((error) => {
        console.log(error);
        return false;
      })
      .then((response) => {
        return response;
      });
  };
  