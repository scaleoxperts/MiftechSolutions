import type { Metadata } from 'next';
import { poppins, playfairDisplay } from './fonts';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
;

export const metadata: Metadata = {
  title: 'MifTech Solution',
  description: 'Transforming Energy into Savings with Innovative Heat Pump Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfairDisplay.variable} font-poppins`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}