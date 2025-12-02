import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Navbar } from "~/components/navbar";

export const metadata: Metadata = {
  title: "Chiikawa Store",
  description: "Your one-stop shop for Chiikawa plushies and merchandise",
  icons: [{ rel: "icon", url: "/chiikawa.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
