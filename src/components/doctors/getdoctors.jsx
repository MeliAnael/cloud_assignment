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
