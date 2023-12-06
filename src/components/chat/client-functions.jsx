export const getMedicaments = async () => {
  return fetch(
    `https://ehealth237.onrender.com/ehealth/api/chats/medicaments/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
};
