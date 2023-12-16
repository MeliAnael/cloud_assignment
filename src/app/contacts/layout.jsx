export const metadata = {
  title: "E health cameroon -  View details for a doctor",
  description: "Book consultation from remote doctors",
};

import HeaderDoctor from "@/components/header3";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <HeaderDoctor />
        {children}
      </body>
    </html>
  );
}
