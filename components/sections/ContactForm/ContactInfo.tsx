import { Cormorant_Garamond, Gotu, Lato } from "next/font/google";

const gotu = Gotu({ weight: "400", subsets: ["latin"] });
const cormorant_garamond = Cormorant_Garamond({
    weight: "600",
    subsets: ["latin"],
    style: "italic",
});
const lato = Lato({ subsets: ["latin"], weight: "400" });



export function ContactInfo() {
    const address = "Hyderabad, Telangana, India"
    return (
        <div>
            <div className="flex items-center mb-6">
                <span className="w-8 h-px bg-[#087dc0] mr-3"></span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#087dc0]">
                    Get in touch
                </span>
            </div>

            <h2 className={`text-4xl md:text-5xl font-bold text-[var(--text-dark-gray)] mb-6 ${gotu.className}`}>
                We&apos;d love to{" "}
                <span className={`${cormorant_garamond.className} italic text-[#087dc0]`}>
                    hear from you
                </span>!
            </h2>

            <p className={`text-gray-700 leading-relaxed text-lg mb-8 ${lato.className}`}>
                Send us a message or schedule a consultation to learn how we can help you achieve
                your energy-saving goals with innovative Heat Pump technology.
            </p>

            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#087dc0] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className={`font-semibold text-[var(--text-dark-gray)] mb-1 ${lato.className}`}>
                            Phone
                        </h3>
                        <p className={`text-gray-600 ${lato.className}`}>
                            +91 8886709911
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#087dc0] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className={`font-semibold text-[var(--text-dark-gray)] mb-1 ${lato.className}`}>
                            Email
                        </h3>
                        <p className={`text-gray-600 ${lato.className}`}>
                            info@miftechsolution.com
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#087dc0] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className={`font-semibold text-[var(--text-dark-gray)] mb-1 ${lato.className}`}>
                            Address
                        </h3>
                        <p className={`text-gray-600 ${lato.className}`}>
                            {address.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    {index < address.split('\n').length - 1 && <br />}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}