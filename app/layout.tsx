import type { Metadata } from "next";
import "./globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import LoadingScreen from "@/components/common/LoadingScreen";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import SupportWidget from "@/components/common/SupportWidget";
import ScrollToTop from "@/components/ScrollToTop";

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Force scroll to top immediately on page load
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }

              // Scroll to top immediately
              window.scrollTo(0, 0);

              // Prevent any scroll restoration during initial load
              let scrollLocked = true;
              const unlockScroll = function() {
                scrollLocked = false;
              };

              // Lock scroll position at top during initial page load
              window.addEventListener('scroll', function enforceTop() {
                if (scrollLocked) {
                  window.scrollTo(0, 0);
                }
              }, { passive: false });

              // Also scroll on DOMContentLoaded and unlock after animations settle
              document.addEventListener('DOMContentLoaded', function() {
                window.scrollTo(0, 0);
                // Unlock scroll after 500ms to allow animations to initialize
                setTimeout(unlockScroll, 500);
              });

              // Fallback unlock on load event
              window.addEventListener('load', function() {
                setTimeout(unlockScroll, 500);
              });
            `,
          }}
        />
      </head>
      <body>
        <ClientProviders>
          <ScrollToTop />
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

