import { Inter, Geist_Mono } from "next/font/google";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const fonts = `${geistSans.variable} ${geistMono.variable}`;