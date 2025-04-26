import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { NotificationBanner } from "@/components/NotificationBanner";
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Science Education",
  description: "Learn Data Science and AI with others who share your curiosity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <NotificationBanner />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
