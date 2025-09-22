import type { Metadata } from "next";
import { poppins, playfairDisplay } from "./fonts";
import "./globals.css";
import Header from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Script from "next/script";
import StickyContactButtons from "@/components/ui/StickyButtons";

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
        {/* Google Tag Manager Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WSBLTDWJ');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${poppins.variable} ${playfairDisplay.variable} font-poppins`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSBLTDWJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        <main>{children}</main>
        <StickyContactButtons />
        <Footer />
      </body>
    </html>
  );
}