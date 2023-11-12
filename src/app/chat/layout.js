export const metadata = {
  title: "E health cameroon -  View details for a doctor",
  description: "Book consultation from remote doctors",
};

import Reply from "@/components/chat/reply";
import CHatHeader from "@/components/chat/headers";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="mx-0 h-[100dvh] overflow-hidden relative">
        <CHatHeader />
        <hr className="h-[0.05rem] bg-black" />
        {children}
        <Reply />
      </body>
    </html>
  );
}
