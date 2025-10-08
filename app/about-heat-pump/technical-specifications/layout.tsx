import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miftech Solutions | Know your Heat pump specifications",
  description:
    "Access detailed data for your pump heating system. Select the right heater heat pump to maximize your energy efficiency with heat pump specifications.",
  keywords: "Miftech Solutions, Heat pump specifications, pump heating system, heater heat pump, heat pump specification"
};

export default function TechnicalSpecificationsPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}