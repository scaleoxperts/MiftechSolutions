[1mdiff --git a/app/about-heat-pump/air-source-life-cycle/page.tsx b/app/about-heat-pump/air-source-life-cycle/page.tsx[m
[1mindex 7478d9a..200f32f 100644[m
[1m--- a/app/about-heat-pump/air-source-life-cycle/page.tsx[m
[1m+++ b/app/about-heat-pump/air-source-life-cycle/page.tsx[m
[36m@@ -1,14 +1,67 @@[m
 "use client";[m
 [m
 import Image from "next/image";[m
[31m-import { motion } from "motion/react";[m
[32m+[m[32mimport { motion } from "framer-motion";[m
 import { Gotu, Lato } from "next/font/google";[m
 [m
[32m+[m
[32m+[m
 // Fonts[m
 const gotu = Gotu({ subsets: ["latin"], weight: "400" });[m
 const lato = Lato({ subsets: ["latin"], weight: "700" });[m
 [m
 export default function LifecyclePage() {[m
[32m+[m[32m  const benefits = [[m
[32m+[m[32m    {[m
[32m+[m[32m      title: "Energy Efficient",[m
[32m+[m[32m      points: [[m
[32m+[m[32m        "Uses ambient air to generate heat",[m
[32m+[m[32m        "Saves up to 60–70% energy compared to electric heaters or boilers",[m
[32m+[m[32m      ],[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      title: "Safety and Reliability",[m
[32m+[m[32m      points: [[m
[32m+[m[32m        "No direct electricity consumption for heating water",[m
[32m+[m[32m        "Water and current are completely separated, ensuring a high safety quotient",[m
[32m+[m[32m        "Eliminates risks of electric shocks, fire, or explosions that are common in electric or gas heaters",[m
[32m+[m[32m      ],[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      title: "High Efficiency & Energy Saving",[m
[32m+[m[32m      points: [[m
[32m+[m[32m        "Extracts abundant free heat energy from the air",[m
[32m+[m[32m        "Electricity is used only to power the compressor, making it 4 times more efficient than traditional heaters",[m
[32m+[m[32m        "Reduces electricity bills significantly",[m
[32m+[m[32m      ],[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      title: "Green Energy & Earth-Friendly",[m
[32m+[m[32m      points: [[m
[32m+[m[32m        "Utilizes three types of clean energy – Solar, Ambient, and Electric",[m
[32m+[m[32m        "Produces no harmful gases",[m
[32m+[m[32m        "Environmentally safe compared to oil, coal, or gas-based systems",[m
[32m+[m[32m      ],[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      title: "Low Maintenance",[m
[32m+[m[32m      points: [[m
[32m+[m[32m        "Simple design with fewer moving parts",[m
[32m+[m[32m        "Ensures long service life and minimal maintenance cost",[m
[32m+[m[32m      ],[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      title: "Versatile Applications",[m
[32m+[m[32m      points: [[m
[32m+[m[32m        "Suitable for homes, hotels, hostels, hospitals, swimming pools, and industries",[m
[32m+[m[32m      ],[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      title: "Continuous Hot Water",[m
[32m+[m[32m      points: ["Can operate 24/7, ensuring an uninterrupted supply of hot water"],[m
[32m+[m[32m    },[m
[32m+[m[32m  ];[m
[32m+[m
   return ([m
     <main className="overflow-hidden">[m
       {/* Hero */}[m
[36m@@ -41,7 +94,7 @@[m [mexport default function LifecyclePage() {[m
           transition={{ duration: 0.8 }}[m
         >[m
           <h2[m
[31m-            className={`text-3xl font-bold text-[var(--base-color)] mb-4 ${gotu.className}`}[m
[32m+[m[32m            className={`text-3xl font-bold  mb-4 ${gotu.className} text-[#087dc0]`}[m
           >[m
             What is an Air Source Heat Pump?[m
           </h2>[m
[36m@@ -75,7 +128,7 @@[m [mexport default function LifecyclePage() {[m
           transition={{ duration: 0.8 }}[m
         >[m
           <h2[m
[31m-            className={`text-3xl font-bold text-[var(--base-color)] mb-4 ${gotu.className}`}[m
[32m+[m[32m            className={`text-3xl font-bold text-[#087dc0] mb-4 ${gotu.className}`}[m
           >[m
             How Does It Work?[m
           </h2>[m
[36m@@ -100,7 +153,7 @@[m [mexport default function LifecyclePage() {[m
           transition={{ duration: 0.8 }}[m
         >[m
           <h2[m
[31m-            className={`text-3xl font-bold text-[var(--base-color)] mb-4 ${gotu.className}`}[m
[32m+[m[32m            className={`text-3xl font-bold text-[#087dc0] mb-4 ${gotu.className}`}[m
           >[m
             Energy Efficiency[m
           </h2>[m
[36m@@ -128,6 +181,52 @@[m [mexport default function LifecyclePage() {[m
           </div>[m
         </motion.div>[m
       </section>[m
[32m+[m
[32m+[m[32m      {/* Key Benefits */}[m
[32m+[m[32m      <section className="py-16 bg-[var(--linen)]/40">[m
[32m+[m[32m        <div className="container mx-auto px-4 sm:px-6 lg:px-8">[m
[32m+[m[32m          <motion.div[m
[32m+[m[32m            initial={{ opacity: 0, y: 30 }}[m
[32m+[m[32m            whileInView={{ opacity: 1, y: 0 }}[m
[32m+[m[32m            viewport={{ once: true }}[m
[32m+[m[32m            transition={{ duration: 0.8 }}[m
[32m+[m[32m          >[m
[32m+[m[32m            <h2[m
[32m+[m[32m              className={`text-3xl md:text-4xl font-bold text-center text-[#087dc0] mb-12 ${gotu.className}`}[m
[32m+[m[32m            >[m
[32m+[m[32m              Key Benefits of Air Source Heat Pumps[m
[32m+[m[32m            </h2>[m
[32m+[m[32m            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">[m
[32m+[m[32m              {benefits.map((benefit, index) => ([m
[32m+[m[32m                <div[m
[32m+[m[32m                  key={index}[m
[32m+[m[32m                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"[m
[32m+[m[32m                >[m
[32m+[m[32m                  <h3[m
[32m+[m[32m                    className={`text-xl font-bold text-[var(--dark-gray)] mb-4 ${gotu.className}`}[m
[32m+[m[32m                  >[m
[32m+[m[32m                    {benefit.title}[m
[32m+[m[32m                  </h3>[m
[32m+[m[32m                  <ul className="space-y-3">[m
[32m+[m[32m                    {benefit.points.map((point, i) => ([m
[32m+[m[32m                      <li key={i} className="flex items-start">[m
[32m+[m[32m                        <span className="text-green-500 mr-3 mt-1 flex-shrink-0">[m
[32m+[m[32m                          ✔[m
[32m+[m[32m                        </span>[m
[32m+[m[32m                        <span className={`text-gray-700 ${lato.className}`}>[m
[32m+[m[32m                          {point}[m
[32m+[m[32m                        </span>[m
[32m+[m[32m                      </li>[m
[32m+[m[32m                    ))}[m
[32m+[m[32m                  </ul>[m
[32m+[m[32m                </div>[m
[32m+[m[32m              ))}[m
[32m+[m[32m            </div>[m
[32m+[m[32m          </motion.div>[m
[32m+[m[32m        </div>[m
[32m+[m[32m      </section>[m
[32m+[m
[32m+[m
     </main>[m
   );[m
 }[m
[1mdiff --git a/app/about/page.tsx b/app/about/page.tsx[m
[1mindex 5301db0..7bc561f 100644[m
[1m--- a/app/about/page.tsx[m
[1m+++ b/app/about/page.tsx[m
[36m@@ -3,6 +3,7 @@[m
 import Image from "next/image";[m
 import { motion } from "motion/react";[m
 import { Gotu, Cormorant_Garamond, Lato } from "next/font/google";[m
[32m+[m[32mimport DocumentsSection from "@/components/DocumentsSection";[m
 [m
 const gotu = Gotu({ subsets: ["latin"], weight: "400" });[m
 const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "400" });[m
[36m@@ -80,6 +81,9 @@[m [mexport default function AboutPage() {[m
         </div>[m
       </section>[m
 [m
[32m+[m[32m      {/* Certificates and GST */}[m
[32m+[m[32m      <DocumentsSection />[m
[32m+[m
       <section className="py-20 bg-[var(--white)]">[m
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">[m
           <motion.div[m
[1mdiff --git a/app/contact/page.tsx b/app/contact/page.tsx[m
[1mindex 1130925..adb8e9d 100644[m
[1m--- a/app/contact/page.tsx[m
[1m+++ b/app/contact/page.tsx[m
[36m@@ -1,5 +1,6 @@[m
 "use client";[m
 [m
[32m+[m[32mimport ContactUs from "@/components/sections/ContactUs";[m
 import { motion } from "motion/react";[m
 import { Cormorant_Garamond, Gotu, Lato } from "next/font/google";[m
 [m
[36m@@ -103,6 +104,12 @@[m [mexport default function ContactPage() {[m
           </motion.div>[m
         </div>[m
       </section>[m
[32m+[m
[32m+[m
[32m+[m[32m      {/* Contact Form Section */}[m
[32m+[m[32m      <section className="py-20 bg-[var(--white)]">[m
[32m+[m[32m        <ContactUs currentRoute={"/contact"} />[m
[32m+[m[32m      </section>[m
     </main>[m
   );[m
 }[m
[1mdiff --git a/app/layout.tsx b/app/layout.tsx[m
[1mindex d1a8ff2..89cef08 100644[m
[1m--- a/app/layout.tsx[m
[1m+++ b/app/layout.tsx[m
[36m@@ -1,15 +1,11 @@[m
[31m-import Footer from "@/components/common/Footer";[m
[31m-import Header from "@/components/common/Navbar";[m
[31m-import ContactUs from "@/components/sections/ContactUs";[m
[31m-import { PageViewTracker } from "@/components/ui/PageViewTracker";[m
[31m-import StickyContactButtons from "@/components/ui/StickyButtons";[m
[31m-import { GoogleTagManager } from "@next/third-parties/google";[m
 import type { Metadata } from "next";[m
[31m-import { Suspense } from "react";[m
[31m-import { playfairDisplay, poppins } from "./fonts";[m
[32m+[m[32mimport { poppins, playfairDisplay } from "./fonts";[m
 import "./globals.css";[m
[31m-import { GTMTracker } from "@/components/ui/GTMTracker";[m
[31m-[m
[32m+[m[32mimport Header from "@/components/common/Navbar";[m
[32m+[m[32mimport Footer from "@/components/common/Footer";[m
[32m+[m[32mimport Script from "next/script";[m
[32m+[m[32mimport StickyContactButtons from "@/components/ui/StickyButtons";[m
[32m+[m[32mimport { GoogleTagManager } from "@/components/ui/GoogleTagManager";[m
 [m
 export const metadata: Metadata = {[m
   title: "MifTech Solution",[m
[36m@@ -24,23 +20,17 @@[m [mexport default function RootLayout({[m
 }) {[m
   return ([m
     <html lang="en">[m
[31m-      <GoogleTagManager gtmId={"GTM-WSBLTDWJ"} />[m
       <body[m
         className={`${poppins.variable} ${playfairDisplay.variable} font-poppins`}[m
       >[m
[31m-[m
[31m-        <Suspense>[m
[31m-          <PageViewTracker />[m
[31m-          <GTMTracker />[m
[31m-        </Suspense>[m
[32m+[m[32m        <GoogleTagManager />[m
 [m
         <Header />[m
 [m
         <main>{children}</main>[m
 [m
         <StickyContactButtons />[m
[31m-[m
[31m-        <ContactUs currentRoute={"/contact"} />[m
[32m+[m[41m        [m
         <Footer />[m
       </body>[m
     </html>[m
[1mdiff --git a/app/page.tsx b/app/page.tsx[m
[1mindex a2bf0e7..12c8a83 100644[m
[1m--- a/app/page.tsx[m
[1m+++ b/app/page.tsx[m
[36m@@ -1,24 +1,25 @@[m
 import AboutIntro from "@/components/sections/AboutIntro";[m
[32m+[m[32mimport ContactUs from "@/components/sections/ContactUs";[m
 import Faq from "@/components/sections/Faq";[m
 import HeroSlider from "@/components/sections/HeroSlider";[m
 import ProductShowcase from "@/components/sections/ProductShowcase";[m
 import Stats from "@/components/sections/Stats";[m
 import Testimonials from "@/components/sections/Testimonials";[m
[31m-import SmoothScrollWrapper from "@/components/ui/SmoothScrollWrapper";[m
[32m+[m[32mimport DocumentsSection from "@/components/DocumentsSection";[m
 [m
 [m
 [m
 export default function HomePage() {[m
   return ([m
     <>[m
[31m-      <SmoothScrollWrapper>[m
[31m-        <HeroSlider />[m
[31m-        <AboutIntro />[m
[31m-        <ProductShowcase />[m
[31m-        <Stats />[m
[31m-        <Faq />[m
[31m-        <Testimonials />[m
[31m-      </SmoothScrollWrapper>[m
[32m+[m[32m      <HeroSlider />[m
[32m+[m[32m      <AboutIntro />[m
[32m+[m[32m      <ProductShowcase />[m
[32m+[m[32m      <Stats />[m
[32m+[m[32m      <DocumentsSection />[m
[32m+[m[32m      <Faq />[m
[32m+[m[32m      <Testimonials />[m
[32m+[m[32m      <ContactUs currentRoute={"/home"} />[m
     </>[m
   );[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/app/thank-you/page.tsx b/app/thank-you/page.tsx[m
[1mindex 4958100..8f507f8 100644[m
[1m--- a/app/thank-you/page.tsx[m
[1m+++ b/app/thank-you/page.tsx[m
[36m@@ -1,8 +1,9 @@[m
 "use client";[m
 import { motion } from "motion/react";[m
 import { Cormorant_Garamond, Gotu, Lato } from "next/font/google";[m
[31m-import { useRouter, useSearchParams } from "next/navigation";[m
[31m-import { Suspense, useEffect, useState } from "react";[m
[32m+[m[32mimport Link from "next/link";[m
[32m+[m[32mimport { useRouter } from "next/navigation";[m
[32m+[m[32mimport { useEffect, useState } from "react";[m
 [m
 const gotu = Gotu({ weight: "400", subsets: ["latin"] });[m
 const cormorant_garamond = Cormorant_Garamond({[m
[36m@@ -12,13 +13,8 @@[m [mconst cormorant_garamond = Cormorant_Garamond({[m
 });[m
 const lato = Lato({ subsets: ["latin"], weight: "400" });[m
 [m
[31m-function ThankYouContent() {[m
[32m+[m[32mexport default function ThankYou() {[m
   const router = useRouter();[m
[31m-  const searchParams = useSearchParams();[m
[31m-[m
[31m-  const name = searchParams.get("name") || "Guest";[m
[31m-  const email = searchParams.get("email") || "";[m
[31m-[m
   const [countdown, setCountdown] = useState(8);[m
 [m
   useEffect(() => {[m
[36m@@ -26,7 +22,7 @@[m [mfunction ThankYouContent() {[m
       setCountdown((prev) => {[m
         if (prev <= 1) {[m
           clearInterval(timer);[m
[31m-          router.push("/");[m
[32m+[m[32m          router.push('/');[m
           return 0;[m
         }[m
         return prev - 1;[m
[36m@@ -70,28 +66,48 @@[m [mfunction ThankYouContent() {[m
           animate={{ opacity: 1, y: 0 }}[m
           transition={{ delay: 0.3, duration: 0.5 }}[m
         >[m
[31m-          <h1[m
[31m-            className={`text-2xl sm:text-3xl font-bold text-[var(--text-dark-gray)] mb-3 ${gotu.className}`}[m
[31m-          >[m
[31m-            Thank You, {name}![m
[32m+[m[32m          <h1 className={`text-2xl sm:text-3xl font-bold text-[var(--text-dark-gray)] mb-3 ${gotu.className}`}>[m
[32m+[m[32m            Thank You![m
           </h1>[m
[31m-[m
[31m-          <p[m
[31m-            className={`text-lg text-[#087dc0] mb-4 ${cormorant_garamond.className}`}[m
[31m-          >[m
[31m-            We’ve received your message successfully.[m
[32m+[m[41m          [m
[32m+[m[32m          <p className={`text-lg text-[#087dc0] mb-4 ${cormorant_garamond.className}`}>[m
[32m+[m[32m            Message sent successfully[m
           </p>[m
[31m-[m
[31m-          <p[m
[31m-            className={`text-gray-600 text-sm leading-relaxed mb-6 ${lato.className}`}[m
[31m-          >[m
[31m-            A confirmation has been sent to{" "}[m
[31m-            <span className="font-semibold text-[#087dc0]">{email}</span>.  [m
[31m-            We’ll get back to you within 24 hours.[m
[32m+[m[41m          [m
[32m+[m[32m          <p className={`text-gray-600 text-sm leading-relaxed mb-6 ${lato.className}`}>[m
[32m+[m[32m            We&apos;ve received your inquiry and will get back to you within 24 hours with a personalized response.[m
           </p>[m
         </motion.div>[m
 [m
         <motion.div[m
[32m+[m[32m          initial={{ opacity: 0 }}[m
[32m+[m[32m          animate={{ opacity: 1 }}[m
[32m+[m[32m          transition={{ delay: 0.5, duration: 0.5 }}[m
[32m+[m[32m          className="space-y-4"[m
[32m+[m[32m        >[m
[32m+[m[32m          <div className="flex flex-col xs:flex-row gap-3">[m
[32m+[m[32m            <Link href="/" className="flex-1">[m
[32m+[m[32m              <motion.button[m
[32m+[m[32m                whileHover={{ scale: 1.02 }}[m
[32m+[m[32m                whileTap={{ scale: 0.98 }}[m
[32m+[m[32m                className={`w-full bg-[#087dc0] text-white font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:bg-[#076ba8] transition-all text-sm ${lato.className}`}[m
[32m+[m[32m              >[m
[32m+[m[32m                Homepage[m
[32m+[m[32m              </motion.button>[m
[32m+[m[32m            </Link>[m
[32m+[m[41m            [m
[32m+[m[32m            <Link href="/services" className="flex-1">[m
[32m+[m[32m              <motion.button[m
[32m+[m[32m                whileHover={{ scale: 1.02 }}[m
[32m+[m[32m                whileTap={{ scale: 0.98 }}[m
[32m+[m[32m                className={`w-full bg-white text-[#087dc0] font-semibold px-6 py-2.5 rounded-lg border border-[#087dc0] hover:bg-[#087dc0] hover:text-white transition-all text-sm ${lato.className}`}[m
[32m+[m[32m              >[m
[32m+[m[32m                Our Services[m
[32m+[m[32m              </motion.button>[m
[32m+[m[32m            </Link>[m
[32m+[m[32m          </div>[m
[32m+[m
[32m+[m[32m          <motion.div[m
             initial={{ opacity: 0 }}[m
             animate={{ opacity: 1 }}[m
             transition={{ delay: 0.7, duration: 0.5 }}[m
[36m@@ -111,15 +127,8 @@[m [mfunction ThankYouContent() {[m
               <span className={lato.className}>sec</span>[m
             </div>[m
           </motion.div>[m
[32m+[m[32m        </motion.div>[m
       </motion.div>[m
     </div>[m
   );[m
[31m-}[m
[31m-[m
[31m-export default function ThankYouPage() {[m
[31m-  return ([m
[31m-    <Suspense fallback={<div className="text-center">Loading...</div>}>[m
[31m-      <ThankYouContent />[m
[31m-    </Suspense>[m
[31m-  );[m
[31m-}[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/bun.lock b/bun.lock[m
[1mindex 4412b71..dc52c79 100644[m
[1m--- a/bun.lock[m
[1m+++ b/bun.lock[m
[36m@@ -5,7 +5,6 @@[m
       "name": "miftechsolutions",[m
       "dependencies": {[m
         "@getbrevo/brevo": "^3.0.1",[m
[31m-        "@next/third-parties": "^15.5.4",[m
         "@tanstack/react-query": "^5.87.1",[m
         "axios": "^1.12.2",[m
         "googleapis": "^160.0.0",[m
[36m@@ -150,8 +149,6 @@[m
 [m
     "@next/swc-win32-x64-msvc": ["@next/swc-win32-x64-msvc@15.5.2", "", { "os": "win32", "cpu": "x64" }, "sha512-W5VvyZHnxG/2ukhZF/9Ikdra5fdNftxI6ybeVKYvBPDtyx7x4jPPSNduUkfH5fo3zG0JQ0bPxgy41af2JX5D4Q=="],[m
 [m
[31m-    "@next/third-parties": ["@next/third-parties@15.5.4", "", { "dependencies": { "third-party-capital": "1.0.20" }, "peerDependencies": { "next": "^13.0.0 || ^14.0.0 || ^15.0.0", "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0" } }, "sha512-l3T1M/EA32phPzZx+gkQAWOF3E5iAULL1nX4Ej0JZQOXaBwwJzb/rd2uefr5TAshJj/+HjjwmdFu7olXudvgVg=="],[m
[31m-[m
     "@nodelib/fs.scandir": ["@nodelib/fs.scandir@2.1.5", "", { "dependencies": { "@nodelib/fs.stat": "2.0.5", "run-parallel": "^1.1.9" } }, "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g=="],[m
 [m
     "@nodelib/fs.stat": ["@nodelib/fs.stat@2.0.5", "", {}, "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A=="],[m
[36m@@ -876,8 +873,6 @@[m
 [m
     "text-table": ["text-table@0.2.0", "", {}, "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw=="],[m
 [m
[31m-    "third-party-capital": ["third-party-capital@1.0.20", "", {}, "sha512-oB7yIimd8SuGptespDAZnNkzIz+NWaJCu2RMsbs4Wmp9zSDUM8Nhi3s2OOcqYuv3mN4hitXc8DVx+LyUmbUDiA=="],[m
[31m-[m
     "tinyglobby": ["tinyglobby@0.2.15", "", { "dependencies": { "fdir": "^6.5.0", "picomatch": "^4.0.3" } }, "sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ=="],[m
 [m
     "to-regex-range": ["to-regex-range@5.0.1", "", { "dependencies": { "is-number": "^7.0.0" } }, "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2G