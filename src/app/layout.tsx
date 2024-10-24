import "./globals.scss";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { Header } from "@/app/(home)/ui/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yanling",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {/* 
        <ClientOnly>
          <Navbar/>
          <Header/>
        </ClientOnly> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
