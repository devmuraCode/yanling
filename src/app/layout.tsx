import "./globals.scss";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import ReactQueryProvider from "@/lib/react-query-provider";

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
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
