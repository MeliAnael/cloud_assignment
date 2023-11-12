import { FaUserMd } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCapsules } from "react-icons/fa6";
import { BsFillChatSquareDotsFill } from "react-icons/bs";

export default function Options() {
  const optionsData = [];

  return (
    <div className="grid grid-cols-4 gap-3 my-12">
      <div className="flex flex-col items-center gap-4">
        <div className="item aspect-square flex flex-col items-center justify-center gap-8 bg-base-300 rounded-xl p-4">
          <FaUserMd className="" size={44} />
        </div>
        <h4 className="text-xs">Doctor</h4>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="item aspect-square flex flex-col items-center justify-center gap-8 bg-base-300 rounded-xl p-4">
          <FaCalendarAlt className="" size={44} />
        </div>
        <h4 className="text-xs">Appointment</h4>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="item aspect-square flex flex-col items-center justify-center gap-8 bg-base-300 rounded-xl p-4">
          <FaCapsules className="" size={44} />
        </div>
        <h4 className="text-xs">Prescriptions</h4>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="item aspect-square flex flex-col items-center justify-center gap-8 bg-base-300 rounded-xl p-4">
          <BsFillChatSquareDotsFill className="" size={44} />
        </div>
        <h4 className="text-xs">Discuss</h4>
      </div>
    </div>
  );
}
