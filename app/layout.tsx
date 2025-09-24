import Footer from "@/components/common/Footer";
import Header from "@/components/common/Navbar";
import ContactUs from "@/components/sections/ContactUs";
import { GoogleTagManager } from "@/components/ui/GoogleTagManager";
import { PageViewTracker } from "@/components/ui/PageViewTracker";
import StickyContactButtons from "@/components/ui/StickyButtons";
import type { Metadata } from "next";
import { playfairDisplay, poppins } from "./fonts";
import "./globals.css";
import { Suspense } from "react";

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
        <Suspense>
          <PageViewTracker />
        </Suspense>
        
        <GoogleTagManager />

        <Header />

        <main>{children}</main>

        <StickyContactButtons />


        <ContactUs currentRoute={"/contact"} />
        <Footer />
      </body>
    </html>
  );
}