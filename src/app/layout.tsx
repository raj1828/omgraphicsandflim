import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import { Playfair_Display, Great_Vibes } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${greatVibes.variable}`}
      >
        <Navbar />

        {/* Push content below fixed navbar */}
        <main className="">{children}</main>
      </body>
    </html>
  );
}
