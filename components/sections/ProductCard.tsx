"use client"

import { motion, MotionValue, useTransform } from "motion/react"
import { Gotu, Lato } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

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
  progress: MotionValue<number>
  range: number[]
  targerScale: number
  
}
export default function ProductCard({ product, index, progress, range, targerScale }: ProductCardProps) {
  const container = useRef<HTMLDivElement>(null);

  const imageScale = useTransform(progress, [0, 1], [1.2, 1]);
  const cardScale = useTransform(progress, range, [1, targerScale]);

  return (
    <motion.div
      ref={container}
      style={{ top: `${index * 25 + 100}px`, scale: cardScale }}
      className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-300 sticky border-2"
    >
      <Link href={product.href}>
        <div className="flex flex-col lg:flex-row h-full">
          <motion.div className="relative flex-shrink-0 w-full lg:w-1/2 aspect-[4/3] lg:aspect-[3/2] overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
          <div className="flex-1 p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-b from-white to-gray-100">
            <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug ${gotu.className} text-gray-900`}>
              {product.title}
            </h3>
            <p className={`text-gray-700 text-base sm:text-lg lg:text-xl mb-6 flex-grow leading-relaxed ${lato.className}`}>
              {product.description}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <span className="font-medium text-[#087dc0] text-base sm:text-lg group-hover:underline">
                Explore Product
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
    </motion.div>
  );
}