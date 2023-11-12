import { AiOutlineSearch } from "react-icons/ai";

export default function Research() {
  return (
    <div className="research flex flex-col gap-6 mt-8">
      <h2 className="text-lg font-bold">Find Your Suitable Doctor!</h2>
      <div className="search border-2  border-base-300 flex justify-start gap-2 rounded-xl">
        <div className="icon ps-2 flex items-center justify-center">
          <AiOutlineSearch size={27} className="text-base-300" />
        </div>
        <input
          type="text"
          className="bg-transparent outline-none focus:outline-none flex-grow py-3 "
          placeholder="Search"
        />
      </div>
    </div>
  );
}
