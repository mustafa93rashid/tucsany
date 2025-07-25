import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/Footer";
import HandleLoadingComponent from "@/components/HandleLoadingComponent";
import AOSProvider from "@/utlis/AOSProvider";
import ScrollToTop from "@/components/ScrollToTop";
import ChatBot from "@/components/ChatBot";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],

});

export const metadata: Metadata = {
  title: "Tours to Tuscany",
  description: "Discover curated tour packages and unforgettable travel experiences across Tuscany and beyond.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}  antialiased `}>
        <HandleLoadingComponent>
          <AOSProvider />
          <ChatBot />
          <NavBar />
          <ScrollToTop />
          {children}
          <Footer />
        </HandleLoadingComponent>
      </body>
    </html>
  );
}

