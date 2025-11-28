import type { Metadata } from "next";
import "./globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import LoadingScreen from "@/components/common/LoadingScreen";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import SupportWidget from "@/components/common/SupportWidget";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "IntarVAS - Smart Telecom Solutions",
  description: "Transform your business communication with IntarVAS",
  icons: {
    icon: [
      {
        url: "/intarvasfavicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/intarvasfavicon.svg",
    apple: "/intarvasfavicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          {/* <LoadingScreen /> */}
          <Toaster />
          <Sonner />
          {/* <SupportWidget /> */}
          <SiteHeader />
          {children}
          <SiteFooter />
        </ClientProviders>
      </body>
    </html>
  );
}

