import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore All-in-One heat pump solution | Miftech solutions",
  description:
    "Explore all-in-one heat pump for homes, commercial and industrial use.This integrated air source heat pump ensures reliable and affordable heating. Request a quote today.",
  keywords: "heat pump, miftech solutions, air source heat pump"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}