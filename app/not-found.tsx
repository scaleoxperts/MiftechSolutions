"use client";
import { motion } from "motion/react";
import { Cormorant_Garamond, Gotu, Lato } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const gotu = Gotu({ weight: "400", subsets: ["latin"] });
const cormorant_garamond = Cormorant_Garamond({
  weight: "600",
  subsets: ["latin"],
  style: "italic",
});
const lato = Lato({ subsets: ["latin"], weight: "400" });

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-3 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-xl p-5 sm:p-6 max-w-md w-full text-center"
      >
        {/* Error Code */}
        <motion.div
          initial={{ scale: 0.9, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4"
        >
          <div className="text-5xl sm:text-7xl font-bold text-[#087dc0]">404</div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="h-1 bg-gradient-to-r from-[#087dc0] to-blue-300 rounded-full mx-auto max-w-20"
          />
        </motion.div>

        {/* Title & Message */}
        <h1
          className={`text-xl sm:text-2xl font-semibold text-gray-800 mb-2 ${gotu.className}`}
        >
          Page Not Found
        </h1>
        <p
          className={`text-base text-[#087dc0] mb-3 ${cormorant_garamond.className}`}
        >
          Looks like this page went on a heat pump installation
        </p>
        <p
          className={`text-gray-600 text-sm leading-relaxed mb-6 ${lato.className}`}
        >
          The page you’re looking for doesn’t exist or has been moved. Let’s get
          you back on track.
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full bg-[#087dc0] text-white font-medium px-4 py-2.5 rounded-lg shadow hover:bg-[#076ba8] transition-all ${lato.className}`}
            >
              Go Home
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.back()}
            className={`w-full bg-white text-[#087dc0] font-medium px-4 py-2.5 rounded-lg border border-[#087dc0] hover:bg-[#087dc0] hover:text-white transition-all ${lato.className}`}
          >
            Go Back
          </motion.button>
        </div>

        {/* Popular Links */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="pt-4 border-t border-gray-100"
        >
          <p className={`text-xs text-gray-500 mb-2 ${lato.className}`}>
            Popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: "/services", label: "Services" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link key={href} href={href}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 hover:bg-[#087dc0] hover:text-white transition-all cursor-pointer ${lato.className}`}
                >
                  {label}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
