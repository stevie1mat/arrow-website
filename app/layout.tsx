import type { Metadata } from "next";
import { fonts } from "@/libs/fonts";
import "@/styles/global.css";
import "@/styles/footer.css";
import "@/styles/modal.css";
import AosInitializer from "@/libs/aos";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ScrollTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Arrow Marketplace - Digital Solutions for Modern Businesses',
  },
  description: "Arrow Marketplace offers comprehensive digital solutions including web development, mobile app development (React Native, Flutter), eCommerce platforms (Shopify, WooCommerce), and SEO & digital marketing services.",
  openGraph: {
    title: 'Arrow Marketplace - Digital Solutions for Modern Businesses',
    description: 'Professional web development, mobile apps, eCommerce solutions, and SEO services to grow your business.',
    url: 'https://arrowmarketplace.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts} suppressHydrationWarning>
        <Header />        
        <main>{children}</main>
        <Footer />
        
        {/* Modal and Drawer Overlay */}
        <drawer-opener id="drawer-overlay"></drawer-opener>

        {/* AOS Init */}
        <AosInitializer />
        
        {/* Scroll to Top Button */}
        <ScrollTop />
      </body>
    </html>
  );
}
