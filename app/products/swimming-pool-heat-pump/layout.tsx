import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Discover top-rated pool heat pumps for your home. Find the perfect swimming pool heat pump for sale for consistent and affordable heating. Buy today.",
  keywords: "pool heat pumps, swimming pool heat pump for sale"
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}