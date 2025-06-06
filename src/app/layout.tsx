import "./globals.css";
import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import AnimatedBackground from "@/components/shared/AnimatedBackground";
import Header from "@/components/shared/Header";
import CustomCursor from "@/components/shared/CustomCursor";

export const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: "Nhat Huy - Portfolio",
  description: "A portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AnimatedBackground />
        <CustomCursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
