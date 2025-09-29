"use client";
import { motion } from "motion/react";
import { Cormorant_Garamond, Gotu, Lato } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const gotu = Gotu({ weight: "400", subsets: ["latin"] });
const cormorant_garamond = Cormorant_Garamond({
  weight: "600",
  subsets: ["latin"],
  style: "italic",
});
const lato = Lato({ subsets: ["latin"], weight: "400" });

export default function ThankYou() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className={`text-2xl sm:text-3xl font-bold text-[var(--text-dark-gray)] mb-3 ${gotu.className}`}>
            Thank You!
          </h1>
          
          <p className={`text-lg text-[#087dc0] mb-4 ${cormorant_garamond.className}`}>
            Message sent successfully
          </p>
          
          <p className={`text-gray-600 text-sm leading-relaxed mb-6 ${lato.className}`}>
            We&apos;ve received your inquiry and will get back to you within 24 hours with a personalized response.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex flex-col xs:flex-row gap-3">
            <Link href="/" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-[#087dc0] text-white font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:bg-[#076ba8] transition-all text-sm ${lato.className}`}
              >
                Homepage
              </motion.button>
            </Link>
            
            <Link href="/services" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-white text-[#087dc0] font-semibold px-6 py-2.5 rounded-lg border border-[#087dc0] hover:bg-[#087dc0] hover:text-white transition-all text-sm ${lato.className}`}
              >
                Our Services
              </motion.button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="pt-4 border-t border-gray-100"
          >
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span className={lato.className}>Redirecting in</span>
              <motion.div
                key={countdown}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6 bg-[#087dc0] text-white rounded-full flex items-center justify-center font-bold text-xs"
              >
                {countdown}
              </motion.div>
              <span className={lato.className}>sec</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}