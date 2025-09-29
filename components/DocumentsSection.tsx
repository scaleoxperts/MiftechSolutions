"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Gotu, Cormorant_Garamond } from "next/font/google";

const gotu = Gotu({ subsets: ["latin"], weight: "400" });

const certificates = [
  {
    src: "/images/certificates/CE_MARKING_OF_EU_MIFTECH_SOLUTIONS_page-0001.jpg",
    alt: "CE Marking Certificate",
  },
  {
    src: "/images/certificates/ISO_14001_OF_EU_MIFTECH_SOLUTIONS_page-0001.jpg",
    alt: "ISO 14001 Certificate",
  },
  {
    src: "/images/certificates/MIFTECH_SOLUTIONS_9001_final_page-0001.jpg",
    alt: "ISO 9001 Certificate",
  },
  {
    src: "/images/certificates/ROHS_OF_EU_MIFTECH_SOLUTIONS_page-0001.jpg",
    alt: "ROHS Certificate",
  },
];

const gstImages = [
  { src: "/images/Gst_and_Other/SEA-RAN_page-0001.jpg", alt: "SEA-RAN" },
  { src: "/images/Gst_and_Other/GST-FILE_page-0001.jpg", alt: "GST Certificate Page 1" },
  { src: "/images/Gst_and_Other/GST-FILE_page-0002.jpg", alt: "GST Certificate Page 2" },
  { src: "/images/Gst_and_Other/GST-FILE_page-0003.jpg", alt: "GST Certificate Page 3" },
];

type TabId = "certifications" | "gst";

interface DocumentImage {
  src: string | StaticImageData;
  alt: string;
}

const tabs = [
  { id: "certifications" as TabId, label: "Our Certifications", color: "#087dc0", images: certificates },
  { id: "gst" as TabId, label: "GST & Other Compliance", color: "#087dc0", images: gstImages },
];

export default function DocumentsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("certifications");

  const activeTabData = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold text-center text-[var(--text-dark-gray)] mb-12 ${gotu.className}`}>
          Our Credentials
        </h2>
        <div className="flex justify-center mb-12 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "text-[var(--text-dark-gray)]" : "text-gray-500 hover:text-gray-800"
              } relative py-4 px-6 text-lg font-medium transition-colors duration-300 focus:outline-none ${
                gotu.className
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: tab.color }}
                  layoutId="underline"
                />
              )}
            </button>
          ))}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex overflow-x-auto space-x-8 pb-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 -mx-4 px-4">
                {activeTabData.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-72 bg-white p-2 rounded-lg border border-gray-200"
                  >
                    <div className="relative h-96 w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="rounded-md object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <p className="text-center mt-4 text-sm font-medium text-gray-600">{image.alt}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}