import "./globals.css";
import type { Metadata } from "next";
// import { Open_Sans } from 'next/font/google'
import { Roboto_Mono } from "next/font/google";

import Header from "@/components/shared/Header";

// export const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const font = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', ],
  variable: '--font-lato',
})

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
    <html lang="en" className={font.className}>
      <body>
        {/* <AnimatedBackground /> */}
        {/* <CustomCursor /> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
