import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "Luxorious cabin hotel, located in the heart of Italian Dolomites, sorrounded by nature and breathtaking views.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Logo />
        <Navigation />
        <main>{children}</main>
        <footer>Copyright © 2026 The Wild Oasis. All rights reserved.</footer>
      </body>
    </html>
  );
}
