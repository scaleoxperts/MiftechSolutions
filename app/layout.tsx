import Footer from "@/components/common/Footer";
import Header from "@/components/common/Navbar";
import ContactUs from "@/components/sections/ContactUs";
import { GTMTracker } from "@/components/ui/GTMTracker";
import { PageViewTracker } from "@/components/ui/PageViewTracker";
import StickyContactButtons from "@/components/ui/StickyButtons";
import { GoogleTagManager } from "@next/third-parties/google";
import { Suspense } from "react";
import { playfairDisplay, poppins } from "./fonts";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={"GTM-WSBLTDWJ"} />
      <body
        className={`${poppins.variable} ${playfairDisplay.variable} font-poppins`}
      >

        <Suspense>
          <PageViewTracker />
          <GTMTracker />
        </Suspense>

        <Header />

        <main>{children}</main>

        <StickyContactButtons />

        <ContactUs currentRoute={"/contact"} />
        <Footer />
      </body>
    </html>
  );
}