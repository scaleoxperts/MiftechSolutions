"use client"

import { Gotu, Lato } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const gotu = Gotu({ subsets: ["latin"], weight: "400" })
// const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "400" })
const lato = Lato({ subsets: ["latin"], weight: "400" })

interface ProductCardProps {
  product: {
    image: string
    title: string
    description: string
    href: string
  }
  index: number
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 sticky top-[150px]">
      <Link href={product.href}>
        <div className="flex flex-col lg:flex-row h-full">
          <div className="relative flex-shrink-0 w-full lg:w-1/2 aspect-[4/3] lg:aspect-[3/2]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="flex-1 p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-b from-white to-gray-100">
            <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug ${gotu.className} text-gray-900`}>
              {product.title}
            </h3>
            <p className={`text-gray-700 text-base sm:text-lg lg:text-xl mb-6 flex-grow leading-relaxed ${lato.className}`}>
              {product.description}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <span className="font-medium text-[#087dc0] text-base sm:text-lg group-hover:underline">
                Explore Project
              </span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#087dc0] transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
