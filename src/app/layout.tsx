import "./globals.css";
import type { Metadata } from "next";
import AnimatedBackground from "@/components/shared/AnimatedBackground";

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
    <html lang="en">
      <body>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
