import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Explore and Discover The Best Cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
