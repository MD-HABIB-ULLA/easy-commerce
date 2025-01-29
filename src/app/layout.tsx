import type { Metadata } from "next";

import "./globals.css";

import ReduxWrapper from "../components/wrapper/ReduxWrapper";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <ReduxWrapper>
          <Header />
          {children}
          <Footer />
        </ReduxWrapper>
        <Toaster />
      </body>
    </html>
  );
}
