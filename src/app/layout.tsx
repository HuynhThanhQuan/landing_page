import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";


export const metadata: Metadata = {
  metadataBase: new URL("https://curiousmachine.152-42-201-32.sslip.io"),
  title: { default: "Curious Machine — Applied Data & AI", template: "%s | Curious Machine" },
  description:
    "Interactive data science experiments, field notes and focused advisory by Huỳnh Thanh Quan. Built in Vietnam, open to curious minds everywhere.",
  openGraph: { type: "website", siteName: "Curious Machine", title: "Curious Machine — Applied Data & AI", description: "Stay curious. Build the evidence.", images: [{url: "/share.png", width:1200, height:630}] },
  twitter: { card: "summary_large_image", images: ["/share.png"] },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#F7F8FC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
