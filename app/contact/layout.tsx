import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect with us | Miftech solutions",
  description:
    "Get a quote for any industrial, commercial, domestic, swimming pool, air source heat pump. Reach out to discuss heat pump system for your business and get fast response.",
  keywords: "air source heat pump, heat pump system"
};

export default function ContactPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}