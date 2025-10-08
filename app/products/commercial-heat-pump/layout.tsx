import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial air source heat pump solutions by Miftech Solutions",
  description:
    "Upgrade to a powerful commercial heat pump. An efficient commercial heat pump system ensures your business saves on energy and operational expenses",
  keywords: "Commercial air source heat pump, Miftech solutions, Commercial heat pump, Commercial heat pump system"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}