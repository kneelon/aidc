import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { COLORS } from "@/constants/theme";
import { CSSProperties } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIDC Electrical Services and Supply | Philippines",
  description: "AIDC Electrical Services and Supply providing professional electrical services for subdivisions and electric corporations in the Philippines.",
  icons: {
    icon: '/assets/logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          '--primary-color': COLORS.primary,
          '--secondary-color': COLORS.secondary,
          '--accent-color': COLORS.accent,
          '--neutral-light': COLORS.neutral.light,
          '--neutral-dark': COLORS.neutral.dark,
        } as CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
