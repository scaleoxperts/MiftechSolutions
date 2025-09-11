"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Roboto_Slab } from 'next/font/google';

const RobotoSalab = Roboto_Slab({
  subsets: ["cyrillic"],
  weight: "600"
})

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-[var(--white)] shadow-md ${RobotoSalab.className}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/images/miftechlogo1.png" alt="MifTech Logo" width={150} height={50} />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-[var(--dark-gray)] hover:text-[var(--base-color)] px-3 py-2 rounded-md text-xl font-medium transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--dark-gray)] hover:text-[var(--base-color)] focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-[var(--dark-gray)] hover:bg-[var(--linen)] block px-3 py-2 rounded-md text-base font-medium">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}