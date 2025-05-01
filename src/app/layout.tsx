import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { NotificationBannerWrapper } from "@/components/NotificationBannerWrapper";
import { LanguageProvider } from '@/contexts/LanguageContext';
import { FloatingButtons } from "@/components/FloatingButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Curious Machine",
  description: "Learn Data Science and AI with others who share your curiosity",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
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
          <NotificationBannerWrapper />
          <Header />
          {children}
          <FloatingButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}
