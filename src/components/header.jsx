import { RxHamburgerMenu } from "react-icons/rx";
import { getUser } from "./chat/fucntions";
import { cookies } from "next/headers";
import Link from "next/link";
export default async function Header() {
  const auth = cookies().get("auth");

  const user = auth ? await getUser() : "";

  return (
    <div className="flex justify-between items-center py-4">
      <RxHamburgerMenu size={25} />
      <h1 className="text-lg  font-extrabold ">Ehealth</h1>
      {user ? (
        <div className="flex flex-col  gap-2 items-center justify-center">
          <Link href="/contacts">
            <img
              src={user.profile}
              className="rounded-full w-10 h-10 object-cover"
            />
          </Link>
          <h2 className="text-xs">
            Welcome, <span className="font-semibold">{user.username}</span>
          </h2>
        </div>
      ) : (
        <button>login</button>
      )}
    </div>
  );
}
