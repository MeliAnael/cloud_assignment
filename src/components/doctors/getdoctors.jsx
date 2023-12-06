import { cookies } from "next/headers";

export const getDoctors = async () => {
  return fetch("https://ehealth237.onrender.com/ehealth/api/doctors/", {
    next: { revalidate: 3600 },
  })
    .then((answer) => answer.json())
    .catch((error) => {
      console.log(error);
      return false;
    })
    .then((response) => {
      return response;
    });
};

export const getInbox = async () => {
  const cookie = cookies();
  const auth = cookie.get("auth");
  return fetch("https://ehealth237.onrender.com/ehealth/api/chats/inbox", {
    next: { revalidate: 3600 },
    headers: {
      Authorization: `Bearer ${auth.value}`,
    },
  })
    .then((answer) => answer.json())
    .catch((error) => {
      console.log(error);
      return false;
    })
    .then((response) => {
      console.log(response);
      return response;
    });
};

export const getDoctorsDetails = async (id) => {
  return fetch("https://ehealth237.onrender.com/ehealth/api/doctors/" + id, {
    next: { revalidate: 3600 },
  })
    .then((answer) => answer.json())
    .catch((error) => {
      console.log(error);
      return false;
    })
    .then((response) => {
      return response;
    });
};

export const getDoctor = async (id) => {
  return fetch("https://ehealth237.onrender.com/ehealth/api/doctors/" + id, {
    next: { revalidate: 3600 },
  })
    .then((answer) => answer.json())
    .catch((error) => {
      console.log(error);
      return false;
    })
    .then((response) => {
      return response;
    });
};

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
