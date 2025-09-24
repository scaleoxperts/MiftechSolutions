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
import Script from "next/script";

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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WSBLTDWJ');
          `}
        </Script>
      </head>
      <body
        className={`${poppins.variable} ${playfairDisplay.variable} font-poppins`}
      >

        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-WSBLTDWJ`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <GoogleTagManager />

        <Suspense>
          <PageViewTracker />
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