"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";

const MedicineSelector = ({ medicines, user, doctor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { control, handleSubmit, watch } = useForm();
  const selectedMedicines = watch("selectedMedicines", []);
  const websocket = new WebSocket(
    `ws://127.0.0.1:8000/ws/chats/${user}/${doctor}/1/`
  );

  websocket.onopen = (data) => {
    console.log("connected to websocket");
  };

  websocket.onmessage = (data) => {
    // console.log(data);
  };

  const handleSelectMedicine = (medicine) => {
    return selectedMedicines.includes(medicine)
      ? selectedMedicines.filter((m) => m !== medicine)
      : [...selectedMedicines, medicine];
  };

  const onSubmit = (data) => {
    const selectedMedicineIds = data.selectedMedicines;
    const medicineMessage = {
      message: "",
      type: "prescription",
      medicament_ids: selectedMedicineIds,
    };
    websocket.send(JSON.stringify(medicineMessage));
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="btn btn-circle btn-ghost"
        onClick={() => setIsModalOpen(true)}
      >
        <FaPlusCircle size={24} />
      </button>

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <Controller
              name="selectedMedicines"
              control={control}
              render={({ field }) => (
                <div>
                  {medicines.map((medicine) => (
                    <button
                      key={medicine.id}
                      className={`btn m-1 ${
                        selectedMedicines.includes(medicine.id)
                          ? "btn-active"
                          : "btn-outline"
                      }`}
                      onClick={() =>
                        field.onChange(handleSelectMedicine(medicine.id))
                      }
                    >
                      {medicine.name}
                    </button>
                  ))}
                </div>
              )}
            />
            <div className="modal-action">
              <button
                className="btn btn-primary"
                onClick={handleSubmit(onSubmit)}
              >
                Close & Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicineSelector;
