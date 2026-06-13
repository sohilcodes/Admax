import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sohil Account Hub | Premium Meta Ad Solutions",
  description:
    "Premium Meta ad account solutions — Clean, Gray Hat, and High-Risk tiers. 5+ years of expertise, 311+ brands served, 20+ Crore in ad spend managed. 24/7 support and instant replacement protocols.",
  keywords: [
    "meta ad accounts",
    "facebook ad accounts",
    "premium ad accounts",
    "ad account provider",
    "sohil account hub",
  ],
  authors: [{ name: "Sohil Account Hub" }],
  openGraph: {
    title: "Sohil Account Hub | Premium Meta Ad Solutions",
    description:
      "Scale with Precision. Premium Meta Ad Infrastructure for serious advertisers.",
    url: "https://sohilaccounthub.com",
    siteName: "Sohil Account Hub",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sohil Account Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohil Account Hub | Premium Meta Ad Solutions",
    description: "Scale with Precision. Premium Meta Ad Infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-zinc-950 text-white antialiased">{children}</body>
    </html>
  );
}
