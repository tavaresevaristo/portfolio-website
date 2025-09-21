import "../global/globals.css";
import type { Metadata, Viewport } from "next";
import { geistMono, geistSans } from "@/fonts";

export const metadata: Metadata = {
  title: "Tavares Evaristo - Personal Webapp",
  icons: "/favicon",
  description:
    "Portfolio website to showcase my projects, skills and career path.",
};

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fonts = `${geistSans.variable} ${geistMono.variable}`;

  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body
        className={`${fonts} antialiased min-h-screen w-full overflow-hidden`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
