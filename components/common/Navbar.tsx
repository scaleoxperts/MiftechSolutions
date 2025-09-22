"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const lato = Lato({ subsets: ["latin"], weight: "700" });

interface NavItem {
  href: string;
  label: string;
  submenu?: { href: string; label: string }[];
}

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/about-heat-pump",
    label: "About Heat Pump",
    submenu: [
      { href: "/about-heat-pump/air-source-life-cycle", label: "Air Source Heat Pump Life Cycle" },
      { href: "/about-heat-pump/technical-specifications", label: "Technical Specifications" },
    ],
  },
  {
    href: "/products",
    label: "Products",
    submenu: [
      { href: "/products/domestic-heat-pump", label: "Domestic" },
      { href: "/products/commercial-heat-pump", label: "Commercial" },
      { href: "/products/swimming-pool-heat-pump", label: "Swimming Pool" },
      { href: "/products/industrial-heat-pump", label: "Industrial Air Source Heat Pump" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-[var(--white)] shadow-md ${lato.className}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/miftechlogo1.png"
              alt="MifTech Logo"
              width={150}
              height={50}
              className="h-auto w-auto max-h-12"
            />
          </Link>

          <div className="hidden md:flex items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="flex items-center space-x-1 lg:space-x-2"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.label}
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                    }}
                    className="relative"
                  >
                    {link.submenu ? (
                      <div className="relative group">
                        <Link
                          href={link.href}
                          className={`flex items-center px-2 lg:px-3 py-2 text-base lg:text-lg font-medium cursor-pointer transition-colors whitespace-nowrap ${isActive ? "text-[#087dc0]" : "text-[var(--dark-gray)] hover:text-[#087dc0]"
                            }`}
                        >
                          {link.label}
                          <ChevronDown className="ml-1 h-3 w-3 lg:h-4 lg:w-4" />
                        </Link>
                        <div className="absolute left-0 mt-2 w-72 bg-[var(--white)] border border-gray-200 rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`block px-4 py-2 text-sm lg:text-base transition-colors ${pathname === sub.href ? "text-[#087dc0] bg-gray-50" : "text-[var(--dark-gray)] hover:text-[#087dc0] hover:bg-gray-50"
                                }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`px-2 lg:px-3 py-2 text-base lg:text-lg font-medium transition-colors whitespace-nowrap ${isActive ? "text-[#087dc0]" : "text-[var(--dark-gray)] hover:text-[#087dc0]"
                          }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-[var(--dark-gray)] hover:text-[#087dc0] focus:outline-none flex-shrink-0"
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  staggerChildren: 0.1
                }
              }
            }}
            className="md:hidden px-4 pt-4 pb-6 space-y-1 sm:px-6"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.label}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.3 }
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center px-3 py-2 text-lg font-medium cursor-pointer transition-colors ${isActive ? "text-[#087dc0]" : "text-[var(--dark-gray)] hover:text-[#087dc0]"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                    {link.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                  {link.submenu && (
                    <motion.div
                      className="ml-4"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            delay: 0.1,
                            staggerChildren: 0.05
                          }
                        }
                      }}
                    >
                      {link.submenu.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <motion.div
                            key={sub.href}
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              visible: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.2 }
                              }
                            }}
                          >
                            <Link
                              href={sub.href}
                              className={`block px-3 py-2 text-base rounded-md transition-colors ${isSubActive ? "text-[#087dc0]" : "text-[var(--dark-gray)] hover:bg-[var(--linen)] hover:text-[#087dc0]"
                                }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </nav>
    </header>
  );
}