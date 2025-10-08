import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miftech solutions | Your Guide to heat pump solutions",
  description:
    "Learn about heater heat pumps, heat pump systems & air source heat pump in detail from trusted Heat pump manufacturers, Miftech Solutions",
  keywords: "heater heat pumps, heat pump systems, air source heat pump, heat pump manufacturers, miftech solutions, pump heating systems, heat pump"
};

export default function AboutHeatPumpPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}