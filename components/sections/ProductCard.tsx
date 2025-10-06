"use client";

import { motion, useTransform, MotionValue } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  image: string;
  title: string;
  alt: string;
  description: string;
  href: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targerScale: number;
}

export default function ProductCard({ product, index, progress, range, targerScale }: ProductCardProps) {
  const scale = useTransform(progress, range, [1, targerScale]);

  return (
    <motion.div
      style={{
        scale,
        top: `${index * 2.5}rem`,
      }}
      className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 transform-gpu"
    >
      <div className="w-full lg:w-1/2 h-64 lg:h-96 relative rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-dark-gray)] mb-3">
          {product.title}
        </h3>
        <p className="text-gray-600 mb-6 text-base md:text-lg">
          {product.description}
        </p>
        <Link
          href={product.href}
          className="inline-block px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#FFD700] to-[#4169E1] rounded-full shadow-md transition hover:scale-105"
        >
          View Product
        </Link>
      </div>
    </motion.div>
  );
}