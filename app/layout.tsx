import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ClerkProvider,} from '@clerk/nextjs'



export const metadata: Metadata = {
  title: {
    template: "%s - Shopcart nexus project",
    default: "Shopcart nexus project",
  },
  description: "Shopcart nexus project, is online store your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
       <html lang="en">
      <body className="font-poppins antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
