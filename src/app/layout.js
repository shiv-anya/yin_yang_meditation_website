"use client";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import { usePathname } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const show = pathname.split("/").findIndex((t) => t === "lessons");
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          {show === -1 && <Navbar />}
          {children}
          {show === -1 && <Footer />}
        </main>
      </body>
    </html>
  );
}
