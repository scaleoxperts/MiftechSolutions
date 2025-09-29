"use client";
import { motion } from "motion/react";
import { ContactInfo } from "./ContactForm/ContactInfo";
import { ContactForm } from "./ContactForm/Form";


interface ContactUsProps {
  currentRoute: string;
}

export default function ContactUs({
  currentRoute,
}: ContactUsProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          <ContactInfo
          />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm currentRoute={currentRoute} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}