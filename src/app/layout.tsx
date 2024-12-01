import "./globals.scss";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import ReactQueryProvider from "@/lib/react-query-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <ToastContainer position="top-right" autoClose={5000} />
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
