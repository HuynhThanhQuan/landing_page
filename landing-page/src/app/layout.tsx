import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { NotificationBanner } from "@/components/NotificationBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Curious Machine",
  description: "Building the future of AI together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <NotificationBanner />
        {children}
      </body>
    </html>
  );
}
