import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "~rio | Portfolio",
  description: "Rio Ardiyansyah's personal portfolio — Computer Science student, Front End Developer, and Game Server Developer.",
  openGraph: {
    title: "~rio | Portfolio",
    description: "Computer Science student & Front End Developer based in Yogyakarta.",
    url: "https://baguskara1.github.io/portofolio_rio",
    siteName: "~rio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-violet-600 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to content
        </a>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
