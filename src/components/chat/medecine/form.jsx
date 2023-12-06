import MedicineSelector from "./send";
import { getMedicaments } from "../client-functions";
import { useEffect, useState } from "react";

export function MedicamentButton({ user, doctor }) {
  const [medicaments, setMedicaments] = useState([]);
  

  useEffect(() => {
    async function fetchMedicaments() {
      try {
        const data = await getMedicaments();
        setMedicaments(data);
      } catch (error) {
        console.error("Error fetching medicaments:", error);
      }
    }

    fetchMedicaments();
  }, []);

  return (
    <MedicineSelector user={user} doctor={doctor} medicines={medicaments} />
  );
}
