import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miftech Solutions | Guide to Understanding air source heat pumps",
  description:
    "Learn how air source heat pumps provide reliable, eco-friendly heating. Get Insights from trusted air source heat pump manufacturers, Miftech solutions",
  keywords: "Miftech Solutions, air source heat pumps, air source heat pump, air source heat pump manufacturers"
};

export default function LifecyclePageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}