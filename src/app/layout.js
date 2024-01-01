import { Poppins } from "next/font/google";
import StoreProvider from './StoreProvider';
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "E health cameroon",
  description: "Book consultation from remote doctors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className + " mx-4 min-h-screen"}>{children}</body>
      </StoreProvider>
    </html>
  );
}
