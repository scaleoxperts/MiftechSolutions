"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Roboto_Slab } from "next/font/google";
import { ChevronDown } from "lucide-react";

const RobotoSlab = Roboto_Slab({ subsets: ["cyrillic"], weight: "600" });

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

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-[var(--white)] shadow-md ${RobotoSlab.className}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/miftechlogo1.png" alt="MifTech Logo" width={150} height={50} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.label} className="relative group">
                  <Link
                    href={link.href}
                    className="flex items-center px-3 py-2 text-xl font-medium text-[var(--dark-gray)] hover:text-[var(--base-color)] transition-colors cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                  <div className="absolute right-0 mt-2 w-72 bg-[var(--white)] border border-gray-200 rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-base text-[var(--dark-gray)] hover:text-[var(--base-color)] hover:bg-[var(--linen)] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-xl font-medium text-[var(--dark-gray)] hover:text-[var(--base-color)] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="md:hidden p-2 rounded-md text-[var(--dark-gray)] hover:text-[var(--base-color)] focus:outline-none"
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center px-3 py-2 text-lg font-medium text-[var(--dark-gray)] hover:text-[var(--base-color)] transition-colors cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                  <div className="ml-4">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-3 py-2 text-base text-[var(--dark-gray)] hover:bg-[var(--linen)] rounded-md"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-lg font-medium text-[var(--dark-gray)] hover:bg-[var(--linen)] rounded-md"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
