export const getMedicaments = async () => {
  return fetch(`http://127.0.0.1:8000/ehealth/api/chats/medicaments/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((response) => {
      
      return response;
    });
};
