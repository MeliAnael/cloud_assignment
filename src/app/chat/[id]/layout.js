export const metadata = {
  title: "E health cameroon -  View details for a doctor",
  description: "Book consultation from remote doctors",
};

import Reply from "@/components/chat/reply";
import CHatHeader from "@/components/chat/headers";
import { getUser } from "@/components/chat/fucntions";
import { getDoctor } from "@/components/doctors/getdoctors";

export default async function Layout({ children, params }) {
  const user = await getUser();
 
  const { id } = params;
  const doctor = await getDoctor(id);

  return (
    <html lang="en">
      <body className="mx-0 h-[100dvh] overflow-hidden relative">
        <CHatHeader {...doctor} userName={user.username} />
        <hr className="h-[0.05rem] bg-black" />
        {children}
      </body>
    </html>
  );
}
