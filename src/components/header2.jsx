import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function HeaderDetails() {
  return (
    <div className="flex justify-between items-center py-4">
      <AiOutlineArrowLeft size={23} />
      <h1 className="text-sm  font-extrabold ">Details</h1>
      <IoIosNotificationsOutline size={23} />
    </div>
  );
}
