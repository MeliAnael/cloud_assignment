export const getConversations = async (sender, receiver) => {
  const requestBody = {
    sender: sender,
    receiver: receiver,
  };

  return fetch(
    "https://ehealth237.onrender.com/ehealth/api/chats/conversations/conversation/",
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

export const getMedicines = async (sender, receiver) => {
  const requestBody = {
    sender: sender,
    receiver: receiver,
  };

  return fetch(
    "https://ehealth237.onrender.com/ehealth/api/chats/medicine/prescriptions/",
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
