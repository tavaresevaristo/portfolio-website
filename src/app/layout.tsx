import "../global/globals.css";
import { fonts } from "@/fonts";
import type { Metadata, Viewport } from "next";
import { Orchestrator } from "@/components/layout/orchestrator";

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
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body
        className={`${fonts} antialiased min-h-screen w-full overflow-hidden`}
      >
        <Orchestrator>{children}</Orchestrator>
      </body>
    </html>
  );
}
