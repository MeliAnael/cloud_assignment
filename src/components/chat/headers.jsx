import profile from "@/@/profile.jpg";
import Image from "next/image";
import { HiOutlineChevronLeft } from "react-icons/hi";

export default function CHatHeader() {
  return (
    <div className="flex fixed top-0 right-0 w-full z-20 bg-base-300">
      <div className="flex justify-between items-center py-4 ">
        <HiOutlineChevronLeft size={23} />
        <div className="infos flex justify-start w-full gap-4 ms-4 items-center ">
          <div className="">
            <div className="rounded-full flex items-center justify-center bg-base-300 p-1 indicator">
              <span className="indicator-item badge badge-accent badge-xs"></span>
              <Image
                src={profile}
                className="w-12 h-12 rounded-full object-cover  "
              />
            </div>
          </div>
          <div className="datas flex flex-col items-center justify-between gap-2 mx-2 h-full ">
            <h2 className="text-sm font-normal">Doctor Name</h2>
            <h3 className="text-[0.92rem] font-bold">Active Now</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
