import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Miftech Solutions | Heat Pump Manufacturers | Get to know us",
    description:
        "Learn about our pump heating system and pump heater technology. As a trusted heat pump provider, we are your trusted heat pump manufacturrers.",
    keywords: "miftech solutions, heat pump manufacturers, heat pump, industrial air source heat pump, commercial heat pump"
};

export default function AboutPageLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
} 