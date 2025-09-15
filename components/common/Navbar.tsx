"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Roboto_Slab } from "next/font/google";
import { motion } from "framer-motion";

const RobotoSalab = Roboto_Slab({
  subsets: ["cyrillic"],
  weight: "600",
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[var(--white)] shadow-md ${RobotoSalab.className}`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/miftechlogo1.png"
                alt="MifTech Logo"
                width={150}
                height={50}
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial="hidden"
            animate="visible"
            variants={listVariants}
          >
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  className={`relative px-3 py-2 text-xl font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[#087dc0] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#087dc0]"
                      : "text-[var(--dark-gray)] hover:text-[#087dc0]"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--dark-gray)] hover:text-[#087dc0] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-2"
            initial="hidden"
            animate="visible"
            variants={listVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-[#087dc0] bg-[var(--linen)]"
                        : "text-[var(--dark-gray)] hover:bg-[var(--linen)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
