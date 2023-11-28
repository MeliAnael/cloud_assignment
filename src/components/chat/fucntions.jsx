import { cookies } from "next/headers";

export const getUser = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("auth");

  return fetch(`http://127.0.0.1:8000/ehealth/api/chats/me/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.value,
    },
  })
    .then((data) => data.json())
    .then((response) => {
      return response[0];
    });
};
