export const metadata = {
  title: "E health cameroon -  View details for a doctor",
  description: "Book consultation from remote doctors",
};

import HeaderDetails from "@/components/header2";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <HeaderDetails />
        {children}
      </body>
    </html>
  );
}
