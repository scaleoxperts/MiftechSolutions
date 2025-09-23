import type { Metadata } from "next";
import { poppins, playfairDisplay } from "./fonts";
import "./globals.css";
import Header from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Script from "next/script";
import StickyContactButtons from "@/components/ui/StickyButtons";
import { GoogleTagManager } from "@/components/ui/GoogleTagManager";

export const metadata: Metadata = {
  title: "MifTech Solution",
  description:
    "Transforming Energy into Savings with Innovative Heat Pump Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfairDisplay.variable} font-poppins`}
      >
        <GoogleTagManager />

        <Header />

        <main>{children}</main>

        <StickyContactButtons />
        
        <Footer />
      </body>
    </html>
  );
}