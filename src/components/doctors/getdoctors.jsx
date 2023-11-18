import { cookies } from "next/headers";

export const getDoctors = async () => {
  return fetch("http://127.0.0.1:8000/ehealth/api/doctors/", {
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

export const getDoctorsDetails = async (id) => {
  return fetch("http://127.0.0.1:8000/ehealth/api/doctors/" + id, {
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
  return fetch("http://127.0.0.1:8000/ehealth/api/doctors/" + id, {
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
