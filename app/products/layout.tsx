import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miftech Solutions | Explore Domestic & Commercial heat pumps",
  description:
    "Find the ideal heat pump system for your home or business. Get efficient air source heat pump solutions from leading heat pump manufacturers in India",
  keywords: "Miftech solutions, commercial heat pump, heat pump system, air source heat pump, heat pump manufacturers"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}