"use client";
import { motion } from "motion/react";
import { Cormorant_Garamond, Gotu, Lato } from "next/font/google";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const gotu = Gotu({ weight: "400", subsets: ["latin"] });
const cormorant_garamond = Cormorant_Garamond({
  weight: "600",
  subsets: ["latin"],
  style: "italic",
});
const lato = Lato({ subsets: ["latin"], weight: "400" });

function ThankYouContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "Guest";
  const email = searchParams.get("email") || "";

  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
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
          <h1
            className={`text-2xl sm:text-3xl font-bold text-[var(--text-dark-gray)] mb-3 ${gotu.className}`}
          >
            Thank You, {name}!
          </h1>

          <p
            className={`text-lg text-[#087dc0] mb-4 ${cormorant_garamond.className}`}
          >
            We’ve received your message successfully.
          </p>

          <p
            className={`text-gray-600 text-sm leading-relaxed mb-6 ${lato.className}`}
          >
            A confirmation has been sent to{" "}
            <span className="font-semibold text-[#087dc0]">{email}</span>.  
            We’ll get back to you within 24 hours.
          </p>
        </motion.div>

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
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
