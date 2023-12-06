import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
export default function HeaderDoctor() {
  return (
    <div className="flex justify-between items-center py-4">
      <AiOutlineArrowLeft size={23} />
      <h1 className="text-sm  font-extrabold ">Messages</h1>
      <AiOutlineMessage size={23} />
    </div>
  );
}
